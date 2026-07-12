import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#8c5326] border-t border-creamy/20 pt-16 pb-8 px-6 text-creamy overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-calligraphy text-4xl text-creamy mb-2">Baba Una</div>
          <p className="font-sans text-creamy/90 text-[10px] tracking-widest uppercase font-light">
            Menyajikan Nasi Kebuli Otentik sejak 2023.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-creamy/90 text-[10px] tracking-[0.2em] uppercase space-y-2 font-light"
        >
          <p>Area Kota Sukabumi dan sekitarnya</p>
          <p>Buka setiap hari: 10.00 - 20.00</p>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-7xl mx-auto mt-16 pt-8 border-t border-creamy/20 text-center font-sans text-creamy/60 text-[9px] uppercase tracking-[0.3em]"
      >
        &copy; {new Date().getFullYear()} Nasi Kebuli Baba Una — Artisanal Dining
      </motion.div>
    </footer>
  );
}
