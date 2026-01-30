import React from 'react';
import { Link } from 'react-router-dom';
import { motion, type Variants, type Transition } from 'framer-motion';

// --- Motion tokens ---
const EASE_PREMIUM: Transition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1] as any,
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: EASE_PREMIUM },
};

const CTA: React.FC = () => {
  return (
    <section className="relative py-24 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* MAIN CONTAINER */}
        <div className="relative rounded-[3rem] bg-(--primary) overflow-visible py-24 px-8 md:px-12 text-center text-white">
          {/* FLOATING GRAPHIC AREA */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="relative">
              {/* Central Globe */}
              <div className="relative w-32 h-32 md:w-44 md:h-44 bg-linear-to-br from-blue-400 to-(--primary-light) rounded-full shadow-2xl overflow-hidden border-4 border-white/20 flex items-center justify-center">
                {/* Glow */}
                <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_center,#fff_0%,transparent_70%)] animate-pulse" />

                {/* Brand text */}
                <span className="relative z-10 font-display font-bold tracking-tight text-white text-sm md:text-lg drop-shadow-md pointer-events-none">
                  TrybeSave
                </span>
              </div>

              {/* Decorative coins */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -left-8 top-4 w-12 h-12 bg-amber-400 rounded-full border-2 border-amber-500 flex items-center justify-center font-bold text-amber-900 text-xl shadow-lg -rotate-12">
                $
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -right-6 bottom-4 w-14 h-14 bg-amber-400 rounded-full border-2 border-amber-500 flex items-center justify-center font-bold text-amber-900 text-2xl shadow-lg rotate-12">
                £
              </motion.div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="max-w-3xl mx-auto mt-12 space-y-8">
            <motion.h2
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white">
              Start saving <br /> together today.
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              className="text-lg md:text-xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
              Create a group. Set a goal. Reach it together.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              className="pt-6">
              <Link
                to="/auth"
                className="inline-flex items-center justify-center px-10 py-4
                           bg-white hover:bg-white/90
                           text-(--primary) font-bold rounded-full text-lg
                           transition-all shadow-xl">
                Start your group in 2 minutes
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
