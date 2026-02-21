import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-2">
            <img src="/logo.png" alt="JARVIS AI" className="h-4 w-auto" />
          </a>

          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
          </div>

          <p className="text-sm text-slate-500 flex items-center gap-1">
            Feito com <Heart className="h-3.5 w-3.5 text-red-400 fill-current" /> para devs apaixonados por IA
          </p>
        </div>
      </div>
    </footer>
  );
}
