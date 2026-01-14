import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { Magnetic } from "./Magnetic";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "text";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-bold tracking-wide transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed rounded-full relative z-10";

  const variants = {
    primary:
      "bg-brand-black text-white hover:bg-brand-dark shadow-lg hover:shadow-xl hover:shadow-brand-black/20",
    secondary:
      "bg-white border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-white",
    text: "bg-transparent text-brand-black hover:text-brand-accent underline-offset-4 hover:underline p-0 rounded-none",
  };

  const sizes = {
    sm: "text-xs px-5 py-2.5",
    md: "text-sm px-8 py-3.5",
    lg: "text-base px-10 py-4",
  };

  const buttonContent = (
    <motion.button
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${fullWidth ? "w-full" : ""} 
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );

  if (variant === "text") return buttonContent;

  return <Magnetic>{buttonContent}</Magnetic>;
};
