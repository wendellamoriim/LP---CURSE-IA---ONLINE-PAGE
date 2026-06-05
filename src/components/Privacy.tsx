import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

interface PrivacyProps {
  onBack: () => void;
}

export function Privacy({ onBack }: PrivacyProps) {
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
            <ShieldCheck className="w-3.5 h-3.5" />
            Privacidade
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Política de <span className="gradient-text">Privacidade</span>
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
              <span className="text-primary">1.</span> Compromisso com a sua Privacidade
            </h2>
            <p>
              Esta Política de Privacidade descreve como o curso <strong>JARVIS AI</strong>, operado por seus fundadores Pedro Araújo e Wendell Amorim, coleta, usa, protege e compartilha suas informações pessoais. Temos o compromisso de respeitar e garantir a privacidade de todos os nossos alunos em conformidade com as diretrizes da Lei Geral de Proteção de Dados (LGPD).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">2.</span> Dados Coletados na Compra
            </h2>
            <p>
              Todo o processamento financeiro e coleta de dados cadastrais no momento da compra (como Nome, E-mail, CPF, Telefone e dados de Pagamento) é feito com segurança máxima através da nossa plataforma integradora parceira: <strong>PerfectPay</strong>.
            </p>
            <p>
              Nós não temos acesso direto e não armazenamos as suas informações de cartão de crédito ou dados bancários confidenciais. A PerfectPay nos fornece apenas os dados necessários para o envio do acesso ao curso e identificação do aluno (Nome, E-mail, Telefone).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">3.</span> Uso das Informações
            </h2>
            <p>
              As informações cadastrais que recebemos são utilizadas exclusivamente para as seguintes finalidades:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>Envio de credenciais de login para a plataforma de aulas e atualizações.</li>
              <li>Suporte técnico aos alunos e resolução de problemas na área de membros.</li>
              <li>Comunicações importantes sobre novas aulas, atualizações do sistema ou comunicados da comunidade.</li>
              <li>Verificação de legitimidade de afiliação de vendas.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">4.</span> Cookies e Tecnologias de Rastreamento
            </h2>
            <p>
              Utilizamos cookies e tecnologias similares de rastreamento de forma responsável (como pixels do Facebook Ads ou Google Analytics) para analisar o comportamento e desempenho de nossa landing page. Isso serve apenas para otimizar nossa publicidade e oferecer uma melhor experiência aos visitantes do site. Você pode gerenciar ou desativar os cookies diretamente no seu navegador.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">5.</span> Segurança e Proteção dos Dados
            </h2>
            <p>
              Adotamos as melhores práticas técnicas e organizacionais de segurança da informação (como criptografia SSL/TLS no tráfego de dados e controle de acesso restrito aos servidores de hospedagem) para evitar perdas, roubos ou acessos não autorizados aos seus dados cadastrais.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">6.</span> Seus Direitos (LGPD)
            </h2>
            <p>
              De acordo com a legislação vigente, você tem o direito de solicitar a confirmação da existência de tratamento de dados pessoais, o acesso aos dados coletados, a correção de dados incompletos ou inexatos, ou a exclusão definitiva de sua conta e dados cadastrais (o que pode acarretar na suspensão do acesso à área de membros do curso). Para qualquer solicitação relacionada a isso, entre em contato direto com o suporte do curso.
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
