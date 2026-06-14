import { motion, useTransform, type MotionValue } from 'framer-motion';

interface AnimatedLetterProps {
  char: string;
  index: number;
  totalChars: number;
  scrollYProgress: MotionValue<number>;
}

/**
 * Renders a single character whose opacity is tied to scroll progress,
 * creating a progressive reveal effect as the user scrolls through the
 * paragraph.
 */
export default function AnimatedLetter({ char, index, totalChars, scrollYProgress }: AnimatedLetterProps) {
  const charProgress = index / totalChars;
  const start = charProgress - 0.1;
  const end = charProgress + 0.05;

  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1], {
    clamp: true,
  });

  return (
    <motion.span style={{ opacity }}>
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  );
}
