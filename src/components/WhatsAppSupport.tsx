import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Headphones } from 'lucide-react';

export function WhatsAppSupport() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Exibe o balãozinho de dica sutil após 4 segundos para engajar o usuário profissionalmente
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = "https://wa.me/5521967254808?text=Ol%C3%A1!%20Preciso%20de%20suporte%20com%20o%20curso%20JARVIS%20AI.";

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans flex flex-col items-end">
      {/* Balãozinho de Dica (Tooltip) interativo */}
      <AnimatePresence>
        {showTooltip && (
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-20 right-2 w-72 p-4 rounded-2xl glass-card border border-[#25D366]/20 shadow-2xl pointer-events-auto block hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Fechar Dica de forma independente */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="absolute top-2.5 right-2.5 p-1 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] flex-shrink-0">
                <Headphones className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#25D366] mb-0.5">
                  Suporte ao Aluno
                </p>
                <p className="text-xs text-slate-300 leading-normal">
                  Dúvidas com o curso ou instalação? Clique e fale direto com o suporte!
                </p>
              </div>
            </div>
          </motion.a>
        )}
      </AnimatePresence>

      {/* Botão Flutuante Principal do WhatsApp */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_5px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_10px_30px_rgba(37,211,102,0.5)] cursor-pointer relative focus:outline-none transition-shadow"
      >
        {/* Animação de Ring Pulsante em volta do Botão para chamar atenção sutil */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" style={{ animationDuration: '2.s' }} />
        
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </motion.a>
    </div>
  );
}
