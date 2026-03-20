import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Play, X } from 'lucide-react';

const testimonials = [
  {
    name: 'DEX',
    location: 'Manaus — AM',
    avatar: 'DX',
    text: 'Como fã do Homem de Ferro desde criança, ver o JARVIS ganhar vida foi surreal. O curso não ensina só código — ele realiza o sonho de ter seu próprio assistente inteligente.',
    video: '/prova-social/01.mp4',
    rating: 5,
  },
  {
    name: 'ASTRA',
    location: 'Rio de Janeiro — RJ',
    avatar: 'AS',
    text: 'A tecnologia de voz é tão fluida que parece até o filme. Consegui construir a base do meu assistente em menos de uma semana. Incrível!',
    video: '/prova-social/02.mp4',
    rating: 5,
  },
  {
    name: 'GIOVANI',
    location: 'Belo Horizonte — MG',
    avatar: 'GI',
    text: 'O nível de realismo é inacreditável. Me sinto o próprio Tony Stark configurando as skills do meu JARVIS. O curso entrega exatamente o que um desenvolvedor precisa.',
    video: '/prova-social/03.mov',
    rating: 5,
  },
  {
    name: 'JAELSON',
    location: 'Curitiba — PR',
    avatar: 'JA',
    text: 'É emocionante ouvir a voz do assistente respondendo pela primeira vez. Para quem cresceu assistindo aos Vingadores, criar o seu próprio JARVIS é o ápice.',
    video: '/prova-social/05.mp4',
    rating: 5,
  },
  {
    name: 'OFORASTEIRO10',
    location: 'Recife — PE',
    avatar: 'OF',
    text: 'Finalmente tenho um JARVIS de verdade rodando no meu setup! A tecnologia é tão avançada que transformou minha casa em um cenário de ficção científica.',
    video: '/prova-social/06.mov',
    rating: 5,
  },
  {
    name: 'CREPALDI',
    location: 'Florianópolis — SC',
    avatar: 'CR',
    text: 'Você não está apenas estudando IA — você está literalmente construindo o futuro que o Tony Stark nos mostrou nos cinemas. Absolutamente incrível.',
    video: '/prova-social/07.mp4',
    rating: 5,
  },
];

const colors = [
  'from-cyan-500 to-blue-500',
  'from-primary to-violet-500',
  'from-pink-500 to-rose-500',
  'from-green-400 to-emerald-500',
  'from-yellow-400 to-orange-500',
  'from-accent to-teal-500'
];

export function Testimonials() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="testimonials" className="section-fade section-padding relative bg-darker overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[900px] h-[300px] sm:h-[400px] opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #43aff7, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-white/10 mb-6 font-bold text-[10px] text-slate-400 uppercase tracking-widest">
            <span>Clique nos cards para ver em vídeo</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-4">
            Resultados <span className="gradient-text">Reais</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Junte-se a mais de <span className="text-white font-bold">+230 alunos</span> que já estão construindo o futuro com IA.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="glass-card rounded-2xl p-4 flex flex-col hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-white/5 cursor-pointer relative group h-full"
              onClick={() => setSelectedVideo(testimonial.video)}
            >
              {/* Video Preview Container */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black/40 mb-4 group-hover:ring-2 ring-primary/50 transition-all">
                <video
                  src={testimonial.video}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  muted
                  playsInline
                  onMouseOver={(e) => e.currentTarget.play()}
                  onMouseOut={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/40 group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Author Info (Lower portion of card) */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors[index % colors.length]} flex items-center justify-center text-xs font-black text-white flex-shrink-0 shadow-lg`}>
                  {testimonial.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-white truncate uppercase tracking-tight">{testimonial.name}</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-1">
                    <Star className="w-2.5 h-2.5 text-accent fill-accent" />
                    Aluno Verificado
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-darker/90 backdrop-blur-xl"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <video
                src={selectedVideo}
                className="w-full h-full"
                controls
                autoPlay
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
