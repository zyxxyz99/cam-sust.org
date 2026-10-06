"use client";

import React from "react";
import { Wrench, Calendar, Code2, Database } from "lucide-react";
import StarsBackground from "@/components/stars-background";
import ImageSlider from "@/components/image-slider";

const WorkshopPage: React.FC = () => {
	const astrocodeImages = [
		"/images/activities/workshop_1.webp",
		"/images/activities/workshop_2.webp",
		"/images/activities/workshop_3.webp",
	];

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
							<h1 className="text-5xl md:text-8xl font-black mb-6 text-gray-100 tracking-wider">
								Workshop
							</h1>
							<div className="flex items-center justify-center mb-8">
								<div className="h-px bg-gray-600 w-16" />
								<Wrench className="w-5 h-5 text-gray-400 mx-4" />
								<div className="h-px bg-gray-600 w-16" />
							</div>
							<p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light max-w-3xl mx-auto">
								Practical sessions on amateur research projects, astrophysics, observational, and computational astronomy.
							</p>
						</div>
					</div>

					<div className="space-y-16">
						{/* Why Workshop / Mission Section */}
						<section className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-8 md:p-10 border border-gray-800/30">
							<h2 className="text-3xl font-bold mb-6 text-gray-100 text-center">
								Hands-On Astronomy
							</h2>
							<p className="text-lg text-gray-300 leading-relaxed font-light max-w-5xl mx-auto text-justify">
								We believe that what we learn, we must share and our workshops are that kind of event. We arrange workshops to spread practical knowledge in astronomy through hands-on experiences. We focus on amateur research projects, astrophysics, observational, and computational astronomy. These workshops are conducted by our members, alumni, or experts. And usually they are open to students from all backgrounds. With interactive sessions, hackathons, and peer-to-peer collaboration, our workshops are more than just boring classes. They&apos;re a reflection of our mission to share what we&apos;ve learned and inspire others.
							</p>
						</section>

						{/* Workshops List Section */}
						<div>
							<div className="text-center mb-10">
								<h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
									Our Workshop List So Far
								</h2>
								<div className="flex items-center justify-center">
									<div className="h-px bg-gray-700 w-12" />
									<div className="w-2 h-2 rounded-full bg-cyan-400 mx-3 animate-pulse" />
									<div className="h-px bg-gray-700 w-12" />
								</div>
							</div>

							<div className="space-y-12">
								{/* [1] Gaia Data Workshop (2019) */}
								<div className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-8 md:p-10 border border-gray-800/30 transition-all duration-300 hover:border-gray-700/50">
									<div className="flex flex-wrap items-center justify-between gap-4 mb-6">
										<div className="flex items-center gap-3">
											<div className="p-2 rounded-md bg-cyan-950/40 border border-cyan-800/40 text-cyan-400">
												<Database className="w-6 h-6" />
											</div>
											<h3 className="text-2xl md:text-3xl font-bold text-gray-100">
												[1] Gaia Data Workshop
											</h3>
										</div>
										<span className="flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium rounded-full">
											<Calendar className="w-3.5 h-3.5" />
											2019
										</span>
									</div>

									<p className="text-lg text-gray-300 leading-relaxed font-light text-justify">
										Gaia is a space observatory of the European Space Agency, launched in 2013. ESA released the data collected by the satellite twice. The data release includes &quot;positions and magnitudes for 1.1 billion stars using only Gaia data; positions, parallaxes and proper motions for more than 2 million stars&quot; based on a combination of Gaia and Tycho-2 data for those objects in both catalogs. CAM-SUST arranged a workshop on how to use this data. The workshop was held on February 8 and 9, 2019. The instructor was Akib, who took a short course about this from the Max Planck Institute.
									</p>
								</div>

								{/* [2] AstroCode Intensive (2024) */}
								<div className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-8 md:p-10 border border-gray-800/30 transition-all duration-300 hover:border-gray-700/50">
									<div className="flex flex-wrap items-center justify-between gap-4 mb-6">
										<div className="flex items-center gap-3">
											<div className="p-2 rounded-md bg-purple-950/40 border border-purple-800/40 text-purple-400">
												<Code2 className="w-6 h-6" />
											</div>
											<h3 className="text-2xl md:text-3xl font-bold text-gray-100">
												[2] AstroCode Intensive
											</h3>
										</div>
										<span className="flex items-center gap-1.5 px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium rounded-full">
											<Calendar className="w-3.5 h-3.5" />
											2024
										</span>
									</div>

									<p className="text-lg text-gray-300 leading-relaxed font-light mb-8 text-justify">
										The AstroCode Intensive workshop, organized by CAM-SUST, offered a comprehensive and hands-on experience for university students passionate about astronomy and coding.
									</p>

									<div className="grid lg:grid-cols-2 gap-10 items-center">
										<div>
											<p className="text-lg text-gray-300 leading-relaxed font-light text-justify">
												Held over two days at Shahjalal University of Science &amp; Technology, the workshop covers essential topics such as asteroid detection with Astrometrica, Python applications in astronomy, strong gravitational lens modeling using Lenstronomy, and raw astronomical image reduction techniques. Participants also engage in a competitive 48-hour hackathon designed to apply their learning in practical, coding-based challenges. The sessions are led by experienced facilitators from CAM-SUST with research backgrounds in computational and observational astronomy, providing participants with real research insights and practical skill-building opportunities.
											</p>
										</div>

										<div>
											<ImageSlider
												section="astrocode"
												images={astrocodeImages}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkshopPage;
