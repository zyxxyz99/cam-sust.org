"use client";

import React from "react";
import Link from "next/link";
import { FileSearch, ArrowRight } from "lucide-react";
import StarsBackground from "@/components/stars-background";
import ImageSlider from "@/components/image-slider";

const ResearchProjectPage: React.FC = () => {
	const researchImages = [
		"/images/about/research1.webp",
		"/images/about/research2.webp",
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
								Research &amp; Project
							</h1>
							<div className="flex items-center justify-center mb-8">
								<div className="h-px bg-gray-600 w-16" />
								<FileSearch className="w-5 h-5 text-gray-400 mx-4" />
								<div className="h-px bg-gray-600 w-16" />
							</div>
							<p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light max-w-3xl mx-auto">
								Our initiative for beginner to advanced research projects on various astronomical topics.
							</p>
						</div>
					</div>

					{/* Main Content Section */}
					<div className="max-w-6xl mx-auto">
						<section className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-8 md:p-10 border border-gray-800/30">
							<div className="grid lg:grid-cols-2 gap-12 items-center">
								<div className="space-y-6">
									<h2 className="text-3xl font-bold text-gray-100">
										About Research &amp; Project
									</h2>
									<p className="text-lg text-gray-300 leading-relaxed font-light text-justify">
										Every year from the Research and Project sector, we launch some research based projects to teach members on how to carry out a research, how to manage references and how to write a paper with proper styles. We took the courage to do some research projects ranging from beginner to advanced levels. Because, our passion for astronomy has always driven us to contribute to the scientific community.
									</p>
									<p className="text-lg text-gray-300 leading-relaxed font-light text-justify">
										These research projects represent the first steps of our members into the world of astronomical research and scientific rigor. All this research works are led by our members.
									</p>
									<div className="pt-2">
										<Link
											href="/research/research_papers"
											className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 rounded-lg text-sm font-medium transition-all"
										>
											<span>View Research Papers</span>
											<ArrowRight className="w-4 h-4" />
										</Link>
									</div>
								</div>

								<div>
									<ImageSlider
										section="research-project"
										images={researchImages}
									/>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResearchProjectPage;
