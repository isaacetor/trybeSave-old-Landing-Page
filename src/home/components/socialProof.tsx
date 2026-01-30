import { motion } from 'framer-motion';

const SocialProof = () => {
  const testimonials = [
    {
      name: 'Amaka, Group Leader',
      text: 'Our family reached savings goals faster than we imagined.',
    },
    {
      name: 'Tunde, Trader',
      text: 'No more chasing contributions or managing spreadsheets.',
    },
    {
      name: 'Fatima, Diaspora Contributor',
      text: 'I can save remotely while still feeling part of my group.',
    },
    {
      name: 'Chinedu, Cooperative Manager',
      text: 'Our cooperative now saves more efficiently than ever.',
    },
    {
      name: 'Ngozi, Family Organizer',
      text: 'Clear rules and accountability make group saving stress-free.',
    },
    {
      name: 'Ifeanyi, Trader',
      text: 'TrybeSave removes confusion and builds trust among members.',
    },
  ];

  // const impactMetrics = [
  //   { value: '$50M+', label: 'Processed' },
  //   { value: '20%', label: 'Conversion Lift' },
  //   { value: '120+', label: 'Countries' },
  // ];

  return (
    <section className="py-28 px-6 md:px-12 text-neutral-900 dark:text-white relative overflow-hidden">
      {/* Headline */}
      <h2 className="text-3xl md:text-4xl font-bold text-center max-w-3xl mx-auto mb-12 leading-snug">
        Trusted by families, friends, and communities worldwide
      </h2>

      {/* Impact Metrics */}
      {/* <div className="flex flex-wrap justify-center gap-10 mb-16">
        {impactMetrics.map((metric, idx) => (
          <div
            key={idx}
            className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-emerald-500 dark:text-emerald-400">
              {metric.value}
            </div>
            <div className="text-sm opacity-70 mt-1">{metric.label}</div>
          </div>
        ))}
      </div> */}

      {/* Testimonials Carousel */}
      {[0, 1].map((rowIdx) => (
        <div
          key={rowIdx}
          className="relative overflow-hidden mb-10">
          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-16 pointer-events-none bg-linear-to-r from-white dark:from-neutral-950" />
          <div className="absolute inset-y-0 right-0 w-16 pointer-events-none bg-linear-to-l from-white dark:from-neutral-950" />

          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: rowIdx === 0 ? ['0%', '-50%'] : ['-50%', '0%'] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}>
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div
                key={idx}
                className="
                  shrink-0 w-64 sm:w-72
                  p-6 rounded-3xl
                  bg-white/20 dark:bg-neutral-800/40
                  backdrop-blur-md
                  border border-white/10 dark:border-black/20
                  shadow-[0_8px_20px_rgba(0,168,107,0.15)]
                  hover:shadow-[0_12px_35px_rgba(0,168,107,0.25)]
                  transition-shadow duration-300
                  text-left flex flex-col justify-between
                ">
                <p className="text-sm md:text-base mb-4 leading-relaxed">
                  {t.text}
                </p>
                <div className="font-semibold text-sm opacity-80">{t.name}</div>
              </div>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default SocialProof;
