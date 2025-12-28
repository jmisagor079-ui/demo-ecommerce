
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES, ALL_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
// Add User to the lucide-react imports
import { ChevronRight, ShieldCheck, Zap, TrendingUp, Award, PenTool, Globe, Ship, HardHat, Cpu, User } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-[#f2f3f7] pb-20">
      {/* Top Banner & Sidebar Section */}
      <section className="bg-white border-b mb-6">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-4 h-[440px]">
            {/* Left Sidebar Categories - Deep Navigation */}
            <aside className="w-[240px] flex-shrink-0 hidden lg:block border border-gray-100 rounded-xl p-2 overflow-y-auto custom-scrollbar">
              <h3 className="text-[13px] font-bold text-[#222] px-3 mb-3 flex items-center gap-2">
                <MenuIcon /> My Markets
              </h3>
              <ul className="space-y-0.5">
                {CATEGORIES.map(cat => (
                  <li 
                    key={cat.id} 
                    onClick={() => navigate('/products')}
                    className="text-[12px] text-gray-700 px-3 py-2 rounded-md hover:bg-[#fff0e6] hover:text-[#ff6600] cursor-pointer flex items-center justify-between group transition-colors"
                  >
                    <span className="flex items-center gap-2">
                       {cat.name}
                    </span>
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100" />
                  </li>
                ))}
              </ul>
            </aside>

            {/* Middle Main Slider */}
            <div className="flex-1 rounded-2xl overflow-hidden relative cursor-pointer" onClick={() => navigate('/products')}>
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover" 
                alt="B2B Banner"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent flex flex-col justify-center px-12 text-white">
                <span className="bg-[#ff6a00] text-[11px] font-black px-4 py-1.5 rounded w-fit mb-5 uppercase tracking-widest">Global Sourcing Expo</span>
                <h1 className="text-5xl font-black mb-6 leading-none">The largest B2B <br/> Wholesale Marketplace</h1>
                <p className="text-xl opacity-90 mb-10 max-w-md">Connect with millions of verified manufacturers and trade worldwide.</p>
                <div className="flex gap-4">
                   <button className="bg-[#ff6a00] text-white font-bold px-10 py-4 rounded-full hover:bg-white hover:text-[#ff6a00] transition-all w-fit text-lg shadow-xl">
                    Source Now
                  </button>
                  <button className="bg-white/10 backdrop-blur-md text-white border border-white/30 font-bold px-10 py-4 rounded-full hover:bg-white/20 transition-all w-fit text-lg">
                    Watch Live
                  </button>
                </div>
              </div>
            </div>

            {/* Right Panel - RFQ & Login */}
            <div className="w-[280px] hidden xl:flex flex-col gap-4">
              {/* RFQ Box */}
              <div className="bg-[#fff4eb] rounded-2xl p-5 border border-[#ffe0cc] flex flex-col">
                 <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-[#ff6a00] rounded-lg flex items-center justify-center text-white">
                       <PenTool size={16} />
                    </div>
                    <h4 className="text-sm font-bold text-[#222]">Get Quotations</h4>
                 </div>
                 <p className="text-[11px] text-gray-500 mb-4 leading-relaxed">Submit one request and get multiple quotes within 24 hours.</p>
                 <button className="w-full py-2.5 bg-[#ff6a00] text-white rounded-lg text-xs font-bold shadow-md hover:bg-[#e65f00] mb-3">Post RFQ</button>
                 <div className="text-[10px] text-center text-gray-400 font-medium">1,240+ Quotes Sent Today</div>
              </div>

              {/* Trade Assurance */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col items-center text-center">
                 <ShieldCheck className="text-[#00c853] mb-3" size={32} />
                 <h4 className="text-sm font-bold text-[#222] mb-1">Trade Assurance</h4>
                 <p className="text-[11px] text-gray-500 mb-4">Protecting your orders from payment to delivery.</p>
                 <button className="w-full py-2 border border-gray-200 rounded-lg text-xs font-bold hover:border-[#ff6a00] hover:text-[#ff6a00] transition-colors">Learn More</button>
              </div>

              {/* User Greeting */}
              <div className="bg-white rounded-2xl border border-gray-100 p-4 flex-1 flex flex-col items-center justify-center">
                 <div className="w-12 h-12 bg-gray-100 rounded-full mb-3 flex items-center justify-center text-gray-400">
                    <User size={24} />
                 </div>
                 <p className="text-xs font-bold text-[#222] mb-2">Welcome back!</p>
                 <div className="flex gap-2 w-full">
                    <button className="flex-1 py-2 bg-[#ff6a00] text-white rounded-lg text-[10px] font-bold">Sign In</button>
                    <button className="flex-1 py-2 border border-gray-200 rounded-lg text-[10px] font-bold">Join Free</button>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Features Banner */}
      <section className="container mx-auto px-4 mb-10">
         <div className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-wrap justify-between items-center gap-6">
            <div className="flex items-center gap-4 border-r border-gray-100 pr-10 flex-1 min-w-[200px]">
               <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600"><Globe size={24} /></div>
               <div>
                  <div className="text-sm font-bold text-[#222]">Worldwide Shipping</div>
                  <div className="text-[11px] text-gray-400">Reliable logistics services</div>
               </div>
            </div>
            <div className="flex items-center gap-4 border-r border-gray-100 pr-10 flex-1 min-w-[200px]">
               <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-[#ff6a00]"><ShieldCheck size={24} /></div>
               <div>
                  <div className="text-sm font-bold text-[#222]">Trade Assurance</div>
                  <div className="text-[11px] text-gray-400">Secure payment and order protection</div>
               </div>
            </div>
            <div className="flex items-center gap-4 border-r border-gray-100 pr-10 flex-1 min-w-[200px]">
               <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600"><Award size={24} /></div>
               <div>
                  <div className="text-sm font-bold text-[#222]">Verified Suppliers</div>
                  <div className="text-[11px] text-gray-400">Checked for quality and legitimacy</div>
               </div>
            </div>
            <div className="flex items-center gap-4 flex-1 min-w-[200px]">
               <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600"><Ship size={24} /></div>
               <div>
                  <div className="text-sm font-bold text-[#222]">Order Tracking</div>
                  <div className="text-[11px] text-gray-400">Real-time status updates</div>
               </div>
            </div>
         </div>
      </section>

      {/* Main Content Sections */}
      <div className="container mx-auto px-4 space-y-10">
        
        {/* Weekly Super Deals - Multi-Column Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
           <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                 <h2 className="text-lg font-black text-[#222] flex items-center gap-2"><Zap size={20} className="text-[#ff6a00] fill-[#ff6a00]" /> Super Deals</h2>
                 <span className="text-xs text-[#ff6a00] font-bold cursor-pointer hover:underline">View More</span>
              </div>
              <div className="grid grid-cols-3 gap-6">
                 {ALL_PRODUCTS.slice(0, 3).map(p => (
                   <div key={p.id} className="cursor-pointer group" onClick={() => navigate('/products')}>
                      <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden mb-3">
                         <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="text-[#ff6a00] font-black text-sm">${p.price.toFixed(2)}</div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase mt-1">Min. {p.soldCount || 1} Order</div>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                 <h2 className="text-lg font-black text-[#222] flex items-center gap-2"><TrendingUp size={20} className="text-[#ff6a00]" /> New Arrivals</h2>
                 <span className="text-xs text-[#ff6a00] font-bold cursor-pointer hover:underline">View More</span>
              </div>
              <div className="grid grid-cols-3 gap-6">
                 {ALL_PRODUCTS.slice(4, 7).map(p => (
                   <div key={p.id} className="cursor-pointer group" onClick={() => navigate('/products')}>
                      <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden mb-3">
                         <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="text-[#222] font-black text-sm">${p.price.toFixed(2)}</div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase mt-1">Sample Available</div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Source by Category - High Density Grid */}
        <section className="bg-white rounded-2xl p-8 shadow-sm">
           <h2 className="text-xl font-black text-[#222] mb-8 uppercase tracking-tight">Source by Industry</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {CATEGORIES.map((cat, i) => (
                <div key={i} className="flex flex-col items-center gap-4 cursor-pointer group" onClick={() => navigate('/products')}>
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-4xl group-hover:shadow-lg group-hover:bg-[#fff0e6] transition-all border border-gray-100">
                     {cat.icon || '📦'}
                  </div>
                  <span className="text-[12px] font-bold text-center text-gray-600 group-hover:text-[#ff6a00] leading-tight px-2">{cat.name}</span>
                </div>
              ))}
           </div>
        </section>

        {/* B2B Recommendation Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
             <h2 className="text-2xl font-black text-[#222] uppercase tracking-tighter">Recommended for your business</h2>
             <button onClick={() => navigate('/products')} className="text-sm font-bold text-[#ff6a00] flex items-center gap-1 hover:underline">
               Explore All <ChevronRight size={16} />
             </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {ALL_PRODUCTS.slice(0, 24).map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        {/* Global Supplier Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white overflow-hidden relative">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-[#ff6a00]/10 skew-x-12 transform origin-right"></div>
           <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl font-black mb-6 leading-none italic uppercase">Verified Source <br/> Global Network</h2>
              <p className="text-gray-400 text-lg mb-10">Connect with pre-vetted suppliers. We visit their factories so you don't have to.</p>
              <div className="flex flex-wrap gap-4">
                 <button className="bg-[#ff6a00] text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-[#ff6a00] transition-all">Explore Verified Suppliers</button>
                 <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all">Request a Factory Tour</button>
              </div>
           </div>
           <div className="absolute right-20 bottom-0 opacity-20 pointer-events-none hidden lg:block">
              <Cpu size={300} strokeWidth={1} />
           </div>
        </section>
      </div>
    </main>
  );
};

// Helper Icon for Sidebar
const MenuIcon = () => (
   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);

export default Home;
