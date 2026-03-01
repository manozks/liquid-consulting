import { Phone, Mail, MapPin, Loader2, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, FormEvent } from 'react';

  export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    
    // Priority: 1. Environment Variable, 2. Fallback to provided key for immediate fix
    const accessKey = (import.meta as any).env.VITE_WEB3FORMS_ACCESS_KEY || "9d740cf6-0829-4cc2-8a01-9497a8f56628";

    if (!accessKey || accessKey.includes("your_access_key")) {
      setError("Web3Forms Access Key is missing. Please set VITE_WEB3FORMS_ACCESS_KEY in your environment variables.");
      setIsSubmitting(false);
      return;
    }

    formData.append("access_key", accessKey);
    formData.append("subject", `New Contact Request from ${formData.get("name")}`);
    formData.append("from_name", "Financial Consulting Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect to the server. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            
            {isSuccess ? (
              <div className="py-12 text-center space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex justify-center"
                >
                  <CheckCircle2 size={80} className="text-emerald-500" />
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                <p className="text-slate-600">
                  Thank you for reaching out. We've received your message and will get back to you shortly.
                </p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {error && (
                  <div className="p-4 bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg">
                    {error}
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <input
                  required
                  name="topic"
                  type="text"
                  placeholder="Business Topic"
                  className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
                <textarea
                  required
                  name="message"
                  placeholder="Type Your Message"
                  rows={4}
                  className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                ></textarea>
                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className="bg-primary hover:bg-primary-dark disabled:bg-slate-400 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
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
                  <p className="text-xl font-bold"><a href="mailto:info@liquidconsulting.com.au" className="hover:text-white/60 transition-colors">info@liquidconsulting.com.au</a></p>
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
