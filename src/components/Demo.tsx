import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Play, Volume2, VolumeX } from 'lucide-react';

export function Demo() {
  const videos = [
    { id: '1', url: '/01.mp4', tiktokUrl: 'https://www.tiktok.com/@pedroaraujos3/video/7597023710314515732' },
    { id: '2', url: '/02.mp4', tiktokUrl: 'https://www.tiktok.com/@pedroaraujos3/video/7596670543483407637' },
    { id: '3', url: '/03.mp4', tiktokUrl: 'https://www.tiktok.com/@w..corporation/video/7606836476323597588' },
    { id: '4', url: '/04.mp4', tiktokUrl: 'https://www.tiktok.com/@w..corporation/video/7606448999268240661' }
  ];

  return (
    <section id="demo" className="section-fade section-padding relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[1000px] h-[300px] sm:h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6 group hover:bg-primary/20 transition-all cursor-default">
            <Play className="w-3.5 h-3.5 text-accent fill-accent" />
            <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">Tecnologia JARVIS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Veja o <span className="gradient-text">JARVIS</span> em ação
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            Uma vitrine tecnológica do assistente que domina o futuro. <br className="hidden md:block" /> No celular, toque nos vídeos para controlar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({ video, index }: { video: any, index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="group relative"
    >
      {/* Card Container */}
      <div
        className="relative aspect-[9/16] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden glass-strong glow-border transition-all duration-500 hover:scale-[1.03] sm:hover:-translate-y-2 shadow-2xl cursor-pointer"
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src={video.url}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          playsInline
          loop
          muted={isMuted}
        />

        {/* Dynamic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-darker/95 via-darker/10 to-transparent opacity-60 lg:opacity-40 group-hover:opacity-100 transition-all duration-500" />

        {/* Floating Controls (Top Right) */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex flex-col gap-3 lg:opacity-0 group-hover:opacity-100 transition-all duration-400">
          <button
            onClick={toggleMute}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110 active:scale-90"
          >
            {isMuted ? <VolumeX className="w-5 h-5 text-slate-300" /> : <Volume2 className="w-5 h-5 text-accent" />}
          </button>
        </div>

        {/* Center Play Button (Visible when paused) */}
        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center">
                <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-white ml-1" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Content Area */}
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col gap-4 transform lg:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center gap-3">
            <div className="h-0.5 flex-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent"
                initial={{ width: "0%" }}
                animate={{ width: isPlaying ? "100%" : "0%" }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>

          <div className="flex gap-2">
            <a
              href={video.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-white font-bold text-[10px] tracking-widest uppercase shadow-xl hover:bg-white/20 active:scale-95 transition-all lg:hover:scale-[1.02]"
            >
              <ExternalLink className="w-4 h-4 text-accent" />
              <span>Ver no TikTok</span>
            </a>
          </div>
        </div>

        {/* Cyberpunk Scan Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-40 animate-scan pointer-events-none" />
      </div>

      {/* Decorative Glow */}
      <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
    </motion.div>
  );
}
