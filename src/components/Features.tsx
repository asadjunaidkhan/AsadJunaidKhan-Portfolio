import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Award, Brain, Check, Code, Palette } from 'lucide-react';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';

const VIDEO_CARD_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4';

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

interface ChecklistCardProps {
  index: number;
  id?: string;
  number: string;
  icon: ReactNode;
  title: string;
  items: string[];
  href?: string;
  linkLabel?: string;
}

/** Card layout: icon, numbered title, checklist, and a project/profile link. */
function ChecklistCard({
  index,
  id,
  number,
  icon,
  title,
  items,
  href = 'https://github.com/asadjunaidkhan',
  linkLabel = 'See work',
}: ChecklistCardProps) {
  return (
    <CardShell id={id} index={index} className="bg-[#212121] flex flex-col p-5 sm:p-6 h-full scroll-mt-24">
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md sm:rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 sm:mb-8">
        {icon}
      </div>

      <h3 className="text-primary text-base sm:text-lg md:text-xl font-normal mb-4 sm:mb-6">
        {title}{' '}
        <span className="text-gray-500">({number})</span>
      </h3>

      <ul className="flex flex-col gap-2 sm:gap-3 mb-6 sm:mb-8">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-xs sm:text-sm">
            <Check className="text-primary w-4 h-4 shrink-0 mt-0.5" />
            <span className="text-gray-400">{item}</span>
          </li>
        ))}
      </ul>

      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
        className="group mt-auto inline-flex items-center gap-2 text-primary text-xs sm:text-sm font-medium w-fit"
      >
        {linkLabel}
        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ transform: 'rotate(-45deg)' }} />
      </a>
    </CardShell>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:h-[480px] gap-3 sm:gap-2 md:gap-1">
          {/* Card 1: Video */}
          <CardShell index={0} className="relative min-h-[320px] lg:min-h-0">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={VIDEO_CARD_URL}
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70" />
            <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6">
              <p className="text-base sm:text-lg md:text-xl" style={{ color: '#E1E0CC' }}>
                Computer Science graduate. Product-minded developer.
              </p>
            </div>
          </CardShell>

          <ChecklistCard
            id="ui-ux"
            index={1}
            number="01"
            icon={<Palette className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="UI/UX designs."
            items={[
              'User experience design',
              'Sketching and brainstorming',
              'Responsive front-end interfaces',
              'Cross-browser compatibility',
            ]}
          />

          <ChecklistCard
            id="full-stack"
            index={2}
            number="02"
            icon={<Code className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Full Stack development."
            items={[
              'React Native and Expo Router apps',
              'JavaScript, Python, MySQL, MongoDB',
              'REST APIs and back-end logic',
              'Carvaan smart carpooling app',
            ]}
          />

          <ChecklistCard
            id="ai-ml"
            index={3}
            number="03"
            icon={<Brain className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="AI/ML."
            items={[
              'Machine learning fundamentals',
              'AI implementation and integration',
              'LensLedger receipt capture',
              'Real-time image classification',
            ]}
          />
        </div>

        <CardShell index={4} className="mt-3 sm:mt-2 md:mt-1 bg-[#161616] p-5 sm:p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md sm:rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-primary text-lg sm:text-xl md:text-2xl font-normal mb-2">
                  Experience, education, and recognition.
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-3xl leading-relaxed">
                  App/Web Developer Intern at Stellar Clique, BS Computer Science at FAST
                  National University, 1st Position in PseudoWars 2023, and 3rd Position in
                  PseudoWars 2024.
                </p>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/in/asad-junaid-1aa9882bb/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-primary text-xs sm:text-sm font-medium w-fit shrink-0"
            >
              Open LinkedIn
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ transform: 'rotate(-45deg)' }} />
            </a>
          </div>
        </CardShell>

        <CardShell
          id="ui-ux-wireframes"
          index={5}
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
