import { Users, TrendingUp, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -z-10 skew-x-6 translate-x-1/2"></div>
      
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Side with Overlapping Elements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border-8 border-white">
              <img
                src="/assets/about.jpg"
                alt="About Us"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Experience Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-10 -right-10 z-20 bg-primary p-8 rounded-3xl shadow-2xl text-white max-w-[200px]"
            >
              <div className="text-4xl font-black mb-1">25+</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-80 leading-tight">
                Years of Strategic Excellence
              </div>
            </motion.div>

            {/* Decorative Dots/Grid */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[radial-gradient(#e2e8f0_2px,transparent_2px)] [background-size:20px_20px] -z-10"></div>
          </motion.div>

          {/* Text Side */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                About Us
              </span>
              <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
                Strategic Planning for <br />
                <span className="text-primary">Smarter</span> Business
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-slate-600 mb-12"
            >
              <p className="text-lg leading-relaxed font-medium text-slate-700">
                We are a national boutique consultancy of experienced professionals who pride ourselves on integrity and professionalism.
              </p>
              <p className="leading-relaxed">
                Specialising in Risk, Compliance & Advisory with Crisis and Change Management expertise, we deliver tailored solutions unique to our clientele. Our relationships, nurtured over 25+ years, enable us to deliver comprehensive solutions globally.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {[
                { icon: Users, title: "Management Planning", desc: "Tailored strategic roadmaps" },
                { icon: TrendingUp, title: "Business Growth", desc: "Scalable expansion strategies" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                  className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-transparent transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-4">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>

         {/*    <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button className="group flex items-center gap-3 text-slate-900 font-bold hover:text-primary transition-colors">
                <span className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <ArrowUpRight size={20} />
                </span>
                <span>Discover Our Approach</span>
              </button>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
