"use client";

import ImageSlider from "@/components/image-slider";
import StarsBackground from "@/components/stars-background";

const CamTalkPage = () => {
	const sectionImages = {
		intro: [
			"/images/activities/cam-talk_1.webp",
			"/images/activities/cam-talk_2.webp",
		],
	};

	return (
		<div className="min-h-screen bg-black text-gray-200 relative pt-24 overflow-hidden">
			<StarsBackground />

			<div className="relative z-10">
				<div className="container mx-auto px-6 py-16 md:py-20">
					<div className="relative text-center mb-20">
						<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
							<div className="w-96 h-96 bg-gray-700/5 rounded-full blur-3xl" />
						</div>

						<div className="relative z-10 max-w-4xl mx-auto">
							<h1 className="text-5xl md:text-8xl font-black mb-6 text-gray-100 tracking-wider">
								<span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default">
									C
								</span>
								<span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default delay-75">
									A
								</span>
								<span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default delay-150">
									M
								</span>
								<span className="inline-block px-2 md:px-4">&nbsp;</span>
								<span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default delay-300">
									T
								</span>
								<span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default delay-375">
									A
								</span>
								<span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default delay-450">
									L
								</span>
								<span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default delay-525">
									K
								</span>
							</h1>

							<div className="flex items-center justify-center mb-8">
								<div className="h-px bg-gray-600 w-16" />
								<div className="w-2 h-2 rounded-full bg-gray-400 mx-4 animate-pulse" />
								<div className="h-px bg-gray-600 w-16" />
							</div>

							<p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light max-w-3xl mx-auto">
								Our regular talk on Astronomy, Astrophysics, Research and
								Volunteering both online and offline.
							</p>
						</div>
					</div>

					<div className="space-y-20">
						<section className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-8 md:p-10 border border-gray-800/30">
							<h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-12">
								Why CAM TALK?
							</h2>

							<div className="grid lg:grid-cols-2 gap-12 items-center">
								<div>
									<p className="text-lg text-gray-300 leading-relaxed font-light mb-6">
										CAM-SUST is always trying to contribute to society through
										unique ideas and works. During the COVID-19 pandemic when
										the whole world came to a standstill and our campus got
										closed, we couldn’t do any offline activities. So we
										adapted by launching CAM-Talk, an online astronomy talk
										series. What began as a response to lockdown has now become
										a regular event. Now, we arrange CAM-Talks on a regular
										basis.
									</p>
								</div>

								<div>
									<ImageSlider
										section="cam-talk-intro"
										images={sectionImages.intro}
									/>
								</div>
							</div>
						</section>

						<section className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-8 md:p-10 border border-gray-800/30">
							<h3 className="text-3xl font-bold text-center text-gray-100 mb-6">
								Philosophy &amp; Motive
							</h3>
							<p className="text-lg text-gray-300 leading-relaxed font-light mb-6">
								The philosophy behind CAM-Talk is to gather and spread
								knowledge about astronomy and the life experience of those
								who work in this field. How do they think when solving a
								problem using scientific methods? As some of our members
								dream to do research in astronomy and astrophysics, we also
								want to learn the research methodology, research ethics, and
								different aspects of research fields. Another motive of
								arranging CAM-TALK is to hear from experts in research
								fields.
							</p>
							<p className="text-lg text-gray-300 leading-relaxed font-light">
								In Bangladesh, we have no option to study astronomy or
								astrophysics academically but a lot of national & university
								organizations are trying to spread astronomy all over the
								country. As we are one of them, we know how many challenges
								they face. So, we will try to share some of those stories
								through CAM-TALK too.
							</p>
						</section>

						<section className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-8 md:p-10 border border-gray-800/30">
							<div className="grid lg:grid-cols-2 gap-10 items-center mb-8">
								<div>
									<h3 className="text-3xl font-bold text-gray-100 mb-4">
										Online CAM Talk
									</h3>
									<p className="text-sm md:text-lg text-gray-300 leading-relaxed font-light text-center md:whitespace-nowrap">
										Here is the first CAM Talk uploaded on our Youtube channel.
									</p>
								</div>
							</div>

							<div className="aspect-video bg-black/40 rounded-lg flex items-center justify-center border border-gray-800/50 overflow-hidden">
								<iframe
									className="w-full h-full rounded-lg"
									src="https://www.youtube.com/embed/bIQTZ5xsl0o?si=RWpuigQrXeEVeFYA"
									title="CAM Talk video"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									allowFullScreen
								></iframe>
							</div>

							<div className="mt-4 text-center">
								<a
									className="inline-block px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-md text-sm md:text-base transition"
									href="https://www.youtube.com/playlist?list=PLQMfbBw3jsk0KJNXAkdLtE1v0aVe11ikF"
									target="_blank"
									rel="noopener noreferrer"
								>
									Open the full CAM Talk playlist on YouTube
								</a>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CamTalkPage;
