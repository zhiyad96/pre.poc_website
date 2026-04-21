"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  type?: "fade" | "slide" | "scale" | "bounce" | "rotate" | "jump";
  duration?: number;
  staggerChildren?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  type = "slide",
  duration = 0.8,
  staggerChildren = 0
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const directionVariants = {
    up: { y: 60 },
    down: { y: -60 },
    left: { x: 60 },
    right: { x: -60 }
  };

  const getInitialVariants = () => {
    switch (type) {
      case "fade":
        return { opacity: 0 };
      case "slide":
        return { opacity: 0, ...directionVariants[direction] };
      case "scale":
        return { opacity: 0, scale: 0.8, ...directionVariants[direction] };
      case "bounce":
        return { opacity: 0, scale: 0.3, ...directionVariants[direction] };
      case "rotate":
        return { opacity: 0, rotate: -10, scale: 0.9, ...directionVariants[direction] };
      case "jump":
        return { opacity: 0, y: 100, scale: 0.5, rotate: -5 };
      default:
        return { opacity: 0, ...directionVariants[direction] };
    }
  };

  const getAnimateVariants = () => {
    switch (type) {
      case "bounce":
        return { opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 };
      case "jump":
        return { opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 };
      default:
        return { opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 };
    }
  };

  const getTransition = () => {
    const baseTransition = {
      duration,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94] // Custom cubic-bezier for modern feel
    };

    if (type === "bounce") {
      return {
        ...baseTransition,
        type: "spring",
        stiffness: 100,
        damping: 10
      };
    }

    if (type === "jump") {
      return {
        type: "spring",
        stiffness: 200,
        damping: 12,
        mass: 0.8,
        delay
      };
    }

    return baseTransition;
  };

  const containerVariants = staggerChildren > 0 ? {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delay
      }
    }
  } : {};

  const childVariants = staggerChildren > 0 ? {
    hidden: getInitialVariants(),
    visible: {
      ...getAnimateVariants(),
      transition: getTransition()
    }
  } : {};

  if (staggerChildren > 0) {
    return (
      <motion.div
        ref={ref}
        className={className}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {React.Children.map(children, (child) => (
          <motion.div variants={childVariants}>
            {child}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitialVariants()}
      animate={isInView ? getAnimateVariants() : getInitialVariants()}
      transition={getTransition()}
    >
      {children}
    </motion.div>
  );
}
