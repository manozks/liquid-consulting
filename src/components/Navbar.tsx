import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import QuoteModal from './QuoteModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Service', href: '/#service' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
                src="/assets/logo-icon.png" 
                alt="Liquid Consulting Logo" 
                className="w-[41px] h-[60px] mr-2 rounded-full object-cover"
               
              />
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold tracking-tight text-slate-900">LIQUID</span>
              <span className="text-[10px] font-semibold tracking-[0.2em] text-[#1EABE3]">CONSULTING</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-primary transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
          {/*   <button className="p-2 text-slate-500 hover:text-primary transition-colors">
              <Search size={20} />
            </button> */}
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="group relative overflow-hidden bg-primary text-white px-6 py-3 rounded-md font-bold transition-all shadow-xl shadow-primary/30 flex items-center justify-center cursor-pointer"
            >
           <span className="relative z-10">  Get Quote</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
            </button>
            {/* <button className="p-2 text-slate-500 hover:text-primary transition-colors">
              <Menu size={24} />
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
           {/*  <button className="p-2 text-slate-500">
              <Search size={20} />
            </button> */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block text-base font-semibold text-slate-700 hover:text-primary transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
           <button 
            onClick={() => {
              setIsOpen(false);
              setIsQuoteModalOpen(true);
            }}
            className="w-full group relative overflow-hidden bg-primary text-white px-6 py-3 rounded-md font-bold transition-all shadow-xl shadow-primary/30 flex items-center justify-center cursor-pointer"
          >
           <span className="relative z-10">  Get Quote</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
          </button>
        </motion.div>
      )}

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </nav>
  );
}
