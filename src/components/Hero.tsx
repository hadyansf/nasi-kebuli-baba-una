import heroImg from '../assets/images/hero_nasi_kebuli_1783776622338.jpg';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative w-full min-h-[600px] md:h-[calc(100vh-80px)] flex flex-col md:flex-row overflow-hidden bg-transparent">
      {/* Narrative & CTA */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-[40%] p-12 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-earth-700/20 order-2 md:order-1 relative z-10 bg-transparent"
      >
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-4 overflow-hidden"
        >
          <span className="text-[11px] uppercase tracking-[0.4em] text-earth-700 block mb-2 font-sans font-medium">Autentik & Tradisional</span>
          <div className="w-12 h-[1px] bg-earth-700"></div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-5xl md:text-6xl font-normal leading-[1.1] mb-6 text-earth-900 tracking-tighter"
        >
          Nasi Kebuli <br/> 
          <span className="italic font-light text-earth-700 md:ml-4">Baba Una.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-sans text-sm leading-relaxed text-earth-800 font-light max-w-xs mb-10"
        >
          Nasi kebuli premium dengan perpaduan rempah otentik dan daging pilihan, disajikan dengan cinta dari dapur Baba Una.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col gap-6"
        >
          <a 
            href="https://wa.me/6281288388148"
            target="_blank"
            rel="noreferrer"
            className="w-fit px-10 py-4 bg-caramel text-creamy font-sans text-xs uppercase tracking-[0.2em] shadow-tactile hover:bg-earth-700 transition-colors"
          >
            Pesan via WhatsApp
          </a>
          
          <div className="flex items-center gap-4 opacity-80 mt-2">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-amber border border-creamy"></div>
              <div className="w-6 h-6 rounded-full bg-earth-700 border border-creamy"></div>
            </div>
            <span className="text-[10px] uppercase tracking-widest font-sans text-earth-800 font-medium">Sajian Terbatas Setiap Hari</span>
          </div>
        </motion.div>

        {/* Spice Motif Overlay */}
        <div className="absolute bottom-8 left-8 opacity-10 pointer-events-none hidden md:block text-earth-700">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <path d="M50 10 L55 35 L80 40 L55 45 L50 70 L45 45 L20 40 L45 35 Z" strokeWidth="1"/>
            <circle cx="50" cy="40" r="5" />
          </svg>
        </div>
      </motion.div>

      {/* Hero Image Container */}
      <div className="w-full md:w-[60%] h-[40vh] md:h-auto relative bg-[#2D1B10] flex items-center justify-center overflow-hidden order-1 md:order-2">
        <motion.div 
          className="absolute inset-0 w-full h-[130%] -top-[15%]"
          style={{ y }}
        >
          <img 
            src={heroImg} 
            alt="Nasi Kebuli Baba Una" 
            className="absolute inset-0 w-full h-full object-cover object-center grayscale-[0.2] contrast-[1.1]"
          />
        </motion.div>
        
        {/* Vignette and Pattern Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-earth-900/80 md:from-earth-900 to-transparent opacity-60"></div>
        
        {/* Floating Card: Featured Menu (Desktop only for space) */}
        <div className="hidden md:block absolute bottom-12 right-12 w-64 bg-creamy/95 backdrop-blur-sm p-6 border border-earth-700/30 shadow-2xl">
          <h3 className="text-earth-700 text-sm uppercase tracking-[0.2em] mb-3 border-b border-earth-700/20 pb-2">Kebuli Domba Spesial</h3>
          <div className="flex justify-between items-end">
            <span className="font-sans text-[10px] uppercase text-earth-900 opacity-60">Per Porsi</span>
            <span className="text-xl font-light text-earth-900">Rp 85K</span>
          </div>
          <p className="mt-3 font-sans text-[10px] leading-relaxed text-earth-800 italic">
            Disajikan dengan acar nanas segar & sambal goreng ati.
          </p>
        </div>

        {/* Corner Motif */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 0 L0 0 L100 100 Z" fill="#D97706" />
            <path d="M100 0 V100 H0" stroke="white" strokeWidth="0.5" strokeDasharray="2 2"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
