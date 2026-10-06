"use client";

import React from "react";
import { BookOpen } from "lucide-react";
import StarsBackground from "@/components/stars-background";
import ImageSlider from "@/components/image-slider";

const StudyCirclePage: React.FC = () => {
	const studyCircleImages = [
		"/images/activities/study-circle_1.webp",
		"/images/activities/study-circle_2.webp",
		"/images/activities/study-circle_3.webp",
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
								Study Circle
							</h1>
							<div className="flex items-center justify-center mb-8">
								<div className="h-px bg-gray-600 w-16" />
								<BookOpen className="w-5 h-5 text-gray-400 mx-4" />
								<div className="h-px bg-gray-600 w-16" />
							</div>
							<p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light max-w-3xl mx-auto">
								Our regular program where members discuss various astronomy related topics and share knowledge.
							</p>
						</div>
					</div>

					{/* Main Content Section */}
					<div className="max-w-6xl mx-auto">
						<section className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-8 md:p-10 border border-gray-800/30">
							<div className="grid lg:grid-cols-2 gap-12 items-center">
								<div>
									<h2 className="text-3xl font-bold mb-6 text-gray-100">
										About Study Circle
									</h2>
									<p className="text-lg text-gray-300 leading-relaxed font-light text-justify">
										Regular study circles on a variety of astronomy-related topics are organized by CAM-SUST. A presenter oversees these study circles as their moderator. Members can then ask questions and participate in conversations to further their comprehension after the speaker offers their knowledge and skills on the selected subject. The members of these study circles have a fantastic opportunity to deepen their understanding of and enthusiasm for astronomy. These study circles frequently meet in person as well as online.
									</p>
								</div>

								<div>
									<ImageSlider
										section="study-circle"
										images={studyCircleImages}
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

export default StudyCirclePage;
