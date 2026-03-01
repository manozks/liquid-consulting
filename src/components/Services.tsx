import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Briefcase, BarChart3, Globe2, ArrowRight, ChevronRight } from 'lucide-react';

export default function Services() {
  const [activeId, setActiveId] = useState(1);

  const services = [
    {
      id: 1,
      icon: Briefcase,
      title: "Corporate Advisory",
      tagline: "Strategic Capital Management",
      description: "We have significant experience as lead manager, underwriter and coordinator of Initial Public Offerings, placements, rights issues and other capital market activities in small to mid-cap companies across all sectors.",
      image: "assets/service1.jpg",
      features: ["IPO Management", "Capital Raising", "Market Coordination"]
    },
    {
      id: 2,
      icon: BarChart3,
      title: "Capital Solutions",
      tagline: "Debt & Equity Structuring",
      description: "We assist small to mid-size companies in arranging equity and debt capital and also with underwriting the issue of securities and managed investment schemes. We also assist with Mergers, Acquisitions & Divestments.",
      image: "assets/service2.jpg",
      features: ["M&A Advisory", "Debt Financing", "Working Capital"]
    },
    {
      id: 3,
      icon: Globe2,
      title: "Specialties",
      tagline: "Global Sector Expertise",
      description: "Deep expertise in Mining & Natural Resources, Agribusiness, Alternative & Renewable Energy, Waste Management, Property & Real Estate, and International Transactions.",
      image: "assets/service3.jpg",
      features: ["Renewable Energy", "Natural Resources", "Global Trade"]
    }
  ];

  const activeService = services.find(s => s.id === activeId) || services[0];

  return (
    <section id="service" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              Our Services
            </span>
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
              Comprehensive <span className="text-primary">Solutions</span> <br />
              for Global Challenges
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We provide tailored advisory and capital solutions designed to help your business navigate complex markets and achieve sustainable growth.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Service Navigation */}
          <div className="lg:col-span-5 space-y-4">
            {services.map((service) => (
              <motion.div
                key={service.id}
                onClick={() => setActiveId(service.id)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: service.id * 0.1 }}
                className={`group relative p-8 rounded-3xl transition-all duration-500 cursor-pointer border-2 ${
                  activeId === service.id 
                  ? 'bg-white border-primary shadow-[0_20px_50px_rgba(0,0,0,0.05)]' 
                  : 'bg-transparent border-transparent hover:bg-white/50'
                }`}
              >
                <div className="flex gap-6 items-center">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    activeId === service.id 
                    ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                    : 'bg-white text-slate-400 shadow-sm group-hover:text-primary'
                  }`}>
                    <service.icon size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold transition-colors duration-500 ${
                      activeId === service.id ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-700'
                    }`}>
                      {service.title}
                    </h3>
                    <p className={`text-xs font-bold uppercase tracking-widest mt-1 transition-colors duration-500 ${
                      activeId === service.id ? 'text-primary' : 'text-slate-400'
                    }`}>
                      {service.tagline}
                    </p>
                  </div>
                  <div className={`transition-all duration-500 ${
                    activeId === service.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                  }`}>
                    <ChevronRight className="text-primary" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Service Details Display */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-100"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <div className="flex gap-2">
                      {activeService.features.map((feature, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-white/30">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-12">
                  <h3 className="text-3xl font-bold text-slate-900 mb-6">{activeService.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                    {activeService.description}
                  </p>
                 {/*  <button className="inline-flex items-center gap-2 text-primary font-bold group">
                    <span>Learn more about this service</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button> */}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
