import spiceTexture from '../assets/images/spice_texture_1783776658410.jpg';
import { motion } from 'motion/react';

export default function About() {
  const values = [
    {
      title: "Rempah Otentik",
      desc: "Dirangkai dari 17 jenis rempah khas Timur Tengah tanpa bumbu instan."
    },
    {
      title: "Daging Lembut",
      desc: "Dimasak secara perlahan hingga sangat empuk dan bumbu meresap sempurna."
    },
    {
      title: "Basmati Premium",
      desc: "Menggunakan beras basmati premium yang bulirnya panjang, rendah gula, dan pera."
    }
  ];

  return (
    <section id="cerita" className="relative w-full py-24 md:py-32 bg-transparent border-b border-earth-700/20 overflow-hidden">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply">
        <img src={spiceTexture} alt="" className="w-full h-full object-cover grayscale" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex flex-col items-center justify-center"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-earth-700 block mb-2 font-medium">Nilai Kami</span>
          <div className="w-12 h-[1px] bg-earth-700"></div>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-4xl md:text-5xl text-earth-900 mb-16 tracking-tight"
        >
          Keistimewaan <span className="italic text-earth-700 font-light">Sajian</span> Kami
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-sans">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 + (index * 0.15) }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-8 h-[1px] bg-earth-700/30 mb-6"></div>
              <h3 className="font-serif text-2xl text-earth-900 mb-4">{value.title}</h3>
              <p className="text-earth-800 text-sm leading-relaxed font-light px-4">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20">
          <span className="font-calligraphy text-4xl text-earth-700 opacity-80">Baba Una</span>
        </div>
      </div>
    </section>
  );
}
