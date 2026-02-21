import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Projeto', href: '#about' },
  { label: 'Módulos', href: '#modules' },
  { label: 'Provas', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-6 px-4"
    >
      <div
        className={`flex items-center gap-4 sm:gap-8 px-4 sm:px-6 py-3 rounded-full transition-all duration-500 ${scrolled ? 'glass-card shadow-[0_8px_32px_rgba(0,0,0,0.4)]' : 'bg-transparent'
          }`}
      >
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img src="/logo.png" alt="JARVIS AI" className="h-4 sm:h-5 w-auto brightness-200" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold text-slate-400 hover:text-white transition-colors uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#cta"
          className="hidden md:block px-5 py-2 rounded-full bg-white text-darker text-xs font-black uppercase tracking-wider hover:bg-slate-100 transition-colors"
        >
          Acessar
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors"
          aria-label="Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-darker/60 backdrop-blur-sm z-[-1] md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="absolute top-20 left-4 right-4 glass-strong rounded-3xl p-6 border border-white/10 shadow-2xl md:hidden"
            >
              <div className="flex flex-col gap-1">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center py-4 px-5 text-base font-bold text-slate-300 hover:text-white hover:bg-white/5 rounded-2xl transition-all"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 mt-2 border-t border-white/5">
                  <a
                    href="#cta"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center py-5 rounded-2xl bg-white text-darker text-base font-black uppercase tracking-wider shadow-xl active:scale-95 transition-transform"
                  >
                    Garantir minha vaga
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
