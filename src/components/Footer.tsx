export default function Footer() {
  return (
    <footer className="bg-footer text-white pt-24 pb-12">
      <div className="container-custom">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <img 
                src="assets/logo-icon.png" 
                alt="Liquid Consulting Logo" 
                className="w-[41px] h-[60px] mr-2 rounded-full object-cover"
               
              />
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-tight">LIQUID</span>
                <span className="text-[10px] font-semibold tracking-[0.2em] text-[#1EABE3]">CONSULTING</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Felis consequat magnis fames sagittis ultrices plasodales porttitor quisque ultrice tempor turpis.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-8 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
              </h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span>→</span> Forum Support</a></li>
                <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span>→</span> Help & FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span>→</span> Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span>→</span> Pricing & Plans</a></li>
                <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span>→</span> Cookie Policy</a></li>
              </ul>
            </div>
            <div className="pt-14">
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span>→</span> About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span>→</span> My Account</a></li>
                <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span>→</span> Our Company</a></li>
                <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span>→</span> Service</a></li>
              </ul>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative inline-block">
              Opening Hours
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
            </h4>
            <div className="space-y-4 text-slate-400 mb-8">
              <div className="flex justify-between">
                <span>Week Days</span>
                <span>09:00 - 24:00</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>08:00 - 03:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-primary">Day Off</span>
              </div>
            </div>
            <button className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-md font-bold transition-all">
              Contact Us
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <p>Privacy Policy | User Agreement | Copyright © 2015-2026</p>
        </div>
      </div>
    </footer>
  );
}
