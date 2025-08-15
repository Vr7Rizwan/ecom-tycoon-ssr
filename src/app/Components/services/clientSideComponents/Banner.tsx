import React, { useEffect, useState } from "react";

interface BannerProps {
  bannerData: { title: string; underTitle: string; btn: string };
  activeService: string;
}

function capitalizeInitials(str: string): string {
  return str
    .split(" ")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

export default function Banner({ bannerData, activeService }: BannerProps) {
  const [scale, setScale] = useState(1);
  const [cardOffset, setCardOffset] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [bgAttach, setBgAttach] = useState<"scroll" | "fixed">("scroll");

  useEffect(() => {
    if (typeof window === "undefined") return;

    // set once on mount to avoid hydration mismatch
    setBgAttach(window.innerWidth > 768 ? "fixed" : "scroll");

    const handleScroll = () => {
      const y = window.scrollY;
      const h = window.innerHeight;
      const p = Math.min(y / h, 1);
      setScale(Math.max(0.85, 1 - p * 0.15));
      setCardOffset(Math.min(y * 0.3, h * 0.2));
    };

    setIsLoaded(true);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const safeService = encodeURIComponent(activeService);
  const bgUrl = `/assets/Services/${safeService}/banner.webp`;

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-transparent to-slate-900/60"
        style={{
          backgroundImage: `url("${bgUrl}")`,
          height: "100vh",
          minHeight: "600px",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: bgAttach,
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

      <div className="relative h-screen min-h-[600px] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div
          className={`
            w-full max-w-7xl mx-auto text-white backdrop-blur-sm bg-black/10
            p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20
            flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10
            rounded-2xl sm:rounded-3xl
            border border-white/10 shadow-2xl
            transition-all duration-500 ease-out
            ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
          style={{
            transform: `scale(${scale}) translateY(${cardOffset}px)`,
            transition: "transform 0.2s ease-out, opacity 0.8s ease-out",
          }}
        >
          <h1
            className={`
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl
              font-semibold text-center leading-tight
              bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent
              drop-shadow-lg
              transition-all duration-700 ease-out
              ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
            style={{ transitionDelay: "0.2s" }}
          >
            {capitalizeInitials(bannerData.title)}
          </h1>

          <h2
            className={`
              text-3xl md:text-4xl xl:text-5xl
              font-bold text-center leading-tight
              bg-gradient-to-r from-teal-300 via-teal-400 to-cyan-300 bg-clip-text text-transparent
              drop-shadow-2xl
              transition-all duration-700 ease-out
              ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
            style={{ transitionDelay: "0.4s" }}
          >
            {capitalizeInitials(bannerData.underTitle)}
          </h2>

          <button
            className={`
              mt-4 sm:mt-6 md:mt-8
              py-3 px-8 sm:py-4 sm:px-10 md:py-5 md:px-12 lg:py-6 lg:px-14
              bg-primaryColor text-white
              hover:bg-secondaryColor hover:text-black
              font-semibold
              text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
              rounded-full
              shadow-lg hover:shadow-2xl
              transform hover:scale-105 active:scale-95
              transition-all duration-500 ease-out
              backdrop-blur-sm
              ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
              focus:outline-none focus:ring-4 focus:ring-teal-300/50
            `}
          >
            {capitalizeInitials(bannerData.btn)}
          </button>
        </div>
      </div>

      <div
        className={`
          absolute bottom-8 left-1/2 -translate-x-1/2
          text-white/70 flex flex-col items-center gap-2
          transition-all duration-700 ease-out
          ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
        style={{ transitionDelay: "0.8s" }}
      >
        <span className="text-sm font-medium hidden sm:block">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </div>
  );
}
