import React from "react";
import { ReactNode } from "react";
import {
  FileText,
  Shield,
  AlertTriangle,
  Scale,
  Users,
  RefreshCw,
  Ban,
  Mail,
  Calendar,
} from "lucide-react";
import TermsOfServiceClient from "./clientSideComponents/TermsOfServiceClient";
import key from "@/features/email/emailConfig";

export interface SectionContent {
  subtitle: string;
  text: string;
}

export interface Section {
  title: string;
  icon: ReactNode;
  content: SectionContent[];
}

const lastUpdated: string = "January 15, 2025";

const sections: Section[] = [
  {
    title: "Acceptance of Terms",
    icon: <FileText className="w-6 h-6" />,
    content: [
      {
        subtitle: "Agreement to Terms",
        text: "By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.",
      },
      {
        subtitle: "Legal Age Requirement",
        text: "You must be at least 18 years old to use our services. By using our services, you represent and warrant that you are of legal age to form a binding contract.",
      },
      {
        subtitle: "Business Use",
        text: "Our services are intended for business and professional use. You represent that you are using our services on behalf of a legitimate business entity or for professional purposes.",
      },
    ],
  },
  {
    title: "Use of Services",
    icon: <Users className="w-6 h-6" />,
    content: [
      {
        subtitle: "Permitted Use",
        text: "You may use our services only for lawful purposes and in accordance with these terms. You agree not to use our services in any way that could damage, disable, or impair our systems.",
      },
      {
        subtitle: "Account Responsibility",
        text: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
      },
      {
        subtitle: "Compliance",
        text: "You agree to comply with all applicable local, state, national, and international laws and regulations in your use of our services.",
      },
    ],
  },
  {
    title: "Prohibited Activities",
    icon: <Ban className="w-6 h-6" />,
    content: [
      {
        subtitle: "Unauthorized Access",
        text: "You may not attempt to gain unauthorized access to our systems, other users' accounts, or computer networks connected to our services.",
      },
      {
        subtitle: "Harmful Content",
        text: "You may not upload, post, or transmit any content that is illegal, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable.",
      },
      {
        subtitle: "Intellectual Property Violation",
        text: "You may not use our services to infringe upon the intellectual property rights of others, including copyrights, trademarks, or patents.",
      },
      {
        subtitle: "System Interference",
        text: "You may not interfere with or disrupt our services or servers, or disobey any requirements, procedures, policies, or regulations of networks connected to our services.",
      },
    ],
  },
  {
    title: "Intellectual Property Rights",
    icon: <Shield className="w-6 h-6" />,
    content: [
      {
        subtitle: "Our Content",
        text: "All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are owned by us or our licensors and are protected by copyright and other intellectual property laws.",
      },
      {
        subtitle: "User Content",
        text: "You retain ownership of any content you submit to our services. However, by submitting content, you grant us a worldwide, royalty-free license to use, reproduce, and distribute such content in connection with our services.",
      },
      {
        subtitle: "Respect for Rights",
        text: "We respect intellectual property rights and expect our users to do the same. We will respond to clear notices of alleged copyright infringement.",
      },
    ],
  },
  {
    title: "Payment Terms",
    icon: <Scale className="w-6 h-6" />,
    content: [
      {
        subtitle: "Pricing",
        text: "Pricing for our services is as described on our website or in your service agreement. All fees are non-refundable unless otherwise stated.",
      },
      {
        subtitle: "Payment Processing",
        text: "Payments are processed through secure third-party payment processors. You agree to provide accurate and current billing information.",
      },
      {
        subtitle: "Late Payments",
        text: "If payment is not received when due, we may suspend or terminate your access to our services until payment is made in full.",
      },
    ],
  },
  {
    title: "Service Modifications",
    icon: <RefreshCw className="w-6 h-6" />,
    content: [
      {
        subtitle: "Right to Modify",
        text: "We reserve the right to modify, suspend, or discontinue any part of our services at any time, with or without notice.",
      },
      {
        subtitle: "Updates and Maintenance",
        text: "We may perform scheduled maintenance or updates that may temporarily affect service availability. We will attempt to provide reasonable notice when possible.",
      },
    ],
  },
  {
    title: "Disclaimers and Limitations",
    icon: <AlertTriangle className="w-6 h-6" />,
    content: [
      {
        subtitle: "Service Availability",
        text: "We provide our services on an 'as is' and 'as available' basis. We do not warrant that our services will be uninterrupted, error-free, or completely secure.",
      },
      {
        subtitle: "Limitation of Liability",
        text: "To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.",
      },
      {
        subtitle: "Third-Party Services",
        text: "Our services may integrate with third-party services. We are not responsible for the availability, accuracy, or content of such third-party services.",
      },
    ],
  },
  {
    title: "Termination",
    icon: <Ban className="w-6 h-6" />,
    content: [
      {
        subtitle: "Termination by You",
        text: "You may terminate your account at any time by following the account closure process described in our services or by contacting us directly.",
      },
      {
        subtitle: "Termination by Us",
        text: "We may terminate or suspend your account and access to our services immediately, without prior notice, if you breach these terms or engage in prohibited activities.",
      },
      {
        subtitle: "Effect of Termination",
        text: "Upon termination, your right to use our services will cease immediately. We may delete your account and all associated data, subject to applicable data retention requirements.",
      },
    ],
  },
];
export default function TermsOfServiceServer() {
  return (
    <TermsOfServiceClient
      lastUpdated={lastUpdated}
      sections={sections}
      emailKey={key}
    />
  );
}
