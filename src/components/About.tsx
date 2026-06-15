import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';
import AnimatedLetter from './AnimatedLetter';

const BODY_TEXT =
  'Computer Science student from FAST NUCES | Passionate about Creative Problem Solving | Full-Stack Development (Web & App) | Machine Learning & Intelligent Systems | Creative in UI/UX design for web and mobile applications | Proficient in arts and design projects | Strong knowledge of modern futsal, including tactical formations, systems, and planning.';

export default function About() {
  const paragraphRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = BODY_TEXT.split('');

  return (
    <section className="bg-black py-16 sm:py-24 md:py-32 px-4 md:px-6">
      <div className="bg-[#101010] rounded-2xl md:rounded-[2rem] max-w-6xl mx-auto px-6 sm:px-10 md:px-16 py-16 sm:py-20 md:py-28 text-center">
        <p className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-6 sm:mb-8">
          Portfolio
        </p>

        <div className="max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9]">
          <WordsPullUpMultiStyle
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            segments={[
              { text: 'I am Asad Junaid,', className: 'font-normal' },
              { text: 'a full-stack developer.', className: 'italic font-serif' },
              {
                text: 'I build mobile apps, web experiences, AI-enabled tools, and user-focused interfaces.',
                className: 'font-normal',
              },
            ]}
          />
        </div>

        <p
          ref={paragraphRef}
          className="text-[#DEDBC8] text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-10 sm:mt-14 leading-relaxed"
        >
          {chars.map((char, i) => (
            <AnimatedLetter
              key={i}
              char={char}
              index={i}
              totalChars={chars.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </p>
      </div>
    </section>
  );
}
