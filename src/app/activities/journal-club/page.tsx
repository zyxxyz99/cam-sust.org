"use client";
import React from "react";
import { Presentation } from "lucide-react";
import StarsBackground from "@/components/stars-background";
import ImageSlider from "@/components/image-slider";

const sectionImages = [
	"/images/activities/journal-club_1.webp",
];

const JournalClubPage: React.FC = () => {
	return (
		<div className="min-h-screen bg-black text-gray-200 relative pt-24">
			<StarsBackground />

			<div className="relative z-10">
				<div className="container mx-auto px-6 py-20">
					<div className="relative text-center mb-20">
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="w-80 h-80 bg-gray-700/5 rounded-full blur-3xl"></div>
						</div>

						<div className="relative z-10">
							<h1 className="text-5xl md:text-6xl font-black mb-4 text-gray-100 tracking-wider">
								Journal Club
							</h1>

							<div className="flex items-center justify-center mb-6">
								<div className="h-px bg-gray-600 w-12"></div>
								<Presentation className="w-4 h-4 text-gray-500 mx-3" />
								<div className="h-px bg-gray-600 w-12"></div>
							</div>

							<p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light max-w-3xl mx-auto">
								Regular Journal Talks to discuss and analyze recent astronomical research papers and publications.
							</p>
						</div>
					</div>

					<div className="max-w-5xl mx-auto space-y-12">
						{/* Why Journal Club Section */}
						<section className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-8 md:p-10 border border-gray-800/30">
							<h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-100 text-center">
								Why Journal Club?
							</h3>
							<div className="space-y-4 text-lg text-gray-300 leading-relaxed font-light">
								<p>
									Our CAM people are eager to do research. And we mention the word “research” countless times in a day! But if we ask: How many research papers have you actually read in total?
								</p>
								<p>
									The answer for most people is: very few. Some have not read even one.
								</p>
								<p>
									However, before starting any research work, it is essential to have an understanding of research papers. Therefore, one of the main objectives of creating our Journal Club is to help future researchers build the habit of reading scientific papers.
								</p>
							</div>
						</section>

						{/* Other Motives Section */}
						<section className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-8 md:p-10 border border-gray-800/30">
							<h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-100 text-center">
								Other Motives
							</h3>

							<div className="space-y-8">
								<div>
									<h4 className="text-xl font-medium text-gray-200 mb-3 italic">
										Staying Updated with Recent Developments in Astronomy
									</h4>
									<div className="space-y-4 text-lg text-gray-300 leading-relaxed font-light">
										<p>
											Most new discoveries and updates in astronomy first appear in research papers. Later, these are simplified and turned into pop-science articles that we see in news or social media.
										</p>
										<p>
											But we want to be researchers, and pop science alone does not satisfy us. Reading authentic information from authentic sources is in our very nature.
										</p>
										<p>
											Before attending any Journal Talk sessions, our members do exactly that. They read the paper that the presenter will be discussing.
										</p>
									</div>
								</div>

								<div className="pt-6 border-t border-gray-800/50">
									<h4 className="text-xl font-medium text-gray-200 mb-3 italic">
										Learning About Jargon
									</h4>
									<div className="space-y-4 text-lg text-gray-300 leading-relaxed font-light">
										<p>
											Jargon refers to specialized terms used within a specific field by experts in that field.
										</p>
										<p>
											Examples of astronomical jargon include: “Accretion Disk,” “AGN (Active Galactic Nucleus),” “Redshifting,” etc.
										</p>
										<p>
											For newcomers, these terms can be difficult to understand, and the presence of unfamiliar jargon often makes reading papers challenging.
										</p>
										<p>
											So, we are trying to make our members familiar with these commonly used jargon.
										</p>
									</div>
								</div>
							</div>
						</section>

						{/* Images of first session */}
						<section className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-8 md:p-10 border border-gray-800/30 shadow-sm">
							<h4 className="text-center text-2xl md:text-3xl font-bold text-gray-100 mb-8">
								Images of our first journal talk session- A Jupiter-mass companion to a solar-type star.
							</h4>

							<div className="max-w-3xl mx-auto">
								<ImageSlider
									section="journal-photos"
									images={sectionImages}
									autoSlide={false}
									imageClassName="h-auto max-h-[450px] aspect-[16/10] object-cover"
								/>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JournalClubPage;
