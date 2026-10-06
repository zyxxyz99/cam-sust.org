"use client";
import React from "react";
import { Star, Rocket } from "lucide-react";
import StarsBackground from "@/components/stars-background";
import ImageSlider from "@/components/image-slider";

const sectionImages = {
  comps: [
    "/images/activities/astro-carnival_1.webp",
    "/images/activities/astro-carnival_2.webp",
  ],
  side: [
    "/images/activities/astro-carnival_3.webp",
  ],
};

const CarnivalPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200 relative pt-24">
      <StarsBackground />

      <div className="relative z-10">
        <div className="container mx-auto px-6 py-20">
          <div className="relative text-center mb-16">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 bg-gray-700/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-100 tracking-wider">
                Astro Carnival
              </h1>

              <div className="flex items-center justify-center mb-6">
                <div className="h-px bg-gray-600 w-12"></div>
                <Star className="w-4 h-4 text-gray-500 mx-4 animate-pulse" />
                <div className="h-px bg-gray-600 w-12"></div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-10 mb-12 border border-gray-800/30">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-100">
              <Rocket className="inline-block w-7 h-7 mr-3 text-gray-300" />
              What is an astro carnival?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed text-center max-w-5xl mx-auto font-light">
              We organize an Astro Carnival once a year for all school, college, madrasa and university students across Bangladesh. The philosophy behind this is promoting astronomy and making it accessible to everyone, especially to the young students. Our outreach school program, Cosmania, is designed to inspire students and popularize astronomy through fun activities and competitions. But we know it’s physically impossible to visit every school and college across the country. That is why we arrange the SUST Astro Carnival where students from any institution throughout the country can participate.
            </p>
          </div>

          <div className="space-y-16">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center space-y-6 lg:space-y-0">
              <div>
                <h3 className="text-3xl font-bold mb-6 flex items-center text-gray-100">
                  Competitions & Activities
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  Our Astro Carnival features multiple competitive & interactive segments. Students can take part in many competitions according to their level (School, College, University). There are competitions like: Neuron Teaser, Brainstorming Quiz, Astro Olympiad, Physics Olympiad, Poster Presentation, Space-themed Art Competitions, Stage Quiz, Astro Debate. Also there are competitions with outdoor excitement like Paper Plane Competition, Water Rocket Competition.
                </p>
              </div>

              <ImageSlider section="comps" images={sectionImages.comps} />
            </div>

            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center space-y-6 lg:space-y-0">
              <div className="lg:order-2">
                <h3 className="text-3xl font-bold mb-6 flex items-center text-gray-100">
                  Events & Shows
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  Alongside competitions, we host Cycle Rally and interactive sessions like CAM-Talk, Seminar on Astronomy & Astrophysics. There are also Documentary Shows, VR Shows & Stargazing in the evening.
                </p>
              </div>

              <div className="lg:order-1">
                <ImageSlider section="side" images={sectionImages.side} />
              </div>
            </div>

            <div className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-10 mt-6 border border-gray-800/30">
              <p className="text-lg text-gray-300 leading-relaxed font-light max-w-4xl">
                Through the Astro Carnival, we extend our mission of Cosmania to a much larger audience. Each year, hundreds of students participate in SUST Astro Carnival. Their participation in the carnival makes our work worthwhile. Their curious eyes tell the rest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarnivalPage;
