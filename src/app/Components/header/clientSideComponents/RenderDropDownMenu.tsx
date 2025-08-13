"use client";
import { RootState } from "@/features/store/store";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleService, setActiveItem,setActiveService } from "@/features/slice/slice";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface DropdownOption {
  title: string;
  description: string;
  link?: string;
}

export default function RenderServicesMenu({ contentMap }: { contentMap: { [key: string]: { title: string, description: string, options: DropdownOption[] } } }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(0);
  const isServiceOpen = useSelector(
    (state: RootState) => state.customSlice.isServiceOpen
  );
  const activeItem = useSelector((state: RootState) => state.customSlice.activeItem);
  const content = contentMap[activeItem];
  const servicesData = useSelector(
    (state: RootState) => state.customSlice.servicesData
  );

  // Disable body scroll when dropdown is open
  useEffect(() => {
    if (isServiceOpen || (activeItem && content)) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isServiceOpen, activeItem, content]);

  const handleBackgroundClick = (e: React.MouseEvent) => {
    // Only close if clicking on the background, not the content
    if (e.target === e.currentTarget) {
      dispatch(toggleService());
    }
  };
  const redirectToServices = (item:string) =>{
    dispatch(toggleService());
    dispatch(setActiveService(item.toLowerCase()));
    dispatch(setActiveItem(""));
    router.push("/services");
  }

  // Stop click from bubbling without closing (used on containers)
  const stopClickPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const chooseUsSection = useSelector((state: RootState) => state.customSlice.sectionRefs.chooseUsSection);
  const reviewSection = useSelector((state: RootState) => state.customSlice.sectionRefs.reviewSection);
  const teamSection = useSelector((state: RootState) => state.customSlice.sectionRefs.teamSection);
  const contactSection = useSelector((state: RootState) => state.customSlice.sectionRefs.contactSection);
  const scrollToSections = (e: React.MouseEvent) => {
    dispatch(setActiveItem(""));
    const toMatchText = ((e.target as HTMLElement).parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.firstChild?.childNodes[1].textContent as string).split(" ").join("").toLowerCase();
    // const toMatchText = ((e.target as HTMLElement).parentElement?.parentElement?.parentElement?.firstChild?.firstChild?.textContent as string).split(" ").join("").toLowerCase();
    switch (toMatchText) {
      case "whychooseus":
        chooseUsSection?.scrollIntoView({ behavior: 'smooth' });
        break;
      case "clientsuccessstories":
        reviewSection?.scrollIntoView({ behavior: 'smooth' });
        break;
      case "meetourexpertteam":
        teamSection?.scrollIntoView({ behavior: 'smooth' });
        break;
      case "getintouch":
        contactSection?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        return;
    }
  }
  return (
    <>
      {isServiceOpen && (
        <div
          onClick={handleBackgroundClick}
          className="fixed left-0 w-full h-full z-40 dark:bg-gradient-to-br dark:from-slate-900/98 dark:via-gray-900/98 dark:to-slate-800/98 backdrop-blur-xl border-t border-primaryColor/20 shadow-2xl shadow-primaryColor/20 transition-all duration-500"
        >
          <div
            onClick={stopClickPropagation}
            className="w-full flex flex-col gap-12 items-center mx-auto px-6 py-8 h-full overflow-y-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-6xl font-bold dark:text-white mb-2 md:mb-6">
                <em>
                  Our <span className="text-primaryColor">Services</span>
                </em>
              </h2>
              <p className="text-lg md:text-3xl dark:text-gray-300 mx-auto">
                Comprehensive solutions tailored to your business needs
              </p>
            </div>
            <div className="w-[80%] columns-1 md:columns-2 gap-6 space-y-8 mx-auto">
              {Object.entries(servicesData).map(([category, services], categoryIndex) => {
                const servicesArray = services as string[];
                return (
                  <div key={`${category}-${categoryIndex}`} className="flex flex-col gap-6 space-y-3">
                    <h3 className="text-2xl md:text-5xl font-bold dark:text-white mb-4">
                      {category}
                    </h3>
                    {servicesArray.length > 0 ? (
                      <ul className="space-y-2">
                        {servicesArray.map((service: string, serviceIndex: number) => (
                          <li onClick={()=>redirectToServices(service)} key={`${category}-${service}-${serviceIndex}`}>
                            <span className="text-lg md:text-2xl dark:text-gray-300 hover:text-primaryColor text-left w-full hover:translate-x-1 transform transition-all duration-300 bg-transparent border-none cursor-pointer block">
                              {service}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="dark:text-gray-400 text-sm italic">
                        Coming Soon
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-8"></div>
          </div>
        </div>
      )}

      {activeItem && content && (
        <div
          onClick={handleBackgroundClick}
          className="fixed left-0 w-full h-full z-40 dark:bg-gradient-to-br dark:from-slate-900/98 dark:via-gray-900/98 dark:to-slate-800/98 backdrop-blur-xl border-t border-primaryColor/20 shadow-2xl shadow-primaryColor/20 transition-all duration-500"
        >
          <div
            className="w-full flex flex-col gap-12 items-center mx-auto px-6 py-8 h-full overflow-y-auto"
          >
            {/* Header Section */}
            <div className="text-center mb-8 relative">
              {/* Mobile Close Button */}
              <button
                onClick={() => dispatch(setActiveItem(""))}
                className="xl:hidden absolute -top-4 -right-4 p-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-600 hover:border-slate-500"
                aria-label="Close dropdown"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h2 className="text-3xl md:text-6xl font-bold dark:text-white mb-2 md:mb-6">
                <em>
                  <span className="text-primaryColor">{content.title}</span>
                </em>
              </h2>
              <p className="text-lg md:text-3xl dark:text-gray-300 mx-auto max-w-4xl">
                {content.description}
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="w-[90%] mx-auto pb-10">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Side - Tabs */}
                <div className="lg:w-1/3">
                  <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-xl">
                    <h3 className="text-xl font-bold dark:text-white mb-4 px-2">Options</h3>
                    <div className="space-y-2">
                      {content.options && content.options.length > 0 ? (
                        content.options.map((option, index) => (
                          <button
                            key={`tab-${activeItem}-${index}`}
                            onClick={() => setActiveTab(index)}
                            className={`w-full text-left p-4 rounded-lg transition-all duration-300 border ${activeTab === index
                                ? 'bg-primaryColor border-primaryColor text-black font-semibold shadow-lg'
                                : 'bg-slate-800 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white hover:border-slate-500'
                              }`}
                          >
                            <div className="flex items-center gap-4">
                              <div className={`w-3 h-3 rounded-full ${activeTab === index
                                  ? 'bg-black'
                                  : 'bg-gradient-to-r from-[#2bbcd7] to-[#f2e108]'
                                }`}></div>
                              <span className="font-medium text-base">{option.title}</span>
                            </div>
                          </button>
                        ))
                      ) : (
                        <div className="text-slate-400 text-center py-8 text-sm">
                          No options available
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Side - Active Tab Content */}
                <div className="lg:w-2/3">
                  <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 shadow-xl">
                    {content.options && content.options.length > 0 ? (
                      <div>
                        <div className="flex flex-col items-center justify-start gap-4 mb-6">
                          {/* <div className="flex-shrink-0 p-4 bg-primaryColor rounded-xl shadow-lg">
                            <div className="w-8 h-8 bg-gradient-to-r from-[#2bbcd7] to-[#f2e108] rounded-full"></div>
                          </div> */}

                          {/* Conditional Image for Executive Leadership */}
                          {content.title === "Meet Our Expert Team" &&
                            content.options[activeTab]?.title === "Executive Leadership" && (
                              <Image
                                src="/assets/Team/ceo.webp"
                                alt="CEO"
                                width={396 * 0.65} // 257.4
                                height={396 * 0.65} // 257.4
                                priority
                              />

                            )}
                          <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                              {content.options[activeTab].title}
                            </h3>
                            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                              {content.options[activeTab].description}
                            </p>
                          </div>
                        </div>

                        {/* Decorative element */}
                        <div className="h-px bg-gradient-to-r from-transparent via-primaryColor to-transparent mb-6"></div>

                        {/* CTA Button */}
                        <div className="mt-6 flex justify-end">
                          <button
                            onClick={scrollToSections}
                            type="button"
                            className="px-8 py-4 rounded-xl font-semibold text-white hover:scale-110 bg-primaryColor hover:bg-secondaryColor hover:text-black shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primaryColor/30"
                          >
                            Explore more
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-16">
                        <div className="text-slate-400 text-xl italic">
                          Coming Soon - Exciting Updates Ahead!
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom decorative section */}
              {/* <div className="mt-16 text-center">
                <div className="inline-flex items-center gap-2 dark:text-gray-400 text-sm">
                  <div className="w-2 h-2 bg-primaryColor rounded-full animate-pulse"></div>
                  <span>Discover more about what makes us different</span>
                  <div className="w-2 h-2 bg-primaryColor rounded-full animate-pulse"></div>
                </div>
              </div> */}
            </div>
          </div>

        </div>
      )}
    </>
  );
}