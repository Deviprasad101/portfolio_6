import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      company: 'IIT Tirupati Navavishkar I-Hub Foundation (IITTNiF)',
      role: 'Full Stack Developer',
      dates: '11/2025 – 09/2026',
      location: 'Tirupati, Andhra Pradesh, India',
      type: 'Full-time / Contract',
      summary:
        'Engineered responsive full-stack applications and geospatial web services using React, TypeScript, Python, FastAPI, and Flask. Spearheaded RESTful API integrations with PostgreSQL and automated Docker containerization pipelines.',
      bullets: [
        'Developed scalable full-stack web applications using Python, FastAPI, Flask, React.js, HTML5, CSS3, and JavaScript.',
        'Designed and integrated high-throughput REST APIs with PostgreSQL, writing complex SQL queries and index optimizations.',
        'Managed source code versioning with Git/GitHub, leading automated testing, debugging, and continuous deployment workflows.',
        'Engineered mobile-responsive web interfaces with modern CSS/Tailwind and containerized applications using Docker for frictionless production rollouts.',
      ],
      tags: ['React.js', 'TypeScript', 'Python', 'FastAPI', 'Flask', 'PostgreSQL', 'Docker', 'REST APIs', 'Git/GitHub', 'Tailwind CSS'],
    },
    {
      company: 'Malla Reddy Engineering College',
      role: 'Full Stack & AIML Project Lead',
      dates: '2024 – 2025',
      location: 'Hyderabad, India',
      type: 'Academic & Capstone',
      summary:
        'Led team development of intelligent data-driven applications combining web technologies with applied machine learning and geospatial data processing pipelines.',
      bullets: [
        'Built full-stack prototypes integrating Python ML inference endpoints with responsive React dashboards.',
        'Collaborated on cloud deployment, version control branching strategies, and database schema design.',
        'Coordinated sprint deliverables, code reviews, and presentations to department faculty.',
      ],
      tags: ['Python', 'React', 'Machine Learning', 'SQL', 'FastAPI', 'Data Visualization'],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-[#EAE2D2] text-stone-900 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E65C00]/15 text-[#9E3E00] text-xs font-bold uppercase tracking-widest mb-3">
            Career Timeline
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
            Professional Experience & Milestones
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed">
            Hands-on track record building production systems in research institutions and engineering labs.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Rule */}
          <div className="hidden sm:block absolute left-8 top-4 bottom-4 w-0.5 bg-stone-400/40" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative sm:pl-24 group">
                {/* Timeline node icon */}
                <div className="hidden sm:flex absolute left-5 top-1.5 -translate-x-1/2 w-8 h-8 rounded-full bg-[#E65C00] text-white items-center justify-center shadow-md group-hover:scale-125 transition-transform duration-300 ring-4 ring-[#EAE2D2]">
                  <Briefcase className="w-4 h-4" />
                </div>

                {/* Card */}
                <div className="bg-[#FAF7F2]/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-stone-300/80 shadow-lg group-hover:shadow-xl group-hover:border-[#E65C00]/40 transition-all duration-300">
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-stone-200 pb-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                          {exp.role}
                        </h3>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#E65C00]/10 text-[#9E3E00] font-semibold border border-[#E65C00]/20">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-base font-semibold text-[#B34500] mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-stone-600 gap-1">
                      <span className="inline-flex items-center gap-1 font-semibold text-stone-800">
                        <Calendar className="w-3.5 h-3.5 text-[#E65C00]" />
                        {exp.dates}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-stone-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description Paragraph */}
                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-4">
                    {exp.summary}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 mb-6">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-[#E65C00] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-2">
                      Technologies & Tools Applied
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-stone-200/80 hover:bg-[#E65C00]/15 hover:text-[#9E3E00] text-stone-800 text-xs font-medium transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
