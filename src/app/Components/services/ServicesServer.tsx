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
const sectionClasses:string =
  "bg-white dark:from-gray-800 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-t border-gray-200 dark:border-gray-700";
export default function ServicesServer() {
  return <ServicesClient servicesData={servicesData as ServiceData[]} emailkey={emailKey as any} sectionClasses={sectionClasses as string} />
}
