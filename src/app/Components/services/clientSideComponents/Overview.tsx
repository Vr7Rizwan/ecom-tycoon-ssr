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

export default function Overview({
  overViewData,
  activeService,
}: {
  overViewData: Overview;
  activeService: string;
}) {
  return (
    <FramerWrapper
      animation="fade-up"
      duration={0.8}
      delay={0.1}
      easing="ease-out"
      once={true}
    >
      <div className="flex flex-col lg:flex-row py-8 lg:py-16 px-10 xl:py-32 xl:px-24 gap-10 lg:gap-30">
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 lg:gap-8 text-lg lg:text-[2rem]">
          <h3 className="text-primaryColor text-3xl sm:text-4xl md:text-3xl xl:text-6xl font-bold">
            {overViewData.title}
          </h3>
          <p className="text-base sm:text-lg md:text-2xl xl:text-3xl">{overViewData.desc}</p>
          <h4>
            <strong className="text-xl sm:text-2xl md:text-3xl xl:text-4xl">
              {overViewData.goodAt.title}
            </strong>
          </h4>
          <ul className="flex flex-col gap-3 lg:gap-6 text-base sm:text-lg md:text-3xl xl:w-3xl">
            {overViewData.goodAt.content.map((section, index) => (
              <li
                className="list-disc pl-4"
                key={`${index} ${section.title}`}
              >
                <span>
                  <strong>{section.title + ' '}</strong>
                </span>
                <span>{section.content}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div
          className="w-full lg:w-1/2 h-64 sm:h-80 md:h-[28rem] lg:h-screen rounded-2xl"
          style={{
            backgroundImage: `url('/assets/Services/${activeService}/overview.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </div>
    </FramerWrapper>
  );
}
