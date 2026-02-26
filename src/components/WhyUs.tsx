import { User, Calculator, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyUs() {
  const features = [
    {
      icon: <User size={32} />,
      title: "You want a real person",
      description: "We like human interactions and making meaningful relationships with all of our clients"
    },
    {
      icon: <Calculator size={32} />,
      title: "You want to make money",
      description: "We like to help you make smart strategic decisions to improve your business"
    },
    {
      icon: <Globe size={32} />,
      title: "You want the global scale",
      description: "We live and breathe international business and can take your business to the next level"
    }
  ];

  return (
    <section className="py-24 bg-primary text-white">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Why Us?</h2>
          <p className="text-white/80 text-lg">
            You benefit from our global experience.
          </p>
        </motion.div>

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 }
              }}
              className={`flex flex-col items-center text-center group py-8 px-6 ${
                index !== features.length - 1 ? 'md:border-r border-[#063AC4]' : ''
              }`}
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-primary transition-all duration-300"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
