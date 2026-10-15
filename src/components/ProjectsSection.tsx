import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Sparkles,
  Maximize2,
  X
} from 'lucide-react';
import { GithubIcon } from './Icons';

interface Project {
  id: string;
  title: string;
  tagline: string;
  coverImage: string;
  problem: string;
  solution: string;
  outcome: string;
  techStack: string[];
  features: string[];
  category: string;
}

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const projects: Project[] = [
    {
      id: 'geo-trip-planner',
      title: 'Geo Trip Planner',
      tagline: 'Smart Pilgrimage & Travel Routing Platform',
      coverImage: '/assets/geo_trip_planner.jpg',
      problem:
        'Pilgrims visiting sacred multi-stop temple circuits in Tirupati struggle to navigate crowded schedules, pick suitable budget accommodations, and keep track of visits across destinations without unified digital tools.',
      solution:
        'Engineered an interactive web application that automates budget-tailored itinerary generation, incorporates a dynamic place picker with turn-by-turn routing via OpenStreetMap/OSRM, and implements QR-based physical check-in tokens.',
      outcome:
        'Enabled devotees to reduce planning time by over 60%, share real-time GPS routes, allowed field coordinators to verify pilgrim check-ins with quick QR scans, and provided administrators with real-time footfall telemetry.',
      techStack: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Python Flask',
        'Leaflet.js',
        'PostgreSQL',
        'OpenStreetMap / OSRM',
        'Session Auth',
      ],
      features: [
        'Dynamic Budget Tier Estimator & Package Selector',
        'Interactive Topographical Route Map with Elevation Profiling',
        'Personal Temple QR Check-In Verification System',
        'Administrative Dashboard for Pilgrim Influx Analytics',
      ],
      category: 'Geospatial Web & Navigation',
    },
    {
      id: 'geo-intel-meta-hub',
      title: 'Geo Intel Meta Hub',
      tagline: 'Enterprise 3D GIS & Geospatial Catalog Pipeline',
      coverImage: '/assets/geo_intel_hub.jpg',
      problem:
        'Organizations dealing with heterogenous spatial data (vector shapefiles, satellite geotiffs, LiDAR LAS point clouds, and 3D tiles) suffer from fragmented file storage, lack of spatial indexing, and slow multi-viewer rendering.',
      solution:
        'Built a centralized ingestion and cataloging hub utilizing GDAL/PDAL pipelines to parse spatial data, automatically publish layers to GeoServer & PostGIS, and render interactive 3D digital globes in Cesium.',
      outcome:
        'Established a unified spatial data catalog delivering WMS/WFS endpoints with sub-second spatial querying, instantaneous browser-based 3D point cloud streaming, and streamlined asset discovery for analysts.',
      techStack: [
        'React',
        'TypeScript',
        'Python Flask',
        'PostgreSQL / PostGIS',
        'GeoServer',
        'Cesium 3D Globe',
        'GDAL / PDAL / ogr2ogr',
        'Tailwind CSS',
      ],
      features: [
        'Automated Ingestion Pipeline for Vector, Raster & LiDAR Data',
        'Real-time WMS / WFS Layer Catalog & Metadata Search',
        'Cesium-Powered 3D Globe Viewer with Terrain & Building Meshes',
        'Multi-Format Spatial Querying & Geospatial Filter Tooling',
      ],
      category: 'Cloud GIS & 3D Analytics',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-[#121214] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#E65C00]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E65C00]/15 text-[#FF8C38] text-xs font-bold uppercase tracking-widest mb-3 border border-[#E65C00]/30">
            Selected Works
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Featured Projects & Innovations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Production-grade systems delivering real-world utility in travel intelligence, spatial analysis, and high-performance web tooling.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#18181B] rounded-3xl border border-white/10 overflow-hidden shadow-2xl hover:border-[#E65C00]/50 transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
            >
              {/* Cover Graphic Container */}
              <div className="relative aspect-video overflow-hidden bg-black/60 cursor-pointer" onClick={() => setSelectedProject(project)}>
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                  loading="lazy"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#18181B] via-black/20 to-transparent" />

                {/* Category tag */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-xs font-medium text-amber-300 flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF8C38]" />
                  <span>{project.category}</span>
                </div>

                {/* Quick inspect button */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20 hover:bg-[#E65C00]">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#FF8C38] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-amber-200/80 mb-4 tracking-wide uppercase">
                    {project.tagline}
                  </p>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {project.problem}
                  </p>

                  {/* Highlighted solution callout */}
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 mb-5">
                    <p className="text-xs font-semibold text-[#FF8C38] uppercase tracking-wider mb-1">
                      Architectural Solution
                    </p>
                    <p className="text-xs text-slate-300 leading-normal">
                      {project.solution}
                    </p>
                  </div>

                  {/* Feature Bullets */}
                  <div className="space-y-1.5 mb-6">
                    {project.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-[#FF8C38] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with Tech Stack and Actions */}
                <div className="pt-4 border-t border-white/10 mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-white/5 text-slate-300 text-xs font-medium border border-white/10 hover:border-amber-400/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-bold text-[#FF8C38] hover:text-white flex items-center gap-1.5 uppercase tracking-wider transition-colors"
                    >
                      Deep Dive Specs
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href="https://github.com/deviprasad101"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                        title="View repository on GitHub"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href="#contact"
                        className="px-3 py-1.5 rounded-lg bg-[#E65C00] hover:bg-[#ff6f14] text-white text-xs font-semibold transition-all shadow-sm"
                      >
                        Inquire Project
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Project Modal Dialog */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-[#18181B] border border-white/20 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-white/10">
                <img
                  src={selectedProject.coverImage}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#FF8C38]">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-semibold text-amber-200/80 mb-6">
                {selectedProject.tagline}
              </p>

              <div className="space-y-4 text-sm text-slate-300">
                <div>
                  <h4 className="font-bold text-white text-base mb-1">Challenge & Problem</h4>
                  <p className="leading-relaxed">{selectedProject.problem}</p>
                </div>

                <div>
                  <h4 className="font-bold text-white text-base mb-1">Architecture & Solution</h4>
                  <p className="leading-relaxed">{selectedProject.solution}</p>
                </div>

                <div>
                  <h4 className="font-bold text-white text-base mb-1">Measurable Outcome</h4>
                  <p className="leading-relaxed text-amber-100/90">{selectedProject.outcome}</p>
                </div>

                <div>
                  <h4 className="font-bold text-white text-base mb-2">Key Highlights</h4>
                  <ul className="space-y-1.5">
                    {selectedProject.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#FF8C38] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h4 className="font-bold text-white text-sm mb-2">Full Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-white/10 text-slate-200 text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-all"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-[#E65C00] hover:bg-[#ff6f14] text-white text-xs font-semibold shadow-md transition-all"
                >
                  Discuss this project with Devi
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
