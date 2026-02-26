import { Users, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="assets/about.jpg"
                alt="About Us"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element could go here */}
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
              ABOUT US
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Strategic Planning and <br /> Smarter Business Solutions
            </h2>
            <p className="text-slate-600 mb-10 leading-relaxed">
             We are a national boutique consultancy comprising of experienced professionals that prides ourselves on our integrity and professionalism in delivering tailored solutions unique to our clientele, providing relevant and expert advice to achieve the best possible outcomes.

Management consultants specialising in Risk, Compliance & Advisory with Crisis and Change Management expertise.

We have actively nurtured and developed our relationships over the past 25+ years, domestic and internationally, which puts us in a very unique position in enabling us to deliver comprehensive solutions for the most sophisticated requirements globally.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mb-6">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Management planning</h3>
              </motion.div>
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mb-6">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Business Growth</h3>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
