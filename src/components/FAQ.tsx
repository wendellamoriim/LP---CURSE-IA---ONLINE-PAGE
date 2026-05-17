import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Preciso ter experiência prévia com programação?',
    answer: 'Não! O curso foi desenvolvido pensando em quem está começando do absoluto zero. Você não precisa ter nenhuma experiência prévia em programação para construir e rodar o seu próprio JARVIS.',
  },
  {
    question: 'Quais são os requisitos mínimos do meu computador?',
    answer: 'Você precisa apenas de um computador Desktop ou Notebook com pelo menos 8GB de RAM, webcam, microfone e conexão com a internet. O assistente é compatível com Windows, macOS e Linux.',
  },
  {
    question: 'Terei custos adicionais com APIs ou mensalidades?',
    answer: 'Não! O seu acesso é vitalício, sem nenhuma mensalidade e o desenvolvimento é ensinado utilizando ferramentas com generosos planos gratuitos, garantindo custo zero adicional com APIs.',
  },
  {
    question: 'Consigo usar o assistente no celular (Mobile)?',
    answer: 'Sim! Ele funciona via mobile através de localhost. Para isso, basta deixar o "cérebro" do Jarvis rodando no seu computador pessoal (na mesma rede) ou em um servidor em nuvem (VPS).',
  },
  {
    question: 'Quanto tempo leva para construir o JARVIS?',
    answer: 'Nossas vídeoaulas práticas foram planejadas milimetricamente para que você consiga construir e ver o seu próprio assistente rodando em média 45 minutos!',
  },
  {
    question: 'Terei direito a atualizações e descontos?',
    answer: 'Sim! O acesso inclui atualizações vitalícias sem custos. Além disso, como aluno oficial, você terá descontos exclusivos de lançamento em SKILLS específicas e avançadas para o seu assistente.',
  },
  {
    question: 'Como funciona o suporte e a comunidade?',
    answer: 'Você terá acesso à nossa comunidade exclusiva de alunos no Discord. Lá você poderá tirar dúvidas diretamente com o suporte técnico, trocar ideias, fazer networking e fechar parcerias de negócios.',
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
