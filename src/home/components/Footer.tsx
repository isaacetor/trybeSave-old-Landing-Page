import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TwitterLogo, LinkedinLogo } from 'phosphor-react';

const PRODUCT_LINKS = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Use cases', href: '#use-cases' },
  { label: 'Trust & security', href: '#trust' },
  { label: 'FAQ', href: '#faq' },
];

const COMPANY_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
];

const LEGAL_LINKS = [
  { label: 'Privacy policy', to: '/privacy' },
  { label: 'Terms of service', to: '/terms' },
  { label: 'Cookie policy', to: '/cookies' },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-neutral-50 dark:bg-neutral-950 text-neutral-700 dark:text-white/80 transition-colors duration-500">
      {/* Top Divider */}
      <div className="h-px bg-neutral-200 dark:bg-white/5 w-full" />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* BRAND */}
          <div className="md:col-span-4 space-y-6">
            <Link
              to="/"
              className="text-2xl font-display font-bold tracking-tight text-neutral-900 dark:text-white">
              TrybeSave
            </Link>

            <p className="text-sm text-neutral-500 dark:text-white/50 max-w-sm leading-relaxed">
              A structured way for trusted groups to save together —
              transparently, securely, and without friction.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://X.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="p-2 rounded-full border border-neutral-300 dark:border-white/10
                           hover:border-neutral-400 dark:hover:border-white/30 transition-colors">
                <TwitterLogo size={18} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full border border-neutral-300 dark:border-white/10
                           hover:border-neutral-400 dark:hover:border-white/30 transition-colors">
                <LinkedinLogo size={18} />
              </a>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="md:col-span-5 grid grid-cols-2 gap-12 text-sm">
            {/* Product */}
            <FooterColumn title="Product">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-neutral-900 dark:hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </FooterColumn>

            {/* Company */}
            <FooterColumn title="Company">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-neutral-900 dark:text-white'
                        : 'hover:text-neutral-900 dark:hover:text-white'
                    }>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </FooterColumn>
          </div>

          {/* LEGAL */}
          <div className="md:col-span-3">
            <FooterColumn title="Legal">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="hover:text-neutral-900 dark:hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </FooterColumn>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div
          className="mt-20 pt-8 border-t border-neutral-200 dark:border-white/5
                     flex flex-col md:flex-row items-start md:items-center
                     justify-between gap-6 text-xs text-neutral-400 dark:text-white/40">
          <p>© {new Date().getFullYear()} TrybeSave. All rights reserved.</p>

          <p className="max-w-xl leading-relaxed">
            TrybeSave is not a bank. Funds are held with regulated EMI partners
            and are subject to applicable safeguarding regulations.
          </p>
        </div>
      </div>
    </footer>
  );
};

/* -------------------------------------------------------------------------- */
/*                              Helper Components                              */
/* -------------------------------------------------------------------------- */

const FooterColumn: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <div className="space-y-4">
    <span className="block text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-white/40">
      {title}
    </span>
    <ul className="space-y-3">{children}</ul>
  </div>
);

export default Footer;
