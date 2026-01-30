import React, { useState } from 'react';
import { motion, AnimatePresence, type Transition } from 'framer-motion';
import { CaretRight } from 'phosphor-react';
import DecorativeGrid from '../../reusables/decorativeGrid';

const EASE_PREMIUM: Transition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1] as any,
};

const FAQS = [
  {
    category: 'Getting Started',
    question: 'Who can create or join a TrybeSave group?',
    answer:
      'Anyone can create a group. Only invited members can join, ensuring trust and accountability within the group.',
  },
  {
    category: 'Rules & Goals',
    question: 'Can the group set custom rules for saving and withdrawals?',
    answer:
      'Yes. Every group decides how much to save, how often, and under what conditions money can be withdrawn.',
  },
  {
    category: 'Contributions',
    question: 'What happens if someone misses a contribution?',
    answer:
      'TrybeSave automatically tracks contributions. Groups can predefine rules for missed contributions, ensuring transparency.',
  },
  {
    category: 'Transparency',
    question: 'Can all members see every transaction?',
    answer:
      'Absolutely. Every contribution, withdrawal, and update is visible to all group members in real-time.',
  },
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-24 md:py-32 px-6 bg-white dark:bg-neutral-950 transition-colors duration-500 overflow-hidden">
      <DecorativeGrid />

      <div className="max-w-4xl mx-auto relative z-10 space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={EASE_PREMIUM}
          viewport={{ once: true }}
          className="text-center space-y-4">
          <span className="block text-sm font-mono tracking-widest uppercase text-emerald-600 dark:text-emerald-400">
            Your questions answered
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold leading-tight text-neutral-900 dark:text-white">
            Frequently asked questions
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className={`
                p-6 md:p-8 rounded-2xl transition-all duration-500 cursor-pointer
                ${
                  activeIndex === index
                    ? 'bg-neutral-50 dark:bg-white/3 ring-1 ring-neutral-200 dark:ring-white/10'
                    : 'hover:bg-neutral-50/50 dark:hover:bg-white/1'
                }
              `}>
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${
                      activeIndex === index
                        ? 'text-emerald-500'
                        : 'text-neutral-400'
                    }`}>
                    {faq.category}
                  </span>
                  <h3 className="text-xl tracking-tight text-neutral-900 dark:text-white">
                    {faq.question}
                  </h3>
                </div>
                <CaretRight
                  size={20}
                  className={`mt-6 transition-transform duration-500 ${
                    activeIndex === index
                      ? 'rotate-90 text-emerald-500'
                      : 'text-neutral-300'
                  }`}
                />
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={EASE_PREMIUM}
                    className="overflow-hidden">
                    <p className="pt-6 text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
