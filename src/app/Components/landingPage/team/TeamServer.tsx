import React from 'react'
import TeamClient from './clientSideComponents/TeamClient'
interface TeamMember {
  name: string;
  designation: string;
  linkedin: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}
const eachPhoto: TeamMember[] = [
  {
    name: "Usman Asif",
    designation: "Founder, CEO",
    linkedin: "#",
    src: "/assets/Team/ceo.webp",
    alt: "CEO Usman Asif",
    width: 396,
    height: 396,
  },
  {
    name: "Sarah Johnson",
    designation: "CTO",
    linkedin: "#",
    src: "/assets/Team/ceo.webp",
    alt: "CTO Sarah Johnson",
    width: 396,
    height: 396,
  },
  {
    name: "Michael Chen",
    designation: "Head of Design",
    linkedin: "#",
    src: "/assets/Team/ceo.webp",
    alt: "Head of Design Michael Chen",
    width: 396,
    height: 396,
  },
  {
    name: "Emily Davis",
    designation: "Marketing Director",
    linkedin: "#",
    src: "/assets/Team/ceo.webp",
    alt: "Marketing Director Emily Davis",
    width: 396,
    height: 396,
  },
  {
    name: "James Wilson",
    designation: "Lead Developer",
    linkedin: "#",
    src: "/assets/Team/ceo.webp",
    alt: "Lead Developer James Wilson",
    width: 396,
    height: 396,
  },
  {
    name: "Lisa Rodriguez",
    designation: "Product Manager",
    linkedin: "#",
    src: "/assets/Team/ceo.webp",
    alt: "Product Manager Lisa Rodriguez",
    width: 396,
    height: 396,
  },
  {
    name: "David Kim",
    designation: "Sales Director",
    linkedin: "#",
    src: "/assets/Team/ceo.webp",
    alt: "Sales Director David Kim",
    width: 396,
    height: 396,
  },
];

export default function TeamServer() {
  return <TeamClient eachPhoto={eachPhoto}/>
}
