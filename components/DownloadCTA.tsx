import React from "react";
import { FadeIn } from "./ui/FadeIn";
import { Apple, Play, Smartphone, QrCode } from "lucide-react";

const DownloadCTA: React.FC = () => {
	return (
		<section id="download" className="py-24 px-4 md:px-6 relative z-10">
			<div className="max-w-5xl mx-auto">
				<FadeIn>
					<div className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-[#080808] shadow-2xl group isolate">
						{/* Elegant Background Lighting */}
						<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-20"></div>
						<div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-20"></div>

						{/* Mesh Gradient Background */}
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))] from-brand-900/20 via-[#050505] to-[#050505]"></div>

						{/* Abstract Grid Pattern */}
						<div
							className="absolute inset-0 opacity-[0.15]"
							style={{
								backgroundImage:
									"linear-gradient(to right, #202020 1px, transparent 1px), linear-gradient(to bottom, #202020 1px, transparent 1px)",
								backgroundSize: "40px 40px",
								maskImage:
									"radial-gradient(circle at center, black 40%, transparent 100%)",
							}}
						></div>

						{/* Floating Glow Orbs */}
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[100px] pointer-events-none"></div>

						<div className="relative z-10 px-8 py-20 md:py-28 flex flex-col items-center text-center">
							<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-10 shadow-lg shadow-black/20 transition-transform hover:scale-105 duration-300 cursor-default">
								<Smartphone size={14} className="text-brand-500" />
								<span className="text-xs font-semibold text-brand-100 tracking-wide uppercase">
									Available on iOS & Android
								</span>
							</div>

							<h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[1.05]">
								Your Journey <br />
								<span className="text-transparent bg-clip-text bg-gradient-to-b from-brand-200 to-brand-600">
									Starts Here.
								</span>
							</h2>

							<p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
								Join the network of drivers and travelers redefining intercity
								transit. <br className="hidden md:block" />
								Download WayLink today and ride smarter.
							</p>

							<div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
								<button className="group w-full sm:w-auto flex items-center justify-center gap-4 bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-slate-200 transition-all duration-300 transform hover:-translate-y-1 shadow-[0_20px_40px_-15px_rgba(255,255,255,0.3)] relative overflow-hidden">
									<div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
									<Apple className="w-6 h-6 fill-current relative z-10" />
									<div className="text-left relative z-10">
										<div className="text-[10px] uppercase tracking-wider leading-none font-bold opacity-60 mb-1">
											Download on the
										</div>
										<div className="text-lg leading-none font-bold">
											App Store
										</div>
									</div>
								</button>

								<button className="group w-full sm:w-auto flex items-center justify-center gap-4 bg-[#1a1a1a] text-white border border-white/10 px-8 py-4 rounded-2xl font-bold hover:bg-white/5 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 shadow-xl shadow-black/50">
									<Play className="w-6 h-6 fill-current text-brand-500 group-hover:text-white transition-colors" />
									<div className="text-left">
										<div className="text-[10px] uppercase tracking-wider leading-none font-bold opacity-60 mb-1">
											Get it on
										</div>
										<div className="text-lg leading-none font-bold">
											Google Play
										</div>
									</div>
								</button>
							</div>

							{/* Decorative QR Code hint or similar subtle detail */}
							<div className="mt-16 flex items-center gap-4 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
								<div className="h-px w-12 bg-gradient-to-r from-transparent to-white/50"></div>
								<div className="flex items-center gap-2 text-xs text-slate-300 uppercase tracking-widest">
									<QrCode size={12} />
									<span>Scan to Install</span>
								</div>
								<div className="h-px w-12 bg-gradient-to-l from-transparent to-white/50"></div>
							</div>
						</div>
					</div>
				</FadeIn>
			</div>
		</section>
	);
};

export default DownloadCTA;

