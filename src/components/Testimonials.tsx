import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Roberto Silva',
    location: 'Manaus — AM',
    avatar: 'RS',
    text: 'Como fã do Homem de Ferro desde criança, ver o JARVIS ganhar vida foi surreal. O curso não ensina só código — ele realiza o sonho de ter seu próprio assistente inteligente.',
    rating: 5,
  },
  {
    name: 'Ana Carolina Silva',
    location: 'Rio de Janeiro — RJ',
    avatar: 'AC',
    text: 'A tecnologia de voz é tão fluida que parece até o filme. Consegui construir a base do meu assistente em menos de uma semana. Incrível!',
    rating: 5,
  },
  {
    name: 'Rafael Santos',
    location: 'Belo Horizonte — MG',
    avatar: 'RS',
    text: 'O nível de realismo é inacreditável. Me sinto o próprio Tony Stark configurando as skills do meu JARVIS. O curso entrega exatamente o que um desenvolvedor precisa.',
    rating: 5,
  },
  {
    name: 'Mariana Costa',
    location: 'Curitiba — PR',
    avatar: 'MC',
    text: 'É emocionante ouvir a voz do assistente respondendo pela primeira vez. Para quem cresceu assistindo aos Vingadores, criar o seu próprio JARVIS é o ápice.',
    rating: 5,
  },
  {
    name: 'Pedro Oliveira',
    location: 'Recife — PE',
    avatar: 'PO',
    text: 'Finalmente tenho um JARVIS de verdade rodando no meu setup! A tecnologia é tão avançada que transformou minha casa em um cenário de ficção científica.',
    rating: 5,
  },
  {
    name: 'Juliana Ferreira',
    location: 'Florianópolis — SC',
    avatar: 'JF',
    text: 'Você não está apenas estudando IA — você está literalmente construindo o futuro que o Tony Stark nos mostrou nos cinemas. Absolutamente incrível.',
    rating: 5,
  },
];

const colors = ['from-cyan-500 to-blue-500', 'from-primary to-violet-500', 'from-pink-500 to-rose-500', 'from-green-400 to-emerald-500', 'from-yellow-400 to-orange-500', 'from-accent to-teal-500'];

export function Testimonials() {
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-white/10 mb-6">
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] sm:tracking-[0.3em]">Proof of Work</span>
          </div>
          <h2 className="text-3xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            A Voz da{' '}
            <br className="sm:hidden" />
            <span className="gradient-text">Comunidade</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="glass-card rounded-2xl p-8 flex flex-col hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-accent fill-accent" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote className="w-6 h-6 text-white/10 mb-3" />

              {/* Text */}
              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors[index]} flex items-center justify-center text-xs font-black text-white flex-shrink-0`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
