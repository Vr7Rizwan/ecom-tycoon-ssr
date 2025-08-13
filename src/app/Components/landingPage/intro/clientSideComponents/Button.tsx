import React from "react";

export default function Button() {
  return (
    <div className="flex justify-center lg:justify-start">
      <button
        className="bg-primaryColor text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl py-3 px-6 md:py-4 md:px-8 rounded-2xl transition-all duration-500 hover:scale-110 shadow-lg hover:text-black hover:bg-secondaryColor hover:cursor-pointer"
        type="button"
        aria-label="Contact us to discuss your project"
      >
        Let's Talk
      </button>
    </div>
  );
}
