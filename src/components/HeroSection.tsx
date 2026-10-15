import React, { useState, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Upload, 
  Sparkles, 
  MapPin, 
  Briefcase, 
  Code2, 
  ArrowDown, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoSrc, setVideoSrc] = useState<string | null>(
    // High quality cinematic tech walking/creative video stream fallback
    'https://assets.mixkit.co/videos/preview/mixkit-young-man-walking-and-talking-on-the-phone-in-a-hallway-42797-large.mp4'
  );
  const [customVideoName, setCustomVideoName] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
      setCustomVideoName(file.name);
      setIsPlaying(true);
      if (videoRef.current) {
        videoRef.current.load();
        videoRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#121214] pt-24 pb-16">
      {/* Background Full-bleed Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {videoSrc ? (
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.1] scale-105 transform transition-transform duration-1000"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#802f00] via-[#4d1c00] to-[#121214] animate-pulse-glow" />
        )}

        {/* Warm Orange Gradient Overlay fading over video into next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#e65c00]/65 via-[#c24400]/80 via-65% to-[#FAF7F2] mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-black/60 pointer-events-none" />
      </div>

      {/* Floating Video Controls Badge */}
      <div className="absolute top-24 right-4 sm:right-8 z-30 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 text-xs text-white shadow-xl">
        <span className="inline-flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[11px] font-medium text-slate-200">
            {customVideoName ? `Higgsfield: ${customVideoName}` : 'Hero Video Stream'}
          </span>
        </span>

        <div className="h-3.5 w-px bg-white/20 mx-1" />

        <button
          onClick={togglePlay}
          className="p-1 hover:text-[#FF8C38] transition-colors"
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>

        <button
          onClick={toggleMute}
          className="p-1 hover:text-[#FF8C38] transition-colors"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>

        <input
          type="file"
          ref={fileInputRef}
          accept="video/*"
          className="hidden"
          onChange={handleVideoUpload}
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-1 bg-[#E65C00]/80 hover:bg-[#E65C00] text-white px-2 py-0.5 rounded-full text-[10px] font-semibold transition-colors"
          title="Swap in your Higgsfield video file"
        >
          <Upload className="w-2.5 h-2.5" />
          Swap Video
        </button>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-amber-200 text-xs sm:text-sm font-medium tracking-wide mb-6 shadow-lg">
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>Available for Full Stack, Cloud & DevOps Roles</span>
        </div>

        {/* Name Overlay with Heavy Bold Impact */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] max-w-5xl">
          DEVI PRASAD <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-100 to-white">
            CHINTHAMREDDY
          </span>
        </h1>

        {/* Subtitle / Role */}
        <p className="mt-5 text-lg sm:text-xl md:text-2xl text-slate-100 font-medium max-w-3xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] tracking-wide">
          Full Stack Developer & Web Engineer
        </p>

        <p className="mt-2 text-sm sm:text-base text-amber-100/90 max-w-2xl font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Architecting robust React frontends, scalable FastAPI/Flask backends, and containerized cloud pipelines.
        </p>

        {/* Hero Stats Row */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl">
          <div className="bg-black/55 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center shadow-xl hover:border-amber-400/50 transition-all hover:scale-102">
            <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-1">
              <Briefcase className="w-4 h-4" />
              <span className="text-xl sm:text-2xl font-black text-white">1+ Yrs</span>
            </div>
            <p className="text-xs font-semibold text-slate-200">Work Experience</p>
            <p className="text-[11px] text-amber-200/80">IIT Tirupati I-Hub</p>
          </div>

          <div className="bg-black/55 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center shadow-xl hover:border-amber-400/50 transition-all hover:scale-102">
            <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-1">
              <MapPin className="w-4 h-4" />
              <span className="text-xl sm:text-2xl font-black text-white">Tirupati</span>
            </div>
            <p className="text-xs font-semibold text-slate-200">AP, India</p>
            <p className="text-[11px] text-amber-200/80">Remote & On-Site</p>
          </div>

          <div className="bg-black/55 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center shadow-xl hover:border-amber-400/50 transition-all hover:scale-102">
            <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-1">
              <Code2 className="w-4 h-4" />
              <span className="text-xl sm:text-2xl font-black text-white">Full Stack</span>
            </div>
            <p className="text-xs font-semibold text-slate-200">React + Python</p>
            <p className="text-[11px] text-amber-200/80">FastAPI & PostgreSQL</p>
          </div>

          <div className="bg-black/55 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center shadow-xl hover:border-amber-400/50 transition-all hover:scale-102">
            <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-xl sm:text-2xl font-black text-white">Geospatial</span>
            </div>
            <p className="text-xs font-semibold text-slate-200">GIS & 3D Maps</p>
            <p className="text-[11px] text-amber-200/80">PostGIS, GeoServer, Cesium</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3.5 rounded-xl bg-[#E65C00] hover:bg-[#ff6f14] text-white font-bold text-sm tracking-wide shadow-xl hover:shadow-[#E65C00]/40 transition-all hover:scale-105 flex items-center gap-2"
          >
            Explore Projects
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#about"
            className="px-6 py-3.5 rounded-xl bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/25 text-white font-semibold text-sm tracking-wide hover:border-amber-300 transition-all hover:scale-105"
          >
            About Devi
          </a>

          <a
            href="/Devi_Prasad_Full_Stack_Developer_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-slate-100 font-medium text-sm tracking-wide transition-all flex items-center gap-2"
          >
            View Resume
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>
      </div>

      {/* Down arrow anchor */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
        <a
          href="#about"
          className="flex flex-col items-center text-slate-700 hover:text-black transition-colors"
          aria-label="Scroll to about"
        >
          <span className="text-[11px] font-semibold tracking-widest uppercase mb-1">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#E65C00]" />
        </a>
      </div>
    </section>
  );
};
