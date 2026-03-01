"use client";

import React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;           // Show loader
  children: React.ReactNode;   // Button text
}

const Button: React.FC<ButtonProps> = ({
  loading = false,
  children,
  className = "",
  disabled,
  ...props
}) => {
  return (
    <button
      disabled={loading || disabled}
      className={`
        relative
        flex items-center justify-center gap-2
        px-6 py-3
        rounded-full
        bg-[#00B86B]
        text-white
        font-medium
        transition-all duration-300
        hover:opacity-90
        disabled:opacity-60
        disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {/* Loader */}
      {loading && (
        <span
          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
        />
      )}

      {/* Button Text */}
      <span>{children}</span>
    </button>
  );
};

export default Button;