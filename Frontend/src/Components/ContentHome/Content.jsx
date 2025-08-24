import React from "react";
import Hero from "./Content/Hero";
import ClickBar from "../ClickBar";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";


export default function Content() {
  return (
    <main className="flex flex-col text-white w-full">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-22 px-6 bg-gradient-to-b from-purple-900/40 to-zinc-850">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold  mt-2.5">
            Express Yourself <br />
            Anonymously with <br />
            <span className="block text-purple-300 mt-3 typing"> UNMUTE!</span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl text-gray-300 leading-relaxed">
            A safe space for mental wellness, anonymous journaling, and personal
            growth with AI-powered insights to support your emotional well-being.
          </p>
          <button className="mt-8 text-lg font-medium text-white rounded-lg px-6 py-3 bg-purple-700/70 hover:bg-purple-600 transition-colors">
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 px-6 bg-zinc-800">
        <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
          <div className="flex items-center gap-3">
            <Avatar className="shadow-lg bg-purple-900/40">
              <AvatarImage src="/shield.png" alt="shield" />
              <AvatarFallback>Anon</AvatarFallback>
            </Avatar>
            <span className="text-lg">100% Anonymous</span>
          </div>
          <div className="flex items-center gap-3">
            <Avatar className="shadow-lg bg-purple-900/40">
              <AvatarImage src="/heart-rate.png" alt="health" />
              <AvatarFallback>MH</AvatarFallback>
            </Avatar>
            <span className="text-lg">Mental Health Focused</span>
          </div>
          <div className="flex items-center gap-3">
            <Avatar className="shadow-lg bg-purple-900/40">
              <AvatarImage src="/people.png" alt="community" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <span className="text-lg">Self Community</span>
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-zinc-900 to-purple-900/30 text-center items-center  ">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">
          Discover your Path to <span className="text-purple-300 font-comicsans">Wellness</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-4">
          Explore tools, resources, and a supportive community that help you
          express yourself and grow personally.
        </p>
        <Hero />
      </section>

    </main>
  );
}
