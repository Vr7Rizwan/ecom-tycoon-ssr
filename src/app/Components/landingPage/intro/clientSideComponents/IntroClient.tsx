// In client side due to framewrapper being client side and it is wrapping whole component
import FramerWrapper from "../../../../../../lib/FramerWrapper";
import Image from "next/image";
import Button from "./Button";

export default function IntroClient() {
  return (
    <FramerWrapper
      animation="fade-down"
      duration={0.8} // 800ms converted to seconds
      delay={0.1} // 100ms converted to seconds
      easing="ease-out"
      once={true}
    >
      <div className="px-10 py-10 md:pr-0 md:py-0">
        <div className="flex flex-row items-center gap-12 xl:gap-20 2xl:gap-32 md:pl-14">
          <div className="w-full md:w-1/2 text-left flex flex-col items-start gap-12 lg:gap-30 py-5 md:py-24">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold leading-tight tracking-tight">
              Engineering <em className="text-primaryColor">success</em> through
              vision and <em className="text-secondaryColor">expertise</em>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Trusted by top platforms like edX, KAYAK, and Careem for our
              transformative solutions and exceptional results.
            </p>
            <Button />
          </div>
          <div className="hidden w-full lg:w-1/2 md:block">
            <Image
              src="/assets/Landing Page/landing-page-img.webp"
              alt="Engineering success illustration"
              width={1547}
              height={1406}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </FramerWrapper>
  );
}
