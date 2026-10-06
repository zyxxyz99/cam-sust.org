"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Sparkles, Compass, Star } from "lucide-react";
import StarsBackground from "@/components/stars-background";

export default function Blog1Page() {
  return (
    <div className="min-h-screen bg-[#010d29] text-gray-200 relative pt-24 overflow-hidden">
      <StarsBackground />

      <div className="relative z-10">
        <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
          {/* Back button */}
          <div className="mb-8">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blogs</span>
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-10 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-amber-300 font-medium text-sm md:text-base">
                Observational Astronomy
              </span>
              <span className="text-gray-500">•</span>
              <span className="flex items-center gap-1.5 text-xs md:text-sm text-gray-400">
                <Calendar className="w-3.5 h-3.5 text-gray-400" />
                06-10-2026
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-xs md:text-sm text-amber-300/90 font-medium">
                By Sabrina Rahman
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-xs md:text-sm text-gray-400">
                Space Week Special
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-amber-400 leading-tight">
              A Story Woven into the October Sky
            </h1>
          </header>

          {/* Cover Hero Banner */}
          <div className="mb-12 rounded-2xl overflow-hidden border border-[#1b2b52] bg-[#010d29] shadow-2xl">
            <img
              src="/images/blogs/blog_1/thumbnail.webp"
              alt="The Ancient Stories in the October Sky"
              className="w-full h-auto object-contain mx-auto"
            />
          </div>

          {/* Main Article Content */}
          <article className="space-y-12 text-base md:text-lg text-gray-300 leading-relaxed font-light">
            {/* Section 1: Imagination */}
            <section className="space-y-6">
              <p className="first-letter:text-5xl first-letter:font-black first-letter:text-amber-400 first-letter:mr-3 first-letter:float-left">
                One of the most wondrous traits of humankind is our imagination. It has given birth not only to groundbreaking discoveries and inventions, but also to legendary tales that have been passed down from generation to generation for thousands of years.
              </p>
              <p>
                Just think about it: curious human minds, visionaries of their time, looked up at the night sky and saw more than countless twinkling points of light. They began connecting those sparkly dots, stars, in their imagination. A particular arrangement of stars could resemble a mighty hunter, a great bear, a scorpion, or even a mythical creature. The ancient Greeks, for example, imagined the stars of <strong className="text-white font-medium">Orion</strong> as a legendary hunter, while the stars of <strong className="text-white font-medium">Ursa Major</strong> were associated with a great bear. Across different civilizations, people looked at the same sky and created their own patterns, characters, and stories.
              </p>
            </section>

            {/* Section 2: What is a Constellation */}
            <section className="p-8 rounded-2xl bg-[#04163d]/60 border border-[#1b2d5a] backdrop-blur-sm space-y-4">
              <div className="flex items-center gap-2.5 text-cyan-300">
                <Sparkles className="w-5 h-5 text-amber-300" />
                <h2 className="text-2xl font-bold text-gray-100">
                  What is a constellation?
                </h2>
              </div>
              <p className="text-gray-200 font-normal">
                A constellation is a recognized region of the night sky containing a particular group or pattern of stars.
              </p>
              <p>
                The constellations we see at night aren&apos;t constant. As Earth travels around the Sun, the side facing away from the Sun points toward different regions of the celestial sphere, causing the constellations visible in our night sky to gradually change throughout the year.
              </p>
              <p>
                For example, <strong className="text-white font-medium">Orion</strong> is prominent in the evening sky during the winter months, while <strong className="text-white font-medium">Scorpius</strong> and <strong className="text-white font-medium">Sagittarius</strong> become much more prominent during summer evenings in Bangladesh. So, as we celebrate Space Week, let&apos;s turn our eyes to the <span className="text-amber-400 font-medium">October night sky</span> and see which constellations—and the stories woven around them—we can find above Bangladesh this time of year.
              </p>
            </section>

            {/* Section 3: The October Transition */}
            <section className="space-y-6">
              <p>
                October is especially interesting because the sky is transitioning from the summer constellations toward the winter constellations. As October arrives, the night sky begins to change its appearance. Constellations that dominate the summer sky slowly move toward the western horizon, while familiar winter constellations begin to rise in the east.
              </p>
              <p>
                For stargazers, October offers a beautiful transition between two celestial seasons, with constellations such as <span className="text-gray-100 font-medium">Cassiopeia, Andromeda, Perseus, Pegasus, Taurus, and Orion</span> offering plenty to explore.
              </p>

              {/* Poetic Quote Box */}
              <div className="text-center py-6 px-4 bg-gradient-to-r from-[#04163d] via-[#081e52] to-[#04163d] rounded-xl border border-[#1b2d5a] my-8">
                <p className="text-xl md:text-2xl font-serif italic text-amber-300 mb-2">
                  &ldquo;Look up at the October night sky and you might see more than stars&hellip;&rdquo;
                </p>
                <p className="text-base text-gray-200">
                  You might see a queen, a princess, and a hero—frozen forever among the constellations.
                </p>
              </div>

              <p>
                Tonight, we journey into one of the most fascinating tales written across the stars: the story of <strong className="text-white font-medium">Cassiopeia</strong>, the proud queen; <strong className="text-white font-medium">Andromeda</strong>, her daughter; and <strong className="text-white font-medium">Perseus</strong>, the brave hero. Their ancient story connects several constellations that we can still find in the night sky today.
              </p>
            </section>

            {/* Section 4: The Celestial Legend */}
            <section className="space-y-10 pt-4">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-400 border-b border-[#1b2d5a] pb-3">
                The Celestial Legend
              </h2>

              {/* Cassiopeia */}
              <div className="flex flex-col items-center text-center space-y-4 py-4">
                <p className="text-xl font-medium text-gray-200">Our story begins with</p>
                <div className="max-w-[300px] sm:max-w-[340px] rounded-2xl overflow-hidden border border-[#1b2d5a] shadow-2xl bg-[#010d29] p-1 transition-transform duration-300 hover:scale-[1.02]">
                  <img
                    src="/images/blogs/blog_1/cassiopeia.webp"
                    alt="Cassiopeia on her throne with constellation overlay"
                    className="w-full h-auto object-contain rounded-t-xl"
                  />
                  <div className="py-2.5 text-center bg-[#04163d]/80 rounded-b-xl border-t border-[#1b2d5a]/60">
                    <span className="text-sm md:text-base font-bold text-amber-400 tracking-wider uppercase">
                      Cassiopeia
                    </span>
                  </div>
                </div>
                <p className="italic text-gray-400">
                  —the queen whose pride set the tale in motion.
                </p>
              </div>

              {/* Andromeda */}
              <div className="grid md:grid-cols-2 gap-8 items-center pt-4">
                <div className="space-y-4">
                  <p>
                    Long ago, in the ancient kingdom of Ethiopia, there lived a queen named <strong>Cassiopeia</strong>. She was beautiful, but she was also known for her pride.
                  </p>
                  <p>
                    One day, Cassiopeia proudly declared that she and her daughter, <strong>Andromeda</strong>, the princess, were more beautiful than the Nereids, the sea nymphs. Her words angered Poseidon, god of the sea.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="max-w-[280px] sm:max-w-[320px] rounded-2xl overflow-hidden border border-[#1b2d5a] shadow-2xl bg-[#010d29] p-1 transition-transform duration-300 hover:scale-[1.02]">
                    <img
                      src="/images/blogs/blog_1/andromeda.webp"
                      alt="Princess Andromeda chained with constellation overlay"
                      className="w-full h-auto object-contain rounded-t-xl"
                    />
                    <div className="py-2.5 text-center bg-[#04163d]/80 rounded-b-xl border-t border-[#1b2d5a]/60">
                      <span className="text-sm md:text-base font-bold text-amber-400 tracking-wider uppercase">
                        Andromeda
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cetus */}
              <div className="grid md:grid-cols-2 gap-8 items-center pt-6">
                <div className="flex justify-center order-2 md:order-1">
                  <div className="max-w-[280px] sm:max-w-[320px] rounded-2xl overflow-hidden border border-[#1b2d5a] shadow-2xl bg-[#010d29] p-1 transition-transform duration-300 hover:scale-[1.02]">
                    <img
                      src="/images/blogs/blog_1/cetus.webp"
                      alt="Cetus the sea monster with constellation overlay"
                      className="w-full h-auto object-contain rounded-t-xl"
                    />
                    <div className="py-2.5 text-center bg-[#04163d]/80 rounded-b-xl border-t border-[#1b2d5a]/60">
                      <span className="text-sm md:text-base font-bold text-amber-400 tracking-wider uppercase">
                        Cetus
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 order-1 md:order-2">
                  <p>
                    As punishment, Poseidon sent a terrible sea monster, <strong>Cetus</strong>, to threaten the kingdom. To save her people, Andromeda was chained to a rock as a sacrifice to the monster.
                  </p>
                </div>
              </div>

              {/* Perseus Arrives */}
              <div className="flex flex-col items-center text-center space-y-4 pt-6">
                <p className="text-lg text-gray-300">Just as Cetus approached,</p>
                <p className="text-2xl md:text-3xl font-serif italic text-amber-300 font-bold">
                  a hero named Perseus arrived.
                </p>
                <div className="max-w-[260px] sm:max-w-[300px] rounded-2xl overflow-hidden border border-[#1b2d5a] shadow-2xl bg-[#010d29] p-1 transition-transform duration-300 hover:scale-[1.02]">
                  <img
                    src="/images/blogs/blog_1/perseus.webp"
                    alt="Perseus the hero with sword, shield, and constellation overlay"
                    className="w-full h-auto object-contain rounded-t-xl"
                  />
                  <div className="py-2.5 text-center bg-[#04163d]/80 rounded-b-xl border-t border-[#1b2d5a]/60">
                    <span className="text-sm md:text-base font-bold text-amber-400 tracking-wider uppercase">
                      Perseus
                    </span>
                  </div>
                </div>
                <div className="max-w-2xl text-left space-y-4 pt-4">
                  <p>
                    He had been on a quest and carried the head of Medusa, whose gaze could turn anyone to stone. Using it, Perseus defeated the monster and rescued Andromeda.
                  </p>
                  <p>
                    The two later married, while Cassiopeia, Andromeda, Perseus, and Cetus were placed among the stars. Their story lives on in the night sky, where their constellations can still be found today.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[#04163d]/80 border border-[#1b2d5a] text-center italic text-gray-200">
                So, the next time you spot Cassiopeia&apos;s familiar <strong className="text-amber-400 text-lg">W</strong> in the October sky, remember you may be looking at the beginning of an ancient story written in the stars.
              </div>
            </section>

            {/* Section 5: A Quick Guide to Find Them */}
            <section className="space-y-8 pt-4">
              <div className="flex items-center gap-2.5 text-amber-400 border-b border-[#1b2d5a] pb-3">
                <Compass className="w-6 h-6" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-100">
                  A Quick Guide to Find Them
                </h2>
              </div>

              <p>
                After learning the stories behind these constellations, you might find yourself wanting to look up at the night sky and find them for yourself. The good news is, it&apos;s easier than you might think!
              </p>
              <p>
                Head outside after sunset and start by facing <strong className="text-white font-medium">north or northeast</strong>. Look fairly high above the horizon and let your eyes adjust to the darkness.
              </p>

              {/* Part 1: Cassiopeia Sky Chart on Left, Cassiopeia & Perseus on Right */}
              <div className="grid md:grid-cols-2 gap-8 items-center pt-2">
                <div className="flex justify-center">
                  <div className="max-w-[320px] rounded-2xl overflow-hidden border border-[#1b2d5a] shadow-2xl bg-[#010d29] p-2 text-center">
                    <img
                      src="/images/blogs/blog_1/cassiopeia_chart.webp"
                      alt="Plate XXVII - Constellation Cassiopeia (W) Sky Chart"
                      className="w-full h-auto object-contain rounded-xl"
                    />
                    <span className="block pt-2 text-xs text-amber-300/80 font-medium">
                      Plate XXVII — Constellation Cassiopeia (W)
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#04163d]/60 border border-[#1b2d5a] space-y-1.5">
                    <h3 className="text-amber-400 font-bold flex items-center gap-2">
                      <Star className="w-4 h-4" /> Cassiopeia
                    </h3>
                    <p className="text-sm text-gray-300">
                      Look northeast along the Milky Way for its bright <strong>W-shaped</strong> pattern. It&apos;s your easiest starting point.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#04163d]/60 border border-[#1b2d5a] space-y-1.5">
                    <h3 className="text-amber-400 font-bold flex items-center gap-2">
                      <Star className="w-4 h-4" /> Perseus
                    </h3>
                    <p className="text-sm text-gray-300">
                      From Cassiopeia, look below and slightly east to find Perseus. <em>&beta; Persei</em>, <strong>Algol</strong>, the &ldquo;Demon Star,&rdquo; is hiding among its stars. It represents the eye of Medusa.
                    </p>
                  </div>
                </div>
              </div>

              {/* Part 2: Andromeda, Cepheus & Cetus Text Boxes on Left, Cetus Chart on Right */}
              <div className="grid md:grid-cols-2 gap-8 items-center pt-6">
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#04163d]/60 border border-[#1b2d5a] space-y-1.5">
                    <h3 className="text-amber-400 font-bold flex items-center gap-2">
                      <Star className="w-4 h-4" /> Andromeda
                    </h3>
                    <p className="text-sm text-gray-300">
                      Look east and southeast from Cassiopeia, near the Great Square of Pegasus. It&apos;s a graceful chain of stars.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#04163d]/60 border border-[#1b2d5a] space-y-1.5">
                    <h3 className="text-amber-400 font-bold flex items-center gap-2">
                      <Star className="w-4 h-4" /> Cepheus
                    </h3>
                    <p className="text-sm text-gray-300">
                      Look above and slightly west of Cassiopeia for its little <strong>house-shaped</strong> pattern.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#04163d]/60 border border-[#1b2d5a] space-y-1.5">
                    <h3 className="text-amber-400 font-bold flex items-center gap-2">
                      <Star className="w-4 h-4" /> Cetus
                    </h3>
                    <p className="text-sm text-gray-300">
                      Look lower toward the southeast, stretching beneath Andromeda and Pisces.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="max-w-[320px] rounded-2xl overflow-hidden border border-[#1b2d5a] shadow-2xl bg-[#010d29] p-2 text-center">
                    <img
                      src="/images/blogs/blog_1/cetus_chart.webp"
                      alt="Plate XXVIII - Constellation Cetus (Sea Monster) Sky Chart"
                      className="w-full h-auto object-contain rounded-xl"
                    />
                    <span className="block pt-2 text-xs text-amber-300/80 font-medium">
                      Plate XXVIII — Constellation Cetus (Sea Monster)
                    </span>
                  </div>
                </div>
              </div>

              {/* Tip Box */}
              <div className="p-5 rounded-xl bg-[#031d4d]/50 border border-[#1b3670] text-sm text-cyan-200">
                <span className="font-semibold text-amber-300">Tip:</span> A simple star map or astronomy app like <strong className="text-white">Stellarium</strong> can make these directions much easier to follow, especially if you&apos;re new to stargazing.
              </div>
            </section>

            {/* Author Information */}
            <div className="pt-8 border-t border-[#1b2d5a]/80">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#04163d]/80 border border-[#1b2d5a] backdrop-blur-sm max-w-md shadow-xl">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold text-xl shrink-0 shadow-lg">
                  S
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block">
                    Author
                  </span>
                  <h4 className="text-lg md:text-xl font-bold text-white">
                    Sabrina Rahman
                  </h4>
                  <p className="text-sm text-gray-300">
                    Dept. of Computer Science and Engineering, SUST
                  </p>
                  <p className="text-xs text-gray-400">
                    Session 2025-26
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
