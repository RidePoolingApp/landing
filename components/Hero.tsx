import React from "react";
import { FadeIn } from "./ui/FadeIn";
import { ArrowRight, MapPin, Navigation, Shield, Star } from "lucide-react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
	return (
		<section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden min-h-screen flex items-center">
			{/* Elegant Background Lighting */}
			<div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-900/30 via-[#050505] to-transparent pointer-events-none select-none"></div>
			<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

			<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center relative z-10">
				{/* Left Content */}
				<div className="lg:col-span-7 flex flex-col justify-center">
					<FadeIn delay={0.1}>
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/20 bg-brand-500/5 text-brand-400 text-xs font-medium tracking-wide uppercase mb-8">
							<span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
							The Future of Intercity Travel
						</div>
					</FadeIn>

					<FadeIn delay={0.2}>
						<h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-8">
							Travel far. <br />
							Connect deeper. <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-500 to-brand-200">
								Ride without limits.
							</span>
						</h1>
					</FadeIn>

					<FadeIn delay={0.3}>
						<p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-xl border-l-2 border-white/10 pl-6">
							A driver-centric platform designed for reliable intercity rides
							and rentals. No GPS dependency. Just seamless connections.
						</p>
					</FadeIn>

					<FadeIn delay={0.4}>
						<div className="flex flex-wrap gap-4 mb-12">
							<button className="group relative px-8 py-4 rounded-full font-semibold text-white overflow-hidden">
								<div className="absolute inset-0 w-full h-full bg-brand-600 transition-all group-hover:bg-brand-500"></div>
								<div className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
								<span className="relative flex items-center gap-2">
									Start your journey <ArrowRight size={18} />
								</span>
							</button>

							<button className="px-8 py-4 rounded-full font-semibold text-white border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2 backdrop-blur-sm">
								<Shield size={18} className="text-slate-400" />
								Driver App
							</button>
						</div>
					</FadeIn>

					<FadeIn delay={0.5}>
						<div className="flex items-center gap-8 pt-8 border-t border-white/5">
							<div>
								<div className="text-2xl font-bold text-white">50k+</div>
								<div className="text-xs text-slate-500 uppercase tracking-wider">
									Active Routes
								</div>
							</div>
							<div className="w-px h-10 bg-white/10"></div>
							<div>
								<div className="text-2xl font-bold text-white">Zero</div>
								<div className="text-xs text-slate-500 uppercase tracking-wider">
									GPS Lag
								</div>
							</div>
							<div className="w-px h-10 bg-white/10"></div>
							<div className="flex items-center gap-2">
								<div className="flex -space-x-2">
									{[1, 2, 3].map((i) => (
										<div
											key={i}
											className="w-8 h-8 rounded-full bg-zinc-800 border border-black flex items-center justify-center text-[10px] text-slate-500"
										>
											<Star
												size={10}
												fill="currentColor"
												className="text-brand-500"
											/>
										</div>
									))}
								</div>
								<div className="text-sm text-slate-400">
									<span className="text-white font-bold">4.9/5</span> rating
								</div>
							</div>
						</div>
					</FadeIn>
				</div>

				{/* Right Mockup - Sleek & Elegant */}
				<div className="lg:col-span-5 relative h-[700px] perspective-2000 hidden lg:block">
					<FadeIn
						direction="left"
						delay={0.4}
						className="w-full h-full flex items-center justify-center"
					>
						<motion.div
							initial={{ rotateY: -15, rotateX: 5 }}
							animate={{ rotateY: -5, rotateX: 0 }}
							transition={{
								duration: 5,
								repeat: Infinity,
								repeatType: "mirror",
								ease: "easeInOut",
							}}
							className="relative z-20 preserve-3d"
						>
							{/* Phone Body */}
							<div className="relative w-[340px] h-[680px] bg-[#080808] rounded-[40px] shadow-2xl border-[6px] border-[#1a1a1a] overflow-hidden ring-1 ring-white/10">
								{/* Screen Gloss */}
								<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent z-50 pointer-events-none rounded-[32px]"></div>

								{/* Dynamic Island */}
								<div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-xl z-40"></div>

								{/* App Interface */}
								<div className="w-full h-full bg-gradient-to-b from-[#0f0f11] to-[#050505] relative flex flex-col">
									{/* Header Area */}
									<div className="h-1/2 relative overflow-hidden">
										{/* Map Abstract */}
										<div className="absolute inset-0 opacity-20">
											<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-900/50 to-transparent"></div>
											<svg className="w-full h-full" width="100%" height="100%">
												<defs>
													<pattern
														id="grid-hero"
														width="30"
														height="30"
														patternUnits="userSpaceOnUse"
													>
														<path
															d="M 30 0 L 0 0 0 30"
															fill="none"
															stroke="rgba(255,255,255,0.1)"
															strokeWidth="1"
														/>
													</pattern>
												</defs>
												<rect
													width="100%"
													height="100%"
													fill="url(#grid-hero)"
												/>
											</svg>
										</div>

										{/* Route Line Animation */}
										<svg className="absolute inset-0 w-full h-full pointer-events-none">
											<motion.path
												d="M 80 150 Q 160 100 260 180"
												stroke="url(#gradient-line)"
												strokeWidth="3"
												fill="none"
												strokeLinecap="round"
												initial={{ pathLength: 0, opacity: 0 }}
												animate={{ pathLength: 1, opacity: 1 }}
												transition={{ duration: 2, ease: "easeInOut" }}
											/>
											<defs>
												<linearGradient
													id="gradient-line"
													x1="0%"
													y1="0%"
													x2="100%"
													y2="0%"
												>
													<stop
														offset="0%"
														stopColor="#ea580c"
														stopOpacity="0"
													/>
													<stop offset="50%" stopColor="#ea580c" />
													<stop
														offset="100%"
														stopColor="#ea580c"
														stopOpacity="0"
													/>
												</linearGradient>
											</defs>
											{/* Location Dots */}
											<circle
												cx="80"
												cy="150"
												r="4"
												fill="#ea580c"
												className="animate-ping"
											/>
											<circle cx="80" cy="150" r="3" fill="#fff" />
											<circle cx="260" cy="180" r="3" fill="#fff" />
										</svg>

										<div className="absolute bottom-6 left-6 right-6">
											<div className="p-4 rounded-2xl bg-[#151515]/80 backdrop-blur-md border border-white/10 shadow-xl">
												<div className="text-xs text-slate-400 mb-1 uppercase tracking-wide font-bold">
													Current Trip
												</div>
												<div className="flex items-center justify-between">
													<div>
														<div className="text-white font-bold text-lg">
															Downtown St.
														</div>
														<div className="text-xs text-slate-500">
															09:41 AM
														</div>
													</div>
													<ArrowRight size={16} className="text-slate-600" />
													<div className="text-right">
														<div className="text-white font-bold text-lg">
															Airport T1
														</div>
														<div className="text-xs text-slate-500">
															10:25 AM
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									{/* Bottom Action Area */}
									<div className="flex-1 bg-[#0a0a0a] rounded-t-[30px] p-6 relative z-10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
										<div className="w-12 h-1 bg-zinc-800 rounded-full mx-auto mb-8"></div>

										<div className="space-y-4">
											<div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-brand-500/10 to-transparent border border-brand-500/20">
												<div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
													<Navigation size={20} />
												</div>
												<div>
													<div className="text-white font-bold">
														Express Route
													</div>
													<div className="text-xs text-brand-400">
														Fastest • No Tolls
													</div>
												</div>
												<div className="ml-auto text-white font-bold">$24</div>
											</div>

											<div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 opacity-60">
												<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white">
													<MapPin size={20} />
												</div>
												<div>
													<div className="text-white font-bold">Standard</div>
													<div className="text-xs text-slate-400">
														Scenic Route
													</div>
												</div>
												<div className="ml-auto text-white font-bold">$18</div>
											</div>
										</div>

										<button className="w-full mt-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-brand-900/50">
											Confirm Ride
										</button>
									</div>
								</div>
							</div>

							{/* Back Glow */}
							<div className="absolute inset-0 bg-brand-500/20 blur-[100px] -z-10 transform translate-y-10"></div>
						</motion.div>
					</FadeIn>
				</div>
			</div>
		</section>
	);
};

export default Hero;
