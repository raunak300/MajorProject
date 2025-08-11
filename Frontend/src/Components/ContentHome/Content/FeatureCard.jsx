import React from "react";
import { Card } from "@/Components/ui/Card"; // adjust path if needed

// Props: title, description, icon (Lucide icon component), color, className
export default function FeatureCard({ title, description, icon: Icon, color, className = "" }) {
  const colorVariants = {
    ai: "from-feature-ai/20 to-feature-ai/5 border-feature-ai/30 hover:shadow-[0_4px_20px_hsl(var(--feature-ai)/0.3)]",
    journal: "from-feature-journal/20 to-feature-journal/5 border-feature-journal/30 hover:shadow-[0_4px_20px_hsl(var(--feature-journal)/0.3)]",
    exercise: "from-feature-exercise/20 to-feature-exercise/5 border-feature-exercise/30 hover:shadow-[0_4px_20px_hsl(var(--feature-exercise)/0.3)]",
    personal: "from-feature-personal/20 to-feature-personal/5 border-feature-personal/30 hover:shadow-[0_4px_20px_hsl(var(--feature-personal)/0.3)]"
  };

  const iconColors = {
    ai: "text-feature-ai",
    journal: "text-feature-journal", 
    exercise: "text-feature-exercise",
    personal: "text-feature-personal"
  };

  return (
    <Card 
      className={`
        group relative overflow-hidden cursor-pointer
        bg-gradient-to-br ${colorVariants[color]}
        hover:scale-105 transition-all duration-500 ease-out
        ${className}
      `}
    >
      <div className="p-8 h-full flex flex-col items-center justify-center text-center space-y-4">
        {/* Icon with glow effect */}
        <div className="relative">
          <div className={`absolute inset-0 rounded-full blur-xl opacity-30 ${iconColors[color]} bg-current`} />
          <Icon className={`relative h-12 w-12 ${iconColors[color]} group-hover:scale-110 transition-transform duration-300`} />
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Card>
  );
}
