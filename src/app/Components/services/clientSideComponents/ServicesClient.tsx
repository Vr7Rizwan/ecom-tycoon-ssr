"use client";
import React from 'react'
import Banner from './Banner';
import { useSelector } from 'react-redux';
import { RootState } from '@/features/store/store';

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

interface ServiceData {
    category: string;
    banner: ServiceBanner;
    overview: ServiceOverview;
    btn: string;
}

interface Banner {
    title: string;
    underTitle: string;
    btn: string;
}

export default function ServicesClient({servicesData}:{servicesData:ServiceData[]}) {
    const activeService = useSelector((state:RootState)=>state.customSlice.activeService);
    const activeData = servicesData.filter((service)=>service.category === activeService);
    console.log(...activeData);
    const bannerData:Banner = activeData[0].banner;
  return (
    <div>
      <Banner bannerData={bannerData} activeService={activeService as string} />
    </div>
  )
}
