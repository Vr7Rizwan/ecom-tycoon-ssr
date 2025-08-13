"use client";
import React from "react";
import FramerWrapper from "../../../../../../lib/FramerWrapper";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Stat card type
interface StatData {
  value: string;
  label: string;
}

// Company logo type
interface LogoData {
  src: string;
  alt: string;
  width: number;
  height: number;
}
interface CompaniesWorkedWithClientProps {
  companyLogos: LogoData[];
  statsData: StatData[];
  data: Record<string, number>;
}
export default function CompaniesWorkedWithClient({companyLogos,statsData,data}:CompaniesWorkedWithClientProps) {

  const sliderSettings: any = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1, autoplaySpeed: 2500 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 3, slidesToScroll: 1, autoplaySpeed: 2500 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 3, slidesToScroll: 1, autoplaySpeed: 2500 },
      },
    ],
  };

  const classes = {
    heading:
      "text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold",
    statLabel:
      "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-center px-2",
    image:
      "filter grayscale dark:grayscale-0 hover:grayscale-0 transition duration-500 hover:cursor-pointer w-[40%] sm:w-[50%] md:w-[60%] lg:w-[55%] xl:w-[50%] mx-auto",
    container:
      "w-full flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16",
    mainHeading:
      "w-full sm:w-[90%] md:w-[80%] lg:w-[75%] xl:w-[65%] mx-auto text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl leading-tight sm:leading-normal font-semibold text-customBlueColor dark:text-white",
    statsContainer:
      "bg-customBlueColor text-white flex flex-col lg:flex-row w-full w-[90%] mx-auto justify-between p-4 sm:p-6 md:p-8 lg:p-10 xl:p-14 rounded-2xl sm:rounded-3xl lg:rounded-4xl mb-4 sm:mb-6 md:mb-10 lg:mb-16 xl:mb-20",
    statCard:
      "flex flex-col justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 w-full p-3 sm:p-4 min-h-[80px] sm:min-h-[100px] md:min-h-[120px]",
  };

  const getBorderClass = (index: number, isDesktop: boolean): string => {
    if (isDesktop) {
      return index < statsData.length - 1
        ? "lg:border-r lg:border-r-gray-400"
        : "";
    } else {
      return index < statsData.length - 1
        ? "border-b border-b-gray-400 lg:border-b-0"
        : "";
    }
  };

  const renderStatCard = (stat: StatData, index: number) => {
    const desktopBorder = getBorderClass(index, true);
    const mobileBorder = getBorderClass(index, false);

    return (
      <div
        key={index}
        className={`${classes.statCard} ${mobileBorder} ${desktopBorder}`}
      >
        <h2 className={classes.heading}>{stat.value}</h2>
        <span className={classes.statLabel}>{stat.label}</span>
      </div>
    );
  };

  const renderLogoSlide = (logo: LogoData, index: number) => (
    <div key={index} className="px-1 sm:px-2 md:px-4 outline-none">
      <div className="flex items-center justify-center h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28">
        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className={`${classes.image} max-w-full h-auto object-contain`}
          priority
        />
      </div>
    </div>
  );

  return (
    <FramerWrapper
      animation="fade-up"
      duration={0.8} // 800ms converted to seconds
      delay={0.1} // 100ms converted to seconds
      easing="ease-out"
      once={true}
      viewportAmount={0.2}
    >
      <div className={classes.container}>
        <h1 className={classes.mainHeading}>
          <em>
            A Journey of{" "}
            <strong className="text-primaryColor">
              {Number(data.exp)} years
            </strong>{" "}
            with{" "}
            <strong className="text-primaryColor">
              {Number(data.projects)}+
            </strong>{" "}
            projects{" "}
            <strong className="text-primaryColor">
              {Number(data.companies)}+
            </strong>{" "}
            tech partnerships
          </em>
        </h1>

        <div className={classes.statsContainer}>
          {statsData.map(renderStatCard)}
        </div>

        <div className="w-full">
          <Slider className="company-logos-slider" {...sliderSettings}>
            {companyLogos.map(renderLogoSlide)}
          </Slider>
        </div>
      </div>
    </FramerWrapper>
  );
}
