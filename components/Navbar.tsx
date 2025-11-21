import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Why WayLink', href: '#why-waylink' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/10 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-extrabold tracking-tight flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-primary">
             <Zap size={18} className="text-white fill-current" />
             <div className="absolute inset-0 bg-white/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <span>
            <span className="text-white">Way</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-primary">Link</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#download"
            className="relative px-6 py-2.5 rounded-full text-sm font-bold overflow-hidden group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-600 to-brand-500 opacity-100 group-hover:opacity-90 transition-opacity"></span>
            <span className="absolute inset-0 w-full h-full border border-white/20 rounded-full"></span>
            <span className="relative text-white flex items-center gap-2">
              Download App
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050505]/95 border-b border-white/10 backdrop-blur-xl overflow-hidden absolute w-full"
          >
            <div className="px-6 py-8 space-y-6 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-medium text-slate-200 hover:text-brand-400"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#download"
                onClick={() => setMobileMenuOpen(false)}
                className="text-brand-400 font-semibold text-lg"
              >
                Download App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;