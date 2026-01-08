import { useRef, useEffect, useState } from 'react';
import MusicCard from './MusicCard';

function Music() {
    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

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
            title: "Coding Focus",
            id: "https://open.spotify.com/playlist/37i9dQZF1DX8Uebhn9wzrS" 
        },
        {
            title: "Gym Grind",
            id: "37i9dQZF1DX76Wlfdnj7AP" 
        },
        {
            title: "Late Night Drives",
            id: "37i9dQZF1DX6QK2C47XvYm" 
        },
        {
            title: "Chill Vibes",
            id: "https://open.spotify.com/playlist/37i9dQZF1DX4WYpdgoIcn6"
        },
        {
            title: "Top 50 - Global",
            id: "37i9dQZEVXbMDoHDwVN2tF"
        },
        {
            title: "Rock Classics",
            id: "37i9dQZF1DWXRqgorJj26U"
        }
    ];

    // Process playlists to ensure we have clean IDs
    const playlists = rawPlaylists.map(p => ({
        ...p,
        id: getPlaylistID(p.id)
    }));

    // Double the list for seamless scrolling
    const extendedPlaylists = [...playlists, ...playlists];

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
