import React from 'react';
import { motion, type Variants, type Transition } from 'framer-motion';
import { Envelope, Phone, MapPin } from 'phosphor-react';

// --- Motion Tokens ---
const EASE_PREMIUM: Transition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1] as any,
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: EASE_PREMIUM },
};

const ContactUs: React.FC = () => {
  return (
    <main className="relative bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-500">
      {/* HERO */}
      <section className="relative py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h1
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-5xl md:text-6xl font-display font-semibold leading-tight">
            Get in Touch
          </motion.h1>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-lg md:text-xl text-neutral-600 dark:text-white/60 leading-relaxed max-w-2xl mx-auto">
            Whether you have questions about group savings, need help starting
            your tribe, or want to learn more about TrybeSave, we’re here to
            help. Reach out and we’ll respond promptly.
          </motion.p>
        </div>
      </section>

      {/* CONTACT FORM + INFO */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          {/* LEFT: Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-6">
            <form className="space-y-6">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Jane Doe"
                  className="w-full rounded-xl border border-neutral-200 dark:border-white/10 px-4 py-3 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white/90 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="jane@example.com"
                  className="w-full rounded-xl border border-neutral-200 dark:border-white/10 px-4 py-3 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white/90 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="How can we help you?"
                  className="w-full rounded-xl border border-neutral-200 dark:border-white/10 px-4 py-3 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white/90 focus:ring-emerald-500 focus:border-emerald-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-4 bg-(--primary) hover:bg-(--primary-light) text-white rounded-full font-bold text-lg transition-all shadow-lg">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* RIGHT: Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Contact Details
            </h2>
            <p className="text-lg text-neutral-600 dark:text-white/60 leading-relaxed">
              We’re available Monday to Friday, 9AM – 6PM. Reach out anytime for
              guidance on setting up your group savings or understanding our
              platform.
            </p>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin
                  size={24}
                  className="text-(--primary)"
                />
                <span>123 Finance Street, Lagos, Nigeria</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone
                  size={24}
                  className="text-(--primary)"
                />
                <span>+234 800 000 0000</span>
              </li>
              <li className="flex items-start gap-4">
                <Envelope
                  size={24}
                  className="text-(--primary)"
                />
                <span>support@trybesave.com</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
