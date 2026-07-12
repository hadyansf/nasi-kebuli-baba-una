import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const testimonials = [
  {
    id: 1,
    text: "Rasa rempahnya benar-benar otentik, persis seperti yang saya makan di Timur Tengah. Daging kambingnya sangat empuk dan tidak bau prengus sama sekali.",
    author: "Ahmad F.",
    role: "Pelanggan Setia"
  },
  {
    id: 2,
    text: "Nasi kebuli terbaik yang pernah saya pesan untuk acara keluarga. Porsinya memuaskan dan packaging-nya sangat premium. Sangat direkomendasikan!",
    author: "Siti Rahma",
    role: "Ibu Rumah Tangga"
  },
  {
    id: 3,
    text: "Perpaduan kismis, bumbu rempah, dan daging panggangnya menciptakan harmoni rasa yang luar biasa. Bikin ketagihan!",
    author: "Budi Santoso",
    role: "Food Enthusiast"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="ulasan" className="w-full py-24 md:py-32 bg-transparent border-b border-earth-700/20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20 flex flex-col items-center"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-earth-700 block mb-2 font-medium">Ulasan</span>
          <div className="w-12 h-[1px] bg-earth-700 mb-6"></div>
          <h2 className="font-serif text-4xl md:text-5xl text-earth-900 tracking-tight">Apa Kata <span className="italic font-light text-earth-700">Mereka</span></h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="min-h-[280px] md:min-h-[220px] flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-center absolute w-full flex flex-col items-center"
              >
                <Quote size={24} strokeWidth={1} className="text-earth-700/40 mb-6" />
                <div className="flex gap-1.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#8c5326] text-[#8c5326]" />
                  ))}
                </div>
                <p className="font-serif text-xl md:text-3xl text-earth-900 leading-relaxed mb-10 font-light max-w-3xl">
                  {testimonials[currentIndex].text}
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-[1px] bg-earth-700/20 mb-4"></div>
                  <h4 className="font-sans text-[11px] font-medium text-earth-900 uppercase tracking-widest">{testimonials[currentIndex].author}</h4>
                  <p className="font-sans text-[9px] text-earth-700 uppercase tracking-[0.2em] mt-2">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-6 mt-12 relative z-20">
            <button 
              onClick={prev}
              className="p-2 text-earth-700 hover:text-earth-900 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} strokeWidth={1} />
            </button>
            
            <div className="flex gap-3">
              {testimonials.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-[1px] transition-all duration-500 ${idx === currentIndex ? 'w-8 bg-earth-900' : 'w-4 bg-earth-700/20'}`}
                />
              ))}
            </div>

            <button 
              onClick={next}
              className="p-2 text-earth-700 hover:text-earth-900 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} strokeWidth={1} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
