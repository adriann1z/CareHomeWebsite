import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setPage: (page: string) => void;
}

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'care', label: 'Our Care' },
  { id: 'home-life', label: 'The Home' },
  { id: 'funding', label: 'Funding & Support' },
  { id: 'contact', label: 'Contact' },
];

export function Navigation({ currentPage, setPage }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setPage(id);
    setIsMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-cream/90 backdrop-blur-xl shadow-soft py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavClick('home')}
        >
          <div className="bg-sage p-2 rounded-full text-white group-hover:bg-sage-deep transition-colors duration-300">
            <Leaf size={24} />
          </div>
          <div>
            <h1 className={`font-serif text-2xl font-semibold leading-none transition-colors duration-300 ${isScrolled ? '!text-sage-deep' : '!text-white'}`}>
              The Meadows
            </h1>
            <p className={`uppercase tracking-widest text-xs font-bold transition-colors duration-300 ${isScrolled ? '!text-sage' : '!text-white'}`}>
              GRIMSBY
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`relative font-sans text-sm font-bold tracking-wide transition-colors duration-300 ${
                currentPage === link.id
                  ? (isScrolled ? 'text-sage-deep' : 'text-white')
                  : (isScrolled ? 'text-text-mid hover:text-sage-deep' : 'text-white/80 hover:text-white')
              }`}
            >
              {link.label}
              {currentPage === link.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gold rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('contact')}
            className="ml-4 px-6 py-2.5 bg-gold hover:bg-gold-deep text-white font-bold text-sm uppercase tracking-wide rounded-full shadow-[0_4px_14px_rgba(200,169,110,0.39)] hover:shadow-[0_6px_20px_rgba(200,169,110,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Arrange a Visit
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-sage-deep' : 'text-white'}`}
          onClick={() => setIsMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-text-dark/40 backdrop-blur-sm z-50 lg:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-cream shadow-2xl p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-3">
                  <div className="bg-sage p-2 rounded-full text-white">
                    <Leaf size={20} />
                  </div>
                  <h2 className="font-serif text-xl font-semibold text-sage-deep">The Meadows</h2>
                </div>
                <button 
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 text-text-mid hover:text-text-dark bg-sage-pale rounded-full"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-left text-lg font-bold transition-colors ${
                      currentPage === link.id ? 'text-sage-deep' : 'text-text-mid'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-sage-light/30">
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="w-full py-4 bg-gold text-white font-bold text-center rounded-full shadow-soft"
                >
                  Arrange a Visit
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
