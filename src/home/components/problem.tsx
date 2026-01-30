import React, { useRef, useState, useEffect } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  type Variants,
  type Transition,
} from 'framer-motion';
import DecorativeGrid from '../../reusables/decorativeGrid';

// --- Types ---
type Phase = 'problem' | 'solution';

interface ContentBlock {
  id: string;
  phase: Phase;
  tag: string;
  title: string;
  description: string;
  points: string[];
  image: string;
}

// --- Content ---
const CONTENT: ContentBlock[] = [
  {
    id: 'p1',
    phase: 'problem',
    tag: 'Problem 01',
    title: 'Saving together shouldn’t be stressful.',
    description:
      'Money problems don’t start with money — they start with coordination.',
    points: ['Someone forgets to contribute', 'Rules aren’t clear'],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
  },
  {
    id: 'p2',
    phase: 'problem',
    tag: 'Problem 02',
    title: 'Tracking money is messy and stressful.',
    description: 'Even small groups get confused without a clear system.',
    points: ['Tracking money becomes messy', 'Trust issues cause arguments'],
    image: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818',
  },
  {
    id: 's1',
    phase: 'solution',
    tag: 'Solution 01',
    title: 'Trybesave makes group saving simple.',
    description: 'With Trybesave, everyone can save together without stress.',
    points: ['Sees every contribution', 'Agrees to rules before money moves'],
    image: 'https://plus.unsplash.com/premium_photo-1661270434439-2cabce958cd0',
  },
  {
    id: 's2',
    phase: 'solution',
    tag: 'Solution 02',
    title: 'Save toward one clear goal and withdraw together.',
    description: 'No spreadsheets. No chasing people. No confusion.',
    points: [
      'Saves toward one clear goal',
      'Withdraws together — with no confusion',
    ],
    image: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4',
  },
];

// --- Animation ---
const BASE_TRANSITION: Transition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1] as any,
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: BASE_TRANSITION },
};

const pointVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: BASE_TRANSITION },
};

const imageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

// --- Component ---
const ProblemSolution: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeBlockId, setActiveBlockId] = useState(CONTENT[0].id);
  const blockRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Scroll progress for vertical bar
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Track active block
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    Object.entries(blockRefs.current).forEach(([id, el]) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveBlockId(id);
        },
        {
          threshold: 0.8, // trigger when 80% of the block is visible
          rootMargin: '0px 0px -25% 0px', // optional: offset to trigger slightly later
        },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const activeBlock = CONTENT.find((b) => b.id === activeBlockId)!;

  return (
    <section
      ref={containerRef}
      className="relative text-white">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #002d1d 0%, #001a11 100%)',
          clipPath: 'polygon(0 0, 100% 4vw, 100% 100%, 0 calc(100% - 4vw))',
        }}
      />
      <DecorativeGrid />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2">
        {/* LEFT: Text blocks */}
        <div className="relative py-24 md:py-[30vh] border-l border-white/5 pl-8 md:pl-16">
          <motion.div
            style={{ scaleY }}
            className="absolute left-2 top-0 bottom-0 w-0.5 bg-emerald-400 origin-top rounded shadow-[0_0_20px_#34d399]"
          />

          {CONTENT.map((block) => (
            <div
              key={block.id}
              ref={(el: any) => (blockRefs.current[block.id] = el)}
              className="mb-[20vh] space-y-6 max-w-lg">
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={textVariants}
                className="text-emerald-400 font-mono text-xs tracking-widest uppercase">
                {block.tag}
              </motion.span>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={textVariants}
                className="text-4xl md:text-5xl font-bold leading-tight">
                {block.title}
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={textVariants}
                className="text-lg md:text-xl text-emerald-100/50">
                {block.description}
              </motion.p>

              <ul className="space-y-4 pt-4 border-t border-white/5">
                {block.points.map((pt) => (
                  <motion.li
                    key={pt}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={pointVariants}
                    className="flex items-center gap-4 text-sm text-emerald-100/70">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        block.phase === 'solution'
                          ? 'bg-emerald-400'
                          : 'bg-red-500/50'
                      }`}
                    />
                    {pt}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* RIGHT: Sticky images */}
        <div className="hidden md:block relative">
          <div className="sticky top-0 h-screen flex items-center justify-center px-8 lg:px-20">
            <div className="relative w-full aspect-4/5 max-w-md rounded-[2.5rem] overflow-hidden">
              {CONTENT.map((block) => (
                <motion.img
                  key={block.id}
                  src={block.image}
                  alt={block.phase}
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover rounded-[2.5rem] ${
                    block.phase === 'problem' ? 'grayscale brightness-75' : ''
                  }`}
                  variants={imageVariants}
                  initial="hidden"
                  animate={block.id === activeBlockId ? 'visible' : 'hidden'}
                />
              ))}

              {/* Aura */}
              <motion.div
                className="absolute -inset-10 -z-10 blur-[100px] rounded-full"
                animate={{
                  backgroundColor:
                    activeBlock.phase === 'solution'
                      ? 'rgba(52, 211, 153, 0.15)'
                      : 'rgba(239, 68, 68, 0.1)',
                }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
