"use client";
import FramerWrapper from "../../../../../lib/FramerWrapper";
import { useDispatch, useSelector } from "react-redux";
import { setIsFormPopupOpen } from "@/features/slice/slice";
import FormPopUpServer from "../../formPopUp/FormPopUpServer";
import { RootState } from "@/features/store/store";

interface ValueItem {
  title: string;
  desc: string;
}

interface AboutUsProps {
  header: {
    title: React.ReactNode; // for styled text with spans
    subtitle: string;
  };
  mission: string;
  vision: string;
  coreValues: ValueItem[];
  cta: {
    heading: React.ReactNode;
    paragraph: string;
    buttonText: string;
  };
  emailKey: any;
}

const AboutUsClient = ({
  header,
  mission,
  vision,
  coreValues,
  cta,
  emailKey,
}: AboutUsProps) => {
  const isFormPopupOpen = useSelector(
    (state: RootState) => state.customSlice.isFormPopupOpen
  );
  const dispatch = useDispatch();
  const handleCloseFormPopup = () => {
    dispatch(setIsFormPopupOpen(false));
  };
  const key = emailKey;

  return (
    <FramerWrapper
      animation="fade-up"
      duration={0.8}
      delay={0.1}
      easing="ease-out"
      once
    >
      <div className="px-12 bg-white dark:bg-gray-900 transition-colors duration-300 flex flex-col py-12 lg:py-24 gap-16">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <em>{header.title}</em>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {header.subtitle}
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="border-gray-200 border-1 hover:bg-gray-300 dark:border-gray-700 dark:hover:bg-gray-900 dark:bg-gray-800 rounded-2xl p-8 shadow-md transition-all duration-300 hover:scale-[1.02]">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              {mission}
            </p>
          </div>
          <div className="border-gray-200 border-1 hover:bg-gray-300 dark:border-gray-700 dark:hover:bg-gray-900 dark:bg-gray-800 rounded-2xl p-8 shadow-md transition-all duration-300 hover:scale-[1.02]">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">{vision}</p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            <em>
              Our <span className="text-primaryColor">Core Values</span>
            </em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map(({ title, desc }, idx) => (
              <div
                key={idx}
                className="bg-white dark:hover:bg-gray-900 dark:bg-gray-800 border duration-500 hover:bg-gray-300 border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:scale-[1.02]"
              >
                <h3 className="text-xl font-semibold mb-3 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call To Action */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            <em>{cta.heading}</em>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
            {cta.paragraph}
          </p>
          <a
            onClick={(e) => {
              e.preventDefault();
              dispatch(setIsFormPopupOpen(true));
            }}
            href="#"
            className="bg-primaryColor hover:bg-secondaryColor hover:text-black text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-block"
          >
            {cta.buttonText}
          </a>
        </div>
      </div>

      {isFormPopupOpen && (
        <FormPopUpServer onClose={handleCloseFormPopup} emailKey={emailKey} />
      )}
    </FramerWrapper>
  );
};

export default AboutUsClient;
