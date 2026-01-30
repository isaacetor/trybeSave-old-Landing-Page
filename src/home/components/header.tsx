import { useState, useEffect } from 'react';
import { List, X } from 'phosphor-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4">
      <div className="mx-auto max-w-7xl">
        <div
          className="
            flex items-center justify-between
            rounded-2xl px-6 py-3
            backdrop-blur-xl
            border border-black/5 dark:border-white/10
            bg-white/80 dark:bg-neutral-900/80
          ">
          {/* Logo */}
          <Link
            to="/"
            className="font-display text-lg font-semibold">
            TrybeSave
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm text-black/70 dark:text-white/70">
            <a href="#how-it-works">How it works</a>
            <a href="#use-cases">Use cases</a>
            <a href="#security">Security</a>
            <a href="#faq">FAQ</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/auth"
              className="text-sm text-black/60 dark:text-white/60">
              Sign in
            </Link>

            <Link
              to="/auth"
              className="
                bg-(--primary)
                hover:bg-(--primary-light)
                text-white
                rounded-lg px-4 py-2
                transition-colors
              ">
              Join a savings group
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="lg:hidden">
            <List size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-50
              bg-white/90 dark:bg-neutral-900/90
              backdrop-blur-xl
            ">
            <motion.div
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <Link
                  to="/"
                  className="font-display text-lg font-semibold">
                  TrybeSave
                </Link>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}>
                  <X
                    size={24}
                    className="text-white"
                  />
                </button>
              </div>

              <nav className="flex flex-col gap-4 text-lg">
                <a href="#how-it-works">How it works</a>
                <a href="#use-cases">Use cases</a>
                <a href="#security">Security</a>
                <a href="#faq">FAQ</a>
              </nav>

              <div className="pt-6 w-full space-y-4">
                <Link
                  to="/auth"
                  className="
                    w-full
                    bg-(--primary)
                    hover:bg-(--primary-light)
                    text-white
                    rounded-lg py-2
                    transition-colors
                  ">
                  Join a savings group
                </Link>

                <Link
                  to="/auth"
                  className="block text-center text-black/60 dark:text-white/60">
                  Sign in
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
