import { motion } from 'framer-motion';
import { Share2, DollarSign, Target, MessageCircle } from 'lucide-react';

const affiliateFeatures = [
  {
    icon: <DollarSign className="w-6 h-6 text-primary" />,
    title: 'Comissões Premium',
    description: 'Lucratividade acima da média do mercado com um modelo de comissionamento escalável e imediato.',
  },
  {
    icon: <Share2 className="w-6 h-6 text-primary" />,
    title: 'Ecossistema de Vendas',
    description: 'Tenha acesso a uma estrutura de conversão de alta performance desenhada para o público de IA.',
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: 'Renda com IA',
    description: 'Abocanhe sua fatia do maior mercado do mundo e garanta uma renda extra recorrente todos os meses.',
  },
];

export function Affiliates() {
  return (
    <section id="affiliates" className="section-padding relative bg-darker overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 text-primary mb-6"
          >
            <Share2 className="w-4 h-4" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">
              Programa de Parceria
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6"
          >
            Seja um <span className="gradient-text">Parceiro Oficial</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Aproveite a alta taxa de conversão do JARVIS e do nosso curso para construir uma nova fonte de renda sólida.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 relative z-10">
          {affiliateFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-3xl p-8 border border-white/5 hover:border-primary/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 mb-6 relative z-10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <a
            href="https://wa.me/5521967254808?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20como%20me%20tornar%20um%20afiliado%20oficial%20do%20JARVIS."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 sm:px-10 py-5 sm:py-6 rounded-2xl bg-white text-darker font-black text-base sm:text-lg uppercase tracking-wider hover:bg-slate-100 transition-all shadow-[0_10px_40px_rgba(255,255,255,0.15)] hover:shadow-[0_20px_60px_rgba(255,255,255,0.25)] hover:-translate-y-1 group"
          >
            <MessageCircle className="w-6 h-6 text-[#25D366] group-hover:scale-110 transition-transform" />
            <span>Falar com Gerente no WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
