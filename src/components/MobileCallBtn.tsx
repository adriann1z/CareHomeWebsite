import { Phone } from 'lucide-react';
import { motion } from 'motion/react';

export function MobileCallBtn() {
  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", delay: 1, damping: 20, stiffness: 200 }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-gradient-to-b from-gold to-gold-deep shadow-[0_-10px_30px_rgba(200,169,110,0.3)] rounded-t-3xl p-4"
    >
      <a 
        href="tel:01472823287"
        className="flex items-center justify-center gap-3 w-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white font-bold py-3 rounded-full transition-colors backdrop-blur-md border border-white/20"
      >
        <Phone size={20} />
        <span className="text-lg">Call Us — 01472 823287</span>
      </a>
    </motion.div>
  );
}
