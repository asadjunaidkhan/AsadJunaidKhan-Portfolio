import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Pause } from 'lucide-react';
import Navbar from './Navbar';
import WordsPullUp from './WordsPullUp';

const HERO_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4';

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
      if (audioRef.current.readyState >= 1) {
        audioRef.current.currentTime = 5;
      }

      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            const startPlay = () => {
              if (audioRef.current) {
                audioRef.current.play()
                  .then(() => {
                    setIsPlaying(true);
                  })
                  .catch((err) => console.error('Audio interaction play failed:', err));
              }
              removeEvents();
            };

            const removeEvents = () => {
              window.removeEventListener('click', startPlay);
              window.removeEventListener('keydown', startPlay);
              window.removeEventListener('mousemove', startPlay);
              window.removeEventListener('touchstart', startPlay);
              window.removeEventListener('scroll', startPlay);
            };

            window.addEventListener('click', startPlay);
            window.addEventListener('keydown', startPlay);
            window.addEventListener('mousemove', startPlay);
            window.addEventListener('touchstart', startPlay);
            window.addEventListener('scroll', startPlay);
          });
      }
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => {
          console.error('Audio play failed:', err);
        });
      }
    }
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 5;
    }
  };

  const handleEnded = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 5;
      audioRef.current.play().catch((err) => {
        console.error('Audio replay failed:', err);
      });
    }
  };

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
              {/* Music Player */}
              <div className="flex items-center gap-3 mb-6 sm:mb-8 w-fit pointer-events-auto">
                <button
                  onClick={togglePlay}
                  className="flex items-center justify-center w-8 h-8 rounded-full shrink-0 border border-primary/20 bg-black/40 hover:bg-primary hover:text-black transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-primary"
                  style={{ color: '#E1E0CC' }}
                  aria-label={isPlaying ? 'Pause music' : 'Play music'}
                >
                  {isPlaying ? (
                    <Pause className="w-3.5 h-3.5 fill-current" />
                  ) : (
                    <Play className="w-3.5 h-3.5 fill-current" />
                  )}
                </button>
                <span
                  className="text-[10px] sm:text-xs uppercase tracking-[0.2em] select-none font-normal"
                  style={{ color: '#E1E0CC' }}
                >
                  Blondie - Current Joys
                </span>
                <audio
                  ref={audioRef}
                  src="/current_joys_blondie.mp3"
                  autoPlay
                  onPlay={handlePlay}
                  onPause={handlePause}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={handleEnded}
                />
              </div>

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
