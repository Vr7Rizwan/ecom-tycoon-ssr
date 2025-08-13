import React from 'react'
import FramerWrapper from '../../../../../lib/FramerWrapper';

interface ServiceContent {
    title: string;
    content: string;
}

interface Overview {
    title: string;
    desc: string;
    goodAt: {
        title: string;
        content: ServiceContent[];
    };
}

export default function Overview({ overViewData, activeService }: { overViewData: Overview, activeService: string }) {
    console.log(overViewData.goodAt);

    return (
        <FramerWrapper
            animation="fade-up"
            duration={0.8} // 800ms converted to seconds
            delay={0.1} // 100ms converted to seconds
            easing="ease-out"
            once={true}
        >
            <div className="flex py-32 px-24 gap-30">
                <div className="w-1/2 flex flex-col justify-center gap-8 text-[2rem]">
                    <h3 className='text-primaryColor text-6xl font-bold' >{overViewData.title}</h3>
                    <p >{overViewData.desc}</p>
                    <h4><strong className='text-4xl'>{overViewData.goodAt.title}</strong></h4>
                    <ul className='flex flex-col gap-4'>
                        {overViewData.goodAt.content.map((section, index) => (
                            <li className='list-disc' key={`${index} ${section.title}`}>
                                <span><strong>{section.title + " "}</strong></span>
                                <span>{section.content}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div
                    className="w-1/2 h-screen rounded-2xl" // Ensure the div has height for the background image
                    style={{
                        backgroundImage: `url('/assets/Services/${activeService}/overview.webp')`, // Set image as background
                        backgroundSize: 'cover', // Ensure image covers the full container
                        backgroundPosition: 'center center', // Keep image centered
                        // backgroundAttachment: 'fixed',
                        backgroundRepeat: 'no-repeat', // Prevent image from repeating
                    }}
                ></div>
            </div>
        </FramerWrapper>
    )
}
