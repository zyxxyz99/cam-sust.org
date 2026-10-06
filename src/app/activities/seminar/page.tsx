"use client";

import StarsBackground from "@/components/stars-background";

const SeminarPage = () => {

	return (
		<div className="min-h-screen bg-black text-gray-200 relative pt-24">
			<StarsBackground />

			<div className="relative z-10">
				<div className="container mx-auto px-6 py-20">
					<div className="relative text-center mb-20">
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="w-96 h-96 bg-gray-700/5 rounded-full blur-3xl" />
						</div>

						<div className="relative z-10 max-w-4xl mx-auto">
							<h1 className="text-6xl md:text-8xl font-black mb-6 text-gray-100 tracking-wider">
								Seminar
							</h1>
							<div className="flex items-center justify-center mb-8">
								<div className="h-px bg-gray-600 w-16" />
								<div className="w-2 h-2 rounded-full bg-gray-400 mx-4 animate-pulse" />
								<div className="h-px bg-gray-600 w-16" />
							</div>
							<p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light max-w-3xl mx-auto">
								Academic seminars on various astronomical topics featuring professors, researchers and scholars.
							</p>
						</div>
					</div>

					<div className="space-y-8">
						<div className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-10 border border-gray-800/30">
							<h2 className="text-3xl font-bold mb-6 text-gray-100 text-center">
								Why Seminar?
							</h2>
							<p className="text-lg text-gray-300 leading-relaxed font-light max-w-5xl mx-auto text-justify">
								Seminars are one of the earliest activities of CAM-SUST. We arrange seminars on astronomy and its related field to inspire and enlighten our members. Because, our Study Circles are conducted by our members and we all are students. So, naturally we have limitations. To enrich our knowledge we approach renowned scholars and professors for our seminar. They present deeper insights on any topic, stimulate new thoughts, and inspire us. By this way, we bridge the gap between our self learning and expert knowledge.
							</p>
						</div>

						<div className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-10 border border-gray-800/30">
							<h2 className="text-3xl font-bold mb-6 text-gray-100 text-center">
								Medium
							</h2>
							<p className="text-lg text-gray-300 leading-relaxed font-light max-w-5xl mx-auto text-justify">
								Our seminars can take place both on-campus and off-campus, in offline or online formats. Though we prefer in-person events for their impact and engagement. Unlike CAM-Talks, which are often presentation based, seminars are interactive discussions between speakers and audiences.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SeminarPage;
