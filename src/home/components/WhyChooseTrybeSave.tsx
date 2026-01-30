import React from 'react';
import { motion, type Variants } from 'framer-motion';
import DecorativeGrid from '../../reusables/decorativeGrid';

const REASONS = [
  {
    title: 'Designed for shared goals, not solo saving',
    desc: 'TrybeSave is made for groups who want to save together, not for individuals trying to manage their own funds.',
  },
  {
    title: 'Built around real trust networks',
    desc: 'The platform enables real, transparent relationships where everyone knows the rules and their roles.',
  },
  {
    title: 'Clear rules reduce conflict',
    desc: 'Setting clear, upfront rules ensures everyone is on the same page, preventing misunderstandings and conflicts.',
  },
  {
    title: 'Group accountability increases success',
    desc: 'When saving is a group effort, accountability is shared. Success is driven by the collective commitment of all members.',
  },
  {
    title: 'Simple, human, and transparent',
    desc: 'TrybeSave is designed to be straightforward, transparent, and easy to use — putting people over processes.',
  },
];

// --- Motion Tokens ---
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const WhyChooseTrybeSave: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-between overflow-hidden">
      {/* BACKGROUND GRADIENT */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, #002d1d 0%, #001a11 100%)',
        }}
      />

      {/* CONTENT LAYER */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10 w-full grow">
        <div className="max-w-3xl space-y-6">
          <motion.span
            variants={fadeUp}
            className="block text-sm font-mono tracking-widest uppercase text-emerald-600">
            Why Groups Choose TrybeSave
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl font-display font-semibold leading-[1.1] text-white tracking-tight">
            Empowering groups <br />
            <span className="text-neutral-400 font-normal">
              to save and grow together.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-neutral-500 leading-relaxed max-w-xl">
            TrybeSave is designed to empower groups to save together, share
            goals, and work with transparency, accountability, and trust.
          </motion.p>
        </div>
      </motion.div>

      {/* REASONS GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-20 border-t border-white/10 bg-neutral-900/50 backdrop-blur-md py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
            {REASONS.map((reason, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-0.5 h-8 bg-emerald-400" />
                  <span className="text-xl font-bold text-white tracking-tight">
                    {reason.title}
                  </span>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed pr-4">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* DECORATIVE GRID */}
      <DecorativeGrid />
    </section>
  );
};

export default WhyChooseTrybeSave;
