import menuKambing from '../assets/images/menu_kambing_1783776636767.jpg';
import menuAyam from '../assets/images/menu_ayam_1783776648506.jpg';
import { motion } from 'motion/react';

const menuItems = [
  {
    id: 'kambing',
    title: 'Kebuli Kambing Spesial',
    desc: 'Daging kambing muda pilihan yang dimasak perlahan hingga sangat empuk (fall-off-the-bone), disajikan dengan kismis, acara nanas segar, dan emping.',
    price: 'Rp 85.000',
    image: menuKambing,
  },
  {
    id: 'ayam',
    title: 'Kebuli Ayam Panggang',
    desc: 'Ayam kampung panggang dengan baluran bumbu madu rempah, meresap sempurna. Cocok bagi Anda yang menginginkan cita rasa lebih ringan namun tetap kaya.',
    price: 'Rp 55.000',
    image: menuAyam,
  }
];

export default function MenuSection() {
  return (
    <section id="menu" className="w-full py-24 md:py-32 bg-transparent border-b border-earth-700/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24 flex flex-col items-center"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-earth-700 block mb-2 font-medium">Pilihan Utama</span>
          <div className="w-12 h-[1px] bg-earth-700 mb-6"></div>
          <h2 className="font-serif text-4xl md:text-5xl text-earth-900 tracking-tight">People's <span className="italic font-light text-earth-700">Favourite!</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {menuItems.map((item, index) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group bg-creamy/95 backdrop-blur-sm border border-earth-700/20 shadow-xl overflow-hidden transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out grayscale-[0.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900/60 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-8 md:p-10 flex flex-col h-full bg-transparent">
                <div className="flex justify-between items-start mb-4 gap-4 border-b border-earth-700/20 pb-4">
                  <h3 className="font-serif text-2xl md:text-3xl text-earth-900">{item.title}</h3>
                  <span className="font-sans text-earth-700 font-light whitespace-nowrap mt-1 tracking-widest">{item.price}</span>
                </div>
                <p className="font-sans text-earth-800 text-xs md:text-sm leading-relaxed font-light mb-8 flex-grow">
                  {item.desc}
                </p>
                <div className="mt-auto pt-4">
                  <a 
                    href={`https://wa.me/6281288388148?text=Halo%20Baba%20Una,%20saya%20mau%20pesan%20${encodeURIComponent(item.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-earth-900 hover:bg-earth-700 text-creamy font-sans text-[10px] tracking-[0.2em] uppercase px-8 py-4 transition-colors shadow-lg"
                  >
                    Pesan Porsi Ini
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
