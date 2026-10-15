import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#121214]/85 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#hero"
            className="flex items-center gap-2 group text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#E65C00] to-[#FF8C38] flex items-center justify-center font-bold text-white text-lg shadow-md group-hover:scale-105 transition-transform">
              DP
            </div>
            <div>
              <span className="text-white font-bold tracking-tight text-lg block group-hover:text-[#FF8C38] transition-colors">
                Devi Prasad
              </span>
              <span className="text-xs text-slate-400 block tracking-wider uppercase font-medium">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeSection === link.id
                    ? 'bg-[#E65C00] text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/Devi_Prasad_Full_Stack_Developer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-3.5 py-2 rounded-lg transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-[#FF8C38]" />
              Resume
            </a>
            <a
              href="#contact"
              className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#E65C00] hover:bg-[#d45200] px-4 py-2 rounded-lg shadow-sm hover:shadow-[#E65C00]/25 hover:shadow-lg transition-all hover:scale-102"
            >
              <Send className="w-3.5 h-3.5" />
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-[#18181B] border border-white/15 shadow-2xl flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-[#E65C00] text-white'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 opacity-70" />
              </a>
            ))}
            <div className="pt-3 mt-1 border-t border-white/10 flex flex-col gap-2">
              <a
                href="/Devi_Prasad_Full_Stack_Developer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium bg-white/5 text-slate-200 border border-white/10"
              >
                <FileText className="w-4 h-4 text-[#FF8C38]" />
                View Resume (PDF)
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold bg-[#E65C00] text-white"
              >
                <Send className="w-4 h-4" />
                Contact Devi Prasad
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
