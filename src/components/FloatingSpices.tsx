import { motion } from 'motion/react';

const Clove = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11 2a3 3 0 0 1 3 3c0 .55-.15 1.07-.4 1.5l1.4 4.5-2 1-1-1v8a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-8l-1 1-2-1 1.4-4.5A3.01 3.01 0 0 1 6 5a3 3 0 0 1 3-3 3 3 0 0 1 1.26.28L11 1.16l.74 1.12c.26-.18.54-.28.86-.28h-1.6Z" />
  </svg>
);

const Cardamom = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 2c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z" />
  </svg>
);

const StarAnise = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2l2 7 7-1-5 5 3 7-7-4-7 4 3-7-5-5 7 1 2-7z" />
  </svg>
);

const spices = [
  { Component: Clove, top: '15%', left: '10%', delay: 0, duration: 15, size: 'w-6 h-6' },
  { Component: Cardamom, top: '25%', left: '85%', delay: 2, duration: 18, size: 'w-8 h-8' },
  { Component: StarAnise, top: '45%', left: '5%', delay: 5, duration: 20, size: 'w-10 h-10' },
  { Component: Clove, top: '65%', left: '90%', delay: 1, duration: 16, size: 'w-5 h-5' },
  { Component: Cardamom, top: '85%', left: '15%', delay: 4, duration: 19, size: 'w-7 h-7' },
  { Component: StarAnise, top: '90%', left: '80%', delay: 3, duration: 22, size: 'w-9 h-9' },
];

export default function FloatingSpices() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {spices.map((spice, idx) => {
        const { Component, top, left, delay, duration, size } = spice;
        return (
          <motion.div
            key={idx}
            className={`absolute text-earth-700/10 ${size}`}
            style={{ top, left }}
            animate={{
              y: [0, -30, 0, 30, 0],
              x: [0, 20, 0, -20, 0],
              rotate: [0, 90, 180, 270, 360]
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
              delay: delay
            }}
          >
            <Component className="w-full h-full" />
          </motion.div>
        );
      })}
    </div>
  );
}
