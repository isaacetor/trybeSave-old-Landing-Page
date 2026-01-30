import React from 'react';
import { motion } from 'framer-motion';

// const companyLogos = [
//   '/logos/visa.svg',
//   '/logos/mastercard.svg',
//   '/logos/stripe.svg',
//   '/logos/paypal.svg',
//   '/logos/google.svg',
//   '/logos/facebook.svg',
// ];

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="
            absolute top-1/4 left-1/2
            h-100 w-75
            rounded-full
            bg-(--primary)/20
            blur-3xl
          "
          animate={{ x: [-100, 100, -100] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="
            absolute top-1/2 right-1/3
            h-75 w-75
            rounded-full
            bg-indigo-500/20
            blur-3xl
          "
          animate={{ y: [-80, 80, -80] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl text-center mx-auto space-y-8 flex-1 flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-display capitalize font-black text-5xl md:text-7xl lg:text-7xl leading-tight text-black dark:text-white">
          Saving together Made simple.
        </motion.h1>

        {/* <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto max-w-2xl text-lg md:text-xl text-black/70 dark:text-white/70">
          TrybeSave helps families, friends, and communities save into one
          shared account for life’s goals — securely, transparently, and
          together.
        </motion.p> */}

        {/* <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button className="bg-(--primary) hover:bg-(--primary-light) text-white px-6 py-3 rounded-lg">
            Join a savings group
          </button>
          <button className="bg-transparent border border-(--primary) text-(--primary) hover:bg-(--primary)/10 px-6 py-3 rounded-lg">
            Start a group
          </button>
        </motion.div> */}
      </div>

      {/* Logos Section at Bottom */}

      <div className="relative mt-auto w-full">
        {/* Upward gradient */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center gap-4 py-6">
          {/* Label */}
          {/* <span className="text-xs uppercase tracking-widest text-black/50 dark:text-white/50">
            Mentioned in:
          </span> */}

          {/* Logos */}
          {/* <div className="flex flex-wrap justify-center gap-8">
            {companyLogos.map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt={`Company ${idx + 1}`}
                className="
            h-8 sm:h-10
            grayscale
            opacity-70
            hover:opacity-100
            transition-opacity duration-300
          "
              />
            ))}
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
