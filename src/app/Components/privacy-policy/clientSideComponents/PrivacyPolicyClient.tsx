"use client";
import React from "react";
import {
  Shield,
  Eye,
  Lock,
  Users,
  FileText,
  Globe,
  Mail,
  Calendar,
} from "lucide-react";

const PrivacyPolicyClient = () => {
  const lastUpdated = "January 15, 2025";

  const sections = [
    {
      title: "Information We Collect",
      icon: <FileText className="w-6 h-6" />,
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include your name, email address, phone number, and company information.",
        },
        {
          subtitle: "Usage Information",
          text: "We automatically collect information about how you use our website and services, including your IP address, browser type, operating system, and pages visited.",
        },
        {
          subtitle: "Cookies and Tracking",
          text: "We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content.",
        },
      ],
    },
    {
      title: "How We Use Your Information",
      icon: <Eye className="w-6 h-6" />,
      content: [
        {
          subtitle: "Service Provision",
          text: "We use your information to provide, maintain, and improve our services, process transactions, and communicate with you about your account.",
        },
        {
          subtitle: "Communication",
          text: "We may use your contact information to send you updates, newsletters, marketing materials, and important service announcements.",
        },
        {
          subtitle: "Analytics and Improvement",
          text: "We analyze usage data to understand how our services are used and to make improvements to our platform and user experience.",
        },
      ],
    },
    {
      title: "Information Sharing",
      icon: <Users className="w-6 h-6" />,
      content: [
        {
          subtitle: "Third-Party Services",
          text: "We may share information with trusted third-party service providers who assist us in operating our business and providing services to you.",
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose information when required by law, court order, or government regulation, or when we believe disclosure is necessary to protect our rights or comply with legal obligations.",
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.",
        },
      ],
    },
    {
      title: "Data Security",
      icon: <Lock className="w-6 h-6" />,
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
        },
        {
          subtitle: "Data Encryption",
          text: "We use industry-standard encryption protocols to protect sensitive data during transmission and storage.",
        },
        {
          subtitle: "Access Controls",
          text: "We maintain strict access controls and regularly review our security practices to ensure your data remains protected.",
        },
      ],
    },
    {
      title: "Your Rights and Choices",
      icon: <Shield className="w-6 h-6" />,
      content: [
        {
          subtitle: "Access and Correction",
          text: "You have the right to access, update, or correct your personal information. You can do this through your account settings or by contacting us directly.",
        },
        {
          subtitle: "Data Portability",
          text: "You may request a copy of your personal data in a structured, machine-readable format.",
        },
        {
          subtitle: "Deletion Rights",
          text: "You may request deletion of your personal information, subject to certain legal and contractual restrictions.",
        },
        {
          subtitle: "Marketing Preferences",
          text: "You can opt out of marketing communications at any time by using the unsubscribe link in our emails or updating your preferences.",
        },
      ],
    },
    {
      title: "International Data Transfers",
      icon: <Globe className="w-6 h-6" />,
      content: [
        {
          subtitle: "Cross-Border Processing",
          text: "Your information may be processed and stored in countries other than your country of residence. We ensure appropriate safeguards are in place for international transfers.",
        },
        {
          subtitle: "Compliance Standards",
          text: "We comply with applicable data protection laws and regulations, including GDPR, CCPA, and other regional privacy requirements.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="w-[90%] mx-auto py-7 lg:py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <em>
              Privacy <span className="text-primaryColor">Policy</span>
            </em>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
            We are committed to protecting your privacy and ensuring the
            security of your personal information. This policy explains how we
            collect, use, and safeguard your data.
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400">
            <Calendar className="w-5 h-5" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>

        {/* Intro Section */}
        <div className="flex items-center justify-center mb-16">
          <div className="p-4 bg-black bg-opacity-20 rounded-xl">
            <Shield className="w-12 h-12 text-black dark:text-white" />
          </div>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <em>Your Privacy Matters</em>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
            We believe that privacy is a fundamental right. This policy is
            designed to help you understand how we handle your information and
            the choices you have about your data.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-12">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-[#2bbcd7] to-[#f2e108] rounded-xl text-black">
                  {section.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-6">
                {section.content.map((item, itemIdx) => (
                  <div key={itemIdx}>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {item.subtitle}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed pl-4 border-l-4 border-primaryColor">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-secondaryColor rounded-xl">
                <Mail className="w-8 h-8 text-black" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              <em>
                Questions About Your{" "}
                <span className="text-primaryColor">Privacy</span>?
              </em>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              If you have any questions about this privacy policy, how we handle
              your data, or would like to exercise your privacy rights, please
              don't hesitate to contact us.
            </p>
            <a
              href="mailto:privacy@company.com?subject=Privacy%20Policy%20Inquiry"
              className="bg-primaryColor hover:bg-secondaryColor hover:text-black text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Contact Privacy Team
            </a>
          </div>
        </div>

        {/* Policy Updates Section */}
        <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Policy Updates
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We may update this privacy policy from time to time. We will notify
            you of any material changes by posting the new policy on this page
            and updating the "last updated" date. We encourage you to review
            this policy periodically to stay informed about how we protect your
            information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyClient;
