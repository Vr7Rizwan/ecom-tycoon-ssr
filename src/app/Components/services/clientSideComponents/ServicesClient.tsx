"use client";
import React from 'react'
import Banner from './Banner';
import { useSelector,useDispatch } from 'react-redux';
import { setIsFormPopupOpen } from '@/features/slice/slice';
import { RootState } from '@/features/store/store';
import Overview from './Overview';
import FormPopUpServer from '../../formPopUp/FormPopUpServer';
import { stat } from 'fs';

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
    img: string;
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
export default function ServicesClient({servicesData,emailkey}:{servicesData:ServiceData[],emailkey:any}) {
    const isFormPopupOpen = useSelector((state:RootState)=>state.customSlice.isFormPopupOpen);
    const dispatch = useDispatch();
    const handleClick = () =>{
        dispatch(setIsFormPopupOpen(true));
    }
    const handleCloseFormPopup = () => {
        dispatch(setIsFormPopupOpen(false));
      };
    const activeService = useSelector((state:RootState)=>state.customSlice.activeService);
    const activeData = servicesData.filter((service)=>service.category === activeService);
    console.log(...activeData);
    const bannerData:Banner = activeData[0].banner;
    const overviewData:Overview = activeData[0].overview;
    console.log(activeData[0].solutions);
  return (
    <div>
      <Banner bannerData={bannerData} activeService={activeService as string} />
      <Overview overViewData={overviewData} activeService={activeService as string} />
      <div className='flex justify-center'>
      <button onClick={handleClick} className='bg-primaryColor text-white text-4xl py-8 px-12 rounded-4xl hover:bg-secondaryColor hover:text-black transition-all duration-500'>{activeData[0].btn}</button>
      {isFormPopupOpen && <FormPopUpServer onClose={handleCloseFormPopup} emailKey={emailkey} />}
      </div>
    </div>
  )
}
