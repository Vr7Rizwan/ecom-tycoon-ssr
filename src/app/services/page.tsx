import React from 'react';
import ServicesServer from '../Components/services/ServicesServer';
import HeaderServer from '../Components/header/HeaderServer';
import FooterServer from '../Components/footer/FooterServer';
export default function Page() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <HeaderServer />
      <ServicesServer />
      <FooterServer />
      </div>
    </>
  );
}