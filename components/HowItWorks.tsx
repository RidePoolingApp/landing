import React from "react";
import { FadeIn } from "./ui/FadeIn";
import { Search, UserCheck, ShieldCheck, ArrowRight } from "lucide-react";

const steps = [
	{
		id: "01",
		icon: <Search className="w-6 h-6" />,
		title: "Request",
		description:
			"Enter your pickup & drop location. Choose from available intercity routes or rental packages.",
		action: "Select Route",
	},
	{
		id: "02",
		icon: <UserCheck className="w-6 h-6" />,
		title: "Match",
		description:
			"Our algorithm instantly connects you with a verified driver nearby heading your way.",
		action: "Driver Found",
	},
	{
		id: "03",
		icon: <ShieldCheck className="w-6 h-6" />,
		title: "Ride",
		description:
			"Verify the ride with an OTP and enjoy a safe, tracked journey to your destination.",
		action: "Start Journey",
	},
];

const HowItWorks: React.FC = () => {
	return (
		<section id="how-it-works" className="py-32 relative overflow-hidden">
			{/* Background Ambience */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-900/10 rounded-full blur-[100px]"></div>
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-800/20 rounded-full blur-[100px]"></div>
			</div>

			<div className="max-w-7xl mx-auto px-6 relative z-10">
				<div className="text-center max-w-3xl mx-auto mb-24">
					<FadeIn>
						<h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
							Your Journey, <span className="text-brand-500">Simplified</span>
						</h2>
						<p className="text-lg text-slate-400">
							From booking to destination, WayLink creates a frictionless
							experience for both drivers and passengers.
						</p>
					</FadeIn>
				</div>

				<div className="relative">
					{/* Connecting Line (Desktop) */}
					<div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-500/30 to-transparent -translate-y-1/2 z-0"></div>

					<div className="grid md:grid-cols-3 gap-8">
						{steps.map((step, index) => (
							<FadeIn key={index} delay={index * 0.2} className="relative">
								<div className="group relative h-full">
									{/* Card Content */}
									<div className="relative z-10 bg-[#0c0c0c] border border-white/10 rounded-2xl p-8 h-full hover:border-brand-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-900/10 hover:-translate-y-2">
										{/* Step Number Watermark */}
										<div className="absolute -top-6 -right-4 text-8xl font-bold text-white/5 select-none group-hover:text-brand-500/10 transition-colors duration-500">
											{step.id}
										</div>

										{/* Icon */}
										<div className="w-14 h-14 rounded-full bg-[#151515] border border-white/10 flex items-center justify-center text-white mb-8 shadow-lg shadow-black/50 group-hover:scale-110 group-hover:border-brand-500/30 group-hover:text-brand-500 transition-all duration-300">
											{step.icon}
										</div>

										<h3 className="text-2xl font-bold text-white mb-4">
											{step.title}
										</h3>
										<p className="text-slate-400 leading-relaxed mb-8 min-h-[48px]">
											{step.description}
										</p>

										{/* Mock UI Element for Action */}
										<div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-xs font-mono text-brand-400 border border-white/5 group-hover:bg-brand-500/10 transition-colors">
											<span>{step.action}</span>
											<div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></div>
										</div>
									</div>

									{/* Connecting Arrow (Mobile only) */}
									{index < steps.length - 1 && (
										<div className="md:hidden flex justify-center my-4 text-slate-600">
											<ArrowRight className="rotate-90" />
										</div>
									)}
								</div>
							</FadeIn>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
