import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative top-0 w-full z-50 py-8 px-6 md:px-12 flex justify-between items-center bg-creamy border-b border-earth-700/20">
      <div className="flex items-center gap-4">
        <img src="/logo.jpeg" alt="Baba Una Logo" className="w-12 h-12 rounded-full object-cover shadow-sm bg-earth-900" />
        <div className="font-calligraphy text-2xl tracking-[0.2em] font-light text-earth-700">
          Baba Una
        </div>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 items-center font-sans text-[11px] tracking-[0.3em] uppercase font-light">
        <a href="#cerita" className="hover:text-caramel transition-colors">Nilai Kami</a>
        <a href="#menu" className="hover:text-caramel transition-colors">Menu</a>
        <a href="#ulasan" className="hover:text-caramel transition-colors">Ulasan</a>
        <a 
          href="https://wa.me/6281288388148" 
          target="_blank" 
          rel="noreferrer"
          className="hover:text-caramel transition-colors"
        >
          Pesan
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden text-earth-700" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-creamy/95 backdrop-blur-sm border-b border-earth-700/20 flex flex-col items-center py-8 gap-6 md:hidden">
          <a href="#cerita" onClick={() => setIsOpen(false)} className="font-sans text-[11px] tracking-[0.3em] uppercase font-light hover:text-caramel transition-colors">Nilai Kami</a>
          <a href="#menu" onClick={() => setIsOpen(false)} className="font-sans text-[11px] tracking-[0.3em] uppercase font-light hover:text-caramel transition-colors">Menu</a>
          <a href="#ulasan" onClick={() => setIsOpen(false)} className="font-sans text-[11px] tracking-[0.3em] uppercase font-light hover:text-caramel transition-colors">Ulasan</a>
          <a 
            href="https://wa.me/6281288388148" 
            target="_blank" 
            rel="noreferrer"
            className="font-sans text-[11px] tracking-[0.3em] uppercase font-light hover:text-caramel transition-colors"
          >
            Pesan
          </a>
        </div>
      )}
    </nav>
  );
}
