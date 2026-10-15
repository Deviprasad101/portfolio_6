import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#121214] text-slate-100 flex flex-col font-sans selection:bg-[#E65C00] selection:text-white">
      {/* Sticky frosted Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero: Full-bleed video with name overlay & warm orange gradient */}
        <HeroSection />

        {/* About: Cream section with portrait photo, bio, skills & education */}
        <AboutSection />

        {/* Experience: Sand-toned timeline with reverse-chronological career entries */}
        <ExperienceSection />

        {/* Projects: Dark charcoal section with Geo Trip Planner & Geo Intel Meta Hub */}
        <ProjectsSection />

        {/* Contact: Dark charcoal with interactive form, email copy & social links */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
