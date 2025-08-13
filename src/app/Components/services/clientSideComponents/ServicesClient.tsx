"use client";
import React from 'react'
import Banner from './Banner';

interface ServiceBanner {
  title: string;
  underTitle: string;
  btn: string;
}

interface ServiceDataProp {
  category: string;
  banner: ServiceBanner;
}
export default function ServicesClient({servicesData}:ServiceDataProp) {
  return (
    <div>
      <Banner />
    </div>
  )
}
