import React from 'react';
import ServicesClient from './clientSideComponents/ServicesClient';
import { servicesData } from '@/features/servicesData/servicesData';

export default function ServicesServer() {
  return <ServicesClient servicesData={servicesData} />
}
