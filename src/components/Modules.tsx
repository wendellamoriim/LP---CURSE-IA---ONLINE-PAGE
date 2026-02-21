import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Terminal, Brain, Zap, Rocket } from 'lucide-react';

const modules = [
  {
    number: '01',
    title: 'Nexus & Setup',
    description: 'Arquitetura de IA conversacional, configuração do ambiente e ferramentas essenciais.',
    lessons: 7,
    icon: Terminal,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    borderActive: 'border-cyan-400/40',
    glow: 'rgba(34, 211, 238, 0.2)',
  },
  {
    number: '02',
    title: 'Neural Core',
    description: 'Desenvolvimento do cérebro lógico: conexões multi-modais e processamento de linguagem.',
    lessons: 4,
    icon: Brain,
    color: 'text-primary',
    bg: 'bg-primary/10',
    borderActive: 'border-primary/40',
    glow: 'rgba(67, 175, 247, 0.2)',
  },
  {
    number: '03',
    title: 'Temporal Lobe',
    description: 'Memória persistente, integração com APIs e contexto de dados em tempo real.',
    lessons: 2,
    icon: Zap,
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    borderActive: 'border-yellow-400/40',
    glow: 'rgba(250, 204, 21, 0.2)',
  },
  {
    number: '04',
    title: 'The Singularity',
    description: 'Deploy escalável na cloud, otimização de latência e preparação para produção.',
    lessons: 2,
    icon: Rocket,
    color: 'text-accent',
    bg: 'bg-accent/10',
    borderActive: 'border-accent/40',
    glow: 'rgba(32, 211, 232, 0.2)',
  },
];

// Animated connector between cards
function Connector({ active }: { active: boolean }) {
  return (
    <div className="hidden lg:flex items-center justify-center w-12 flex-shrink-0">
      <div className="relative w-full h-0.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 w-full rounded-full"
          style={{ background: 'linear-gradient(90deg, transparent, #43aff7, transparent)' }}
          initial={{ x: '-100%' }}
          animate={active ? { x: '100%' } : { x: '-100%' }}
          transition={{ duration: 0.5, ease: 'easeIn' }}
        />
      </div>
      {/* Center dot */}
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-primary/50"
        animate={active ? { scale: [1, 1.8, 1], opacity: [0.5, 1, 0.5] } : {}}
        transition={{ duration: 0.4 }}
      />
    </div>
  );
}

export function Modules() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % modules.length);
    }, 1800);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  return (
    <section id="modules" className="section-fade section-padding relative bg-darker overflow-hidden">
      <div
        className="absolute bottom-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #20d3e8 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-white/10 mb-6">
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] sm:tracking-[0.3em]">Engineering Path</span>
          </div>
          <h2 className="text-3xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Do Zero à{' '}
            <br className="sm:hidden" />
            <span className="gradient-text">Singularidade</span>
          </h2>
        </motion.div>

        {/* Pipeline Row */}
        <div className="flex flex-col lg:flex-row items-stretch gap-0 lg:gap-0">
          {modules.map((mod, i) => {
            const isActive = activeIndex === i;
            const isPast = i < activeIndex;
            return (
              <div key={mod.number} className="flex flex-col lg:flex-row items-stretch flex-1">
                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex-1"
                >
                  <div
                    className={`h-full glass-card rounded-2xl p-7 flex flex-col border transition-all duration-700 cursor-default
                      ${isActive
                        ? `${mod.borderActive} shadow-[0_0_40px_var(--glow)]`
                        : isPast
                          ? 'border-white/10 opacity-70'
                          : 'border-white/5'
                      }`}
                    style={isActive ? { '--glow': mod.glow } as React.CSSProperties : {}}
                    onClick={() => setActiveIndex(i)}
                  >
                    {/* Step number — grande e em destaque */}
                    <div className="flex items-start justify-between mb-5">
                      <motion.span
                        className={`text-5xl font-black leading-none tracking-tighter transition-colors duration-500 ${isActive ? mod.color : 'text-white/8'}`}
                        animate={isActive ? { scale: [0.95, 1.05, 1] } : { scale: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        {mod.number}
                      </motion.span>

                      {/* Active pulse ring */}
                      <div className="relative">
                        <div className={`w-10 h-10 rounded-xl ${mod.bg} flex items-center justify-center`}>
                          <mod.icon className={`w-5 h-5 ${mod.color}`} />
                        </div>
                        {isActive && (
                          <motion.div
                            className={`absolute inset-0 rounded-xl ${mod.bg}`}
                            animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut' }}
                          />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                      {mod.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed flex-1">
                      {mod.description}
                    </p>

                    {/* Footer */}
                    <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-600">
                        {mod.lessons} aulas
                      </span>
                      {/* Progress dot */}
                      <div className={`w-2 h-2 rounded-full transition-colors duration-500 ${isActive ? mod.color.replace('text-', 'bg-') : isPast ? 'bg-white/20' : 'bg-white/5'}`} />
                    </div>
                  </div>
                </motion.div>

                {/* Connector — between cards */}
                {i < modules.length - 1 && (
                  <Connector active={activeIndex === i} />
                )}
              </div>
            );
          })}
        </div>

        {/* Step indicator dots */}
        <div className="flex items-center justify-center gap-3 mt-10">
          {modules.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`transition-all duration-500 rounded-full ${i === activeIndex
                ? 'w-8 h-2 bg-primary'
                : i < activeIndex
                  ? 'w-2 h-2 bg-white/30'
                  : 'w-2 h-2 bg-white/10'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
