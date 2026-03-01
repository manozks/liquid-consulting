import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/assets/hero-bg.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6">
               Liquid Consulting
              </h1>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-2xl lg:text-3xl text-white/90 mb-10 font-medium"
            >
              Making your business better, faster, and more efficient with our expert consulting services.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/#contact" className="group relative overflow-hidden bg-primary text-white px-8 py-4 rounded-md font-bold transition-all shadow-xl shadow-primary/30 flex items-center justify-center">
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
              </Link>
              <Link to="/#about" className="group relative overflow-hidden border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-md font-bold transition-all flex items-center justify-center">
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "backOut" }}
            className="hidden lg:flex justify-end"
          >
            <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-xs border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-150"></div>
              <div className="text-5xl font-black text-slate-900 mb-2 relative z-10">25+ Years </div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 relative z-10">
                BUSINESS SOLUTIONS
              </div>
              <div className="flex gap-1 mb-8 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
