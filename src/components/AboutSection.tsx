import React from 'react';
import { 
  GraduationCap, 
  Layers, 
  Cpu, 
  Database, 
  Terminal, 
  Sparkles, 
  Download, 
  CheckCircle
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend & UI',
      icon: <Layers className="w-4 h-4 text-[#E65C00]" />,
      skills: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5', 'CSS3', 'Responsive Design'],
    },
    {
      title: 'Backend & APIs',
      icon: <Terminal className="w-4 h-4 text-[#E65C00]" />,
      skills: ['Python', 'FastAPI', 'Flask', 'RESTful APIs', 'Session-Based Auth', 'Microservices Architecture'],
    },
    {
      title: 'Databases & Spatial',
      icon: <Database className="w-4 h-4 text-[#E65C00]" />,
      skills: ['PostgreSQL', 'PostGIS', 'SQL Queries', 'GeoServer', 'Cesium 3D', 'Leaflet', 'GDAL / OGR'],
    },
    {
      title: 'DevOps & Tooling',
      icon: <Cpu className="w-4 h-4 text-[#E65C00]" />,
      skills: ['Docker Containerization', 'Git / GitHub', 'CI/CD Pipelines', 'Linux Environment', 'App Optimization'],
    },
    {
      title: 'AI-Assisted Engineering',
      icon: <Sparkles className="w-4 h-4 text-[#E65C00]" />,
      skills: ['Antigravity IDE', 'Cursor', 'Claude AI', 'Prompt Engineering', 'Rapid Prototyping'],
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#FAF7F2] text-slate-800 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E65C00]/10 text-[#E65C00] text-xs font-bold uppercase tracking-widest mb-3">
            About Me
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Engineering resilient, human-centered digital experiences.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A developer who bridges user-focused interactive interfaces with high-performance backends and cloud-ready infrastructure.
          </p>
        </div>

        {/* Grid: Photo & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Portrait Photo Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Outer decorative borders and gradients */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#E65C00]/25 via-amber-200/40 to-transparent rounded-3xl blur-xl group-hover:scale-105 transition-all duration-500" />
              
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-2xl border-4 border-white max-w-sm">
                <img
                  src="/assets/devi_portrait.jpg"
                  alt="Devi Prasad Chinthamreddy"
                  className="w-full h-auto object-cover transform group-hover:scale-103 transition-transform duration-700 aspect-square"
                  loading="lazy"
                />

                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-200/80 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-900">Devi Prasad</p>
                    <p className="text-[11px] text-[#E65C00] font-semibold">Tirupati, AP, India</p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Available
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Overview Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
              Hi, I'm <span className="text-[#E65C00]">Devi Prasad</span> — a Full Stack Developer passionate about scalable web architecture, DevOps, and cloud reliability.
            </h3>

            <p className="mt-5 text-slate-700 text-base sm:text-lg leading-relaxed">
              With hands-on experience building and supporting production-grade web applications at <strong>IIT Tirupati Navavishkar I-Hub Foundation (IITTNiF)</strong>, I specialize in architecting full-stack systems with <strong>React.js, TypeScript, Python, FastAPI, and PostgreSQL</strong>.
            </p>

            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              I have strong experience containerizing applications with <strong>Docker</strong>, managing automated testing and deployments with <strong>Git/GitHub</strong>, and building sophisticated geospatial platforms using tools like <strong>PostGIS, GeoServer, and Cesium 3D</strong>. I'm keen on bringing this expertise into cloud engineering, Site Reliability Engineering (SRE), and high-impact software teams.
            </p>

            {/* Quick Highlights */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-slate-200 shadow-sm">
                <CheckCircle className="w-5 h-5 text-[#E65C00] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-800">
                  Specialized in modern React + Tailwind CSS architectures
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-slate-200 shadow-sm">
                <CheckCircle className="w-5 h-5 text-[#E65C00] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-800">
                  Strong backend API engineering in FastAPI & Flask
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-slate-200 shadow-sm">
                <CheckCircle className="w-5 h-5 text-[#E65C00] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-800">
                  PostgreSQL, PostGIS, & advanced SQL query optimization
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-slate-200 shadow-sm">
                <CheckCircle className="w-5 h-5 text-[#E65C00] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-800">
                  AI-native workflow with Antigravity, Cursor, & Claude
                </span>
              </div>
            </div>

            {/* Education Summary Card */}
            <div className="mt-6 p-4 rounded-xl bg-white/90 border border-slate-200/90 shadow-sm flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#E65C00]/10 text-[#E65C00]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">B.Tech - Computer Science & Engineering (AIML)</p>
                  <p className="text-xs text-slate-500">Malla Reddy Engineering College (2021 – 2025) · 7.06 CGPA</p>
                </div>
              </div>
              <a
                href="/Devi_Prasad_Full_Stack_Developer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#E65C00] hover:bg-[#d45200] text-white text-xs font-semibold shadow-sm transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                Download CV
              </a>
            </div>

          </div>
        </div>

        {/* Skills Ecosystem Section */}
        <div className="mt-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Technical Competencies</h3>
            <p className="text-slate-600 text-sm mt-1">Tools and frameworks I leverage to ship robust products.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#E65C00]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3 font-bold text-slate-900 text-sm">
                    {cat.icon}
                    <span>{cat.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
