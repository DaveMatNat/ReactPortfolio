// src/utils/spotify.js

// 1. Get these from your Spotify Developer Dashboard: https://developer.spotify.com/dashboard/
// 2. Create a .env file in the root of your project
// 3. Add:
//    VITE_SPOTIFY_CLIENT_ID=your_client_id_here
//    VITE_SPOTIFY_CLIENT_SECRET=your_client_secret_here
// 4. IMPORTANT: This method exposes your Client Secret in the frontend build. 
//    For a production public app, you should fetch this token from a secure backend/function.

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

let accessToken = null;
let tokenExpirationTime = 0;

/**
 * Retrieves a Client Credentials Access Token.
 * Note: limits access to public data only (public playlists, tracks, albums, artists).
 */
const getAccessToken = async () => {
    if (accessToken && Date.now() < tokenExpirationTime) {
        return accessToken;
    }

    if (!clientId || !clientSecret) {
        console.warn("Spotify Client ID or Secret not set in .env");
        return null;
    }

    try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

        const data = await response.json();
        
        if (data.access_token) {
            accessToken = data.access_token;
            // Set expiration a bit earlier than actual (3600s) to be safe
            tokenExpirationTime = Date.now() + (data.expires_in * 1000) - 60000;
            return accessToken;
        }
    } catch (error) {
        console.error("Error fetching Spotify access token:", error);
    }
    return null;
};

/**
 * Fetches user's public playlists.
 * @param {string} userId - The Spotify user ID (e.g. 'davematnat')
 */
export const getUserPlaylists = async (userId) => {
    const token = await getAccessToken();
    if (!token) return [];

    try {
        const response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists?limit=10`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) throw new Error('Failed to fetch playlists');

        const data = await response.json();
        
        // Transform to our app's format
        return data.items.map(item => ({
            title: item.name,
            id: item.id,
            image: item.images?.[0]?.url,
            url: item.external_urls.spotify
        }));
    } catch (error) {
        console.error("Error fetching playlists:", error);
        return [];
    }
};
