import React from 'react';
import { motion, type Variants, type Transition } from 'framer-motion';
import { Bank, ShieldCheck, LockKey, Eye } from 'phosphor-react';
import DecorativeGrid from '../../reusables/decorativeGrid';

// --- Motion Tokens ---
const EASE_PREMIUM: Transition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1] as any,
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: EASE_PREMIUM },
};

const TrustAndSecurity: React.FC = () => {
  return (
    <section
      id="trust"
      className="relative py-24 md:py-32 px-6 text-white/90 overflow-hidden transition-colors duration-500"
      style={{
        background: 'linear-gradient(180deg, #002d1d 0%, #002d1d 100%)',
      }}>
      {/* ADAPTIVE DECORATIVE GRID */}
      <DecorativeGrid />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT — Editorial content */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:sticky lg:top-32 max-w-xl space-y-6">
            <motion.span
              variants={fadeUp}
              className="block text-sm font-mono tracking-widest uppercase text-emerald-400">
              Trust & Security
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-display font-semibold leading-tight">
              Built on financial discipline.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg text-white/60 leading-relaxed">
              TrybeSave is designed around one simple principle: money shared
              between people must be governed by rules, not trust alone.
            </motion.p>
          </motion.div>

          {/* RIGHT — Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}>
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              <Card
                Icon={Bank}
                title="EMI Partners"
                desc="Funds held with regulated EMI partners to ensure maximum security and compliance."
              />
              <Card
                Icon={LockKey}
                title="No Lending"
                desc="We never lend or invest your money without explicit group consent."
                className="md:aspect-4/5 flex flex-col justify-end"
              />
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6 md:mt-12">
              <Card
                Icon={ShieldCheck}
                title="Ring-Fenced"
                desc="Client money is ring-fenced and kept separate from company operational funds."
                className="md:aspect-4/5 flex flex-col justify-end"
              />
              <Card
                Icon={Eye}
                title="Total Vision"
                desc="Every transaction is visible to all members, ensuring group-wide accountability."
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Reusable Card Component ---
const Card = ({
  Icon,
  title,
  desc,
  className = '',
}: {
  Icon: any;
  title: string;
  desc: string;
  className?: string;
}) => (
  <motion.div
    variants={fadeUp}
    className={`
      relative group p-8 rounded-2xl
      bg-white/5 
      border border-white/10 
      hover:border-emerald-400/40
      transition-all duration-300
      ${className}
    `}>
    <Icon
      size={28}
      weight="regular"
      className="text-emerald-600 dark:text-emerald-400 mb-6
                 transition-transform duration-300 group-hover:scale-105"
    />
    <h3 className="text-xl font-bold mb-3 tracking-tight">{title}</h3>
    <p className="text-sm text-neutral-500 dark:text-white/60 leading-relaxed">
      {desc}
    </p>
  </motion.div>
);

export default TrustAndSecurity;
