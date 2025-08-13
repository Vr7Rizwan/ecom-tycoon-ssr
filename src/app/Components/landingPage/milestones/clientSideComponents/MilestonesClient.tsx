"use client";
import FramerWrapper from "../../../../../../lib/FramerWrapper";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface Milestone {
  key: string;
  label: string;
  icon: string;
  iconAlt: string;
}
interface milestoneProps{
  data:Record<string, number>;
  milestonesData:Milestone[];
}
export default function MilestonesClient({data,milestonesData}:milestoneProps) {
  const [animateUnderlines, setAnimateUnderlines] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      setAnimateUnderlines(true);
    }
  }, [inView]);

  const classes = {
    container:
      "px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 mx-auto",
    title:
      "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-8 sm:mb-10 md:mb-12",
    grid: "w-[90%] mx-auto flex flex-wrap justify-between gap-y-8 sm:gap-y-10 md:gap-y-12",
    section:
      "flex flex-col items-start md:items-center gap-3 sm:gap-4 text-center",
    number:
      "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#1C1D1F] dark:text-white after:content-['+']",
    labelContainer: "flex items-center gap-2 relative",
    icon: "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 flex-shrink-0 dark:filter dark:invert",
    label: "font-medium text-xs sm:text-sm md:text-base lg:text-lg relative",
    underline:
      "absolute -bottom-1 left-0 h-0.5 sm:h-1 bg-primaryColor transition-all duration-1000 ease-out",
  };

  const renderMilestoneCard = (milestone: Milestone) => {
    const value = data[milestone.key];

    return (
      <div key={milestone.key} className={classes.section}>
        <CountUp
          className={classes.number}
          end={inView ? Number(value) : 0}
          duration={2}
        />
        <div className={classes.labelContainer}>
          <Image
            src={milestone.icon}
            alt={milestone.iconAlt}
            className={classes.icon}
            width={32}
            height={32}
            priority
          />
          <span className={classes.label}>
            {milestone.label}
            <div
              className={`${classes.underline} ${
                animateUnderlines ? "w-full" : "w-0"
              }`}
            />
          </span>
        </div>
      </div>
    );
  };

  return (
    <FramerWrapper
      animation="fade-up"
      duration={0.6} // Slightly faster for smoother feel
      delay={0} // Remove delay to prevent stutter
      easing="ease-out"
      once={true}
      viewportAmount={0.1}
    >
      <div className={classes.container} ref={ref}>
        <h1 className={classes.title}>
          <em>Our Milestones</em>
        </h1>

        <div className={classes.grid}>
          {milestonesData.map(renderMilestoneCard)}
        </div>
      </div>
    </FramerWrapper>
  );
}
