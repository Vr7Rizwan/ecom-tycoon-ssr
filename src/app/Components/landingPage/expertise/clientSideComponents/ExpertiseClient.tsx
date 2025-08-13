"use client";
import Image from "next/image";
import FramerWrapper from "../../../../../../lib/FramerWrapper";

interface ExpertiseClientProps {
  images: string[];
}

export default function ExpertiseClient({ images }: ExpertiseClientProps) {
  return (
    <FramerWrapper
      animation="fade-up"
      duration={0.6} // Slightly faster for smoother feel
      delay={0} // Remove delay to prevent stutter
      easing="ease-out"
      once={true}
      viewportAmount={0.1} // Trigger earlier (10% instead of 20%)
      viewportMargin="100px" // Start loading images before they're visible
    >
      <div className="bg-customBlueColor px-12 py-12 md:px-40 flex flex-col justify-center rounded-2xl items-center gap-7 md:gap-14">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-white text-3xl md:text-6xl font-bold">
            <em>Our Expertise</em>
          </h1>
          <h2 className="text-white text-[1rem] md:text-4xl text-center">
            If You Can Imagine It, We Can Build It
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-10 md:gap-20">
          {images.map((img: string, index: number) => (
            <div
              key={index}
              className="w-20 sm:w-24 md:w-32 lg:w-36 hover:scale-110 transition-all duration-200 hover:cursor-pointer"
            >
              <Image
                src={img}
                alt={`Expertise technology ${index + 1}`}
                width={144} // Increased from 112 to 144
                height={144}
                className="w-full h-auto object-cover rounded-2xl"
                loading={index < 8 ? "eager" : "lazy"} // Load first 8 eagerly
                sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 128px, 144px"
                // Added these for smoother loading
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                onLoad={(event) => {
                  // Fade in image when it loads
                  const imgElement = event.target as HTMLImageElement;
                  imgElement.style.opacity = "1";
                }}
                style={{
                  opacity: 0,
                  transition: "opacity 0.3s ease-in-out",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </FramerWrapper>
  );
}
