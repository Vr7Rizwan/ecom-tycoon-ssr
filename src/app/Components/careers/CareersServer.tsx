import React from "react";
import CareersClient from "./clientSideComponents/CareersClient";
import { ReactNode } from "react";
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Heart,
  Zap,
  Coffee,
  Briefcase,
} from "lucide-react";
export interface Benefit {
  icon: ReactNode; // accepts JSX like <Heart />
  title: string;
  description: string;
}
// ✅ JobCategory (string union type)
export type JobCategory =
  | "All"
  | "Development"
  | "Design"
  | "Marketing"
  | "Operations";
// ✅ JobOpening interface
export interface JobOpening {
  title: string;
  category: JobCategory;
  location: string;
  type: string; // e.g., "Full-time", "Part-time"
  salary: string; // formatted salary string
  description: string;
  requirements: string[];
}

const benefits: Benefit[] = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Health & Wellness",
    description:
      "Comprehensive health insurance, mental health support, and wellness programs",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Professional Growth",
    description:
      "Continuous learning opportunities, conference attendance, and skill development",
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "Work-Life Balance",
    description:
      "Flexible working hours, remote work options, and unlimited PTO policy",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Team Culture",
    description:
      "Collaborative environment, team events, and inclusive workplace culture",
  },
];

const jobCategories: JobCategory[] = [
  "All",
  "Development",
  "Design",
  "Marketing",
  "Operations",
];

const jobOpenings: JobOpening[] = [
  {
    title: "Senior Frontend Developer",
    category: "Development",
    location: "Remote / San Francisco",
    type: "Full-time",
    salary: "$90k - $130k",
    description:
      "Join our frontend team to build cutting-edge web applications using React, Next.js, and modern technologies.",
    requirements: [
      "5+ years React experience",
      "TypeScript proficiency",
      "UI/UX design sense",
    ],
  },
  {
    title: "Backend Engineer",
    category: "Development",
    location: "Remote / New York",
    type: "Full-time",
    salary: "$85k - $125k",
    description:
      "Build scalable backend systems and APIs that power our applications and serve millions of users.",
    requirements: [
      "Node.js/Python experience",
      "Database design",
      "Cloud platforms (AWS/GCP)",
    ],
  },
  {
    title: "UI/UX Designer",
    category: "Design",
    location: "Remote / Los Angeles",
    type: "Full-time",
    salary: "$75k - $105k",
    description:
      "Create beautiful and intuitive user experiences that delight our customers and drive engagement.",
    requirements: [
      "Figma/Sketch expertise",
      "User research skills",
      "Design systems experience",
    ],
  },
  {
    title: "Digital Marketing Specialist",
    category: "Marketing",
    location: "Remote / Chicago",
    type: "Full-time",
    salary: "$60k - $85k",
    description:
      "Drive our digital marketing efforts across multiple channels to grow our brand and customer base.",
    requirements: [
      "SEO/SEM experience",
      "Analytics tools",
      "Content creation skills",
    ],
  },
  {
    title: "DevOps Engineer",
    category: "Operations",
    location: "Remote / Austin",
    type: "Full-time",
    salary: "$95k - $140k",
    description:
      "Manage and optimize our infrastructure, deployment pipelines, and ensure system reliability.",
    requirements: [
      "Kubernetes experience",
      "CI/CD pipelines",
      "Infrastructure as code",
    ],
  },
];

export default function CareersServer() {
  return (
    <CareersClient
      benefits={benefits}
      jobCategories={jobCategories}
      jobOpenings={jobOpenings}
    />
  );
}
