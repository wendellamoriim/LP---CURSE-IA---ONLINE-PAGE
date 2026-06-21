import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Shield } from 'lucide-react';

const courseFeatures = [
  'Acesso Vitalício & Sem Mensalidades',
  'Sem custo adicional com APIs',
  'Construa em média 45min (Aulas Diretas)',
  'Não exige experiência prévia em programação',
  'Comunidade exclusiva no Discord (Suporte & Parcerias)',
  'Atualizações Vitalícias gratuitas inclusas',
  'Descontos em SKILLS exclusivas de lançamentos',
  'Renda extra como afiliado + bônus de ranking',
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

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-16"
        >
          {/* Countdown */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-orange-400/20 text-orange-400 mb-8">
            <Clock className="w-4 h-4" />
            <span className="text-[12px] sm:text-sm font-bold uppercase tracking-wide">
              Oferta expira em: {pad(time.hours)}:{pad(time.minutes)}:{pad(time.seconds)}
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-4">
            Garanta seu <span className="gradient-text">Acesso</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Aprenda a construir o seu próprio assistente de IA do zero.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="max-w-xl mx-auto flex justify-center w-full">
          {/* Card 1: Curso (COM ILUMINAÇÃO) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-full flex flex-col h-full relative group"
          >
            {/* Super Glow on hover */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary to-accent opacity-20 group-hover:opacity-100 blur-xl transition duration-500" />

            <div className="relative glass-card rounded-3xl p-6 sm:p-12 border border-primary/30 flex flex-col h-full bg-darker/60 backdrop-blur-xl transition-transform duration-500 group-hover:scale-[1.01]">
              <div className="inline-flex px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-8 self-center">
                Curso Completo
              </div>
              <div className="mb-2 text-center text-slate-500 line-through text-xs sm:text-sm">
                R$ 397,00
              </div>
              <div className="flex items-end justify-center gap-1 mb-2">
                <span className="text-xl sm:text-2xl font-bold text-slate-400 mb-2 sm:mb-3">R$</span>
                <span className="text-6xl sm:text-8xl font-black text-white leading-none tracking-tighter">220</span>
                <span className="text-2xl sm:text-3xl font-black text-slate-400 mb-1 sm:mb-2 text-center">,00</span>
              </div>
              <div className="mb-10 flex justify-center">
                <div className="inline-flex px-5 py-2 rounded-xl bg-primary/15 border border-primary/30 text-primary text-[11px] font-black uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(67,175,247,0.3)]">
                  Acesso Vitalício
                </div>
              </div>

              <ul className="flex-grow space-y-4 text-left mb-10">
                {courseFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/30">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="https://go.perfectpay.com.br/PPU38CQ91OE"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).ttq) {
                    (window as any).ttq.track('InitiateCheckout', {
                      contents: [{
                        content_id: 'curso_jarvis',
                        content_name: 'Curso JARVIS AI',
                        price: 220.00,
                        value: 220.00,
                        currency: 'BRL'
                      }],
                      value: 220.00,
                      currency: 'BRL'
                    });
                  }
                }}
                className="block w-full py-5 rounded-2xl bg-white text-darker font-black text-base sm:text-lg text-center shadow-[0_10px_40_rgba(255,255,255,0.15)] hover:shadow-[0_20px_60px_rgba(255,255,255,0.25)] transition-all mb-8"
              >
                Garantir o Curso
              </motion.a>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-8 border-t border-white/5 opacity-50">
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                  <Shield className="w-3 h-3" />
                  Garantia 7 dias
                </div>
                <div className="hidden sm:block w-px h-3 bg-white/10" />
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                  <Clock className="w-3 h-3" />
                  Acesso Vitalício
                </div>
                <div className="hidden sm:block w-px h-3 bg-white/10" />
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                  <Check className="w-3 h-3" />
                  Imediato
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
