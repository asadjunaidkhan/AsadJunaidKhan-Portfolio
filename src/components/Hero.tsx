import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import WordsPullUp from './WordsPullUp';

const HERO_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4';

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="h-screen w-full overflow-hidden">
      <div className="relative h-full w-full overflow-hidden">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={HERO_VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Noise texture overlay */}
        <div className="noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none" />

        {/* Gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

        {/* Navbar */}
        <Navbar />

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 md:p-12">
          <div className="grid grid-cols-12 gap-4 md:gap-8 items-end">
            {/* Heading */}
            <div className="col-span-12 lg:col-span-8">
              <h1
                className="text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[10vw] xl:text-[9.5vw] 2xl:text-[9vw] font-medium leading-[0.85] tracking-[-0.06em]"
                style={{ color: '#E1E0CC' }}
              >
                <WordsPullUp text="Asad Junaid" showAsterisk />
              </h1>
            </div>

            {/* Description + CTA */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 sm:gap-6 pb-2 sm:pb-4 max-w-xl lg:max-w-none">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5, ease: easeOut }}
                className="text-primary/70 text-xs sm:text-sm md:text-base"
                style={{ lineHeight: 1.2 }}
              >
                Computer Science graduate from Karachi building full-stack web and mobile
                products with React Native, JavaScript, Python, databases, REST APIs, and
                practical AI/ML integration.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7, ease: easeOut }}
              >
                <a
                  href="https://github.com/asadjunaidkhan"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 bg-primary rounded-full pl-5 sm:pl-6 pr-1.5 py-1.5 transition-all duration-300 hover:gap-3 w-fit"
                >
                  <span className="text-black font-medium text-sm sm:text-base">
                    View GitHub
                  </span>
                  <span className="flex items-center justify-center bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110 shrink-0">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#E1E0CC]" />
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
