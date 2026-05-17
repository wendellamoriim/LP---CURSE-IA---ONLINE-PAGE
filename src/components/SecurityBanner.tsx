import { motion } from 'framer-motion';

export function SecurityBanner() {
  const alertText = "EVITE VÍRUS E CÓPIAS FALSAS! ADQUIRA O JARVIS ORIGINAL EXCLUSIVAMENTE NO SITE OFICIAL OU AFILIADOS CREDENCIADOS.";

  return (
    <div className="fixed top-0 left-0 right-0 h-9 z-[100] bg-black text-yellow-400 text-[9.5px] sm:text-[10.5px] font-black tracking-[0.18em] uppercase flex items-center overflow-hidden select-none" style={{ fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <div className="flex w-full relative overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex whitespace-nowrap gap-8"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          <span className="flex items-center gap-2 flex-shrink-0">
            {alertText} <span className="w-1 h-1 rounded-full bg-yellow-400/60 inline-block ml-3" />
          </span>
          <span className="flex items-center gap-2 flex-shrink-0">
            {alertText} <span className="w-1 h-1 rounded-full bg-yellow-400/60 inline-block ml-3" />
          </span>
          <span className="flex items-center gap-2 flex-shrink-0">
            {alertText} <span className="w-1 h-1 rounded-full bg-yellow-400/60 inline-block ml-3" />
          </span>
          <span className="flex items-center gap-2 flex-shrink-0">
            {alertText} <span className="w-1 h-1 rounded-full bg-yellow-400/60 inline-block ml-3" />
          </span>
        </motion.div>
      </div>
    </div>
  );
}
