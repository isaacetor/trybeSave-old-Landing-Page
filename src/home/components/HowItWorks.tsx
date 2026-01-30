import React from 'react';
import { motion, cubicBezier } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { UsersThree, Target, Coins, CheckCircle } from 'phosphor-react';
import DecorativeGrid from '../../reusables/decorativeGrid';

const steps = [
  {
    step: '01',
    icon: UsersThree,
    image: 'https://images.unsplash.com/photo-1762784574847-16c5100cd1ff',
    title: 'Create groups',
  },
  {
    step: '02',
    icon: Target,
    image: 'https://images.unsplash.com/photo-1569616813007-8dede61a698e',
    title: 'Invite family or friends',
  },
  {
    step: '03',
    icon: Coins,
    image: 'https://plus.unsplash.com/premium_photo-1723802500514-fb558385a751',
    title: 'Everyone contribute',
  },
  {
    step: '04',
    icon: CheckCircle,
    image: 'https://images.unsplash.com/photo-1523287562758-66c7fc58967f',
    title: 'Reach goals',
  },
];

// -------------------------------------
// Motion easing
// -------------------------------------
const EASE_PREMIUM = cubicBezier(0.22, 1, 0.36, 1);

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_PREMIUM },
  },
};

const HowItWorks: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="relative text-neutral-900 dark:text-white py-32 overflow-visible">
      <DecorativeGrid />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_PREMIUM }}
          viewport={{ once: true }}
          className="max-w-xl mb-20">
          <span className="text-emerald-500 dark:text-(--primary) font-mono text-sm tracking-widest uppercase">
            How it works
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight">
            Save together in four simple steps
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="
            relative flex gap-6 overflow-x-auto pb-8
            snap-x snap-mandatory
            md:grid md:grid-cols-4 md:overflow-visible
          ">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.step}
                variants={item}
                className="
                  snap-start min-w-[90%] sm:min-w-[80%] md:min-w-0
                  relative z-10 rounded-2xl overflow-hidden
                  border border-black/10 dark:border-white/10
                ">
                {/* Static Image */}
                <img
                  src={step.image}
                  alt={step.title}
                  loading="lazy"
                  className="h-112 w-full object-cover"
                />

                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Step number & icon */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                  <span className="text-xs font-mono tracking-widest text-white/70">
                    {step.step}
                  </span>
                  <Icon
                    size={26}
                    className="text-white"
                  />
                </div>

                {/* Step title at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 bg-linear-to-t from-black/70 to-transparent">
                  <h3 className="text-3xl font-bold text-white">
                    {step.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
