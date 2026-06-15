import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function UiUxDesigns() {
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
            href="https://www.figma.com/design/QshZ3ebwAsiQAD1dxMderb/Untitled?node-id=0-1&t=HE92ScQWtZrdWmkV-1"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 text-xs sm:text-sm font-medium text-primary/80 hover:text-white transition-colors duration-300"
          >
            Open in Figma
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ transform: 'rotate(-45deg)' }} />
          </a>
        </div>

        {/* Info Header */}
        <div className="mb-8 md:mb-12">
          <p className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-3">
            UI/UX designs
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-4 leading-tight">
            Figma Wireframes & Mockups.
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-3xl leading-relaxed">
            A dedicated space showcasing wireframes, user interfaces, and flow diagrams designed for optimal usability and visual hierarchy. Below is the interactive Figma embed where you can explore the layouts in detail.
          </p>
        </div>

        {/* Figma Embed Container */}
        <div className="relative w-full rounded-2xl border border-white/10 bg-[#101010] p-2 flex-1 min-h-[500px] md:min-h-[650px] overflow-hidden shadow-2xl flex flex-col mb-8">
          {/* Header bar simulating browser / viewer frame */}
          <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5 bg-black/40 rounded-t-xl shrink-0">
            <span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
            <span className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
            <span className="text-[10px] text-gray-500 ml-2 font-mono">figma.com/design/asad-portfolio</span>
          </div>
          <div className="relative flex-1 w-full bg-black rounded-b-xl overflow-hidden min-h-[450px]">
            <iframe
              title="Asad Junaid UI/UX Figma wireframes"
              className="absolute inset-0 h-full w-full border-0"
              src="https://embed.figma.com/design/QshZ3ebwAsiQAD1dxMderb/Untitled?node-id=0-1&embed-host=share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}
