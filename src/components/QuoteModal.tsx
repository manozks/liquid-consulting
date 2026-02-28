import { X, Loader2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, FormEvent } from 'react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
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
    formData.append("subject", `New Quote Request from ${formData.get("name")}`);
    formData.append("from_name", "Liquid Consulting Website");

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
          onClose();
        }, 3000);
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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Container for Centering & Padding */}
          <div className="flex min-h-full items-center justify-center p-4 md:p-8">
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden my-8"
            >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h2 className="text-2xl font-bold text-slate-900">Request a Quote</h2>
                <button
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-slate-600 transition-colors rounded-full hover:bg-slate-200 cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {isSuccess ? (
                <div className="p-12 text-center space-y-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex justify-center"
                  >
                    <CheckCircle2 size={80} className="text-emerald-500" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-900">Thank You!</h3>
                  <p className="text-slate-600">
                    Your request has been submitted successfully. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form className="p-8 space-y-4" onSubmit={handleSubmit}>
                  {error && (
                    <div className="p-4 bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg">
                      {error}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-500 uppercase">Full Name</label>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-500 uppercase">Email Address</label>
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Phone Number</label>
                    <input
                      required
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Service Interested In</label>
                    <select 
                      name="service"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                    >
                      <option>Financial Planning</option>
                      <option>Business Investment</option>
                      <option>Management Planning</option>
                      <option>Other Consulting</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Message / Requirements</label>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark disabled:bg-slate-400 text-white py-4 rounded-lg font-bold text-lg shadow-lg shadow-primary/30 transition-all active:scale-95 mt-4 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Sending...
                      </>
                    ) : (
                      "Submit Request"
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
