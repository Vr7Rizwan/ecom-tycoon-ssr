import React from 'react'
import Image from 'next/image'

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
export default function Banner({bannerData,activeService}:{bannerData:Banner,activeService:string}) {
    console.log(bannerData);
    return (
        <div className='relative'>
            <Image alt='banner' width={6240} height={3510} priority src={`/assets/Services/${activeService}/banner.webp`} />
            <div className='absolute text-white backdrop-blur-lg bottom-1/4 left-1/2 transform -translate-x-1/2 w-[90%] p-12 flex flex-col justify-center items-start gap-7'>
                <h1 className='text-4xl'>{capitalizeInitials(bannerData.title)}</h1>
                <h2 className='text-7xl'>{capitalizeInitials(bannerData.underTitle)}</h2>
                <button>{capitalizeInitials(bannerData.btn)}</button>
            </div>
        </div>
    )
}
