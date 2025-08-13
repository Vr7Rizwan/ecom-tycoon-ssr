// import { useRef } from "react";
import Image from "next/image";
import HeaderServer from "./Components/header/HeaderServer";
import IntroServer from "./Components/landingPage/intro/IntroServer";
import CompaniesWorkedWithServer from "./Components/landingPage/companiesWorkedWith/CompaniesWorkedWithServer";
import ExpertiseServer from "./Components/landingPage/expertise/ExpertiseServer";
import MilestonesServer from "./Components/landingPage/milestones/MilestonesServer";
import ReviewsServer from "./Components/landingPage/reviews/ReviewsServer";
import LocationsServer from "./Components/landingPage/locations/LocationsServer";
import WhyChooseUsServer from "./Components/landingPage/whyChooseUs/WhyChooseUsServer";
import TeamServer from "./Components/landingPage/team/TeamServer";
import ContactUsServer from "./Components/landingPage/contactUs/ContactUsServer";
import FooterServer from "./Components/footer/FooterServer";
const sectionClasses =
  "bg-white dark:from-gray-800 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-t border-gray-200 dark:border-gray-700";
export default function Home() {
  // const chooseUsSection = useRef(null);
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <HeaderServer />

        <section className="dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100">
          <IntroServer />
        </section>
        <section className={sectionClasses}>
          <CompaniesWorkedWithServer />
        </section>
        <section className={sectionClasses}>
          <ExpertiseServer />
        </section>
        <section className={sectionClasses}>
          <MilestonesServer />
        </section>
        <section className={sectionClasses}>
          <ReviewsServer/>
        </section>
        <section className={sectionClasses}>
          <LocationsServer/>
        </section>
        <section className={sectionClasses}>
          <WhyChooseUsServer/>
        </section>
        <section className={sectionClasses}>
          <TeamServer/>
        </section>
        <section className={sectionClasses}>
          <ContactUsServer/>
        </section>
        <FooterServer/>
      </div>
    </>
  );
}
