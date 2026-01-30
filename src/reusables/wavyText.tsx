import React from 'react';
import { motion, cubicBezier } from 'framer-motion';

// Define the prop type
interface WavyTextProps {
  text: string; // The text that will have the wavy effect
}

const WavyText: React.FC<WavyTextProps> = ({ text }) => {
  // Define cubic bezier easing
  const EASE_PREMIUM = cubicBezier(0.22, 1, 0.36, 1);

  // Animation variant for each letter
  const letterVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 10, -10, 0], // The wavy movement pattern
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 0.1,
        ease: EASE_PREMIUM,
      },
    },
  };

  return (
    <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-center text-black dark:text-white">
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          initial="initial"
          animate="animate"
          style={{ display: 'inline-block' }}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default WavyText;
