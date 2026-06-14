import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
}

/**
 * Takes an array of {text, className} segments, splits all of them into
 * individual words while preserving each word's segment className, and
 * animates every word sliding up into view with a shared stagger.
 */
export default function WordsPullUpMultiStyle({ segments, className = '' }: WordsPullUpMultiStyleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const words = segments.flatMap((segment) =>
    segment.text.split(' ').map((word) => ({ word, className: segment.className ?? '' }))
  );

  return (
    <span ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {words.map((item, i) => (
        <motion.span
          key={`${item.word}-${i}`}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            delay: i * 0.08,
          }}
          className={`inline-block whitespace-pre ${item.className}`}
        >
          {item.word}
          {'\u00A0'}
        </motion.span>
      ))}
    </span>
  );
}
