import { Star, ArrowRight, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="/assets/hero-bg.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Animated Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/20 blur-[120px] rounded-full"
        ></motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="container-custom h-full relative">
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute left-0 top-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
          ></motion.div>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, delay: 0.7 }}
            className="absolute left-0 top-1/4 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"
          ></motion.div>
        </div>
      </div>

      <div className="container-custom relative z-10 pt-0">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Liquid Consulting
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-[0.95] mb-8 tracking-tighter">
                Elevate Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Business</span> Potential
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg lg:text-xl text-slate-300 mb-10 max-w-lg leading-relaxed"
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

          <div className="lg:col-span-5 hidden lg:block relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "backOut" }}
              className="relative z-10"
            >
              <div className="relative p-1 bg-gradient-to-br from-white/20 to-transparent rounded-3xl backdrop-blur-sm">
                <div className="bg-slate-900/80 p-10 rounded-[22px] border border-white/10 relative overflow-hidden group">
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full transition-transform duration-700 group-hover:scale-150"></div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/40">
                      <Star size={32} fill="currentColor" />
                    </div>
                    <div>
                      <div className="text-4xl font-black text-white">25+ Years</div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">BUSINESS SOLUTIONS</div>
                    </div>
                  </div>

                  
                </div>
              </div>

              {/* Floating Accents */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 w-12 h-12 bg-primary/30 blur-xl rounded-full"
              ></motion.div>
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -right-6 w-16 h-16 bg-blue-500/20 blur-xl rounded-full"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
