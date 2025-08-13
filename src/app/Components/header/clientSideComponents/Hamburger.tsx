"use client";
import { RootState } from "@/features/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsMobileMenuOpen,toggleService } from "@/features/slice/slice";

export default function Hamburger() {
  const isMobileMenuOpen: boolean = useSelector(
    (state: RootState) => state.customSlice.isMobileMenuOpen
  );
  const isServiceOpen = useSelector((state:RootState)=>state.customSlice.isServiceOpen);
  const dispatch = useDispatch();
  const handleMobileMenuToggle = () => {
    isServiceOpen && dispatch(toggleService());
    dispatch(toggleIsMobileMenuOpen());
  };
  return (
    <button
      className="xl:hidden flex flex-col justify-center items-center w-8 h-8 md:w-16 md:h-16 space-y-1.5 z-60"
      onClick={handleMobileMenuToggle}
      aria-label="Toggle mobile menu"
    >
      <span
        className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
          isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
        }`}
      ></span>
      <span
        className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
          isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      ></span>
    </button>
  );
}
