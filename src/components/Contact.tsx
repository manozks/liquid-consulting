import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 max-w-3xl mx-auto leading-tight">
            Don't Let Anything Stop Your Business Growth
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
          {/* Form Side */}
          <div className="lg:col-span-7 p-8 lg:p-16 bg-slate-50">
            <span className="inline-block px-4 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-500 mb-6">
              Make an Appointment
            </span>
            <h3 className="text-3xl font-bold text-slate-900 mb-10">Request a free quote</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
              <input
                type="text"
                placeholder="Business Topic"
                className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
              <textarea
                placeholder="Type Your Message"
                rows={4}
                className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
              ></textarea>
              <button className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary/20">
                Send Message
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="lg:col-span-5 p-8 lg:p-16 bg-primary text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-12 uppercase tracking-wider">GET IN CONTACT WITH US</h3>
            
            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Call Us 24/7</p>
                  <p className="text-xl font-bold">+644 2113 2211</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Work with us</p>
                  <p className="text-xl font-bold">info@liquidconsulting.com.au</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Our Lacation</p>
                  <p className="text-xl font-bold">Perth - Sydney - Brisbane</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
