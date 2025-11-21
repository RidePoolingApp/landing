import React from "react";
import { FadeIn } from "./ui/FadeIn";
import {
	WifiOff,
	TrendingUp,
	MapPin,
	Activity,
	CheckCircle2,
} from "lucide-react";

const benefits = [
	{
		icon: <WifiOff className="w-5 h-5" />,
		title: "Zero GPS Dependency",
		description:
			"Our proprietary zone-based algorithm ensures seamless rides even in dead zones or tunnels.",
	},
	{
		icon: <TrendingUp className="w-5 h-5" />,
		title: "100% Fare Transparency",
		description:
			"What you see is what you pay. Drivers get their full share, and riders get honest pricing.",
	},
	{
		icon: <MapPin className="w-5 h-5" />,
		title: "Optimized Drop Zones",
		description:
			"Smart pickup and drop-off points reduce confusion and wait times by up to 40%.",
	},
];

const WhyWayLink: React.FC = () => {
	return (
		<section
			id="why-waylink"
			className="py-32 bg-[#050505] relative overflow-hidden"
		>
			{/* Subtle Textured Background */}
			<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
			<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

			<div className="max-w-7xl mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-20 items-center">
					{/* Left: Feature Visualization */}
					<FadeIn direction="right">
						<div className="relative group">
							{/* Main Glass Panel */}
							<div className="relative z-10 aspect-square rounded-3xl bg-[#0a0a0a] border border-white/10 p-1 overflow-hidden shadow-2xl">
								<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none"></div>

								<div className="w-full h-full bg-[#050505] rounded-[20px] relative overflow-hidden">
									{/* Radar/Zone Animation */}
									<div className="absolute inset-0 flex items-center justify-center">
										<div className="w-[300px] h-[300px] rounded-full border border-brand-900/30 animate-[spin_10s_linear_infinite]"></div>
										<div className="w-[200px] h-[200px] rounded-full border border-brand-900/50 animate-[spin_15s_linear_infinite_reverse] absolute"></div>
										<div className="w-[100px] h-[100px] rounded-full bg-brand-500/5 border border-brand-500/30 absolute flex items-center justify-center">
											<div className="w-2 h-2 bg-brand-500 rounded-full shadow-[0_0_10px_#f97316] animate-pulse"></div>
										</div>

										{/* Scanning line */}
										<div className="absolute inset-0 animate-[spin_4s_linear_infinite]">
											<div className="w-1/2 h-full bg-gradient-to-l from-transparent via-brand-500/5 to-transparent origin-right ml-auto blur-sm"></div>
										</div>
									</div>

									{/* Overlay UI Data */}
									<div className="absolute top-6 left-6">
										<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/20 border border-brand-500/20 backdrop-blur-md">
											<Activity size={14} className="text-brand-500" />
											<span className="text-[10px] font-mono text-brand-400 uppercase tracking-wider">
												Zone Active
											</span>
										</div>
									</div>

									<div className="absolute bottom-6 right-6 left-6">
										<div className="p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-between">
											<div>
												<div className="text-xs text-slate-500 uppercase font-bold">
													Signal Status
												</div>
												<div className="text-white font-mono text-sm">
													Offline Mode • Optimized
												</div>
											</div>
											<CheckCircle2 className="text-green-500 w-5 h-5" />
										</div>
									</div>
								</div>
							</div>

							{/* Ambient Glow behind card */}
							<div className="absolute -inset-4 bg-brand-500/20 rounded-[40px] blur-[40px] -z-10 opacity-40 group-hover:opacity-60 transition-opacity duration-1000"></div>
						</div>
					</FadeIn>

					{/* Right: Content */}
					<div>
						<FadeIn delay={0.2}>
							<h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
								Why we built <br />
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">
									WayLink.
								</span>
							</h2>
							<p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-md">
								We deconstructed the ride-hailing model and rebuilt it for
								intercity realities. No signal? No problem. We rely on smart
								zones, not constant connectivity.
							</p>
						</FadeIn>

						<div className="space-y-6">
							{benefits.map((item, index) => (
								<FadeIn key={index} delay={0.3 + index * 0.1} direction="left">
									<div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-brand-500/20 transition-all duration-300">
										<div className="flex gap-5 items-start">
											<div className="mt-1 w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0 text-brand-500 group-hover:scale-110 transition-transform">
												{item.icon}
											</div>
											<div>
												<h3 className="text-lg font-bold text-white mb-2">
													{item.title}
												</h3>
												<p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
													{item.description}
												</p>
											</div>
										</div>
									</div>
								</FadeIn>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyWayLink;

