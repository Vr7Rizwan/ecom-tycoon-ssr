"use client";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setSectionRef } from "@/features/slice/slice";
import Image from "next/image";
import FramerWrapper from "../../../../../../lib/FramerWrapper";

// Define the types for the review and state
interface Review {
  logo: string;
  content: string;
  avatar: string;
  personName: string;
  designation: string;
  companyName: string;
  category: string;
}
interface ReviewsProps{
  allReviews:Review[]
}

const ReviewsClient = ({allReviews}:ReviewsProps) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(()=>{
    if(ref.current){
      dispatch(setSectionRef({key: "reviewSection",ref:ref.current}))
    }
  },[])
  // Selector to get all reviews

  // State hooks with appropriate types
  const [showReviews, setShowReviews] = useState<number>(4);
  const [selectedCategory, setSelectedCategory] = useState<"all" | "technology" | "finance" | "healthcare">("all");

  // Filter reviews based on selected category
  const filteredReviews = selectedCategory === "all"
    ? allReviews ?? []
    : (allReviews ?? []).filter((review) => review.category === selectedCategory);

  // Limit reviews based on showReviews count
  const limitedReviews = filteredReviews.slice(0, showReviews);

  // Button class styling
  const btnClass =
    "p-3 px-6 md:px-14 rounded-full text-black font-semibold hover:cursor-pointer bg-primaryColor transition-all duration-500 md:text-xl";

  return (
    <FramerWrapper animation="fade-up"
    duration={0.8} // 800ms converted to seconds
    delay={0.1} // 100ms converted to seconds
    easing="ease-out"
    once={true}>
      <div
      ref={ref}
      className="w-[90%] mx-auto py-12 flex flex-col gap-14"
    >
      <h1 className="text-center text-3xl md:text-6xl font-bold">
        <em>What our Clients say About Us</em>
      </h1>

      <div className="flex gap-6 md:gap-12 justify-center">
        {["All", "Technology", "Finance", "Healthcare"].map((cat, i) => (
          <button
            key={cat + i}
            className={`${btnClass} ${
              selectedCategory === cat.toLowerCase()
                ? "opacity-100 scale-120 bg-secondaryColor"
                : "opacity-70"
            }`}
            onClick={() => {
              setShowReviews(4); // Reset to 4 reviews when a category is selected
              setSelectedCategory(cat.toLowerCase() as "all" | "technology" | "finance" | "healthcare");
            }}
          >
            {cat}
          </button>
        ))}
      </div>

<FramerWrapper
animation="fade-down"
duration={0.8} // 800ms converted to seconds
delay={0.1} // 100ms converted to seconds
easing="ease-out"
once={true}
>
<div
        className="columns-1 md:columns-2 gap-6 space-y-6"
      >
        {limitedReviews.map((el, i) => (
          <div
            key={i}
            className="break-inside-avoid flex flex-col bg-white rounded-2xl p-6 space-y-6 dark:bg-gray-800 primaryText shadow-xl transition-all hover:shadow-xl hover:scale-[1.03]  hover:bg-opacity-10 hover:bg-gray-300 duration-500 border-1 border-[#f1f1f1] hover:border-none dark:hover:bg-gray-300 text-[#223554] dark:text-white dark:hover:text-[#223554]"
          >
            <Image
              src={el.logo}
              className="w-24 h-auto"
              width={320}
              height={320}
              alt={`${el.companyName} logo`}
              priority
            />
            <p className="text-lg leading-relaxed text-inherit">{el.content}</p>
            <div className="flex items-center gap-4">
              <Image
                src={el.avatar}
                alt="Avatar"
                className="w-14 h-14 rounded-full object-cover"
                width={320}
                height={320}
                priority
              />
              <div className="flex flex-col">
                <span className="text-lg font-semibold">{el.personName}</span>
                <span className="text-sm text-inherit">
                  {el.designation}, {el.companyName}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
</FramerWrapper>

      {showReviews < filteredReviews.length && (
        <button
          className={`${btnClass} w-auto mx-auto relative before:absolute before:w-full before:top-full before:bg-secondaryColor before:h-full before:left-0 overflow-hidden before:content-['↓'] before:flex before:justify-center before:items-center hover:before:top-0 before:transition-all before:duration-500 before:text-4xl`}
          onClick={() => setShowReviews((c) => c + 4)}
        >
          More
        </button>
      )}
    </div>
    </FramerWrapper>
    
  );
};

ReviewsClient.displayName = "Reviews";

export default ReviewsClient;
