import React from "react";
import { Card } from "@/Components/ui/Card"; // adjust path if needed

// Props: title, description, icon (Lucide icon component), color, className
export default function FeatureCard({ title, description, icon: Icon, color, className = "" , onClick}) {
  const colorVariants = {
    ai: "from-green-600 via-green-900 to-green-900 hover:border-green-400",
  journal: "from-purple-600 via-purple-900 to-purple-900 hover:border-purple-400",
  exercise: "from-blue-600 via-blue-900 to-blue-900 hover:border-blue-400",
  personal: "from-indigo-950 via-purple-950 to-black hover:border-purple-900/90",
  };

  const iconColors = {
    ai: "text-feature-ai",
    journal: "text-feature-journal", 
    exercise: "text-feature-exercise",
    personal: "text-feature-personal"
  };

  return (
    <Card
    onClick={onClick}  
      className={`
        group relative overflow-hidden cursor-pointer
        bg-gradient-to-br ${colorVariants[color]}
        border rounded-2xl p-6
        hover:scale-[1.02] transition-all duration-500 ease-out
        ${className}
      `}
    >
      <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
        
        {/* Icon with glow */}
        <div className="relative flex items-center justify-center">
          <div className={`absolute inset-0 rounded-full blur-2xl opacity-20 ${iconColors[color]} bg-current`} />
          <Icon className={`relative h-12 w-12 ${iconColors[color]} group-hover:scale-110 transition-transform duration-300`} />
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-semibold text-white group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
          {description}
        </p>
      </div>
      
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Card>
  );
}
