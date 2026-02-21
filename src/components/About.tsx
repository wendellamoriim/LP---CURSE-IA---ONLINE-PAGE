import { motion } from 'framer-motion';
import { Mic, Cpu, Wifi, Zap, MessageSquare, Globe } from 'lucide-react';

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
    icon: Wifi,
    title: 'Comunicação Bidirecional',
    description: 'Comunicação em tempo real com infraestrutura de nível profissional e baixíssima latência.',
    accent: 'text-green-400',
    bg: 'bg-green-500/10',
  },
  {
    icon: Zap,
    title: 'Respostas em <30ms',
    description: 'Streaming de áudio e texto com respostas que começam antes mesmo de você terminar de falar.',
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
    icon: Globe,
    title: 'Deploy na Nuvem',
    description: 'Leve seu assistente para a internet. Aprenda a publicar e escalar na cloud.',
    accent: 'text-accent',
    bg: 'bg-accent/10',
  },
];

export function About() {
  return (
    <section id="about" className="section-fade section-padding relative bg-darker overflow-hidden">
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
      </div>
    </section>
  );
}
