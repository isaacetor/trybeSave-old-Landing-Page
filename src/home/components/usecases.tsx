import React from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  UsersThree,
  House,
  Heart,
  Buildings,
  ChartLineUp,
} from 'phosphor-react';
import DecorativeGrid from '../../reusables/decorativeGrid';

// --- Motion Tokens ---
const CUBIC_BEZIER: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: CUBIC_BEZIER },
  },
};

// --- Use Cases Data with Images ---
const USE_CASES = [
  {
    icon: UsersThree,
    title: 'Family emergency funds',
    image: 'https://plus.unsplash.com/premium_photo-1733266857077-1b6b873f49b7',
  },
  {
    icon: House,
    title: 'Rent deposits & home savings',
    image: 'https://plus.unsplash.com/premium_photo-1663054905716-e81a0dae79fa',
  },
  {
    icon: Heart,
    title: 'Weddings & major life events',
    image: 'https://images.unsplash.com/photo-1505944357431-27579db47558',
  },
  {
    icon: Buildings,
    title: 'Community & faith-based savings',
    image: 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2',
  },
  {
    icon: ChartLineUp,
    title: 'Long-term family wealth planning',
    image: 'https://plus.unsplash.com/premium_photo-1723809866190-3087e75192ee',
  },
];

const UseCases: React.FC = () => {
  return (
    <section
      id="use-cases"
      className="relative py-32 px-6 overflow-hidden text-neutral-900 dark:text-white">
      <DecorativeGrid />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-3xl mb-20">
          <motion.span
            variants={itemVariants}
            className="block text-sm font-mono tracking-widest uppercase text-emerald-400 dark:text-(--primary) mb-4">
            Use cases
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-display font-semibold leading-tight">
            Built for real-life goals
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-neutral-600 dark:text-white/60 max-w-2xl">
            TrybeSave supports the way people already save together — for
            family, community, and long-term goals.
          </motion.p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="
            relative flex gap-6 overflow-x-auto pb-8
            snap-x snap-mandatory
            scrollbar-none
          ">
          {USE_CASES.map((useCase) => (
            <motion.div
              key={useCase.title}
              variants={itemVariants}
              className="
                snap-start min-w-[90%] sm:min-w-[70%] md:min-w-[45%] lg:min-w-[30%]
                relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10
              ">
              {/* Image */}
              <img
                src={useCase.image}
                alt={useCase.title}
                loading="lazy"
                className="h-112 w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Icon */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                <useCase.icon
                  size={26}
                  className="text-white"
                />
              </div>

              {/* Title at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 bg-linear-to-t from-black/70 to-transparent">
                <h3 className="text-3xl font-bold text-white">
                  {useCase.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;
