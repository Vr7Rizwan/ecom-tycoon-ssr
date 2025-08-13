"use client";
import React, {
  useRef,
    useEffect,
    useState,
    RefObject,
    ReactNode,
  } from "react";
  import { useSelector, useDispatch } from "react-redux";
  import { setIsFormPopupOpen } from "@/features/slice/slice";
  import { RootState, AppDispatch } from "@/features/store/store";
  import { setSectionRef } from "@/features/slice/slice";
import FramerWrapper from "../../../../../../lib/FramerWrapper";
import FormPopUpServer from "@/app/Components/formPopUp/FormPopUpServer";
  
  type SectionRef = RefObject<HTMLDivElement | null>;
  
  interface Specialty {
    title: string;
    icon: ReactNode;
    description: string;
    features: string[];
  }
  interface whychooseusProps {
    specialties: Specialty[]
    emailKey: any
  }
  const WhyChooseUsClient = ({specialties,emailKey}:whychooseusProps) => {
    const ref = useRef<HTMLDivElement |  null>(null);
    useEffect(()=>{
      if(ref.current){
        dispatch(setSectionRef({ key: "chooseUsSection", ref: ref.current }))
      }
    },[])
    const dispatch = useDispatch<AppDispatch>();
    const isFormPopupOpen = useSelector(
      (state: RootState) => state.customSlice.isFormPopupOpen
    );
    const [activeSpecialty, setActiveSpecialty] = useState<number>(0);
  
    const handleStartProjectClick = () => {
      dispatch(setIsFormPopupOpen(true));
    };
  
    const handleCloseFormPopup = () => {
      dispatch(setIsFormPopupOpen(false));
    };
  
    return (
      <FramerWrapper animation="fade-up"
      duration={0.8} // 800ms converted to seconds
      delay={0.1} // 100ms converted to seconds
      easing="ease-out"
      once={true}>
        <div
        ref={ref}
          className="w-[90%] mx-auto bg-white dark:bg-gray-900 transition-colors duration-300 flex flex-col py-7 lg:py-20 gap-7 lg:gap-20"
        >
          <div>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                <em>
                  Our <span className="text-primaryColor">Specialties</span>
                </em>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Discover the diverse range of services that make us your ideal
                technology partner
              </p>
            </div>
            {/* Desktop View */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-12 items-start">
                <div className="space-y-4">
                  {specialties.map((specialty, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveSpecialty(idx)}
                      className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                        activeSpecialty === idx
                          ? "bg-secondaryColor text-white shadow-xl transform scale-105"
                          : "bg-gray-200 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`p-3 rounded-lg bg-[#2bbcd7] ${
                            activeSpecialty === idx ? "text-black" : "text-white"
                          }`}
                        >
                          {specialty.icon}
                        </div>
                        <h3
                          className={`text-xl font-bold ${
                            activeSpecialty === idx
                              ? "text-black"
                              : "text-gray-900 dark:text-white"
                          }`}
                        >
                          {specialty.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="h-full flex flex-col justify-center bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-r from-[#2bbcd7] to-[#f2e108] rounded-xl text-black">
                      {specialties[activeSpecialty].icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      {specialties[activeSpecialty].title}
                    </h3>
                  </div>
                  <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {specialties[activeSpecialty].description}
                  </p>
                  <div className="space-y-4">
                    <h4 className="text-lg md:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                      Key Features:
                    </h4>
                    {specialties[activeSpecialty].features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#2bbcd7] to-[#f2e108] rounded-full" />
                        <span className="text-lg md:text-2xl text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile View */}
            <div className="lg:hidden space-y-6">
              {specialties.map((specialty, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-[#2bbcd7] to-[#f2e108] rounded-xl text-white">
                      {specialty.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {specialty.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {specialty.description}
                  </p>
                  <div className="space-y-3">
                    {specialty.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#2bbcd7] to-[#f2e108] rounded-full" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* CTA Section */}
          <div>
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                <em>
                  Ready to <span className="text-primaryColor">Transform</span>{" "}
                  Your Business?
                </em>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our expertise can help you achieve your digital
                goals and drive sustainable growth.
              </p>
              <button
                onClick={handleStartProjectClick}
                className="bg-primaryColor hover:bg-secondaryColor hover:text-black text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Start Your Project Today
              </button>
            </div>
          </div>
        </div>
  
        {/* Popup */}
        {isFormPopupOpen && <FormPopUpServer onClose={handleCloseFormPopup} emailKey={emailKey} />}
      </FramerWrapper>
    );
  };
  
  export default WhyChooseUsClient;
  