import React from "react";

export function Card({ className = "", children, ...props }) {
  return (
    <div
      {...props} 
      className={`border border-border rounded-xl shadow-md bg-background ${className}`}
    >
      {children}
    </div>
  );
}
