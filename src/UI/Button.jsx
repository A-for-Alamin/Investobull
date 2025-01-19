import React from "react";
import { twMerge } from "tailwind-merge";

export const Button = ({ className, children }) => {
  return (
    <button
      className={twMerge("bg-primary py-4 px-10 text-white rounded", className)}
    >
      {children}
    </button>
  );
};
