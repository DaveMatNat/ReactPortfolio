import { useRef, useEffect, useState } from 'react';
import MusicCard from './MusicCard';
import { getUserPlaylists } from '../utils/spotify';

function Music() {
    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [fetchedPlaylists, setFetchedPlaylists] = useState([]);

    // Helper to get ID from various input formats
    const getPlaylistID = (url) => {
        if (!url) return "";
        // If it's just the ID (alphanumeric, no slashes), return it
        if (!url.includes('/') && !url.includes(':')) return url;
        
        // Handle full URL: https://open.spotify.com/playlist/37i9dQZF1DX8Uebhn9wzrS?si=...
        if (url.includes('spotify.com/playlist/')) {
            const parts = url.split('/playlist/');
            if (parts[1]) {
                return parts[1].split('?')[0]; // Remove query params
            }
        }
        // Handle URI: spotify:playlist:37i9dQZF1DX8Uebhn9wzrS
        if (url.includes('spotify:playlist:')) {
            return url.split(':')[2];
        }
        return url;
    };

    const rawPlaylists = [
        {
            title: "Sleeping",
            id: "https://open.spotify.com/playlist/37i9dQZF1DWYILo9WhOOw6?si=6869514e79114271" 
        },
        {
            title: "Thai Songs",
            id: "https://open.spotify.com/playlist/663VxhE2ZsIfNEdPPLyebv?si=37dc975b4c284f6d"
        },
        {
            title: "Sade",
            id: "https://open.spotify.com/playlist/0yxsmgM2UBnSoHWZ6YEgRv?si=bd9e096796ef406f"
        },
        {
            title: "Drumming",
            id: "https://open.spotify.com/playlist/3KUqT9vXezSCUFPy1uM6n5?si=e691994f366f4f5f" 
        },
        {
            title: "Lock in music",
            id: "https://open.spotify.com/playlist/6yW6dYt73WjUJMHqHeMqVv?si=89a5d93933d34964" 
        },
        {
            title: "Jazz",
            id: "https://open.spotify.com/playlist/1dFrH8T9DjXR6pK80qz7FC?si=4f571c720cd24cd2"
        }
    ];

    // Replace 'davematnat' with your actual Spotify User ID if you want to fetch dynamically
    // You also need to set up VITE_SPOTIFY_CLIENT_ID and VITE_SPOTIFY_CLIENT_SECRET in .env
    const SPOTIFY_USER_ID = "davematnat"; 

    useEffect(() => {
        const loadPlaylists = async () => {
            const apiPlaylists = await getUserPlaylists(SPOTIFY_USER_ID);
            if (apiPlaylists.length > 0) {
                setFetchedPlaylists(apiPlaylists);
            } else {
                setFetchedPlaylists(rawPlaylists);
            }
        };
        loadPlaylists();
    }, []);

    // Process playlists to ensure we have clean IDs
    // Use fetchedPlaylists if available, otherwise static
    const activePlaylists = (fetchedPlaylists.length > 0 ? fetchedPlaylists : rawPlaylists).map(p => ({
        ...p,
        id: getPlaylistID(p.id)
    }));

    // Double the list for seamless scrolling
    const extendedPlaylists = [...activePlaylists, ...activePlaylists];

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        let animationFrameId;
        
        const scroll = () => {
            if (!isHovered) {
                // Reset to 0 when we've scrolled halfway (the length of the original list)
                if (container.scrollLeft >= container.scrollWidth / 2) {
                     container.scrollLeft = 0;
                } else {
                    container.scrollLeft += 1; 
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [isHovered]);

    return (
        <div className='bg-slate-950 relative z-10'>
             <section id="music" className="relative flex flex-col gap-8 px-8 py-16 sm:py-20 md:py-24 max-w-[1200px] w-full mx-auto">
                <p className="tag good max-w-fit px-4 py-2 rounded-full mx-auto text-center">
                    Vibes
                </p>
                <div className="flex flex-col gap-2 mb-8">
                    <h3 className="text-white text-5xl sm:text-6xl md:text-7xl mx-auto text-center">Music Taste</h3>
                    <p className="py-2 mx-auto text-center text-slate-400">
                        A few playlists I keep on rotation.
                    </p>
                </div>
                
                {/* Fade Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none"></div>

                {/* Scrollable Container with Auto-Scroll */}
                <div 
                    ref={scrollRef}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="flex overflow-x-auto pb-6 -mx-8 px-8 gap-6 hide-scrollbar"
                >
                    {extendedPlaylists.map((playlist, index) => (
                        <MusicCard key={index} playlist={playlist} />
                    ))}
                </div>
             </section>
        </div>
    )
}

export default Music;
