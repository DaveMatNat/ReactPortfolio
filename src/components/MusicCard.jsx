import { useEffect, useState } from 'react';

function MusicCard({ playlist }) {

    // Save playlist to localStorage cache
    const saveToCache = (playlistData) => {
        try {
            const cache = JSON.parse(localStorage.getItem('davidMusicCache') || '[]');
            const existingIndex = cache.findIndex(item => item.id === playlistData.id);

            const playlistWithTimestamp = {
                ...playlistData,
                cachedAt: Date.now()
            };

            if (existingIndex !== -1) {
                cache[existingIndex] = playlistWithTimestamp;
            } else {
                cache.push(playlistWithTimestamp);
            }

            localStorage.setItem('davidMusicCache', JSON.stringify(cache));
        } catch (error) {
            console.error("Failed to cache music data:", error);
        }
    };

    useEffect(() => {
        // Save current playlist to cache when component mounts
        saveToCache(playlist);
    }, [playlist]);

    return (
        <div className="min-w-[85vw] sm:min-w-[350px] snap-center">
            <div className="w-full h-[380px] rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 shadow-xl shadow-slate-900/50 bg-[#282828]">
                <iframe 
                    style={{borderRadius: "12px"}} 
                    src={`https://open.spotify.com/embed/playlist/${playlist.id}?utm_source=generator&theme=0`} 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    allowFullScreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                    title={playlist.title}
                >
                </iframe>
            </div>
        </div>
    )
}

export default MusicCard;
