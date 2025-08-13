import React from "react";
import MilestonesClient from "./clientSideComponents/MilestonesClient";
import {data} from "../../../../features/experienceData/ourExperience"
interface Milestone {
  key : string;
  label: string;
  icon: string;
  iconAlt: string;
}
const milestonesData: Milestone[] = [
  {
    key: "projects",
    label: "Projects Delivered",
    icon: "/assets/Milestones/project.svg",
    iconAlt: "Projects icon",
  },
  {
    key: "companies",
    label: "Companies Served",
    icon: "/assets/Milestones/company.svg",
    iconAlt: "Companies icon",
  },
  {
    key: "awards",
    label: "Awards Won",
    icon: "/assets/Milestones/award.svg",
    iconAlt: "Awards icon",
  },
  {
    key: "employees",
    label: "Employees",
    icon: "/assets/Milestones/employee.svg",
    iconAlt: "Employees icon",
  },
  {
    key: "exp",
    label: "Years Experience",
    icon: "/assets/Milestones/experience.svg",
    iconAlt: "Experience icon",
  },
];
export default function MilestonesServer() {
  return <MilestonesClient data={data} milestonesData={milestonesData} />;
}
