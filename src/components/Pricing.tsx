import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Shield, Zap } from 'lucide-react';

const courseFeatures = [
  'Acesso Completo às Aulas',
  'Aprenda a Construir do Zero',
  'Código-Fonte p/ Estudo',
  'Comunidade VIP no Discord',
  'Suporte Técnico p/ Alunos',
  'Atualizações Vitalícias',
];

const jarvisFeatures = [
  'Sistema JARVIS Pronto p/ Uso',
  'Instalação Plug & Play',
  'Arquitetura Final Desbloqueada',
  'Sem Necessidade de Programar',
  'Entrega Imediata dos Arquivos',
  'Ideal para Quem Tem Pressa',
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
            Escolha seu <span className="gradient-text">Nível</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Aprenda a construir ou leve o sistema completo pronto.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Card 1: Curso (COM ILUMINAÇÃO) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col h-full relative group"
          >
            {/* Super Glow on hover */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary to-accent opacity-20 group-hover:opacity-100 blur-xl transition duration-500" />

            <div className="relative glass-card rounded-3xl p-6 sm:p-12 border border-primary/30 flex flex-col h-full bg-darker/60 backdrop-blur-xl transition-transform duration-500 group-hover:scale-[1.01]">
              <div className="inline-flex px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-8 self-center">
                Curso Completo
              </div>
              <div className="mb-2 text-center text-slate-500 line-through text-xs sm:text-sm">
                R$ 297,00
              </div>
              <div className="flex items-end justify-center gap-1 mb-2">
                <span className="text-xl sm:text-2xl font-bold text-slate-400 mb-2 sm:mb-3">R$</span>
                <span className="text-6xl sm:text-8xl font-black text-white leading-none tracking-tighter">119</span>
                <span className="text-2xl sm:text-3xl font-black text-slate-400 mb-1 sm:mb-2 text-center">,90</span>
              </div>
              <div className="inline-flex px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold mb-10 uppercase tracking-widest self-center">
                60% OFF
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
                href="https://pay.hotmart.com/V41346438L?off=as889ckj&bid=1772578247436"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="block w-full py-5 rounded-2xl bg-white text-darker font-black text-base sm:text-lg text-center shadow-[0_10px_40_rgba(255,255,255,0.15)] hover:shadow-[0_20px_60px_rgba(255,255,255,0.25)] transition-all mb-8"
              >
                Garantir o Curso
              </motion.a>

              <div className="flex items-center justify-center gap-4 pt-8 border-t border-white/5 opacity-50">
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <Shield className="w-3 h-3" />
                  Garantia 7 dias
                </div>
                <div className="w-px h-3 bg-white/10" />
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <Zap className="w-3 h-3" />
                  Acesso Imediato
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: JARVIS Completo (COLORIDO) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col h-full"
          >
            <div className="relative glass-card rounded-3xl p-6 sm:p-12 border border-primary/20 flex flex-col h-full bg-darker/60 backdrop-blur-xl hover:scale-[1.01] transition-transform duration-500">
              <div className="inline-flex px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-8 self-center">
                Solução Instantânea
              </div>
              <div className="mb-2 text-center text-slate-500 line-through text-xs sm:text-sm">
                R$ 5.000,00
              </div>
              <div className="flex items-end justify-center gap-1 mb-2">
                <span className="text-xl sm:text-2xl font-bold text-slate-400 mb-2 sm:mb-3">R$</span>
                <span className="text-6xl sm:text-8xl font-black text-white leading-none tracking-tighter">2.499</span>
                <span className="text-2xl sm:text-3xl font-black text-slate-400 mb-1 sm:mb-2 text-center">,90</span>
              </div>
              <div className="inline-flex px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold mb-10 uppercase tracking-widest self-center text-center">
                OPÇÃO PREMIUM
              </div>

              <ul className="flex-grow space-y-4 text-left mb-10">
                {jarvisFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-slate-100">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                      <Zap className="w-3 h-3 text-primary fill-primary" />
                    </div>
                    <span className="font-medium">{f}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="https://wa.me/5521967254808?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20JARVIS%20Completo."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="block w-full py-5 rounded-2xl bg-primary text-white font-black text-base sm:text-lg text-center shadow-[0_10px_40_rgba(67,175,247,0.3)] hover:shadow-[0_20px_60px_rgba(67,175,247,0.5)] transition-all mb-8 uppercase"
              >
                FALE CONOSCO
              </motion.a>

              <div className="flex items-center justify-center gap-2 pt-8 border-t border-white/10 opacity-50">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-bold text-slate-200 uppercase tracking-widest">Entrega via Download</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
