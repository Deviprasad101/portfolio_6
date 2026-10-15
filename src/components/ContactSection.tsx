import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Copy, 
  Check, 
  Send, 
  FileText, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('cdpreddyap@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0E0E10] text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#E65C00]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E65C00]/15 text-[#FF8C38] text-xs font-bold uppercase tracking-widest mb-3 border border-[#E65C00]/30">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Let's Collaborate & Build Together
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Open to opportunities in Full Stack Development, Cloud Engineering, and DevOps. Let's discuss your next breakthrough project.
          </p>
        </div>

        {/* Main Grid: Info Cards + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Email Card with 1-click Copy */}
            <div className="p-6 rounded-3xl bg-[#18181B] border border-white/10 hover:border-[#E65C00]/40 transition-all shadow-xl group">
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 rounded-2xl bg-[#E65C00]/15 text-[#FF8C38]">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs uppercase font-bold text-slate-400 tracking-wider">Email Address</p>
              <a
                href="mailto:cdpreddyap@gmail.com"
                className="text-lg sm:text-xl font-bold text-white hover:text-[#FF8C38] transition-colors break-all mt-1 block"
              >
                cdpreddyap@gmail.com
              </a>
            </div>

            {/* Phone & Location Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-3xl bg-[#18181B] border border-white/10 shadow-lg">
                <div className="p-2.5 rounded-xl bg-white/5 text-amber-400 w-fit mb-3">
                  <Phone className="w-5 h-5" />
                </div>
                <p className="text-xs uppercase font-bold text-slate-400 tracking-wider">Phone</p>
                <a
                  href="tel:+916281604440"
                  className="text-sm sm:text-base font-semibold text-white hover:text-[#FF8C38] transition-colors block mt-0.5"
                >
                  +91 6281604440
                </a>
              </div>

              <div className="p-5 rounded-3xl bg-[#18181B] border border-white/10 shadow-lg">
                <div className="p-2.5 rounded-xl bg-white/5 text-amber-400 w-fit mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <p className="text-xs uppercase font-bold text-slate-400 tracking-wider">Base Location</p>
                <p className="text-sm sm:text-base font-semibold text-white mt-0.5">
                  Tirupati, AP, India
                </p>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="p-6 rounded-3xl bg-[#18181B] border border-white/10 shadow-xl space-y-3">
              <p className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">Connect Across Platforms</p>
              
              <a
                href="https://github.com/deviprasad101"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-[#E65C00]/20 hover:border-[#E65C00]/40 border border-white/5 transition-all text-sm font-semibold group"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-5 h-5 text-slate-300 group-hover:text-white" />
                  <span>GitHub: deviprasad101</span>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://linkedin.com/in/deviprasad-reddy-chinthamreddy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-[#E65C00]/20 hover:border-[#E65C00]/40 border border-white/5 transition-all text-sm font-semibold group"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-5 h-5 text-slate-300 group-hover:text-[#FF8C38]" />
                  <span>LinkedIn Profile</span>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://deviprasad-portfolio.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-[#E65C00]/20 hover:border-[#E65C00]/40 border border-white/5 transition-all text-sm font-semibold group"
              >
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-slate-300 group-hover:text-white" />
                  <span>Existing Vercel Site</span>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Resume Download Banner */}
            <div className="p-5 rounded-3xl bg-gradient-to-r from-[#E65C00]/20 to-amber-500/10 border border-[#E65C00]/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-[#FF8C38]" />
                <div>
                  <p className="text-sm font-bold text-white">Devi Prasad Resume (PDF)</p>
                  <p className="text-xs text-slate-300">Complete curriculum vitae</p>
                </div>
              </div>
              <a
                href="/Devi_Prasad_Full_Stack_Developer_Resume.pdf"
                download="Devi_Prasad_Full_Stack_Developer_Resume.pdf"
                className="px-4 py-2 rounded-xl bg-[#E65C00] hover:bg-[#ff6f14] text-white text-xs font-bold transition-all shadow-md"
              >
                Download
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#18181B] border border-white/10 shadow-2xl relative">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-[#FF8C38]" />
                <h3 className="text-2xl font-bold text-white">Send a Direct Message</h3>
              </div>
              <p className="text-slate-400 text-sm mb-6">
                Fill in the form below to reach Devi directly. You'll get a response within 24 hours.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-center animate-fade-in my-10">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Dispatched!</h4>
                  <p className="text-sm text-emerald-200 mt-2">
                    Thank you! Your inquiry has been received. Devi will follow up with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jane Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#E65C00] focus:ring-1 focus:ring-[#E65C00] transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#E65C00] focus:ring-1 focus:ring-[#E65C00] transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Subject / Role Title
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Full Stack Developer Opportunity / Project Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#E65C00] focus:ring-1 focus:ring-[#E65C00] transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your team, tech stack, or the vision you want to bring to life..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#E65C00] focus:ring-1 focus:ring-[#E65C00] transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#E65C00] hover:bg-[#ff6f14] text-white font-bold text-sm tracking-wide shadow-xl hover:shadow-[#E65C00]/40 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Send Message to Devi</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}

              {/* Closing Line Notice */}
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="text-xs sm:text-sm text-slate-400 font-medium italic">
                  "Open to opportunities in Full Stack Development, Cloud Engineering, and DevOps. Let's build something remarkable together!"
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
