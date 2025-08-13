import React from 'react'
import HeaderClient from './clientSideComponents/HeaderClient'
import { JSX } from 'react';

interface DropdownOption {
  title: string;
  description: string;
  link?: string;
}

const contentMap: { [key: string]: { title: string; description: string; options: DropdownOption[] } } = {
  whychooseus: {
    title: "Why Choose Us",
    description: "Discover the key differentiators that make us the ideal partner for your digital transformation journey.",
    options: [
      {
        title: "Proven Expertise",
        description: "Over a decade of experience delivering cutting-edge solutions across industries, with a track record of 500+ successful projects and 98% client satisfaction rate.",
        link: "/why-choose-us#expertise"
      },
      {
        title: "Uncompromising Quality",
        description: "ISO-certified processes, rigorous testing protocols, and continuous quality assurance ensure your project exceeds industry standards and best practices.",
        link: "/why-choose-us#quality"
      },
      {
        title: "Dedicated Partnership",
        description: "We become an extension of your team, providing 24/7 support, transparent communication, and long-term strategic guidance beyond project delivery.",
        link: "/why-choose-us#commitment"
      },
      {
        title: "Innovation Leadership",
        description: "Stay ahead with emerging technologies, AI-driven solutions, and forward-thinking architectures that future-proof your digital investments.",
        link: "/why-choose-us#innovation"
      },
    ]
  },
  reviews: {
    title: "Client Success Stories",
    description: "Real results, measurable impact, and transformative partnerships that showcase our commitment to excellence.",
    options: [
      {
        title: "Enterprise Case Studies",
        description: "Comprehensive analysis of large-scale digital transformations, featuring Fortune 500 companies and their journey to digital excellence with measurable outcomes.",
        link: "/reviews/case-studies"
      },
      {
        title: "Client Testimonials",
        description: "Authentic feedback from CEOs, CTOs, and project managers who have experienced our collaborative approach and witnessed exceptional results firsthand.",
        link: "/reviews/testimonials"
      },
      {
        title: "Industry Recognition",
        description: "Awards and accolades from leading technology organizations, innovation competitions, and industry bodies recognizing our excellence and thought leadership.",
        link: "/reviews/awards"
      },
      {
        title: "Project Portfolio",
        description: "Diverse showcase of completed projects spanning e-commerce, fintech, healthcare, and enterprise solutions, demonstrating our versatility and expertise.",
        link: "/reviews/portfolio"
      },
    ]
  },
  team: {
    title: "Meet Our Expert Team",
    description: "World-class professionals driving innovation, excellence, and transformative results for every client partnership.",
    options: [
      {
        title: "Executive Leadership",
        description: "Visionary executives with combined 100+ years of experience leading digital transformations at Fortune 500 companies and successful startups.",
        link: "/team/leadership"
      },
      {
        title: "Senior Architects",
        description: "System architects and technical leads designing scalable, secure, and performance-optimized solutions using cutting-edge technologies and best practices.",
        link: "/team/architects"
      },
      {
        title: "Full-Stack Developers",
        description: "Expert developers proficient in modern frameworks, cloud technologies, and emerging platforms, delivering robust applications that scale effortlessly.",
        link: "/team/developers"
      },
      {
        title: "UX/UI Designers",
        description: "Award-winning designers creating intuitive, accessible, and visually stunning interfaces that enhance user experience and drive engagement.",
        link: "/team/designers"
      },
    ]
  },
  contact: {
    title: "Get In Touch",
    description: "Multiple channels to connect with our team and start your digital transformation journey today.",
    options: [
      {
        title: "Start Your Project",
        description: "Ready to transform your digital presence? Schedule a strategic consultation to discuss your vision, requirements, and roadmap to success.",
        link: "/contact/project"
      },
      {
        title: "General Inquiries",
        description: "Have questions about our services, methodologies, or capabilities? Our expert consultants are ready to provide detailed information and guidance.",
        link: "/contact/inquiry"
      },
      {
        title: "Technical Support",
        description: "Existing clients can access our 24/7 technical support team for assistance, maintenance, updates, and emergency response services.",
        link: "/contact/support"
      },
      {
        title: "Partnership Opportunities",
        description: "Explore strategic partnerships, integration opportunities, and collaborative ventures that create mutual value and market expansion.",
        link: "/contact/partnership"
      },
    ]
  }
};

export default function HeaderServer() {
  return <HeaderClient contentMap={contentMap} />
}
