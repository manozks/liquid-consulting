import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function Services() {
  const [activeId, setActiveId] = useState(1);

  const services = [
    {
      id: 1,
      title: "CORPORATE ADVISORY",
      description: "We have significant experience as lead manager, underwriter and coordinator of Initial Public Offerings, placements, rights issues and other capital market activities in small to mid-cap companies across all sectors.",
      image: "assets/service1.jpg"
    },
    {
      id: 2,
      title: "CAPITAL SOLUTIONS",
      description: "We assist small to mid-size companies in arranging equity and debt capital and also with underwriting the issue of securities and managed investment schemes. We also assist with: Mergers, Acquisitions & Divestments | Management Buy In’s & Buy Out’s |  IPO’s and RTO’s | Working Capital facilities",
      image: "assets/service2.jpg"
    },
    {
      id: 3,
      title: "SPECIALTIES",
      description: "Mining & Natural Resources | Agribusiness | Alternative & Renewable Energy | Waste Management | Property & Real Estate | International Transactions",
      image: "assets/service3.jpg"
    }
  ];

  const activeService = services.find(s => s.id === activeId) || services[0];

  return (
    <section id="service" className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
<div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Our Services</h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Left Side: Service Cards */}
          <div className="w-full lg:w-[40%] z-20 space-y-6">
            {services.map((service) => (
              <motion.div
                key={service.id}
                onClick={() => setActiveId(service.id)}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: service.id * 0.1 }}
                className={`p-8 rounded-xl flex gap-6 items-start transition-all duration-500 cursor-pointer shadow-xl ${
                  activeId === service.id 
                  ? 'bg-primary text-white ring-4 ring-primary/10' 
                  : 'bg-white text-slate-900 hover:bg-slate-50'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl flex-shrink-0 transition-colors duration-500 ${
                  activeId === service.id ? 'bg-white text-primary' : 'bg-slate-100 text-slate-400'
                }`}>
                  {service.id}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className={`text-sm leading-relaxed ${activeId === service.id ? 'text-white/80' : 'text-slate-500'}`}>
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Image with Overlap */}
          <div className="w-full lg:w-[70%] lg:-ml-[10%] z-10 mt-12 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/10] bg-slate-100">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeId}
                  src={activeService.image}
                  alt={activeService.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
