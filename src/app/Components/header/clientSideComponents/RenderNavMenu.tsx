"use client";
import { RootState } from "@/features/store/store";
import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { toggleService,setActiveItem } from "@/features/slice/slice";
import { JSX } from "react";


export default function RenderNavMenu() {

  const dispatch = useDispatch();
  const pages = useSelector((state: RootState) => state.customSlice.pages);
  const validPaths = useSelector((state: RootState) => state.customSlice.validPaths);
  const isServiceOpen = useSelector((state: RootState) => state.customSlice.isServiceOpen);
  const router = useRouter();

  // Now tracking a single active item
  const activeItem = useSelector((state:RootState)=>state.customSlice.activeItem);
  // const [activeItem, setActiveItem] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Click outside handler
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     const target = event.target as Node;
  //     // Don't close if clicking on dropdown overlay
  //     if (target && (target as Element).closest('[data-dropdown-overlay]')) {
  //       return;
  //     }
  //     // if (navRef.current && !navRef.current.contains(target)) {
  //     //   dispatch(setActiveItem(""));
  //     // }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [isServiceOpen, dispatch]);

  const handleItemClick = (item: string) => {
    const itemKeyComp = item.toLowerCase();
    const normalizedKey = itemKeyComp.split(" ").join(""); // Consistent normalization

    // For "about", just navigate without dropdown
    if (itemKeyComp === "about") {
      dispatch(setActiveItem("")); // Close any open dropdown
      if (isServiceOpen) {
        dispatch(toggleService());
      }
      if (validPaths.includes(itemKeyComp)) {
        router.push(`/${itemKeyComp}`);
      }
      return;
    }

    // Toggle dropdown: close if already open, open if not
    const newActive = activeItem === normalizedKey ? "" : normalizedKey;
    dispatch(setActiveItem(newActive));

    // Special handling for "services"
    if (itemKeyComp === "services") {
      dispatch(toggleService());
      return;
    }

    // Close "services" if open
    if (isServiceOpen) {
      dispatch(toggleService());
    }

    // Navigate if valid
    if (validPaths.includes(itemKeyComp)) {
      router.push(`/${itemKeyComp}`);
    }
  };

  return (
    <nav ref={navRef} className="hidden xl:block w-[60%] text-base sm:text-lg md:text-2xl text-white">
      <ul className="flex justify-center gap-7 relative">
        {pages.map((item, index) => {
          const itemKeyComp = item.toLowerCase();
          const normalizedKey = itemKeyComp.split(" ").join(""); // Consistent normalization
          const isActive = activeItem === normalizedKey;
          return (
            <li key={`${item}-${index}`} className="relative">
              <button
                onClick={() => handleItemClick(item)}
                className="group relative inline-block px-2 py-1 transition-all duration-300 bg-transparent border-none cursor-pointer"
              >
                <span className="relative z-10 font-semibold tracking-wide drop-shadow-sm flex items-center gap-1">
                  {item.toUpperCase()}
                  {itemKeyComp !== "about" && (
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isActive ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </span>

                {/* Underline animation */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-primaryColor w-full transform transition-transform duration-300 origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}