import React from "react";
import ExpertiseClient from "./clientSideComponents/ExpertiseClient";
const images: string[] = [
  "/assets/Expertise/1.webp",
  "/assets/Expertise/2.webp",
  "/assets/Expertise/3.webp",
  "/assets/Expertise/4.webp",
  "/assets/Expertise/5.webp",
  "/assets/Expertise/6.webp",
  "/assets/Expertise/7.webp",
  "/assets/Expertise/8.webp",
  "/assets/Expertise/9.webp",
  "/assets/Expertise/10.webp",
  "/assets/Expertise/11.webp",
  "/assets/Expertise/12.webp",
  "/assets/Expertise/13.webp",
  "/assets/Expertise/14.webp",
];

export default function ExpertiseServer() {
  return <ExpertiseClient images={images} />;
}
