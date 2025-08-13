"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "@/features/slice/slice";
import { RootState } from "@/features/store/store";

export default function DarkModeBtn() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(
    (state: RootState) => state.customSlice.isDarkMode
  );

  // Initialize theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Default to light mode, but check saved preference first, then system preference
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    // Apply the theme to the document
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(initialTheme);

    // Save to localStorage if not already saved
    if (!savedTheme) {
      localStorage.setItem("theme", "light"); // Default to light mode
    }

    // Sync Redux state with actual theme (only if different)
    const shouldBeDark = (savedTheme || "light") === "dark";
    if (isDarkMode !== shouldBeDark) {
      dispatch(toggleDarkMode());
    }
  }, [dispatch, isDarkMode]);

  const handleClick = () => {
    const currentTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;
    const newTheme: "light" | "dark" =
      currentTheme === "light" ? "dark" : "light";

    // Update localStorage
    localStorage.setItem("theme", newTheme);

    // Update document classes
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);

    // Update Redux state
    dispatch(toggleDarkMode());
  };

  return (
    <span
      className={`relative flex items-center justify-center w-12 h-6 rounded-full transition-colors duration-300 cursor-pointer ${
        isDarkMode ? "bg-blue-600" : "bg-gray-300"
      }`}
      aria-label="Toggle dark mode"
      onClick={handleClick}
    >
      <div
        className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isDarkMode ? "translate-x-3" : "-translate-x-3"
        }`}
      >
        {isDarkMode ? (
          <svg
            className="w-3 h-3 text-yellow-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            className="w-3 h-3 text-gray-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </div>
    </span>
  );
}
