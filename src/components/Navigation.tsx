import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { trackEvent } from '../lib/analytics';
import { ROUTES } from '../lib/routes';

const navLinks = [
  { path: ROUTES.home, label: 'Home' },
  { path: ROUTES.about, label: 'About Us' },
  { path: ROUTES.care, label: 'Our Care' },
  { path: ROUTES.theHome, label: 'The Home' },
  { path: ROUTES.funding, label: 'Funding & Support' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileOpen]);

  const handleNavClick = () => {
    setIsMobileOpen(false);
  };

  const handleArrangeVisit = (location_: string) => {
    trackEvent('book_a_visit_clicked', { button_location: location_ });
    setIsMobileOpen(false);
    navigate(ROUTES.contact);
  };

  const mobileMenu = (
    <AnimatePresence>
      {isMobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] bg-text-dark/45 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute bottom-0 right-0 top-0 flex w-[min(92vw,24rem)] flex-col overflow-y-auto bg-cream p-5 shadow-2xl sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-10 flex items-start justify-between">
              <div className="flex-1">
                <BrandLogo className="origin-top-left" isLight={false} />
              </div>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="shrink-0 rounded-full bg-sage-pale p-2 text-text-mid hover:text-text-dark"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={handleNavClick}
                    className={`rounded-xl px-4 py-3 text-left text-lg font-bold transition-colors ${
                      isActive ? 'bg-sage-pale text-sage-deep' : 'text-text-mid hover:bg-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto border-t border-sage-light/30 pt-8">
              <button
                onClick={() => handleArrangeVisit('nav_mobile')}
                className="w-full rounded-full bg-gold py-4 text-center font-bold text-text-dark shadow-soft"
              >
                Arrange a Visit
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          isScrolled ? 'bg-cream/92 py-2.5 shadow-soft backdrop-blur-xl sm:py-3' : 'bg-transparent py-4 sm:py-6'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:gap-6 lg:px-8 xl:gap-8 xl:px-12">
          <Link to={ROUTES.home} onClick={handleNavClick} aria-label="Go to home" className="text-left group">
            <BrandLogo
              isLight={!isScrolled}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </Link>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-8" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleNavClick}
                  className={`relative font-sans text-sm font-bold tracking-wide transition-colors duration-300 ${
                    isActive
                      ? (isScrolled ? 'text-sage-deep' : 'text-white')
                      : (isScrolled ? 'text-text-mid hover:text-sage-deep' : 'text-white/80 hover:text-white')
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full bg-gold"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            <button
              onClick={() => handleArrangeVisit('nav_desktop')}
              className="ml-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white shadow-[0_4px_14px_rgba(200,169,110,0.39)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-deep hover:shadow-[0_6px_20px_rgba(200,169,110,0.5)] xl:px-6"
            >
              Arrange a Visit
            </button>
          </nav>

          <button
            className={`rounded-full p-2.5 transition-colors lg:hidden ${
              isScrolled ? 'bg-sage-pale/70 text-sage-deep' : 'bg-black/10 text-white backdrop-blur-sm'
            }`}
            onClick={() => setIsMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMobileOpen}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {createPortal(mobileMenu, document.body)}
    </>
  );
}
