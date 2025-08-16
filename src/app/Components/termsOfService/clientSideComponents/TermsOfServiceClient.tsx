"use client";
import React from "react";
import { ReactNode } from "react";
import { RootState } from "@/features/store/store";
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
import FormPopUpServer from "../../formPopUp/FormPopUpServer";
import { useSelector, useDispatch } from "react-redux";
import { setIsFormPopupOpen } from "@/features/slice/slice";

export interface SectionContent {
  subtitle: string;
  text: string;
}

export interface Section {
  title: string;
  icon: ReactNode;
  content: SectionContent[];
}

const TermsOfServiceClient = ({
  lastUpdated,
  sections,
  emailKey,
}: {
  lastUpdated: string;
  sections: Section[];
  emailKey: any;
}) => {
  const isFormPopupOpen = useSelector(
    (state: RootState) => state.customSlice.isFormPopupOpen
  );
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setIsFormPopupOpen(true));
  };
  const handleCloseFormPopup = () => {
    dispatch(setIsFormPopupOpen(false));
  };
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="w-[90%] mx-auto py-7 lg:py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <em>
              Terms of <span className="text-primaryColor">Service</span>
            </em>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
            These terms govern your use of our services. Please read them
            carefully as they contain important information about your rights
            and obligations when using our platform.
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400">
            <Calendar className="w-5 h-5" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>

        {/* Terms Sections */}
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

        {/* Governing Law Section */}
        <div className="mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              <em>Governing Law and Jurisdiction</em>
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                These Terms of Service are governed by and construed in
                accordance with the laws of [Your Jurisdiction], without regard
                to its conflict of law principles.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Any disputes arising from or relating to these terms or your use
                of our services shall be resolved through binding arbitration in
                accordance with the rules of [Arbitration Organization].
              </p>
            </div>
          </div>
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
                Questions About These{" "}
                <span className="text-primaryColor">Terms</span>?
              </em>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              If you have any questions about these Terms of Service or need
              clarification on any provisions, please don't hesitate to contact
              our team.
            </p>
            <div className="space-y-4">
              <button
                onClick={handleClick}
                className="bg-primaryColor hover:bg-secondaryColor hover:text-black text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </button>
              <p className="text-gray-500 dark:text-gray-400">
                Email: info@ecom-tycoon.com | Phone: +9999999
              </p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Changes to Terms
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We reserve the right to modify these Terms of Service at any time.
            We will notify users of material changes by posting the updated
            terms on this page and updating the "last updated" date. Continued
            use of our services after such changes constitutes acceptance of the
            new terms.
          </p>
        </div>
      </div>
      {isFormPopupOpen && (
        <FormPopUpServer onClose={handleCloseFormPopup} emailKey={emailKey} />
      )}
    </div>
  );
};

export default TermsOfServiceClient;
