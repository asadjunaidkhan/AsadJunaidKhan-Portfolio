import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Award, Briefcase, GraduationCap } from 'lucide-react';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';

interface CardShellProps {
  index: number;
  id?: string;
  className?: string;
  children: ReactNode;
}

/** Shared entrance animation wrapper for each feature card. */
function CardShell({ index, id, className = '', children }: CardShellProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      id={id}
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
      className={`relative rounded-2xl overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function Features() {
  return (
    <section className="relative min-h-screen bg-black px-4 md:px-6 py-16 sm:py-24 md:py-32">
      <div className="bg-noise opacity-[0.15]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <WordsPullUpMultiStyle
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight"
            segments={[
              { text: 'Projects shaped by code, product thinking, and design.', className: 'text-primary' },
              { text: 'Portfolio built around full-stack products, UX thinking, and practical AI.', className: 'text-gray-500' },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-2 md:gap-1 mb-3 sm:mb-2 md:mb-1">
          {/* Card 1: Experience */}
          <CardShell index={0} className="bg-[#161616] p-5 sm:p-6 md:p-8 flex flex-col justify-between h-full min-h-[220px]">
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md sm:rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-primary text-base sm:text-lg font-normal mb-2">
                  Experience.
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  <strong>App/Web Developer Intern</strong> at Stellar Clique. Built full-stack web products and mobile features.
                </p>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/in/asad-junaid-1aa9882bb/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-primary text-xs sm:text-sm font-medium w-fit shrink-0 mt-4"
            >
              Open LinkedIn
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ transform: 'rotate(-45deg)' }} />
            </a>
          </CardShell>

          {/* Card 2: Education */}
          <CardShell index={1} className="bg-[#161616] p-5 sm:p-6 md:p-8 flex flex-col justify-between h-full min-h-[220px]">
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md sm:rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-primary text-base sm:text-lg font-normal mb-2">
                  Education.
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  <strong>BS Computer Science</strong> from FAST National University. Specialized in software engineering and algorithms.
                </p>
              </div>
            </div>
          </CardShell>

          {/* Card 3: Certifications & Recognition */}
          <CardShell index={2} className="bg-[#161616] p-5 sm:p-6 md:p-8 flex flex-col justify-between h-full min-h-[220px]">
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md sm:rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-primary text-base sm:text-lg font-normal mb-2">
                  Certifications & Awards.
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Achieved <strong>1st Position</strong> in PseudoWars 2023 and <strong>3rd Position</strong> in PseudoWars 2024.
                </p>
              </div>
            </div>
          </CardShell>
        </div>

        <CardShell
          id="ui-ux-wireframes"
          index={3}
          className="mt-3 sm:mt-2 md:mt-1 bg-[#101010] p-4 sm:p-5 md:p-6 scroll-mt-24"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-5">
            <div>
              <p className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-2">
                UI/UX designs
              </p>
              <h3 className="text-primary text-xl sm:text-2xl md:text-3xl font-normal">
                Figma wireframes.
              </h3>
            </div>
            <a
              href="https://www.figma.com/design/QshZ3ebwAsiQAD1dxMderb/Untitled?node-id=0-1&t=HE92ScQWtZrdWmkV-1"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-primary text-xs sm:text-sm font-medium w-fit shrink-0"
            >
              Open in Figma
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ transform: 'rotate(-45deg)' }} />
            </a>
          </div>

          <div className="relative w-full overflow-hidden rounded-xl bg-black aspect-[16/10] sm:aspect-video">
            <iframe
              title="Asad Junaid UI/UX Figma wireframes"
              className="absolute inset-0 h-full w-full border-0"
              src="https://embed.figma.com/design/QshZ3ebwAsiQAD1dxMderb/Untitled?node-id=0-1&embed-host=share"
              allowFullScreen
            />
          </div>
        </CardShell>
      </div>
    </section>
  );
}
