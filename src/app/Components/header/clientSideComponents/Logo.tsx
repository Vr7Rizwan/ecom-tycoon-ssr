"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div
      onClick={handleClick}
      className="transform hover:scale-105 transition-all duration-300 hover:drop-shadow-2xl z-60 cursor-pointer"
    >
      <Image
        src="/assets/Nav/logo.webp"
        width={1080}
        height={1080}
        alt="Logo"
        priority
        className="w-24 md:w-32 drop-shadow-lg"
      />
    </div>
  );
}
