import React from "react";
import {
  Twitter,
  Instagram,
  Linkedin,
  Facebook,
  Zap,
  ArrowRight,
  Mail,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020205] border-t border-white/5 pt-24 pb-12 relative overflow-hidden z-10">
      {/* Background Ambient Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent"></div>
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-brand-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-5 lg:col-span-4">
            <a
              href="#"
              className="text-3xl font-extrabold tracking-tight mb-6 flex items-center gap-2 group w-fit"
            >
              <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform duration-300">
                <Zap size={22} fill="currentColor" />
              </div>
              <span>
                <span className="text-white">Way</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">
                  Link
                </span>
              </span>
            </a>
            <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-md">
              Reimagining intercity travel with a focus on drivers, reliable
              connectivity, and seamless experiences. Join the revolution today.
            </p>

            {/* Newsletter Input */}
            <div className="flex items-center gap-2 p-1.5 bg-white/5 border border-white/10 rounded-full max-w-sm focus-within:border-brand-500/50 focus-within:bg-white/10 transition-all duration-300">
              <div className="pl-3 text-slate-500">
                <Mail size={18} />
              </div>
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent border-none outline-none text-sm text-white w-full placeholder:text-slate-600"
              />
              <button className="p-2.5 bg-brand-500 rounded-full text-white hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/20">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1 lg:col-span-2"></div>

          {/* Links Columns */}
          <div className="md:col-span-6 lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-white mb-6 tracking-wide text-sm uppercase">
                Product
              </h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-1.5 h-px bg-brand-500 transition-all duration-300"></span>
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-1.5 h-px bg-brand-500 transition-all duration-300"></span>
                    For Drivers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-1.5 h-px bg-brand-500 transition-all duration-300"></span>
                    For Travelers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-1.5 h-px bg-brand-500 transition-all duration-300"></span>
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 tracking-wide text-sm uppercase">
                Company
              </h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-1.5 h-px bg-brand-500 transition-all duration-300"></span>
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-1.5 h-px bg-brand-500 transition-all duration-300"></span>
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-1.5 h-px bg-brand-500 transition-all duration-300"></span>
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-1.5 h-px bg-brand-500 transition-all duration-300"></span>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 tracking-wide text-sm uppercase">
                Support
              </h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-1.5 h-px bg-brand-500 transition-all duration-300"></span>
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-1.5 h-px bg-brand-500 transition-all duration-300"></span>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-1.5 h-px bg-brand-500 transition-all duration-300"></span>
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-sm font-medium">
            © {new Date().getFullYear()} WayLink Technologies Inc. All rights
            reserved.
          </p>

          <div className="flex gap-4">
            {[Twitter, Instagram, Linkedin, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-500 hover:border-brand-500 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-500/25"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
