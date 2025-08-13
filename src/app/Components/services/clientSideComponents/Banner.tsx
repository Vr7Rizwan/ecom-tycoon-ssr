import React, { useEffect, useState } from 'react'

interface Banner {
    title: string;
    underTitle: string;
    btn: string;
}

function capitalizeInitials(str: string): string {
    return str
        .split(' ')  // Split the string into an array of words
        .map(word => {
            // Capitalize the first letter and make the rest lowercase
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(' ');  // Join the array of words back into a string
}

export default function Banner({ bannerData, activeService }: { bannerData: Banner, activeService: string }) {
    // State for scroll position, scale of the card, and offset
    const [scale, setScale] = useState(1);
    const [cardOffset, setCardOffset] = useState(0);

    useEffect(() => {
        // Scroll event listener to update scale and position based on scroll
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Scale the card: scale from 1 to 0.8 as you scroll down
            const newScale = Math.max(0.8, 1 - scrollY / 1000); // scale from 1 to 0.8
            setScale(newScale);

            // Move the card downward as the user scrolls
            const newCardOffset = Math.min(scrollY / 2, 200); // limit downward movement of the card
            setCardOffset(newCardOffset);
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the scroll event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
            <div
                className="relative overflow-hidden bg-cover bg-center"
                style={{
                    backgroundImage: `url('/assets/Services/${activeService}/banner.webp')`, // Set image as background
                    height: '100vh', // Ensure the container fills the viewport
                    backgroundSize: 'cover', // Ensure image covers the full container
                    backgroundPosition: 'center center', // Keep image centered
                    backgroundAttachment: 'fixed', // Keep the background fixed while scrolling
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div
                    className="absolute text-white backdrop-blur-xl bg-transparent left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[80%] p-6 sm:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 md:gap-12 mt-20 sm:mt-32 md:bottom-54 rounded-4xl transition-transform duration-300"
                    style={{
                        transform: `scale(${scale}) translateY(${cardOffset}px)`, // Only apply scaling and vertical translation to the card
                        transition: 'transform 0.3s ease', // Smooth transition for scaling and movement
                    }}
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center">{capitalizeInitials(bannerData.title)}</h1>
                    <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold text-center">{capitalizeInitials(bannerData.underTitle)}</h2>
                    <button className="py-8 sm:py-3 px-8 sm:px-10 bg-teal-500 text-white rounded-full text-lg sm:text-xl md:text-3xl font-semibold transition-all duration-500 hover:bg-secondaryColor hover:text-black">
                        {capitalizeInitials(bannerData.btn)}
                    </button>
                </div>
            </div>
    )
}
