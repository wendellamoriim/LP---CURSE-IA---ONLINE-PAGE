import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Preciso ter experiência prévia com IA ou programação?',
    answer: 'Não! O curso foi criado para ser acessível do zero. Mesmo sem experiência com programação ou IA, você vai conseguir acompanhar. Todo o ambiente é configurado passo a passo.',
  },
  {
    question: 'Quais são os requisitos de hardware?',
    answer: 'Apenas um computador e acesso à internet. Para recursos de visão computacional e voz em tempo real, você vai precisar de webcam e microfone — itens que a maioria dos notebooks já possui.',
  },
  {
    question: 'O curso gera custos com APIs externas?',
    answer: 'Não! Todas as ferramentas utilizadas possuem planos gratuitos extremamente generosos. Ensinamos a configurar tudo para que você não tenha custo adicional com APIs.',
  },
  {
    question: 'Por quanto tempo terei acesso?',
    answer: 'O acesso ao conteúdo desta versão é vitalício — assista quantas vezes quiser. Atualizações futuras e módulos avançados serão lançados separadamente como pacotes adicionais.',
  },
  {
    question: 'O assistente funciona em português (PT-BR)?',
    answer: 'Sim! A tecnologia suporta múltiplos idiomas incluindo português brasileiro, com reconhecimento e síntese de voz nativos.',
  },
  {
    question: 'E se eu não gostar? Tem garantia?',
    answer: 'Sim! Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do investimento, sem perguntas.',
  },
  {
    question: 'Tem suporte para tirar dúvidas?',
    answer: 'Sim! Você terá acesso à comunidade exclusiva no Discord com suporte do instrutor e outros alunos. Sessões de Q&A ao vivo são realizadas periodicamente.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-fade section-padding relative bg-darker overflow-hidden">
      <div className="relative mx-auto max-w-3xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-white/10 mb-6">
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] sm:tracking-[0.3em]">Dúvidas Frequentes</span>
          </div>
          <h2 className="text-3xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Perguntas{' '}
            <br className="sm:hidden" />
            <span className="gradient-text">Frequentes</span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`glass-card rounded-2xl overflow-hidden border transition-all duration-300 ${isOpen ? 'border-primary/20 shadow-[0_0_30px_rgba(67,175,247,0.05)]' : 'border-white/5 hover:border-white/10'
                  }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
                >
                  <span className={`text-base font-semibold tracking-tight transition-colors ${isOpen ? 'text-white' : 'text-slate-200'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-primary/20 rotate-0' : 'bg-white/5'
                    }`}>
                    {isOpen
                      ? <Minus className="w-4 h-4 text-primary" />
                      : <Plus className="w-4 h-4 text-slate-500" />
                    }
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-7 pb-6">
                        <div className="h-px bg-white/5 mb-5" />
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
