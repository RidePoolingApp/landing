import React from 'react';
import { Twitter, Instagram, Linkedin, Facebook, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020205] border-t border-white/10 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-2xl font-extrabold tracking-tight mb-6 flex items-center gap-2">
              <Zap size={20} className="text-brand-500 fill-current" />
              <span>
                <span className="text-white">Way</span>
                <span className="text-brand-500">Link</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Reimagining intercity travel with a focus on drivers and reliable connectivity.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Product</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-500 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">For Drivers</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">For Travelers</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
             <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-white mb-6">Support</h4>
             <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Safety</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} WayLink Technologies. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-brand-500 transition-colors">
                <Twitter size={20} />
            </a>
            <a href="#" className="text-slate-500 hover:text-brand-500 transition-colors">
                <Instagram size={20} />
            </a>
             <a href="#" className="text-slate-500 hover:text-brand-500 transition-colors">
                <Linkedin size={20} />
            </a>
             <a href="#" className="text-slate-500 hover:text-brand-500 transition-colors">
                <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;