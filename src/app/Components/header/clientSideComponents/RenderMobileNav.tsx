"use client";
import { RootState } from "@/features/store/store";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleIsMobileMenuOpen, toggleService,setActiveItem } from "@/features/slice/slice";
import { JSX } from "react";

interface DropdownOption {
  title: string;
  description: string;
  link?: string;
}

export default function RenderMobileNav({contentMap}:{contentMap:{[key:string]:{title:string,description:string,options:DropdownOption[]}}}) {
  const dispatch = useDispatch();
  const pages = useSelector((state: RootState) => state.customSlice.pages);
  const isMobileMenuOpen = useSelector(
    (state: RootState) => state.customSlice.isMobileMenuOpen
  );
  const activeItem = useSelector((state:RootState)=>state.customSlice.activeItem);

  const handleClick = (item: string) => {
    const itemKeyComp = item.toLowerCase();
    const normalizedKey = itemKeyComp.split(" ").join(""); // Consistent normalization
    
    dispatch(toggleIsMobileMenuOpen());
    if (itemKeyComp === "services") {
      dispatch(toggleService());
      return;
    }
    
    // Toggle dropdown for items that have content in contentMap
    if (contentMap[normalizedKey]) {
      const newActive = activeItem === normalizedKey ? "" : normalizedKey;
      dispatch(setActiveItem(newActive));
      return;
    }
    
    // Fallback: just close menu
    dispatch(toggleIsMobileMenuOpen());
  };

  if (!isMobileMenuOpen) return null;

  return (
    <div className="absolute top-full left-0 w-full bg-gradient-to-br from-slate-800/98 via-gray-900/98 to-slate-900/98 backdrop-blur-xl border-t border-primaryColor/20 shadow-2xl shadow-primaryColor/20 transition-all duration-500 max-h-[85vh] overflow-y-auto">
      <nav className="px-6 py-4">
        <ul className="flex flex-col space-y-4">
          {pages.map((item, index) => {
            const itemKeyComp = item.toLowerCase();
            const normalizedKey = itemKeyComp.split(" ").join("");
            const isActive = activeItem === normalizedKey;
            return (
              <li key={`${item}-${index}`} className="relative">
                <button
                  onClick={() => handleClick(item)}
                  className="flex items-center justify-between w-full text-left text-white hover:text-primaryColor transition-all duration-300 text-lg font-semibold tracking-wide py-2 bg-transparent border-none cursor-pointer"
                >
                  <span>{item.toUpperCase()}</span>
                  {itemKeyComp !== "about" && (
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${isActive ? "rotate-180" : "rotate-0"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                {index < pages.length - 1 && (
                  <hr className="opacity-20 border-gradient-to-r from-transparent via-primaryColor/30 to-transparent mt-2" />
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}