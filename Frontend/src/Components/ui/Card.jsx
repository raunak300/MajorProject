import React from "react";

export function Card({ className = "", children }) {
  return (
    <div className={`border border-border rounded-xl shadow-md bg-background ${className}`}>
      {children}
    </div>
  );
}
