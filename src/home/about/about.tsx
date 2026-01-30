import React from 'react';
import { motion, type Variants, type Transition } from 'framer-motion';

const EASE_PREMIUM: Transition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1] as any,
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: EASE_PREMIUM },
};

const About: React.FC = () => {
  return (
    <main className="relative bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-500">
      {/* HERO */}
      <section className="relative py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.span
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="block text-sm font-mono tracking-widest uppercase text-(--primary)">
            About TrybeSave
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-5xl md:text-7xl font-display font-semibold leading-tight">
            Built for people <br /> who trust each other.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-lg md:text-xl text-neutral-600 dark:text-white/60 max-w-2xl mx-auto leading-relaxed">
            TrybeSave is a modern savings infrastructure designed for groups —
            families, friends, cooperatives, and communities — who want to save
            together with clarity, structure, and accountability.
          </motion.p>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24 px-6 border-t border-neutral-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-display font-semibold">
              Our mission
            </h2>
            <p className="text-lg text-neutral-600 dark:text-white/60 leading-relaxed">
              To make collective saving simple, transparent, and reliable —
              without placing the burden on one person.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-6 text-lg text-neutral-600 dark:text-white/60 leading-relaxed">
            <p>
              Across cultures and generations, people save together. From family
              emergency funds to community contributions, shared saving has
              always existed — but the tools haven’t evolved.
            </p>
            <p>
              TrybeSave replaces informal coordination with clear rules,
              automation, and shared visibility. No confusion. No pressure. No
              guesswork.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHY WE EXIST */}
      <section className="py-24 px-6 bg-neutral-50 dark:bg-white/[0.02]">
        <div className="max-w-6xl mx-auto space-y-16">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-4xl md:text-5xl font-display font-semibold text-center">
            Why TrybeSave exists
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Trust needs structure',
                text: 'Good intentions are not systems. Shared money requires rules everyone agrees to.',
              },
              {
                title: 'Transparency reduces conflict',
                text: 'When everyone sees the same numbers, accountability becomes natural.',
              },
              {
                title: 'Groups deserve real tools',
                text: 'Banking has focused on individuals for too long. Real life happens in groups.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="space-y-4">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-neutral-600 dark:text-white/60 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST PHILOSOPHY */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-4xl md:text-5xl font-display font-semibold">
            Trust, by design
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-lg md:text-xl text-neutral-600 dark:text-white/60 leading-relaxed">
            TrybeSave is not built on blind trust. It’s built on clear rules,
            shared visibility, and systems that protect everyone equally.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-lg md:text-xl text-neutral-600 dark:text-white/60 leading-relaxed">
            If people trust each other, they can save together. We simply
            provide the structure.
          </motion.p>
        </div>
      </section>
    </main>
  );
};

export default About;
