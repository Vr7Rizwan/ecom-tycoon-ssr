// "use client";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface state {
  activeService: string;
  itemKey: string;
  activeItem: string;
  isFormPopupOpen: boolean;
  isDarkMode: boolean;
  isServiceOpen: boolean;
  servicesData: Record<string, string[]>;
  pages: string[];
  validPaths: string[];
  isMobileMenuOpen: boolean;
  sectionRefs: Record<string, HTMLElement | HTMLDivElement | null>;
}

const initialState: state = {
  activeService: "web development",
  itemKey: "",
  activeItem: "",
  sectionRefs: {},
  isFormPopupOpen: false,
  isMobileMenuOpen: false,
  isDarkMode: false,
  isServiceOpen: false,
  validPaths: ["about"],
  pages: ["About", "Services", "Why Choose us", "Reviews", "Team", "Contact"],
  servicesData: {
    "Digital Transformation": [
      "Web development",
      "App Development",
      "Custom Software Development",
      "UX/UI Design",
    ],
    "eCommerce Solutions": [
      "Shopify",
      "Wordpress",
      "ebay",
      "Amazon",
      "etsy",
      "onbuy",
    ],
    "Digital Marketing": [
      "Search Engine Optimization",
      "Google Ads",
      "Meta Ads",
      "Tiktok Ads",
      "Social Media Marketing",
      "Email Marketing",
    ],
    "Customer Care Solutions": ["Chat Support 24/7 services"],
    "Business Consulting": ["Help you grow your business"],
  }
};

export const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    toggleService: (state) => {
      state.isServiceOpen = !state.isServiceOpen;
    },
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    toggleIsMobileMenuOpen: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    setIsFormPopupOpen: (state, action: PayloadAction<boolean>) => {
      state.isFormPopupOpen = action.payload;
    },
    setSectionRef: (
      state,
      action: PayloadAction<{ key: string; ref: HTMLElement | HTMLDivElement | null }>
    ) => {
      state.sectionRefs[action.payload.key] = action.payload.ref as any;
    },
    setActiveItem: (state, action: PayloadAction<string>) => {
      state.activeItem = action.payload;
    },
    setItemKey: (state, action: PayloadAction<string>) => {
      state.itemKey = action.payload;
    },
    setActiveService: (state, action: PayloadAction<string>) => {
      state.activeService = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { toggleService, toggleDarkMode, toggleIsMobileMenuOpen, setIsFormPopupOpen, setSectionRef, setActiveItem, setItemKey, setActiveService } = slice.actions;

export default slice.reducer;
