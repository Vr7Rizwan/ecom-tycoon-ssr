import React from 'react';
import ServicesClient from './clientSideComponents/ServicesClient';
import { servicesData } from '@/features/servicesData/servicesData';
import emailKey from '@/features/email/emailConfig';

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
export default function ServicesServer() {
  return <ServicesClient servicesData={servicesData as ServiceData[]} emailkey={emailKey as any} />
}
