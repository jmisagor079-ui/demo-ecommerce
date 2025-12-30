
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Home as HomeIcon, ShoppingCart, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1c23] text-gray-400 py-16">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-md">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-[#2cb9b9]/10 rounded-2xl flex items-center justify-center border border-[#2cb9b9]/30 relative overflow-hidden">
                <ShoppingCart className="text-[#2cb9b9]" size={28} />
                <HomeIcon className="absolute top-2 text-[#ff4d00] fill-[#ff4d00]" size={18} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-[900] tracking-tighter text-gradient-buying italic">Buying</span>
                <span className="text-3xl font-[1000] tracking-tighter text-gradient-bd italic ml-5 -mt-1">BD.com</span>
              </div>
            </div>
            <p className="text-base text-gray-500 font-medium leading-relaxed mb-8">
              Bangladesh's leading digital product bulk selling platform. Empowering resellers and businesses with instant digital inventory and global licenses.
            </p>
            
            {/* Contact Details Requested */}
            <div className="space-y-4 mb-8">
               <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-[#ff6a00] group-hover:bg-[#ff6a00] group-hover:text-white transition-all">
                     <Mail size={18} />
                  </div>
                  <div>
                     <p className="text-[10px] font-black uppercase text-gray-600">Email Support</p>
                     <p className="text-sm font-bold text-gray-300">support@buyingbd.com</p>
                  </div>
               </div>
               <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-[#2cb9b9] group-hover:bg-[#2cb9b9] group-hover:text-white transition-all">
                     <Phone size={18} />
                  </div>
                  <div>
                     <p className="text-[10px] font-black uppercase text-gray-600">Phone & WhatsApp</p>
                     <p className="text-sm font-bold text-gray-300">+880 1744-212976</p>
                  </div>
               </div>
               <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                     <MapPin size={18} />
                  </div>
                  <div>
                     <p className="text-[10px] font-black uppercase text-gray-600">Our Office</p>
                     <p className="text-sm font-bold text-gray-300">Mirpur section 12, Block D, Dhaka 1216, Bangladesh</p>
                  </div>
               </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-[#ff6a00] transition-all hover:scale-110"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-[#ff6a00] transition-all hover:scale-110"><Twitter size={20} /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-[#ff6a00] transition-all hover:scale-110"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-[#ff6a00] transition-all hover:scale-110"><Youtube size={20} /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-[#ff6a00] transition-all hover:scale-110"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-20">
            <div>
              <h4 className="text-white text-xs font-black uppercase mb-8 tracking-[0.2em]">Reseller Center</h4>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-[11px]">
                <li><a href="#" className="hover:text-[#ff6a00] transition-colors">Bulk API Access</a></li>
                <li><a href="#" className="hover:text-[#ff6a00] transition-colors">Reseller Pricing</a></li>
                <li><a href="#" className="hover:text-[#ff6a00] transition-colors">White Label Panels</a></li>
                <li><a href="#" className="hover:text-[#ff6a00] transition-colors">Credit Recharge</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs font-black uppercase mb-8 tracking-[0.2em]">Popular Keys</h4>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-[11px]">
                <li><a href="#" className="hover:text-[#ff6a00] transition-colors">Windows Retail</a></li>
                <li><a href="#" className="hover:text-[#ff6a00] transition-colors">Netflix Private</a></li>
                <li><a href="#" className="hover:text-[#ff6a00] transition-colors">Office 365</a></li>
                <li><a href="#" className="hover:text-[#ff6a00] transition-colors">Game Top-ups</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs font-black uppercase mb-8 tracking-[0.2em]">Policies</h4>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-[11px]">
                <li><a href="#" className="hover:text-[#ff6a00] transition-colors">Refund Policy</a></li>
                <li><a href="#" className="hover:text-[#ff6a00] transition-colors">Anti-Ban Policy</a></li>
                <li><a href="#" className="hover:text-[#ff6a00] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#ff6a00] transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[11px] font-black uppercase tracking-widest text-gray-600">
            &copy; 2026-2017 Buying BD Global Ltd. All rights reserved. Registered Digital Sourcing Partner.
          </p>
          <div className="flex items-center gap-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Bkash_logo.png/320px-Bkash_logo.png" className="h-4" alt="bkash" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4" alt="paypal" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" alt="mastercard" />
            <span className="text-[10px] font-black uppercase tracking-widest text-white">Verified Secure</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
