import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Shield, Users, Zap } from 'lucide-react';

const features = [
  '18+ Aulas 100% Práticas',
  'Código JARVIS Completo',
  'Estrutura All Free',
  'Comunidade Discord Elite',
  'Acesso Vitalício ao Conteúdo',
  'Suporte via Discord',
];

export function Pricing() {
  const [time, setTime] = useState({ hours: 23, minutes: 54, seconds: 10 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section id="cta" className="section-fade section-padding relative bg-darker overflow-hidden">
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[800px] h-[300px] sm:h-[500px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #43aff7, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-12"
        >
          {/* Countdown */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-orange-400/20 text-orange-400 mb-8 sm:mb-10">
            <Clock className="w-4 h-4" />
            <span className="text-[12px] sm:text-sm font-bold uppercase tracking-wide">
              Oferta expira em: {pad(time.hours)}:{pad(time.minutes)}:{pad(time.seconds)}
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-4">
            Domine o{' '}
            <br className="sm:hidden" />
            <span className="gradient-text">Amanhã</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Acesso completo. Pague uma vez, aprenda para sempre.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative group"
        >
          {/* Glow border on hover */}
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-primary/20 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative glass-card rounded-3xl p-6 sm:p-14 border border-white/10">
            {/* Badge */}
            <div className="inline-flex px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6 sm:mb-8">
              Acesso Vitalício
            </div>

            {/* Price */}
            <div className="mb-2">
              <span className="text-slate-500 line-through text-xs sm:text-sm">R$ 297,00</span>
            </div>
            <div className="flex items-end justify-center gap-1 mb-2">
              <span className="text-xl sm:text-2xl font-bold text-slate-400 mb-2 sm:mb-3">R$</span>
              <span className="text-6xl sm:text-8xl font-black text-white leading-none tracking-tighter">79</span>
              <span className="text-2xl sm:text-3xl font-black text-slate-400 mb-1 sm:mb-2">,90</span>
            </div>
            <div className="inline-flex px-3 py-1 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold mb-8 sm:mb-10 uppercase tracking-widest">
              economia de 73%
            </div>

            {/* Features */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left mb-10">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="truncate">{f}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.a
              href="https://pay.hotmart.com/V41346438L?off=0cbhr9ps"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="block w-full py-5 rounded-2xl bg-white text-darker font-black text-base sm:text-lg text-center shadow-[0_10px_40_rgba(255,255,255,0.15)] hover:shadow-[0_20px_60px_rgba(255,255,255,0.25)] active:scale-95 transition-all mb-8"
            >
              Garantir minha vaga agora
            </motion.a>

            {/* Trust badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-8 border-t border-white/5">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500/8 border border-green-500/15 w-full sm:w-auto justify-center">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">Garantia 7 dias</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/8 border border-primary/15 w-full sm:w-auto justify-center">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">Comunidade Elite</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent/8 border border-accent/15 w-full sm:w-auto justify-center">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">Acesso Imediato</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
