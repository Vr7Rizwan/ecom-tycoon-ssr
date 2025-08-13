"use client";
import React, { useEffect, useRef } from "react";
import Slider, { Settings } from "react-slick";
import Image from "next/image";
import FramerWrapper from "../../../../../../lib/FramerWrapper";
import { useDispatch } from "react-redux";
import { setSectionRef } from "@/features/slice/slice";

// Type for custom arrow props
interface ArrowProps {
  onClick?: () => void;
}
interface TeamClientProps {
  eachPhoto: TeamMember[];
}

// Type for each team member
interface TeamMember {
  name: string;
  designation: string;
  linkedin: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Custom Arrow Components
const CustomPrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
    onClick={onClick}
    aria-label="Previous team member"
  >
    <svg
      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-800"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

const CustomNextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
    onClick={onClick}
    aria-label="Next team member"
  >
    <svg
      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-800"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

const TeamClient = ({eachPhoto}:TeamClientProps) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(()=>{
    if(ref.current){
      dispatch(setSectionRef({key: "teamSection",ref:ref.current}));
    }
  },[])

  const sliderSettings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    cssEase: "ease-in-out",
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    touchThreshold: 5,
    draggable: true,
    accessibility: true,
    useCSS: true,
    useTransform: true,
    variableWidth: false,
    centerMode: false,
    focusOnSelect: false,
    responsive: [
      { breakpoint: 1536, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1, arrows: true, dots: false } },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          centerMode: true,
          centerPadding: "10px",
        },
      },
    ],
  };

  const renderPhotoSlide = (person: TeamMember, index: number) => (
    <div key={index} className="px-2 sm:px-3 md:px-4 outline-none">
      <div className="flex items-center justify-center min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] xl:min-h-[500px] pb-8 md:pb-12">
        <div className="flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-6 w-full">
          {/* Image Container */}
          <div className="relative w-full aspect-square max-w-[150px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[220px] xl:max-w-[250px] 2xl:max-w-[280px]">
            <Image
              src={person.src}
              alt={person.alt}
              fill
              sizes="(max-width: 640px) 150px, (max-width: 768px) 180px, (max-width: 1024px) 200px, (max-width: 1280px) 220px, (max-width: 1536px) 250px, 280px"
              className="rounded-lg object-cover transition-transform duration-300 hover:scale-105 cursor-pointer shadow-lg"
              priority={index < 4}
            />
          </div>

          {/* Text Content */}
          <div className="w-full flex flex-col gap-2 sm:gap-3 md:gap-4 items-center text-center">
            <div className="w-full">
              <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold md:font-bold leading-tight">
                <span className="block">{person.name.split(" ")[0]}</span>
                <span className="block text-blue-600 dark:text-blue-400">
                  {person.name.split(" ").slice(1).join(" ")}
                </span>
              </h1>
            </div>

            <h2 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-600 dark:text-gray-300 font-medium">
              {person.designation}
            </h2>

            <a
              href={person.linkedin}
              className="inline-flex items-center justify-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 group"
              aria-label={`LinkedIn profile of ${person.name}`}
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 1a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2H3zm1.102 4.297a1.195 1.195 0 100-2.39 1.195 1.195 0 000 2.39zm1 7.516V6.234h-2v6.579h2zM6.43 6.234h2v.881c.295-.462.943-1.084 2.148-1.084 1.438 0 2.219.953 2.219 2.766 0 .087.008.484.008.484v3.531h-2v-3.53c0-.485-.102-1.438-1.18-1.438-1.079 0-1.17 1.198-1.195 1.982v2.986h-2V6.234z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <FramerWrapper animation="fade-up"
    duration={0.8} // 800ms converted to seconds
    delay={0.1} // 100ms converted to seconds
    easing="ease-out"
    once={true} >
        <div ref={ref} className="relative w-full p-8 xl:p-16">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 dark:text-white mb-4">
          <em>Meet Our Team</em>
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 dark:text-gray-300">
          Get to know the talented individuals who make our company great
        </p>
      </div>

      <div className="relative w-full">
        <Slider className="team-slider w-full" {...sliderSettings}>
          {eachPhoto.map(renderPhotoSlide)}
        </Slider>
      </div>

      <div className="mt-4 md:mt-6 flex justify-center">
        <div className="flex space-x-2">{/* Slick renders dots here */}</div>
      </div>
    </div>
    </FramerWrapper>
  );
};

TeamClient.displayName = "Team";

export default TeamClient;
