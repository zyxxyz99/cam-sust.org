"use client";

import React from "react";
import { Sun, Snowflake, ExternalLink } from "lucide-react";
import StarsBackground from "@/components/stars-background";
import ImageSlider from "@/components/image-slider";

const summerSchoolImages = [
	"/images/activities/summer-winter-school_1.webp",
	"/images/activities/summer-winter-school_2.webp",
	"/images/activities/summer-winter-school_3.webp",
];

const SummerWinterSchoolPage: React.FC = () => {
	return (
		<div className="min-h-screen bg-black text-gray-200 relative pt-24 overflow-hidden">
			<StarsBackground />

			<div className="relative z-10">
				<div className="container mx-auto px-6 py-16 md:py-20">
					{/* Header Section */}
					<div className="relative text-center mb-16 md:mb-20">
						<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
							<div className="w-96 h-96 bg-gray-700/5 rounded-full blur-3xl" />
						</div>

						<div className="relative z-10 max-w-4xl mx-auto">
							<h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-gray-100 tracking-wider">
								Summer School
							</h1>
							<div className="flex items-center justify-center mb-8">
								<div className="h-px bg-gray-600 w-16" />
								<div className="flex items-center mx-4 gap-2">
									<Sun className="w-5 h-5 text-amber-400" />
									<Snowflake className="w-5 h-5 text-blue-300" />
								</div>
								<div className="h-px bg-gray-600 w-16" />
							</div>
							<p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light max-w-3xl mx-auto">
								Week-long lectures and hands-on sessions by experts focusing on astronomy and astrophysics.
							</p>
						</div>
					</div>

					{/* Main Content Section */}
					<div className="max-w-6xl mx-auto">
						<section className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-gray-800/30">
							<h2 className="text-3xl font-bold mb-8 text-center text-gray-100">
								CAM-SUST Summer School
							</h2>

							<div className="grid lg:grid-cols-2 gap-12 items-center">
								<div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light text-justify">
									<p>
										The CAM-SUST Summer School is a new addition to our organization. Through this program, we believe CAM-SUST can increase its connections with the national and international astronomy community. The main motivation of this program was to develop research skills and encourage interest in the field among young aspiring students interested in astronomy and astrophysics.
									</p>

									<p>
										As part of our continued efforts, we successfully organized a two-week hybrid summer school held from September 3–12, 2025, engaging motivated undergraduate students in Physics, Astronomy, and related fields from across Bangladesh.{" "}
										<span className="font-semibold text-gray-100">
											One of the most exciting aspects of this program is that it will be the first Astronomy &amp; Astrophysics based summer school in Bangladesh.
										</span>
									</p>
								</div>

								<div>
									<ImageSlider
										section="summer-school"
										images={summerSchoolImages}
									/>
								</div>
							</div>

							{/* Website CTA */}
							<div className="mt-10 pt-8 border-t border-gray-800/50 flex justify-center">
								<a
									href="https://summerschool.cam-sust.org/"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30 text-amber-300 border border-amber-500/40 rounded-lg text-base font-medium transition-all hover:scale-105 shadow-lg shadow-black/40"
								>
									<span>Visit Summer School Website</span>
									<ExternalLink className="w-4 h-4" />
								</a>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SummerWinterSchoolPage;
