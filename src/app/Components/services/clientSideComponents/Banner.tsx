import React, { useEffect, useState } from 'react'

interface Banner {
    title: string;
    underTitle: string;
    btn: string;
}

function capitalizeInitials(str: string): string {
    return str
        .split(' ')
        .map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(' ');
}

export default function Banner({ bannerData, activeService }: { bannerData: Banner, activeService: string }) {
    const [scale, setScale] = useState(1);
    const [cardOffset, setCardOffset] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            
            // More refined scaling that adapts to screen size
            const scrollProgress = Math.min(scrollY / windowHeight, 1);
            const newScale = Math.max(0.85, 1 - scrollProgress * 0.15);
            setScale(newScale);

            // Smoother offset calculation
            const newCardOffset = Math.min(scrollY * 0.3, windowHeight * 0.2);
            setCardOffset(newCardOffset);
        };

        // Set loaded state for animations
        setIsLoaded(true);
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative w-full overflow-hidden">
            {/* Background with improved responsive handling */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-transparent to-slate-900/60"
                style={{
                    backgroundImage: `url('/assets/Services/${activeService}/banner.webp')`,
                    height: '100vh',
                    minHeight: '600px', // Ensure minimum height on small screens
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll', // Fix parallax issues on mobile
                    backgroundRepeat: 'no-repeat',
                }}
            />
            
            {/* Overlay gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
            
            {/* Content container with enhanced responsive design */}
            <div className="relative h-screen min-h-[600px] flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div
                    className={`
                        w-full max-w-7xl mx-auto text-white backdrop-blur-sm bg-black/10 
                        p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20
                        flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10
                        rounded-2xl sm:rounded-3xl lg:rounded-4xl
                        border border-white/10 shadow-2xl
                        transition-all duration-500 ease-out
                        ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                    style={{
                        transform: `scale(${scale}) translateY(${cardOffset}px)`,
                        transition: 'transform 0.2s ease-out, opacity 0.8s ease-out',
                    }}
                >
                    {/* Main title with improved responsive typography */}
                    <h1 className={`
                        text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl
                        font-semibold text-center leading-tight
                        bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent
                        drop-shadow-lg
                        transition-all duration-700 ease-out
                        ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                    `}
                    style={{ transitionDelay: '0.2s' }}>
                        {capitalizeInitials(bannerData.title)}
                    </h1>
                    
                    {/* Subtitle with enhanced styling */}
                    <h2 className={`
                        text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl
                        font-bold text-center leading-tight
                        bg-gradient-to-r from-teal-300 via-teal-400 to-cyan-300 bg-clip-text text-transparent
                        drop-shadow-2xl
                        transition-all duration-700 ease-out
                        ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                    `}
                    style={{ transitionDelay: '0.4s' }}>
                        {capitalizeInitials(bannerData.underTitle)}
                    </h2>
                    
                    {/* Enhanced button with better responsive design */}
                    <button className={`
                        mt-4 sm:mt-6 md:mt-8
                        py-3 px-8 sm:py-4 sm:px-10 md:py-5 md:px-12 lg:py-6 lg:px-14
                        bg-primaryColor hover:text-black
                        hover:bg-secondaryColor
                        text-white font-semibold
                        text-base md:text-2xl
                        rounded-full
                        shadow-lg
                        transform hover:scale-105 active:scale-95
                        transition-all duration-300 ease-out
                        border border-teal-400/50
                        backdrop-blur-sm
                        ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                        focus:outline-none focus:ring-4 focus:ring-teal-300/50
                    `}>
                        {capitalizeInitials(bannerData.btn)}
                    </button>
                </div>
            </div>
            
            {/* Scroll indicator */}
            <div className={`
                absolute bottom-8 left-1/2 transform -translate-x-1/2
                text-white/70 flex flex-col items-center gap-2
                transition-all duration-700 ease-out
                ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: '0.8s' }}>
                <span className="text-sm font-medium hidden sm:block">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
                </div>
            </div>
        </div>
    )
}