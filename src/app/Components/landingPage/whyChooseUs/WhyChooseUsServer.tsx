import React from 'react'
import { ReactNode } from 'react';
import key from '@/features/email/emailConfig';
import WhyChooseUsClient from './clientSideComponents/WhyChooseUsClient'
interface Specialty {
  title: string;
  icon: ReactNode;
  description: string;
  features: string[];
}
const specialties: Specialty[] = [
  {
    title: "Mobile App Excellence",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 4h10v11H7V4zm0 13h10v3H7v-3z" />
      </svg>
    ),
    description:
      "From iOS to Android, we create powerful mobile experiences that engage users and drive business growth. Our apps are built for performance, scalability, and seamless user experiences.",
    features: [
      "Cross-platform compatibility",
      "Native performance",
      "Intuitive UI/UX design",
      "App Store optimization",
    ],
  },
  {
    title: "SEO Mastery",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
      </svg>
    ),
    description:
      "We boost your online visibility with comprehensive SEO strategies that drive organic traffic and improve search rankings across all major search engines.",
    features: [
      "Technical SEO audits",
      "Content optimization",
      "Local SEO strategies",
      "Link building campaigns",
    ],
  },
  {
    title: "eCommerce Solutions",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.44c-.15.25-.25.55-.25.97 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
      </svg>
    ),
    description:
      "We build high-converting online stores with seamless shopping experiences, secure payment gateways, and powerful inventory management systems.",
    features: [
      "Custom store development",
      "Payment integration",
      "Mobile-first design",
      "Inventory management",
    ],
  },
  {
    title: "Web Design & UX",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    description:
      "Our design team creates stunning, user-centric websites that convert visitors into customers through strategic UX design and modern aesthetics.",
    features: [
      "Responsive design",
      "User experience optimization",
      "Brand consistency",
      "Conversion-focused layouts",
    ],
  },
  {
    title: "Desktop Applications",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z" />
      </svg>
    ),
    description:
      "We develop robust desktop applications for Windows, macOS, and Linux that streamline business processes and enhance productivity.",
    features: [
      "Cross-platform compatibility",
      "Native performance",
      "Enterprise-grade security",
      "Custom functionality",
    ],
  },
];
export default function WhyChooseUsServer() {
  return <WhyChooseUsClient emailKey={key} specialties={specialties} />
}
