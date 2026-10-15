import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09090B] border-t border-white/10 text-slate-400 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#E65C00] to-[#FF8C38] flex items-center justify-center font-bold text-white text-base shadow-md">
              DP
            </div>
            <div>
              <p className="text-white font-bold text-sm tracking-wide">
                Devi Prasad Chinthamreddy
              </p>
              <p className="text-xs text-slate-500">
                Full Stack Developer · Tirupati, AP, India
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex items-center gap-6 text-xs font-medium">
            <a href="#hero" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to top & Socials */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/deviprasad101"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/deviprasad-reddy-chinthamreddy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:cdpreddyap@gmail.com"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#E65C00] hover:bg-[#ff6f14] text-white transition-colors shadow-sm ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <p>
            © {new Date().getFullYear()} Devi Prasad Chinthamreddy. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Engineered with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
