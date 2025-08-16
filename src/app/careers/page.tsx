import React from "react";
import CareersServer from "../Components/careers/CareersServer";
import HeaderServer from "../Components/header/HeaderServer";
import FooterServer from "../Components/footer/FooterServer";
const sectionClasses =
  "bg-white dark:from-gray-800 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-t border-gray-200 dark:border-gray-700";

export default function page() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <HeaderServer />
      <section className={sectionClasses}>
        <CareersServer />
      </section>
      <FooterServer />
    </div>
  );
}
