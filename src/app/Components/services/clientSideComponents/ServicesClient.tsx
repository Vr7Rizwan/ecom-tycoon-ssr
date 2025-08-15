"use client";
import React from 'react'
import Banner from './Banner';
import { useSelector,useDispatch } from 'react-redux';
import { setIsFormPopupOpen } from '@/features/slice/slice';
import { RootState } from '@/features/store/store';
import Overview from './Overview';
import FormPopUpServer from '../../formPopUp/FormPopUpServer';
import { stat } from 'fs';
import Solutions from './Solutions';

interface ServiceContent {
    title: string;
    content: string;
}

interface ServiceOverview {
    title: string;
    desc: string;
    goodAt: {
        title: string;
        content: ServiceContent[];
    };
}

interface ServiceBanner {
    title: string;
    underTitle: string;
    btn: string;
}
interface SolutionItem {
    title: string;
    content: string;
  }
interface ServiceData {
    category: string;
    banner: ServiceBanner;
    overview: ServiceOverview;
    btn: string;
    solutions: SolutionItem[];
}

interface Banner {
    title: string;
    underTitle: string;
    btn: string;
}
interface Overview {
    title: string;
    desc: string;
    goodAt: {
        title: string;
        content: ServiceContent[];
    };
}
export default function ServicesClient({servicesData,emailkey,sectionClasses}:{servicesData:ServiceData[],emailkey:any,sectionClasses:string}) {
    const isFormPopupOpen = useSelector((state:RootState)=>state.customSlice.isFormPopupOpen);
    const dispatch = useDispatch();
    const handleClick = () =>{
        dispatch(setIsFormPopupOpen(true));
    }
    const handleCloseFormPopup = () => {
        dispatch(setIsFormPopupOpen(false));
      };
    const activeService = useSelector((state:RootState)=>state.customSlice.activeService);
    const activeData = servicesData.find(
        (service) => service.category.toLowerCase() === activeService.toLowerCase()
      );
    console.log(activeData);
    if (!activeData) {
        console.warn("No matching service found for", activeService);
        return null; // or a fallback UI
      }
    const bannerData:Banner = activeData.banner;
    const overviewData:Overview = activeData.overview;
    const solutionsData: SolutionItem[] = activeData.solutions;
  return (
    <div>
      <Banner bannerData={bannerData as ServiceBanner} activeService={activeService as string} />
      <section className={sectionClasses}>
      <Overview overViewData={overviewData as ServiceOverview} activeService={activeService as string} />
      </section>
      <div className='flex justify-center'>
      <button onClick={handleClick} className='bg-primaryColor text-white text-base md:text-2xl py-4 px-4 md:py-6 md:px-6 lg:text-3xl lg:py-8 lg:px-12 rounded-full hover:bg-secondaryColor hover:text-black transition-all duration-500 hover:scale-105 active:scale-95'>{activeData.btn}</button>
      {isFormPopupOpen && <FormPopUpServer onClose={handleCloseFormPopup} emailKey={emailkey} />}
      </div>
      <Solutions solutionsData={solutionsData as SolutionItem[]} activeService={activeService as string} />
    </div>
  )
}
