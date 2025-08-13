"use client";
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import FramerWrapper from "../../../../../../lib/FramerWrapper";

// Dynamically import Globe component with SSR disabled
const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      Loading Globe...
    </div>
  ),
});

interface LocationData {
  lat: number;
  lng: number;
  name: string;
  contact: string;
}

interface CardPosition {
  x: number;
  y: number;
}

interface GlobeSize {
  width: number;
  height: number;
}
interface LocationsClientProps {
  myData: LocationData[];
}
export default function LocationsClient({myData}:LocationsClientProps) {
  const globeRef = useRef<any>(null);  // Typing as `any` due to Globe component
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeLocation, setActiveLocation] = useState<LocationData | null>(null);
  const [cardPos, setCardPos] = useState<CardPosition | null>(null);
  const [globeSize, setGlobeSize] = useState<GlobeSize>({ width: 500, height: 500 });
  const [mounted, setMounted] = useState<boolean>(false);

  // Check if component is mounted (client-side)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Safe viewport width state
  const [vWidth, setvWidth] = useState<number>(500); // Default fallback

  // Improved resizing for desktop + mobile with SSR safety
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    let resizeTimeout: NodeJS.Timeout;

    const updateSize = () => {
      const viewportWidth = window.visualViewport?.width ?? window.innerWidth;
      setvWidth(viewportWidth);
      const width = viewportWidth * 0.9;
      const height = width * 0.45;
      setGlobeSize({ width, height });
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateSize, 100);
    };

    updateSize(); // Initial call
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, [mounted]);

  const flyTo = (loc: LocationData) => {
    if (loc && globeRef.current) {
      globeRef.current.pointOfView(
        { lat: loc.lat, lng: loc.lng, altitude: 2 },
        2000
      );
      setActiveLocation(loc);

      setTimeout(() => {
        if (globeRef.current) {
          const coords = globeRef.current.getScreenCoords(loc.lat, loc.lng);
          if (coords) {
            const { x, y } = coords;
            setCardPos({
              x: x + 10,
              y: y - 90,
            });
          }
        }
      }, 2200);
    }
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="md:my-20 flex flex-col justify-center items-center gap-7 w-[90%] rounded-2xl mx-auto">
        <h1 className="text-3xl md:text-6xl font-bold md:mb-7 drop-shadow-md">
          <em>Our Global Offices</em>
        </h1>
        <div
          className="relative mx-auto rounded-2xl overflow-hidden flex items-center justify-center bg-gray-100"
          style={{ width: 500, height: 225 }}
        >
          <div className="text-gray-500">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <FramerWrapper
    animation="fade-up"
      duration={0.8} // 800ms converted to seconds
      delay={0.1} // 100ms converted to seconds
      easing="ease-out"
      once={true}>
      <div
      className="flex flex-col justify-center items-center gap-7 w-[90%] rounded-2xl mx-auto py-16"
    >
      <h1 className="text-3xl md:text-6xl font-bold md:mb-7 drop-shadow-md">
        <em>Our Global Offices</em>
      </h1>

      <div
        ref={containerRef}
        className="relative mx-auto rounded-2xl overflow-hidden flex items-center justify-center"
        style={{ width: globeSize.width, height: globeSize.height }}
      >
        {/* Location Buttons */}
        <div className="absolute h-full top-0 left-0 z-10 p-2 xs:p-3 sm:p-4">
          <div className="relative h-full w-fit">
            <div className="relative h-full flex flex-col justify-center gap-2 xs:gap-3 sm:gap-6 md:gap-12 lg:gap-18 xl:gap-24 px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 py-3 xs:py-4 sm:py-5 md:py-6">
              {myData.map((loc, index) => (
                <motion.button
                  key={loc.name}
                  className={`
                    relative overflow-hidden group
                    px-2 py-1.5 xs:px-3 xs:py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 lg:px-6 lg:py-3.5 xl:px-8 xl:py-4
                    rounded-lg sm:rounded-xl font-semibold
                    shadow-lg hover:shadow-xl
                    transition-all duration-300 ease-out
                    text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-wide
                    min-w-0 max-w-[140px] xs:max-w-[160px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[220px] xl:max-w-[250px]
                    ${
                      activeLocation?.name === loc.name
                        ? "bg-secondaryColor scale-105 shadow-secondaryColor/25"
                        : "bg-primaryColor/90 hover:bg-primaryColor"
                    }
                  `}
                  onClick={() => flyTo(loc)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: index * 0.1 },
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="relative flex items-center justify-between gap-1 xs:gap-2">
                    <span className="font-medium truncate flex-1 text-left">
                      {loc.name}
                    </span>
                    <div
                      className={`w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 flex-shrink-0 ${
                        activeLocation?.name === loc.name
                          ? "bg-white shadow-white/50 shadow-md"
                          : "bg-white/70 group-hover:bg-white"
                      }`}
                    ></div>
                  </div>
                  {activeLocation?.name === loc.name && (
                    <motion.div
                      className="absolute inset-0 border-2 border-white/40 rounded-lg sm:rounded-xl"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* 🌐 Globe */}
        <Globe
          ref={globeRef}
          width={globeSize.width}
          height={globeSize.height}
          globeImageUrl="/assets/Locations/world.webp"
          backgroundImageUrl="/assets/Locations/night-sky.webp"
          pointsData={myData}
          labelsData={myData}
          ringsData={myData}
          pointLat="lat"
          pointLng="lng"
          pointColor={() => "red"}
          pointAltitude={0.01}
          labelLat="lat"
          labelLng="lng"
          labelText="name"
          labelColor={() => "white"}
          ringLat="lat"
          ringLng="lng"
          ringColor={() => "rgba(255, 100, 0, 0.5)"}
          ringMaxRadius={6}
          ringPropagationSpeed={2}
          ringRepeatPeriod={800}
        />

        {/* 📍 Location Card */}
        <AnimatePresence>
          {activeLocation && cardPos && (
            <motion.div
              className="absolute z-20 bg-white/95 backdrop-blur-md shadow-2xl rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-5 max-w-[85vw] xs:max-w-[55vw] sm:max-w-[45vw] md:max-w-[35vw] lg:max-w-[25vw] xl:max-w-[20vw] border border-white/20"
              style={{
                left: `${Math.min(
                  Math.max(cardPos.x, 10),
                  globeSize.width -
                    Math.min(globeSize.width * 0.85, 320) - // 320 is the max hard cap
                    10
                )}px`,
                top: `${Math.max(cardPos.y, 10)}px`,
              }}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={
                vWidth > 649
                  ? { opacity: 1, scale: 1, y: 0 }
                  : {
                      opacity: 1,
                      scale: 0.7,
                      x: globeSize.width / 2 - 10,
                      y: -10,
                    }
              }
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ duration: 0.4, type: "spring", damping: 25 }}
            >
              <div className="relative">
                <h2 className="text-2xl md:text-4xl font-bold mb-1.5 xs:mb-2 text-gray-800 flex items-center gap-1.5 xs:gap-2">
                  <div className="w-2.5 h-2.5 xs:w-3 xs:h-3 bg-primaryColor rounded-full shadow-md flex-shrink-0"></div>
                  <span className="truncate">
                    {activeLocation.name.split(" ").length > 1
                      ? activeLocation.name
                          .split(" ")
                          .filter(Boolean)
                          .map((word) => word[0])
                          .join("")
                          .toUpperCase()
                      : activeLocation.name}
                  </span>
                </h2>
                <p className="text-base md:text-xl text-gray-600 mb-2 xs:mb-3 break-all">
                  {activeLocation.contact}
                </p>
                <button
                  className="px-3 py-1.5 xs:px-4 xs:py-2 bg-primaryColor text-white hover:bg-secondaryColor hover:text-black text-base md:text-xl rounded-md sm:rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 font-medium w-full xs:w-auto"
                  onClick={() => {
                    setActiveLocation(null);
                    setCardPos(null);
                  }}
                >
                  Close
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
    </FramerWrapper>
  );
}
