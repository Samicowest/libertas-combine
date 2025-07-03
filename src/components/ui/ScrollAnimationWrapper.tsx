"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  animationType?:
    | "fadeIn"
    | "slideUp"
    | "slideDown"
    | "slideLeft"
    | "slideRight";
  duration?: number;
  delay?: number;
  threshold?: number;
}

const ScrollAnimationWrapper = ({
  children,
  className,
  animationType = "fadeIn",
  duration = 0.6,
  delay = 0,
  threshold = 0.1,
}: ScrollAnimationWrapperProps) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
    rootMargin: "-50px 0px",
    skip: false, // Ensure the observer is always active
  });

  const variants = {
    hidden: {
      opacity: 0,
      y:
        animationType === "slideUp"
          ? 50
          : animationType === "slideDown"
          ? -50
          : 0,
      x:
        animationType === "slideLeft"
          ? 50
          : animationType === "slideRight"
          ? -50
          : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;
