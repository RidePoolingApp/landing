import React from "react";
import { FadeIn } from "./ui/FadeIn";
import {
  Car,
  Map,
  Briefcase,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  CalendarClock,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Intercity Rides",
    description:
      "Direct station-to-station travel. Book reliable rides between cities without the hassle of negotiation.",
    icon: <Car className="w-8 h-8" />,
    className: "md:col-span-2 md:row-span-2 min-h-[320px]",
    hasArt: true,
    delay: 0.1,
  },
  {
    title: "Daily Subscriptions",
    description:
      "Hassle-free daily commutes. Subscribe to a dedicated cab for work or college runs at fixed rates.",
    icon: <CalendarClock className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1",
    delay: 0.2,
  },
  {
    title: "Shared Long Trips",
    description:
      "Split the cost, share the journey. Find verified co-travelers for long routes and save up to 50%.",
    icon: <Users className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1",
    delay: 0.3,
  },
  {
    title: "Tourist Rentals",
    description:
      "Flexible vehicle rentals for scenic routes. Explore at your own pace with verified local drivers.",
    icon: <Map className="w-6 h-6" />,
    className: "md:col-span-2 md:row-span-1",
    delay: 0.4,
  },
  {
    title: "Driver Job Board",
    description:
      "A transparent marketplace for drivers to pick trips that match their schedule.",
    icon: <Briefcase className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1",
    delay: 0.5,
  },
  {
    title: "Verified Partners",
    description:
      "Every driver and vehicle is rigorously vetted to ensure safety and comfort for every mile.",
    icon: <ShieldCheck className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1",
    delay: 0.6,
  },
  {
    title: "Instant Booking",
    description:
      "No waiting periods. Get instant confirmations for your intercity travel plans.",
    icon: <Zap className="w-6 h-6" />,
    className: "md:col-span-2 md:row-span-1",
    delay: 0.7,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <FadeIn className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Engineered for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">
                Modern Travel
              </span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              We've stripped away the complexity of travel to provide a
              seamless, driver-first experience that adapts to your needs.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a
              href="#download"
              className="inline-flex items-center gap-2 text-brand-500 font-semibold hover:text-brand-400 transition-colors group"
            >
              View all features{" "}
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>
          </FadeIn>
        </div>

        {/* Mosaic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FadeIn
              key={index}
              delay={feature.delay}
              className={`${feature.className} relative group rounded-3xl`}
            >
              <div className="h-full p-8 bg-[#0a0a0a] border border-white/10 hover:border-brand-500/30 transition-all duration-500 flex flex-col justify-between overflow-hidden relative hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-900/20 rounded-3xl">
                {/* Dynamic Background for Art Cards */}
                {feature.hasArt && (
                  <>
                    <div className="absolute right-0 top-0 w-full h-full bg-gradient-to-l from-brand-900/10 to-transparent pointer-events-none"></div>
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-500/20 rounded-full blur-[80px] group-hover:bg-brand-500/30 transition-colors duration-700"></div>
                    <div className="absolute top-0 right-0 p-8 opacity-20">
                      <svg
                        width="100"
                        height="100"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 100L100 0M20 100L100 20M40 100L100 40"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-brand-500"
                        />
                      </svg>
                    </div>
                  </>
                )}

                {/* Standard Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="mb-6 w-14 h-14 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-brand-500 group-hover:border-brand-500/30 group-hover:bg-brand-500/5 transition-all duration-300">
                    {feature.icon}
                  </div>

                  <h3
                    className={`font-bold text-white mb-3 relative z-10 ${feature.hasArt ? "text-3xl" : "text-xl"}`}
                  >
                    {feature.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed z-10 relative text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>

                {/* Interactive Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-10">
                  <div className="w-8 h-8 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-500">
                    <ArrowUpRight size={16} />
                  </div>
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
