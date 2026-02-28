import { Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="hidden lg:block bg-footer text-white py-2 text-sm border-b border-white/10">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-white" />
            <span>info@liquidconsulting.com.au</span>
          </div>
          <div className="flex items-center gap-2 border-l border-white/20 pl-6">
            <Clock size={14} className="text-white" />
            <span>Working: 7:00am - 7:00pm</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-primary transition-colors"><Facebook size={14} /></a>
          <a href="#" className="hover:text-primary transition-colors"><Twitter size={14} /></a>
          <a href="#" className="hover:text-primary transition-colors"><Instagram size={14} /></a>
          <a href="#" className="hover:text-primary transition-colors"><Linkedin size={14} /></a>
        </div>
      </div>
    </div>
  );
}
