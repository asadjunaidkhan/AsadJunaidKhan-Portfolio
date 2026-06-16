import { useState } from 'react';
import { ArrowLeft, ArrowRight, Layers, ExternalLink, Smartphone, BarChart3, Wallet } from 'lucide-react';

interface FigmaProject {
  id: string;
  title: string;
  subtitle: string;
  figmaUrl: string;
  embedUrl?: string;
  canEmbed: boolean;
  addressBarText: string;
  description?: string;
  tags?: string[];
}

const projects: FigmaProject[] = [
  {
    id: 'portfolio-wireframes',
    title: 'Carvaan-A Smart Carpooling Application',
    subtitle: 'Interface layouts & user flows',
    figmaUrl:
      'https://www.figma.com/design/QshZ3ebwAsiQAD1dxMderb/Untitled?node-id=0-1&t=HE92ScQWtZrdWmkV-1',
    embedUrl:
      'https://embed.figma.com/design/QshZ3ebwAsiQAD1dxMderb/Untitled?node-id=0-1&embed-host=share',
    canEmbed: true,
    addressBarText: 'figma.com/design/asad-portfolio',
  },
  {
    id: 'lens-ledger',
    title: 'Lens Ledger',
    subtitle: 'Monthly Budget Analysis Application',
    figmaUrl:
      'https://www.figma.com/make/H3PwMfUErtHPPDeXKAlSiz/High-Fidelity-Wireframes-for-Lens-Ledger?fullscreen=1&t=ey29AIHZp7TF7ffh-1&code-node-id=0-9',
    canEmbed: false,
    addressBarText: 'figma.com/make/lens-ledger',
    description:
      'High-fidelity wireframes for a personal finance app that helps users track monthly budgets, visualise spending patterns, and gain actionable insights into their financial habits.',
    tags: ['Budget Tracking', 'Data Visualisation', 'Mobile-First', 'High-Fidelity'],
  },
];



export default function UiUxDesigns() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];

  const handleBack = () => {
    window.location.hash = '';
  };

  return (
    <div className="relative min-h-screen bg-black text-[#DEDBC8] px-4 md:px-8 py-8 md:py-16 flex flex-col font-sans">
      {/* Noise background */}
      <div className="bg-noise opacity-[0.15] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col z-10">
        {/* Header Navigation */}
        <div className="flex items-center justify-between mb-8 md:mb-12 border-b border-[#DEDBC8]/10 pb-6">
          <button
            onClick={handleBack}
            className="group flex items-center gap-2 text-xs sm:text-sm font-medium text-primary/80 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Portfolio
          </button>

          <a
            href={active.figmaUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 bg-primary rounded-full pl-4 sm:pl-5 pr-1.5 py-1.5 transition-all duration-300 hover:gap-3 w-fit"
          >
            <span className="text-black font-medium text-xs sm:text-sm">
              Open in Figma
            </span>
            <span className="flex items-center justify-center bg-black rounded-full w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110 shrink-0">
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DEDBC8]" style={{ transform: 'rotate(-45deg)' }} />
            </span>
          </a>
        </div>

        {/* Info Header */}
        <div className="mb-8 md:mb-12">
          <p className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-3">
            UI/UX designs
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-4 leading-tight">
            Figma Wireframes &amp; Mockups.
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-3xl leading-relaxed">
            A dedicated space showcasing wireframes, user interfaces, and flow diagrams designed for optimal usability and visual hierarchy. Switch between projects below to explore each design.
          </p>
        </div>

        {/* Project Tabs */}
        <div className="flex items-center gap-2 mb-4 overflow-x-auto scrollbar-hide pb-1">
          {projects.map((project, idx) => (
            <button
              key={project.id}
              onClick={() => setActiveIndex(idx)}
              className={`
                group relative flex items-center gap-2.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300
                ${idx === activeIndex
                  ? 'bg-[#1a1a1a] text-white border border-[#DEDBC8]/20 shadow-lg shadow-black/30'
                  : 'bg-transparent text-gray-500 border border-white/5 hover:bg-[#111] hover:text-gray-300 hover:border-white/10'
                }
              `}
            >
              <Layers className={`w-3.5 h-3.5 transition-colors duration-300 ${idx === activeIndex ? 'text-primary' : 'text-gray-600 group-hover:text-gray-400'}`} />
              <div className="flex flex-col items-start gap-0.5">
                <span className="leading-none">{project.title}</span>
                <span className={`text-[9px] sm:text-[10px] leading-none transition-colors duration-300 ${idx === activeIndex ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.subtitle}
                </span>
              </div>
              {/* Active indicator dot */}
              {idx === activeIndex && (
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-primary/80 shadow-sm shadow-primary/30" />
              )}
            </button>
          ))}
        </div>

        {/* Embed / Preview Container */}
        <div className="relative w-full rounded-2xl border border-white/10 bg-[#101010] p-2 flex-1 min-h-[500px] md:min-h-[650px] overflow-hidden shadow-2xl flex flex-col mb-8">
          {/* Browser chrome bar */}
          <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5 bg-black/40 rounded-t-xl shrink-0">
            <span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
            <span className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
            <span className="text-[10px] text-gray-500 ml-2 font-mono transition-all duration-300">
              {active.addressBarText}
            </span>
          </div>

          <div className="relative flex-1 w-full rounded-b-xl overflow-hidden min-h-[450px]">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  opacity: idx === activeIndex ? 1 : 0,
                  pointerEvents: idx === activeIndex ? 'auto' : 'none',
                  zIndex: idx === activeIndex ? 1 : 0,
                }}
              >
                {project.canEmbed && project.embedUrl ? (
                  /* Working iframe embed */
                  <iframe
                    title={`${project.title} Figma wireframes`}
                    className="absolute inset-0 h-full w-full border-0"
                    src={project.embedUrl}
                    allowFullScreen
                    allow="clipboard-write"
                  />
                ) : (
                  /* Premium fallback preview card for non-embeddable files */
                  <div className="absolute inset-0 flex flex-col md:flex-row items-stretch bg-[#0a0a0a]">
                    {/* Left — actual Lens Ledger screenshot */}
                    <div className="relative flex-1 flex items-center justify-center border-b md:border-b-0 md:border-r border-white/5 min-h-[220px] overflow-hidden">
                      <img
                        src="/lens-ledger-preview.png"
                        alt="Lens Ledger high-fidelity wireframes preview"
                        className="w-full h-full object-cover object-top"
                        draggable={false}
                      />
                    </div>

                    {/* Right — project info + CTA */}
                    <div className="flex flex-col justify-center gap-6 p-8 md:p-12 md:w-[42%] shrink-0">
                      {/* Icon row */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#DEDBC8]/8 border border-[#DEDBC8]/12">
                          <Wallet className="w-5 h-5 text-primary/70" />
                        </div>
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#DEDBC8]/8 border border-[#DEDBC8]/12">
                          <BarChart3 className="w-5 h-5 text-primary/70" />
                        </div>
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#DEDBC8]/8 border border-[#DEDBC8]/12">
                          <Smartphone className="w-5 h-5 text-primary/70" />
                        </div>
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#DEDBC8]/8 border border-[#DEDBC8]/12">
                          <Layers className="w-5 h-5 text-primary/70" />
                        </div>
                      </div>

                      {/* Title */}
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.22em] text-primary/50 mb-2">
                          High-Fidelity Wireframes
                        </p>
                        <h2 className="text-2xl sm:text-3xl font-normal text-white leading-snug mb-1">
                          {project.title}
                        </h2>
                        <p className="text-sm text-primary/50">{project.subtitle}</p>
                      </div>

                      {/* Description */}
                      {project.description && (
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {project.description}
                        </p>
                      )}

                      {/* Tags */}
                      {project.tags && (
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full text-[10px] font-medium border border-[#DEDBC8]/12 text-primary/60 bg-[#DEDBC8]/4"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* CTA */}
                      <a
                        href={project.figmaUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-2 bg-primary rounded-full pl-5 pr-1.5 py-1.5 transition-all duration-300 hover:gap-3 w-fit mt-2"
                      >
                        <span className="text-black font-semibold text-sm">
                          View Interactive Prototype
                        </span>
                        <span className="flex items-center justify-center bg-black rounded-full w-8 h-8 transition-transform duration-300 group-hover:scale-110 shrink-0">
                          <ExternalLink className="w-3.5 h-3.5 text-[#DEDBC8]" />
                        </span>
                      </a>

                      <p className="text-[10px] text-gray-600 -mt-3">
                        Opens full interactive prototype in Figma
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
