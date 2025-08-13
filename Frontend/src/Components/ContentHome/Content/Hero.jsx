import React from "react";
import FeatureCard from "./FeatureCard";
import { Brain, Book, Dumbbell, User } from "lucide-react";

export default function Hero() {
    return (
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-8 min-h-screen">
            <div className="flex flex-col gap-10" >
                <FeatureCard
                    className=" text-white from-green-900 via-green-1200 to-green-950"
                    title="AI Assistant"
                    description="Get intelligent suggestions and insights instantly."
                    icon={Brain}
                    color="ai"
                />
            </div>
            <div>
                <FeatureCard
                 className="bg-purple-900/10 text-white"
                    title="Journal"
                    description="Keep track of your thoughts and experiences."
                    icon={Book}
                    color="journal"
                />
            </div>
            <div className="flex flex-col gap-10">
                <FeatureCard
                 className="bg-purple-900/10 text-white"
                    title="Exercise"
                    description="Plan and monitor your workouts effectively."
                    icon={Dumbbell}
                    color="exercise"
                />
            </div>
            <div>
                <FeatureCard
                 className="bg-purple-900/10 text-white"
                    title="Personal"
                    description="Customize and manage your profile with ease."
                    icon={User}
                    color="personal"
                />
            </div>
        </div>
    );
}


