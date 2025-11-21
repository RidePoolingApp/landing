import React from "react";
import { FadeIn } from "./ui/FadeIn";
import {
	Car,
	Map,
	Briefcase,
	ArrowUpRight,
	ShieldCheck,
	Zap,
} from "lucide-react";

const features = [
	{
		icon: <Car className="w-6 h-6" />,
		title: "Intercity Rides",
		description:
			"Direct station-to-station travel. Book reliable rides between cities without the hassle of negotiation.",
		delay: 0.1,
	},
	{
		icon: <Map className="w-6 h-6" />,
		title: "Tourist Rentals",
		description:
			"Flexible vehicle rentals for tourists. Explore scenic routes at your own pace with verified local drivers.",
		delay: 0.2,
	},
	{
		icon: <Briefcase className="w-6 h-6" />,
		title: "Driver Job Board",
		description:
			"A transparent marketplace for drivers to pick trips that match their schedule and preferred routes.",
		delay: 0.3,
	},
	{
		icon: <ShieldCheck className="w-6 h-6" />,
		title: "Verified Partners",
		description:
			"Every driver and vehicle is rigorously vetted to ensure safety and comfort for every mile.",
		delay: 0.4,
	},
	{
		icon: <Zap className="w-6 h-6" />,
		title: "Instant Booking",
		description:
			"No waiting periods. Get instant confirmations for your intercity travel plans.",
		delay: 0.5,
	},
];

const Features: React.FC = () => {
	return (
		<section id="features" className="py-32 relative z-10">
			<div className="max-w-7xl mx-auto px-6">
				<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
					<FadeIn className="max-w-2xl">
						<h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
							Engineered for{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">
								Modern Travel
							</span>
						</h2>
						<p className="text-lg text-slate-400 leading-relaxed">
							We've stripped away the complexity of intercity travel to provide
							a seamless, driver-first experience that feels like the future.
						</p>
					</FadeIn>
					<FadeIn delay={0.2}>
						<a
							href="#download"
							className="inline-flex items-center gap-2 text-brand-500 font-semibold hover:text-brand-400 transition-colors"
						>
							View all features <ArrowUpRight size={18} />
						</a>
					</FadeIn>
				</div>

				<div className="grid md:grid-cols-3 gap-6">
					{/* Large Feature Card */}
					<FadeIn className="md:col-span-2 md:row-span-2 min-h-[400px] relative group rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a]">
						<div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

						{/* Abstract Background Art */}
						<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-900/10 to-transparent pointer-events-none"></div>
						<div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px] group-hover:bg-brand-500/20 transition-colors duration-700"></div>

						<div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">
							<div className="w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500 mb-8">
								<Car className="w-7 h-7" />
							</div>
							<div>
								<h3 className="text-3xl font-bold text-white mb-4">
									Intercity Rides, Reimagined
								</h3>
								<p className="text-slate-400 text-lg max-w-md leading-relaxed">
									Experience the comfort of personal car travel with the
									reliability of a scheduled service. No haggling, no
									cancellations, just smooth journeys.
								</p>
							</div>

							<div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
								<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white">
									<ArrowUpRight size={20} />
								</div>
							</div>
						</div>
					</FadeIn>

					{/* Smaller Feature Cards */}
					{features.slice(1).map((feature, index) => (
						<FadeIn
							key={index}
							delay={feature.delay}
							className="relative group"
						>
							<div className="h-full p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-brand-500/30 transition-all duration-500 flex flex-col overflow-hidden relative hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-900/20">
								{/* Hover Glow */}
								<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

								<div className="mb-6 w-12 h-12 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-brand-500 group-hover:border-brand-500/30 transition-colors duration-300 z-10 relative">
									{feature.icon}
								</div>

								<h3 className="text-xl font-bold text-white mb-3 z-10 relative">
									{feature.title}
								</h3>
								<p className="text-sm text-slate-400 leading-relaxed z-10 relative">
									{feature.description}
								</p>

								{/* Action Icon */}
								<div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
									<ArrowUpRight className="text-brand-500 w-5 h-5" />
								</div>
							</div>
						</FadeIn>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;

