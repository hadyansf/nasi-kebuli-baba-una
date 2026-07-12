import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/Menu';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingSpices from './components/FloatingSpices';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <main className="min-h-screen bg-creamy text-earth-900 selection:bg-caramel/30 selection:text-earth-900 relative font-serif flex flex-col">
      {/* Subtle Textured Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0" style={{backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E')`}}></div>
      
      <FloatingSpices />
      <FloatingWhatsApp />
      
      <div className="relative z-10 flex flex-col flex-1">
        <Navbar />
        <Hero />
        <About />
        <MenuSection />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}

