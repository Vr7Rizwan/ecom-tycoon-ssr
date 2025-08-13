"use client";
import { useRef, useEffect, useState } from "react";
import RenderNavMenu from "./RenderNavMenu";
import RenderMobileNav from "./RenderMobileNav";
import RenderDropDownMenu from "./RenderDropDownMenu";
import DarkModeBtn from "./DarkModeBtn";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import { RootState } from "@/features/store/store";
import { useSelector, UseSelector } from "react-redux";
import { JSX } from "react";

interface DropdownOption {
  title: string;
  description: string;
  link?: string;
}

const HeaderClient = ({ contentMap }: { contentMap: { [key: string]: { title: string; description: string; options: DropdownOption[] } } }) => {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const isServiceOpen = useSelector((state: RootState) => state.customSlice.isServiceOpen);
  const activeItem = useSelector((state:RootState)=>state.customSlice.activeItem);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky z-50 transition-all duration-500 bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl border-t border-white/10 shadow-2xl shadow-primaryColor/10 
    ${scrolled && !isServiceOpen && !activeItem ? "top-5 w-[95%] rounded-2xl" : "top-0 w-full"} 
    mx-auto px-4`}
      >
        <div className="flex justify-between items-center mx-auto px-4">
          {/* Logo */}
          <Logo />
          {/* Desktop Navigation */}
          <RenderNavMenu />

          {/* Right side - placeholder for dark mode and mobile menu (SSR only, no interactivity) */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle Button (non-interactive) */}
            <DarkModeBtn />

            {/* Mobile Hamburger Button (non-interactive) */}
            <Hamburger />
          </div>

          {/* Mobile Navigation Menu (SSR only, always hidden) */}
          <RenderMobileNav contentMap={contentMap} />
        </div>
      </header>

      {/* Services Submenu (SSR only, always hidden) */}
      <RenderDropDownMenu contentMap={contentMap} />
    </>
  );
};

export default HeaderClient;
