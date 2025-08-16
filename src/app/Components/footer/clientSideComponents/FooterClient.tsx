"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { toggleService, setActiveItem } from "@/features/slice/slice";

interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

interface QuickLink {
  name: string;
  url: string;
}

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

interface FooterClientProps {
  pages: string[];
  servicesArray: string[];
  socialLinks: SocialLink[];
  quickLinks: QuickLink[];
  contactInfo: ContactInfo;
}

export default function FooterClient({
  pages,
  servicesArray,
  socialLinks,
  quickLinks,
  contactInfo,
}: FooterClientProps) {
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);
  const dispatch = useDispatch();

  const handleNavigation = (item: string, url: string) => {
    servicesArray.includes(item) ? dispatch(toggleService()) : router.push(url);
    // servicesArray.includes(item) || router.push(url);
    console.log(item);
    // router.push(url);
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl border-t border-white/10 shadow-2xl shadow-primaryColor/10">
      {/* Main Footer Content */}
      <div className="mx-auto px-4 py-12 lg:py-16">
        <div className="w-full max-w-none mx-auto">
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 xl:gap-20"
            style={{ width: "90%", margin: "0 auto" }}
          >
            {/* Company Info & Logo */}
            <div className="lg:col-span-1 space-y-3 lg:space-y-6">
              <div className="transform hover:scale-105 transition-all duration-300">
                <Image
                  src="/assets/Nav/logo.webp"
                  width={1080}
                  height={1080}
                  alt="Company Logo"
                  className="w-20 md:w-24 lg:w-28 drop-shadow-lg"
                />
              </div>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed font-light">
                Your trusted partner in delivering exceptional digital
                solutions. We combine innovation with expertise to bring your
                vision to life.
              </p>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    target="_blank"
                    key={social.name}
                    href={social.url}
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    className="group relative p-2 rounded-full bg-gradient-to-r from-slate-800/50 to-gray-800/50 hover:from-primaryColor/20 hover:to-primaryColor/10 border border-white/10 hover:border-primaryColor/30 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                    aria-label={social.name}
                  >
                    <svg
                      className="w-5 h-5 text-gray-300 group-hover:text-primaryColor transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.icon} />
                    </svg>

                    {/* Tooltip */}
                    <div
                      className={`absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-xs rounded-md whitespace-nowrap transition-all duration-300 ${
                        hoveredSocial === index
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                    >
                      {social.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-800"></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold tracking-wide">
                Quick Links
              </h3>
              <ul className="space-y-0.5 lg:space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(link.name, link.url);
                      }}
                      className="group inline-flex items-center text-gray-300 hover:text-primaryColor transition-all duration-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                    >
                      <span className="w-0 group-hover:w-4 h-px bg-primaryColor transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold tracking-wide">
                Our Services
              </h3>
              <ul className="space-y-0.5 lg:space-y-3">
                {servicesArray?.slice(0, 6).map((serviceCategory, index) => (
                  <li key={serviceCategory + index}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(
                          serviceCategory,
                          `/${serviceCategory
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`
                        );
                      }}
                      className="group inline-flex items-center text-gray-300 hover:text-primaryColor transition-all duration-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                    >
                      <span className="w-0 group-hover:w-4 h-px bg-primaryColor transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {serviceCategory}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold tracking-wide">
                Get In Touch
              </h3>
              <div className="space-y-3 lg:space-y-4">
                <div className="group flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-1">
                    <svg
                      className="w-full h-full text-primaryColor"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl group-hover:text-white transition-colors duration-300">
                    {contactInfo.address}
                  </p>
                </div>

                <div className="group flex items-center space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6">
                    <svg
                      className="w-full h-full text-primaryColor"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-gray-300 hover:text-primaryColor transition-colors duration-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                  >
                    {contactInfo.phone}
                  </a>
                </div>

                <div className="group flex items-center space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6">
                    <svg
                      className="w-full h-full text-primaryColor"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-300 hover:text-primaryColor transition-colors duration-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-gradient-to-r from-slate-900/50 via-gray-900/50 to-slate-900/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl text-center md:text-left">
              © {currentYear} eCom Tycoon. All rights reserved.
            </div>

            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm sm:text-base md:text-lg lg:text-xl">
              <a
                href="#"
                className="text-gray-400 hover:text-primaryColor transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primaryColor transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primaryColor/50 to-transparent"></div>

      {/* Floating Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-primaryColor to-primaryColor/80 hover:from-primaryColor/90 hover:to-primaryColor text-white rounded-full shadow-lg hover:shadow-xl shadow-primaryColor/25 hover:shadow-primaryColor/40 transition-all duration-300 transform hover:scale-110 z-50 backdrop-blur-sm"
        aria-label="Back to top"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
}
