import { motion } from 'framer-motion';
import { Mic, Cpu, Laptop, Zap, MessageSquare, Globe, Smartphone, Code, Layout } from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'Voz em Tempo Real',
    description: 'Converse naturalmente com latência ultrabaixa usando tecnologia de streaming de voz avançada.',
    accent: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
  {
    icon: Cpu,
    title: 'IA de Última Geração',
    description: 'Integre os modelos de linguagem mais poderosos do mundo para respostas inteligentes e contextuais.',
    accent: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Laptop,
    title: 'PC Desktop & Notebook',
    description: 'Rode seu JARVIS em qualquer computador de mesa (PC Desktop) ou Notebook. Totalmente compatível com Windows, macOS e Linux.',
    accent: 'text-green-400',
    bg: 'bg-green-500/10',
  },
  {
    icon: Code,
    title: 'Código Fonte Liberado',
    description: 'Acesso completo ao código-fonte do JARVIS sem restrições. Personalize 100%, crie novas skills e modifique o assistente como quiser.',
    accent: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
  },
  {
    icon: MessageSquare,
    title: 'Multi-Modal',
    description: 'Texto, voz e visão computacional integrados em uma única interface inteligente.',
    accent: 'text-pink-400',
    bg: 'bg-pink-500/10',
  },
  {
    icon: Layout,
    title: 'Layouts Futuristas',
    description: 'Construa interfaces incríveis de ficção científica com reatividade em tempo real e design cyberpunk premium.',
    accent: 'text-accent',
    bg: 'bg-accent/10',
  },
];

export function About() {
  return (
    <section id="about" className="section-fade relative bg-darker overflow-hidden pt-8 pb-20 sm:py-32">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[800px] h-[300px] sm:h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #43aff7 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-white/10 mb-6">
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] sm:tracking-[0.3em]">O que você vai aprender</span>
          </div>
          <h2 className="text-3xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            Tudo para criar
            <br />
            seu{' '}
            <span className="gradient-text">assistente pessoal</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Um curso completo e prático. Do zero à construção de um assistente de voz com IA
            usando as tecnologias mais avançadas do mercado.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group glass-card rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 ${feature.accent}`} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* ── SEÇÃO ADICIONAL: Especificações & Ficha Técnica ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-20 border-t border-white/5 pt-16"
        >
          <div className="text-center mb-16 sm:mb-20">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
              Especificações & <span className="gradient-text">Ficha Técnica</span>
            </h3>
            <p className="text-base sm:text-lg text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">
              Saiba exatamente o que é necessário para construir e rodar o ecossistema do seu assistente JARVIS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Card 1: Requisitos de Hardware (Destaque Premium - Cyan) */}
            <div className="glass-card rounded-2xl p-8 sm:p-9 min-h-[320px] border border-cyan-500/30 text-left flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300 group relative overflow-hidden md:scale-[1.04] shadow-[0_4px_30px_rgba(6,182,212,0.12)] z-10">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 to-cyan-300" />
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-cyan-500/20 border border-cyan-500/30 text-[9px] font-black uppercase tracking-widest text-cyan-400">
                    Hardware
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mb-3">Requisitos Mínimos</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Basta ter um PC Desktop ou Notebook com pelo menos <strong className="text-slate-200">8GB de RAM</strong>. Compatível com Windows, macOS e Linux para desenvolvimento local estável.
                </p>
              </div>
            </div>

            {/* Card 2: Mobile & VPS (Destaque Premium - Blue/Primary) */}
            <div className="glass-card rounded-2xl p-8 sm:p-9 min-h-[320px] border border-primary/30 text-left flex flex-col justify-between hover:border-primary/50 transition-all duration-300 group relative overflow-hidden md:scale-[1.04] shadow-[0_4px_30px_rgba(67,175,247,0.12)] z-10">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-accent" />
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-primary/20 border border-primary/30 text-[9px] font-black uppercase tracking-widest text-primary">
                    Mobile & Cloud
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mb-3">Funcionamento Mobile</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  O assistente funciona no celular via <strong className="text-slate-200">localhost</strong>. É necessário rodar o "cérebro" do Jarvis em segundo plano no seu próprio PC de casa ou em uma VPS (servidor na nuvem).
                </p>
              </div>
            </div>

            {/* Card 3: Nível de Programação (Destaque Premium - Emerald) */}
            <div className="glass-card rounded-2xl p-8 sm:p-9 min-h-[320px] border border-emerald-500/30 text-left flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-300 group relative overflow-hidden md:scale-[1.04] shadow-[0_4px_30px_rgba(16,185,129,0.12)] z-10">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-500 to-emerald-300" />
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/30 text-[9px] font-black uppercase tracking-widest text-emerald-400">
                    100% Acessível
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mb-3">Zero Barreira de Código</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  <strong className="text-slate-200">Não precisa ter experiência prévia</strong> com programação ou IA. As videoaulas dinâmicas foram feitas para você subir o Jarvis completo do zero em média <strong className="text-slate-200">45 minutos</strong>!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
