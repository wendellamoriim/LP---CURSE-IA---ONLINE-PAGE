import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Mic, Brain, Zap, Play } from 'lucide-react';

const GLITCH_CHARS = '!<>-_\\/[]{}=+*^?#@$%&81023456789ABCXZ';

function GlitchText({ text, className }: { text: string; className?: string }) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let iteration = 0;
    let active = false;

    const runGlitch = () => {
      if (active) return;
      active = true;
      const letters = text.split('');
      const totalFrames = text.length * 6;

      const step = () => {
        const next = letters.map((_char, i) => {
          if (i < Math.floor(iteration / 3)) return text[i];
          return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        }).join('');
        setDisplay(next);
        iteration++;
        if (iteration <= totalFrames) {
          frameRef.current = setTimeout(step, 80);
        } else {
          setDisplay(text);
          active = false;
          iteration = 0;
        }
      };
      step();
    };

    const initial = setTimeout(() => {
      runGlitch();
      const interval = setInterval(runGlitch, 7000);
      return () => clearInterval(interval);
    }, 1500);

    return () => {
      clearTimeout(initial);
      if (frameRef.current) clearTimeout(frameRef.current);
    };
  }, [text]);

  return (
    <span
      className={`glitch-text ${className ?? ''}`}
      data-text={text}
      style={{ fontVariantNumeric: 'tabular-nums' }}
    >
      {display}
    </span>
  );
}

export function Hero() {
  const [isGifLoaded, setIsGifLoaded] = useState(false);

  return (
    <section className="section-fade section-padding relative min-h-screen flex items-center overflow-hidden bg-darker pt-20">
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 hero-glow" />

      {/* Ambient Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[800px] h-[300px] sm:h-[800px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(67,175,247,0.07) 0%, transparent 65%)' }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── Layout Responsivo ── */}
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 py-10">

        {/* ── COLUNA ESQUERDA — Conteúdo ── */}
        <motion.div
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-6 sm:mb-8">
            <img src="/badge-iron-man.png" alt="Iron Man" className="w-8 h-8 sm:w-10 sm:h-10 object-contain opacity-90" />
            <span className="text-xs sm:text-sm text-slate-300 italic tracking-wide">
              inspirado no filme Homem de Ferro
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] lg:leading-[1] tracking-[-0.03em] mb-6">
            Crie seu próprio{' '}
            <br />
            <GlitchText text="JARVIS" className="gradient-text glow-cyan" />
            {' '}em minutos.
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8 sm:mb-10 max-w-md lg:max-w-none">
            Domine a tecnologia de voz em tempo real e construa um assistente de IA que{' '}
            <span className="text-white font-semibold">pensa e responde</span>{' '}
            como nos filmes. Do zero ao deploy.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-10 w-full sm:w-auto">
            <motion.a
              href="#cta"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-white text-darker font-black text-base shadow-[0_10px_40_rgba(255,255,255,0.15)] hover:shadow-[0_15px_60px_rgba(255,255,255,0.25)] transition-shadow text-center"
            >
              Garantir minha vaga
            </motion.a>
            <motion.a
              href="#demo"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-10 py-4 rounded-2xl glass-card text-white font-semibold text-base border border-white/10 flex items-center justify-center gap-3"
            >
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                <Play className="w-3.5 h-3.5 text-white fill-white translate-x-px" />
              </div>
              Assistir demo
            </motion.a>
          </div>

          {/* Status Cards */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Card Voice */}
            <div className="glass-card rounded-2xl px-4 py-3 flex items-center gap-3 text-left border border-white/5 flex-1">
              <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Mic className="w-4 h-4 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">Entrada de Voz</p>
                <p className="text-xs font-bold text-white mb-1.5">Realtime Voice</p>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-accent rounded-full"
                    animate={{ width: ['15%', '80%', '40%', '65%', '15%'] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>
              </div>
            </div>

            {/* Card Neural */}
            <div className="glass-card rounded-2xl px-4 py-3 flex items-center gap-3 text-left border border-white/5 flex-1">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Brain className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">Neural Core</p>
                <p className="text-xs font-bold text-white mb-1.5">GPT-4o Omni</p>
                <div className="flex items-end gap-0.5 h-4">
                  {[...Array(10)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-primary/40 rounded-full"
                      animate={{ scaleY: [0.3, 1, 0.4, 0.8, 0.3] }}
                      transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.08, ease: 'easeInOut' }}
                      style={{ minHeight: 3, transformOrigin: 'bottom' }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Card Latência */}
            <div className="glass-card rounded-2xl px-4 py-3 flex items-center gap-3 text-left border border-white/5 flex-1 md:hidden lg:flex">
              <div className="w-9 h-9 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-4 h-4 text-green-400" />
              </div>
              <div>
                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">Latência</p>
                <p className="text-xs font-bold text-white mb-0.5">Online · 12ms</p>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[9px] text-green-400 font-semibold">Tempo real</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-8 flex items-center justify-center lg:justify-start gap-8 border-t border-white/5 pt-8 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            {[
              { value: '18+', label: 'Aulas Práticas' },
              { value: '<30ms', label: 'Latência' },
              { value: '100%', label: 'Acesso Vitalício' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-xl sm:text-2xl font-black text-white tracking-tight">{stat.value}</p>
                <p className="text-[9px] sm:text-[10px] text-slate-500 font-medium uppercase tracking-wider mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── COLUNA DIREITA — GIF Iron Man ── */}
        <motion.div
          className="flex-shrink-0 flex items-center justify-center relative lg:translate-y-[-12%]"
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: isGifLoaded ? 1 : 0,
            y: isGifLoaded ? 0 : 40,
            x: isGifLoaded ? 0 : 40
          }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{
            width: 'min(620px, 90vw)',
            visibility: isGifLoaded ? 'visible' : 'hidden',
            mixBlendMode: 'screen',
            pointerEvents: 'none'
          }}
        >
          <img
            src="/ApiG.gif"
            alt=""
            aria-hidden="true"
            onLoad={() => {
              setTimeout(() => setIsGifLoaded(true), 1000);
            }}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              backgroundColor: 'transparent'
            }}
          />
        </motion.div>

      </div>
    </section>
  );
}
