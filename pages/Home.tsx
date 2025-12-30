
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES, ALL_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { ChevronRight, ShieldCheck, Zap, TrendingUp, Award, PenTool, Globe, Ship, HardHat, Cpu, User, Menu as MenuIcon, Download, Smartphone } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-[#f2f3f7] pb-20">
      {/* Top Banner & Sidebar Section */}
      <section className="bg-white border-b mb-6">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-4 h-[440px]">
            {/* Left Sidebar Categories */}
            <aside className="w-[240px] flex-shrink-0 hidden lg:block border border-gray-100 rounded-xl p-2 overflow-y-auto custom-scrollbar">
              <h3 className="text-[13px] font-black text-[#222] px-3 mb-3 flex items-center gap-2 uppercase tracking-tight">
                <MenuIcon size={16} className="text-[#ff6a00]" /> Digital Categories
              </h3>
              <ul className="space-y-0.5">
                {CATEGORIES.map(cat => (
                  <li 
                    key={cat.id} 
                    onClick={() => navigate('/products')}
                    className="text-[12px] text-gray-700 px-3 py-2.5 rounded-lg hover:bg-[#fff0e6] hover:text-[#ff6600] cursor-pointer flex items-center justify-between group transition-colors font-semibold"
                  >
                    <span className="flex items-center gap-3">
                       <span className="text-lg">{cat.icon}</span> {cat.name}
                    </span>
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </li>
                ))}
              </ul>
            </aside>

            {/* Middle Main Slider */}
            <div className="flex-1 rounded-2xl overflow-hidden relative cursor-pointer group shadow-lg" onClick={() => navigate('/products')}>
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-10000" 
                alt="Digital Bulk Banner"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent flex flex-col justify-center px-12 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-[#2cb9b9] text-white text-[11px] font-black px-4 py-1.5 rounded uppercase tracking-widest">Global Digital Wholesale</span>
                  <div className="w-2 h-2 bg-[#ff6a00] rounded-full animate-pulse"></div>
                </div>
                <h1 className="text-5xl lg:text-6xl font-[1000] mb-6 leading-[0.95] tracking-tighter italic uppercase">
                  Bulk Digital <br/> <span className="text-[#ff6a00]">Sourcing For</span> <br/> Resellers
                </h1>
                <p className="text-xl opacity-90 mb-10 max-w-lg font-medium">Scale your digital shop with premium keys and subscriptions at manufacturing prices.</p>
                <div className="flex gap-4">
                   <button className="bg-[#ff6a00] text-white font-black px-12 py-4 rounded-full hover:bg-white hover:text-[#ff6a00] transition-all w-fit text-lg shadow-2xl flex items-center gap-2">
                    Start Bulk Order <ChevronRight size={20} />
                  </button>
                  <button className="bg-white/10 backdrop-blur-md text-white border border-white/30 font-bold px-10 py-4 rounded-full hover:bg-white/20 transition-all w-fit text-lg">
                    Check Pre-orders
                  </button>
                </div>
              </div>
            </div>

            {/* Right Panel - Reseller Portal */}
            <div className="w-[280px] hidden xl:flex flex-col gap-4">
              <div className="bg-gradient-to-br from-[#fff4eb] to-white rounded-2xl p-6 border border-[#ffe0cc] flex flex-col shadow-sm">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#ff6a00] rounded-xl flex items-center justify-center text-white shadow-lg">
                       <TrendingUp size={20} />
                    </div>
                    <h4 className="text-sm font-[900] text-[#222] uppercase tracking-tighter">Reseller Hub</h4>
                 </div>
                 <p className="text-[12px] text-gray-500 mb-6 leading-relaxed font-medium">Join 500+ active resellers in Bangladesh. Get priority inventory access.</p>
                 <button className="w-full py-3 bg-[#ff6a00] text-white rounded-xl text-[13px] font-bold shadow-md hover:bg-[#e65f00] mb-4 transition-all active:scale-95">Register Reseller Account</button>
                 <div className="text-[11px] text-center text-gray-400 font-bold flex items-center justify-center gap-2 uppercase">
                    <Zap size={12} /> Live API Delivery Active
                 </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col items-center text-center shadow-sm">
                 <ShieldCheck className="text-[#2cb9b9] mb-4" size={36} />
                 <h4 className="text-sm font-[900] text-[#222] mb-1 uppercase tracking-tighter">Instant Warranty</h4>
                 <p className="text-[11px] text-gray-500 mb-5 font-medium leading-relaxed">Every key is tested and guaranteed for its full duration or instant refund.</p>
                 <button className="w-full py-2.5 border-2 border-gray-100 rounded-xl text-[12px] font-black uppercase text-gray-600 hover:border-[#ff6a00] hover:text-[#ff6a00] transition-all">Support Center</button>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-5 flex-1 flex flex-col items-center justify-center shadow-sm">
                 <div className="w-12 h-12 bg-gray-50 rounded-full mb-4 flex items-center justify-center text-gray-400 border border-gray-100">
                    <Download size={24} />
                 </div>
                 <p className="text-xs font-black text-[#222] mb-4 uppercase tracking-widest">Dashboard Access</p>
                 <div className="flex flex-col gap-2 w-full">
                    <button className="w-full py-2.5 bg-[#2cb9b9] text-white rounded-xl text-[11px] font-black uppercase tracking-widest shadow-md">Sign In</button>
                    <button className="w-full py-2.5 border-2 border-gray-50 rounded-xl text-[11px] font-black uppercase tracking-widest text-gray-400">Merchant Apply</button>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Features Banner */}
      <section className="container mx-auto px-4 mb-10">
         <div className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-wrap justify-between items-center gap-8 shadow-sm">
            <div className="flex items-center gap-5 border-r border-gray-100 pr-12 flex-1 min-w-[220px]">
               <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#2cb9b9] shadow-inner"><Download size={28} /></div>
               <div>
                  <div className="text-[15px] font-[900] text-[#222] uppercase tracking-tighter">Instant Delivery</div>
                  <div className="text-[12px] text-gray-400 font-bold uppercase">Keys sent via email/SMS</div>
               </div>
            </div>
            <div className="flex items-center gap-5 border-r border-gray-100 pr-12 flex-1 min-w-[220px]">
               <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-[#ff6a00] shadow-inner"><ShieldCheck size={28} /></div>
               <div>
                  <div className="text-[15px] font-[900] text-[#222] uppercase tracking-tighter">Anti-Ban Guarantee</div>
                  <div className="text-[12px] text-gray-400 font-bold uppercase">Safe, original sources</div>
               </div>
            </div>
            <div className="flex items-center gap-5 border-r border-gray-100 pr-12 flex-1 min-w-[220px]">
               <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 shadow-inner"><Smartphone size={28} /></div>
               <div>
                  <div className="text-[15px] font-[900] text-[#222] uppercase tracking-tighter">bKash Ready</div>
                  <div className="text-[12px] text-gray-400 font-bold uppercase">Local payment support</div>
               </div>
            </div>
            <div className="flex items-center gap-5 flex-1 min-w-[220px]">
               <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 shadow-inner"><TrendingUp size={28} /></div>
               <div>
                  <div className="text-[15px] font-[900] text-[#222] uppercase tracking-tighter">Reseller Tiers</div>
                  <div className="text-[12px] text-gray-400 font-bold uppercase">Lower price for higher volume</div>
               </div>
            </div>
         </div>
      </section>

      <div className="container mx-auto px-4 space-y-12">
        <section>
          <div className="flex items-center justify-between mb-10">
             <div className="flex items-center gap-4">
               <div className="w-1.5 h-10 bg-[#ff6a00] rounded-full"></div>
               <h2 className="text-3xl font-[1000] text-[#222] uppercase tracking-tighter italic">Bulk Digital Offers</h2>
             </div>
             <button onClick={() => navigate('/products')} className="bg-white border-2 border-gray-900 text-gray-900 px-10 py-3 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-gray-900 hover:text-white transition-all shadow-md">
               Browse All Keys
             </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {ALL_PRODUCTS.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        {/* Global Supplier Section */}
        <section className="bg-gradient-to-br from-[#1a1c23] via-[#222] to-[#1a1c23] rounded-[4rem] p-16 text-white overflow-hidden relative shadow-2xl border border-white/5">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-[#ff6a00]/5 skew-x-12 transform origin-right"></div>
           <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[2px] bg-[#ff6a00]"></span>
                <span className="text-[#ff6a00] font-black uppercase tracking-[0.4em] text-xs">Merchant API Documentation</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-[1000] mb-8 leading-[0.9] italic uppercase tracking-tighter">Automate Your <br/> Store Delivery</h2>
              <p className="text-gray-400 text-xl mb-12 font-medium leading-relaxed">Buying BD offers full API integration for resellers. Link your Shopify or custom store directly to our inventory for instant fulfillment without manual work.</p>
              <div className="flex flex-wrap gap-5">
                 <button className="bg-[#ff6a00] text-white px-12 py-5 rounded-2xl font-black text-[13px] uppercase tracking-widest hover:bg-white hover:text-[#ff6a00] transition-all shadow-xl">Get API Keys</button>
                 <button className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-12 py-5 rounded-2xl font-black text-[13px] uppercase tracking-widest hover:bg-white/20 transition-all">Developer Docs</button>
              </div>
           </div>
           <div className="absolute right-24 bottom-0 opacity-10 pointer-events-none hidden lg:block">
              <Cpu size={350} strokeWidth={0.5} />
           </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
