import React from "react";
import AboutUsServer from "../Components/about/AboutUsServer";
import HeaderServer from "../Components/header/HeaderServer";
import FooterServer from "../Components/footer/FooterServer";

export default function page() {
  return (
    <>
    <HeaderServer/>
    <AboutUsServer/>
    <FooterServer/>
    </>
  );
}
