"use client";
import React from "react";
import { Star } from "lucide-react";
import StarsBackground from "@/components/stars-background";
import ImageSlider from "@/components/image-slider";

const WorldSpaceWeekPage = () => {
  const sectionImages = {
    wsw: [
      "/images/activities/world-space-week_1.webp",
      "/images/activities/world-space-week_2.webp",
      "/images/activities/world-space-week_3.webp",
      "/images/activities/world-space-week_4.webp",
    ],
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 relative pt-24">
      <StarsBackground />

      {/* Hero Section */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 py-20">
          <div className="relative text-center mb-24">
            {/* Subtle glow effect behind title */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-gray-700/5 rounded-full blur-3xl"></div>
            </div>

            {/* Main title */}
            <div className="relative z-10">
              <h1 className="text-6xl md:text-8xl font-black mb-6 text-gray-100 tracking-wider">
                World Space Week
              </h1>

              {/* Subtle line separator */}
              <div className="flex items-center justify-center mb-8">
                <div className="h-px bg-gray-600 w-16"></div>
                <Star className="w-4 h-4 text-gray-500 mx-4 animate-pulse" />
                <div className="h-px bg-gray-600 w-16"></div>
              </div>

              <div className="max-w-3xl mx-auto relative">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                  We celebrate World Space Week every year with the whole world.
                </p>
              </div>

              {/* Floating elements */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gray-500 rounded-full animate-pulse opacity-30"></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gray-400 rounded-full animate-pulse opacity-40 delay-1000"></div>
              <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse opacity-20 delay-2000"></div>
            </div>
          </div>

          {/* What is WSW Section */}
          <div className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-10 mb-20 border border-gray-800/30">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">
              What is WSW?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-5xl font-light">
              World Space Week is an international celebration of science and
              technology declared by The United Nations General Assembly in 1999.
              Since then, it has been celebrated every year from October 4–10,
              commemorating two historic events:
              <br />
              <br />
              <span className="text-gray-200 font-medium">
                October 4, 1957:
              </span>{" "}
              Launch of Sputnik-1, the first human-made Earth satellite.
              <br />
              <br />
              <span className="text-gray-200 font-medium">
                October 10, 1967:
              </span>{" "}
              The historical signing of the &quot;Treaty on Principles Governing the
              Activities of States in the Exploration and Peaceful Uses of Outer
              Space, including the Moon and Other Celestial Bodies&quot;
            </p>
          </div>

          {/* Our WSW Celebration Section */}
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center mb-24">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-gray-100">
                Our WSW Celebration
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                Each year, CAM-SUST celebrates World Space Week (October 4–10)
                by organizing a variety of regular and special events. The week
                typically starts with a Cycle Rally or Road March to create
                public awareness. Throughout the week, we arrange programs such
                as Outreach School Movement, Book Fair, Campaigns, Astro Photo
                Exhibition, Short Film Screening etc. We also arrange some of
                our regular events throughout the week like Study Circle, Project
                Circle, Stargazing and more. Through these events, we aim to
                inspire students and promote awareness of astronomy and space
                among the common mass.
              </p>
            </div>
            <ImageSlider section="wsw" images={sectionImages.wsw} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldSpaceWeekPage;
