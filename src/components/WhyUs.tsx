import { User, Calculator, Globe, ShieldCheck, Zap, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyUs() {
  const features = [
    {
      icon: User,
      title: "You want a real person",
      subtitle: "Meaningful Connections",
      description: "We like human interactions and making meaningful relationships with all of our clients"
    },
    {
      icon: Calculator,
      title: "You want to make money",
      subtitle: "Maximize Your ROI",
      description: "We like to help you make smart strategic decisions to improve your business"
    },
    {
      icon: Globe,
      title: "You want the global scale",
      subtitle: "Scale Without Borders",
      description: "We live and breathe international business and can take your business to the next level"
    }
  ];

  return (
    <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full"
        ></motion.div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              The Liquid Advantage
            </span>
            <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight leading-tight">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Liquid</span> Consulting?
            </h2>
            <p className="text-slate-400 text-lg lg:text-xl leading-relaxed">
            You benefit from our global experience.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Card Background with Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-[2.5rem] border border-white/10 transition-all duration-500 group-hover:border-primary/50 group-hover:bg-white/10"></div>
              
              <div className="relative p-10 flex flex-col items-center text-center">
                {/* Icon Container */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 bg-slate-900 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(var(--color-primary),0.3)] transition-all duration-500"
                >
                  <feature.icon size={36} className="text-primary" />
                </motion.div>

                <div className="mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2 block">
                    {feature.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Decorative Accent */}
                <div className="mt-8 w-12 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-12 lg:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
        >
     
        </motion.div>
      </div>
    </section>
  );
}
