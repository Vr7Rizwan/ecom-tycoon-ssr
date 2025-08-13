import React from "react";
import CompaniesWorkedWithClient from "./clientSideComponents/CompaniesWorkedWithClient";
import {data} from "../../../../features/experienceData/ourExperience"
// Stat card type
interface StatData {
  value: string;
  label: string;
}

// Company logo type
interface LogoData {
  src: string;
  alt: string;
  width: number;
  height: number;
}
const statsData: StatData[] = [
  { value: "95%", label: "Client Satisfaction Rate" },
  { value: "Zero", label: "Detractors" },
  { value: "81.8", label: "Net Promoter Score" },
  { value: "Avg. 5 Years", label: "Client Relationship" },
];
const companyLogos: LogoData[] = [
  {
    src: "/assets/CompaniesWorkedWith/careem_logo.webp",
    alt: "Careem Logo",
    width: 320,
    height: 66,
  },
  {
    src: "/assets/CompaniesWorkedWith/hyperjar_logo.webp",
    alt: "HyperJar Logo",
    width: 320,
    height: 67,
  },
  {
    src: "/assets/CompaniesWorkedWith/insurify_logo.webp",
    alt: "Insurify Logo",
    width: 320,
    height: 80,
  },
  {
    src: "/assets/CompaniesWorkedWith/kayak_logo.svg",
    alt: "Kayak Logo",
    width: 320,
    height: 80,
  },
  {
    src: "/assets/CompaniesWorkedWith/maiden_century_logo.webp",
    alt: "Maiden Century Logo",
    width: 320,
    height: 61,
  },
  {
    src: "/assets/CompaniesWorkedWith/predict_io_logo.webp",
    alt: "Predict.io Logo",
    width: 320,
    height: 134,
  },
  {
    src: "/assets/CompaniesWorkedWith/twinner_logo.webp",
    alt: "Twinner Logo",
    width: 320,
    height: 50,
  },
];

export default function companiesWorkedWithServer() {
  return <CompaniesWorkedWithClient companyLogos={companyLogos} statsData={statsData} data={data} />;
}
