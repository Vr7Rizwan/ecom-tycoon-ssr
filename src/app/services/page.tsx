import React from 'react';
import ServicesServer from '../Components/services/ServicesServer';
import HeaderServer from '../Components/header/HeaderServer';
import FooterServer from '../Components/footer/FooterServer';

export default function Page() {
  return (
    <>
      <HeaderServer />
      <ServicesServer />
      <FooterServer />
    </>
  );
}