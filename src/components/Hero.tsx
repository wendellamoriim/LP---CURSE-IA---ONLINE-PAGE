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

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (!video.duration) return;

    const duration = video.duration;
    const currentTime = video.currentTime;

    const fadeInDuration = 1.0;      // 1.0s de fade-in suave no início
    const fadeOutStartOffset = 1.6;  // Começa o fade-out 1.6s antes de acabar o vídeo
    const fadeOutEndOffset = 0.3;    // Fica 100% invisível (preto) 0.3s antes do fim para ocultar o loop seco

    let opacity = 1;

    if (currentTime < fadeInDuration) {
      // Fade-in inicial
      opacity = currentTime / fadeInDuration;
    } else if (currentTime > duration - fadeOutEndOffset) {
      // 100% apagado antes do final real para eliminar o pulo de carregamento
      opacity = 0;
    } else if (currentTime > duration - fadeOutStartOffset) {
      // Rampa suave de fade-out
      const totalFadeOutTime = fadeOutStartOffset - fadeOutEndOffset;
      const timeIntoFadeOut = currentTime - (duration - fadeOutStartOffset);
      const calculatedOpacity = 1 - (timeIntoFadeOut / totalFadeOutTime);
      opacity = Math.max(0, Math.min(1, calculatedOpacity));
    }

    // Aplica a opacidade diretamente no elemento HTML para performance máxima sem re-render do React!
    video.style.opacity = opacity.toString();
  };

  return (
    <section className="section-fade relative min-h-screen flex items-center overflow-hidden bg-darker pt-20 pb-8 sm:pb-32">
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

          {/* Developer Credits (Assinatura Minimalista e Profissional) */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-y-2 sm:gap-y-0 sm:gap-x-3 w-fit py-3 px-6 sm:py-2.5 sm:px-6 rounded-2xl sm:rounded-full bg-white/[0.02] border border-white/5 text-[11px] text-slate-500 font-semibold tracking-wider uppercase mx-auto lg:mx-0 shadow-sm"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>Desenvolvido por:</span>
            <div className="flex flex-col sm:flex-row items-center gap-y-2 sm:gap-y-0 sm:gap-3">
              <a
                href="https://www.tiktok.com/@pedroaraujos3?_r=1&_t=ZS-96RpUKkbkwO"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-cyan-400 font-black lowercase tracking-normal hover:text-cyan-350 transition-colors duration-350 whitespace-nowrap"
              >
                <svg className="w-3.5 h-3.5 fill-current mr-1 text-white/90" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.05-1.5-.71-.54-1.29-1.25-1.68-2.07-.02 3.51-.01 7.02-.02 10.53-.13 1.94-.85 3.86-2.18 5.28-1.57 1.71-3.92 2.65-6.24 2.67-2.6.08-5.22-1.01-6.88-3.05-1.74-2.1-2.22-5.07-1.32-7.64C1.19 11.23 3.32 9.07 6 8.35v4.24c-1.12.33-2.12 1.09-2.65 2.12-.66 1.25-.56 2.87.27 3.99.9 1.21 2.44 1.84 3.93 1.63 1.48-.17 2.8-1.27 3.19-2.73.11-.53.15-1.07.15-1.61V.02h1.64z" />
                </svg>
                @pedroaraujos3 <span className="text-[10px] text-slate-400 font-medium uppercase ml-1">(PEDROSA)</span>
              </a>
              <span className="hidden sm:inline text-white/20">•</span>
              <a
                href="https://www.tiktok.com/@wendellamoriim?_r=1&_t=ZS-96RpW7RcO2O"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary font-black lowercase tracking-normal hover:text-blue-400 transition-colors duration-350 whitespace-nowrap"
              >
                <svg className="w-3.5 h-3.5 fill-current mr-1 text-white/90" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.05-1.5-.71-.54-1.29-1.25-1.68-2.07-.02 3.51-.01 7.02-.02 10.53-.13 1.94-.85 3.86-2.18 5.28-1.57 1.71-3.92 2.65-6.24 2.67-2.6.08-5.22-1.01-6.88-3.05-1.74-2.1-2.22-5.07-1.32-7.64C1.19 11.23 3.32 9.07 6 8.35v4.24c-1.12.33-2.12 1.09-2.65 2.12-.66 1.25-.56 2.87.27 3.99.9 1.21 2.44 1.84 3.93 1.63 1.48-.17 2.8-1.27 3.19-2.73.11-.53.15-1.07.15-1.61V.02h1.64z" />
                </svg>
                @w..corporation <span className="text-[10px] text-slate-400 font-medium uppercase ml-1">(Wendell Amorim)</span>
              </a>
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
              { value: 'Zero', label: 'Mensalidade e Custos de API' },
              { value: '100%', label: 'Acesso Vitalício' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-xl sm:text-2xl font-black text-white tracking-tight">{stat.value}</p>
                <p className="text-[9px] sm:text-[10px] text-slate-500 font-medium uppercase tracking-wider mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── COLUNA DIREITA — Vídeo do Iron Man (antigo GIF) ── */}
        <motion.div
          className="flex-shrink-0 flex items-center justify-center relative lg:translate-y-[2%] -mt-4 sm:mt-0 -mb-20 sm:mb-0"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{
            opacity: isGifLoaded ? 1 : 0,
            y: isGifLoaded ? 0 : 40,
            x: isGifLoaded ? 0 : 40,
            scale: isGifLoaded ? 1.18 : 0.95
          }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{
            width: 'min(620px, 90vw)',
            visibility: isGifLoaded ? 'visible' : 'hidden',
            mixBlendMode: 'screen',
            pointerEvents: 'none'
          }}
        >
          <video
            src="/Azul_1.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onLoadedMetadata={() => {
              setIsGifLoaded(true);
            }}
            onTimeUpdate={handleTimeUpdate}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              backgroundColor: 'transparent',
              opacity: 1, // Inicializa visível para evitar qualquer atraso no carregamento visual
              transition: 'opacity 0.15s ease-out'
            }}
          />
        </motion.div>

      </div>
    </section>
  );
}
