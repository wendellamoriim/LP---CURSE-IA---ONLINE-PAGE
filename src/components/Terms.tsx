import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, ShieldAlert } from 'lucide-react';

interface TermsProps {
  onBack: () => void;
}

export function Terms({ onBack }: TermsProps) {
  return (
    <div className="min-h-screen bg-darker text-white pt-24 pb-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[800px] h-[300px] sm:h-[400px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #43aff7, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-4xl px-6">
        {/* Back Button */}
        <motion.button
          onClick={onBack}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Voltar ao início</span>
        </motion.button>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            Termos de Uso
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Termos e <span className="gradient-text">Condições</span> de Uso
          </h1>
          <p className="text-slate-400 mt-2 text-sm">Última atualização: Junho de 2026</p>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-3xl p-6 sm:p-10 border border-white/5 bg-darker/60 backdrop-blur-xl space-y-8 text-slate-300 leading-relaxed text-sm sm:text-base"
        >
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">1.</span> Aceitação dos Termos
            </h2>
            <p>
              Ao adquirir ou acessar o curso <strong>JARVIS AI</strong>, desenvolvido por Pedro Araújo (@pedroaraujos3) e Wendell Amorim (@w..corporation), você concorda integralmente em cumprir estes Termos e Condições de Uso. Caso não concorde com alguma parte destes termos, não deverá efetuar a compra ou acessar a plataforma de membros do treinamento.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">2.</span> Acesso e Propriedade Intelectual
            </h2>
            <p>
              O curso JARVIS AI fornece mais de 18 aulas práticas com <strong>Acesso Vitalício</strong>. 
              Este acesso é individual, pessoal e intransferível. 
            </p>
            <div className="flex gap-3 p-4 rounded-2xl bg-red-500/5 border border-red-500/20 text-red-200">
              <ShieldAlert className="w-5 h-5 flex-shrink-0 text-red-400 mt-0.5" />
              <p className="text-xs sm:text-sm">
                É terminantemente proibido o compartilhamento de credenciais de acesso, revenda ou distribuição não autorizada (pirataria) de qualquer material do curso. O descumprimento resultará no bloqueio imediato da conta sem direito a reembolso e em medidas legais cabíveis.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">3.</span> Custos de API e Ferramentas Terceiras
            </h2>
            <p>
              Nosso treinamento foi meticulosamente desenhado para ensinar você a implementar o assistente de IA sem a necessidade de pagamento de mensalidades recorrentes para a plataforma ou custos adicionais desnecessários com APIs. Os métodos ensinados focam em eficiência para maximizar os resultados dentro do período de desenvolvimento (média de 45 minutos de aulas diretas).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">4.</span> Política de Garantia e Reembolso
            </h2>
            <p>
              Oferecemos uma garantia incondicional de <strong>7 dias</strong> a partir da data da compra. Se por qualquer motivo você achar que o treinamento não é para você, poderá solicitar o reembolso integral diretamente pela plataforma de pagamentos <strong>PerfectPay</strong>, conforme o Código de Defesa do Consumidor.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">5.</span> Comunidade e Suporte
            </h2>
            <p>
              O suporte ao aluno e a participação no ecossistema de parcerias e networking ocorrem prioritariamente na nossa <strong>Comunidade Exclusiva no Discord</strong>. Comportamentos abusivos, spam, assédio ou práticas ilícitas dentro de nossos servidores de comunidade resultarão em banimento imediato.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">6.</span> Limitação de Responsabilidade
            </h2>
            <p>
              O curso visa ensinar a programar e implementar tecnologias de voz e inteligência artificial. Os criadores do curso não se responsabilizam por eventuais indisponibilidades técnicas de APIs de terceiros, falhas de conexão de internet do usuário ou pelo uso indevido e ilegal das ferramentas criadas pelo aluno.
            </p>
          </section>

          <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500">
            <span>JARVIS AI — Todos os direitos reservados.</span>
            <button
              onClick={onBack}
              className="text-primary hover:underline font-semibold cursor-pointer text-left"
            >
              Voltar ao site principal
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
