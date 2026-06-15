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

        {/* Skills Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6 border-b border-[#DEDBC8]/10 pb-3">
            <h3 className="text-primary text-base sm:text-lg font-normal">
              Skills & Expertise.
            </h3>
            <span className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-wider font-mono">
              Core Competencies
            </span>
          </div>

          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-2.5">
            {[
              'Effective Communication',
              'Problem Solving',
              'Analytical thinking',
              'Time Management',
              'Full-Stack Development',
              'User Experience Design',
              'Machine Learning',
              'AI Integration',
              'Futsal Coaching',
              'AI Implementation',
              'Sketching & Brainstorming',
              'Arts & Crafts',
            ].map((skill, idx) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true, margin: '-50px' });
              return (
                <motion.div
                  key={skill}
                  ref={ref}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: idx * 0.04 }}
                  className="flex items-center justify-center text-center px-2 py-2.5 sm:py-3 md:py-4 min-h-[42px] sm:min-h-[55px] md:min-h-[65px] rounded-xl bg-[#121212] border border-white/5 text-[#DEDBC8]/85 text-[9px] sm:text-xs md:text-sm font-normal transition-all duration-300 hover:scale-[1.02] hover:bg-[#1a1a1a] hover:border-[#DEDBC8]/30 hover:text-white cursor-default select-none shadow-sm"
                >
                  {skill}
                </motion.div>
              );
            })}
          </div>
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
                  <strong>BS Computer Science</strong> from FAST National University. Specialized in Full-Stack Development, Artificial Intelligence & Machine Learning.
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
          id="ui-ux-teaser"
          index={3}
          className="mt-3 sm:mt-2 md:mt-1 bg-[#101010] p-6 sm:p-8 md:p-10 cursor-pointer group hover:bg-[#161616] transition-all duration-300"
        >
          <a href="#ui-ux" className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <p className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-2">
                UI/UX designs
              </p>
              <h3 className="text-primary text-xl sm:text-2xl md:text-3xl font-normal group-hover:text-white transition-colors duration-300">
                Figma wireframes & layouts.
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-2 max-w-xl leading-relaxed">
                Explore full user journeys, wireframes, and interface layouts designed to create seamless digital experiences.
              </p>
            </div>
            <div className="flex items-center gap-2 text-primary group-hover:text-white font-medium text-xs sm:text-sm shrink-0 transition-colors duration-300">
              <span>View Designs Page</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </a>
        </CardShell>
      </div>
    </section>
  );
}
