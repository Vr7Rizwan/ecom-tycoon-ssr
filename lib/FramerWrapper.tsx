// src/features/FramerWrapper.tsx
"use client";
import React, { ReactNode } from "react";
import { motion, MotionProps, cubicBezier } from "framer-motion";

interface FramerWrapperProps {
  children: ReactNode;

  // Animation types (similar to AOS)
  animation?:
  | "fade"
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "zoom-in"
  | "zoom-out"
  | "flip-up"
  | "flip-down";

  // Timing
  duration?: number; // in seconds (Framer uses seconds, not ms)
  delay?: number; // in seconds

  // Easing
  easing?:
  | "linear"
  | "ease"
  | "ease-in"
  | "ease-out"
  | "ease-in-out"
  | "ease-in-back"
  | "ease-out-back"
  | "ease-in-out-back";

  // Behavior
  once?: boolean;

  // Custom styles
  className?: string;

  // Disable animation
  disabled?: boolean;

  // Custom animation values (overrides animation prop)
  customInitial?: MotionProps["initial"];
  customAnimate?: MotionProps["animate"];
  customTransition?: MotionProps["transition"];

  // Viewport settings
  viewportMargin?: string; // e.g., "-100px", "50%"
  viewportAmount?: number; // 0 to 1, how much of element should be visible
}

export default function FramerWrapper({
  children,
  animation = "fade-up",
  duration = 0.8, // 800ms converted to seconds
  delay = 0.1, // 100ms converted to seconds
  easing = "ease-out",
  once = true,
  className = "",
  disabled = false,
  customInitial,
  customAnimate,
  customTransition,
  viewportMargin = "0px",
  viewportAmount = 0.2, // 20% of element visible triggers animation
}: FramerWrapperProps) {
  // Convert easing to Framer Motion easing function
  const getEasingFn = (
    easingType: NonNullable<FramerWrapperProps["easing"]>
  ) => {
    const easingMap: Record<string, [number, number, number, number]> = {
      linear: [0, 0, 1, 1],
      ease: [0.25, 0.1, 0.25, 1],
      "ease-in": [0.42, 0, 1, 1],
      "ease-out": [0, 0, 0.58, 1],
      "ease-in-out": [0.42, 0, 0.58, 1],
      "ease-in-back": [0.36, 0, 0.66, -0.56],
      "ease-out-back": [0.34, 1.56, 0.64, 1],
      "ease-in-out-back": [0.68, -0.6, 0.32, 1.6],
    };
    const bezier = easingMap[easingType] || easingMap["ease-out"];
    return cubicBezier(bezier[0], bezier[1], bezier[2], bezier[3]);
  };

  // Animation presets
  const getAnimation = (animationType: string) => {
    const animations: Record<string, { initial: any; animate: any }> = {
      fade: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      },
      "fade-up": {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
      },
      "fade-down": {
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
      },
      "fade-left": {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
      },
      "fade-right": {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
      },
      "slide-up": {
        initial: { y: 100 },
        animate: { y: 0 },
      },
      "slide-down": {
        initial: { y: -100 },
        animate: { y: 0 },
      },
      "slide-left": {
        initial: { x: 100 },
        animate: { x: 0 },
      },
      "slide-right": {
        initial: { x: -100 },
        animate: { x: 0 },
      },
      "zoom-in": {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
      },
      "zoom-out": {
        initial: { opacity: 0, scale: 1.2 },
        animate: { opacity: 1, scale: 1 },
      },
      "flip-up": {
        initial: { opacity: 0, rotateX: -90 },
        animate: { opacity: 1, rotateX: 0 },
      },
      "flip-down": {
        initial: { opacity: 0, rotateX: 90 },
        animate: { opacity: 1, rotateX: 0 },
      },
    };

    return animations[animationType] || animations["fade-up"];
  };

  // If disabled, return children without animation
  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  const animationConfig = getAnimation(animation);

  const initial = customInitial || animationConfig.initial;
  const animate = customAnimate || animationConfig.animate;
  const transition = customTransition || {
    duration,
    delay,
    ease: getEasingFn(easing),
  };

  return (
    <motion.div
      initial={initial}
      whileInView={animate} // Only animate when in view
      transition={transition}
      className={className}
      viewport={{
        once,
        margin: viewportMargin,
        amount: viewportAmount,
      }}
    >
      {children}
    </motion.div>
  );
}
