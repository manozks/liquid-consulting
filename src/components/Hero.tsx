import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-bg.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6">
               Liquid Consulting
              </h1>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl text-white mb-10"
            >
              Making your business better, faster, and more efficient with our expert consulting services.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/#contact" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/30 flex items-center justify-center">
                Get In Touch
              </Link>
              <Link to="/#about" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/30 flex items-center justify-center">
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-end"
          >
            <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-xs border border-slate-100 opacity-70">
              <div className="text-5xl font-black text-slate-900 mb-2">25+ Years </div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
                BUSINESS SOLUTIONS
              </div>
              <div className="flex gap-1 mb-8">
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
