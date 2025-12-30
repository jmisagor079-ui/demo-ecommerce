
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES, ALL_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { ChevronRight, ShieldCheck, Zap, TrendingUp, Award, PenTool, Globe, Ship, HardHat, Cpu, Mail, Download, Smartphone, Key, Search } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  // Helper to split products for sections
  const softwareKeys = ALL_PRODUCTS.filter(p => p.category === 'Software Keys').slice(0, 6);
  const subscriptions = ALL_PRODUCTS.filter(p => p.category === 'Subscriptions').slice(0, 6);
  const gaming = ALL_PRODUCTS.filter(p => p.category === 'Game Credits').slice(0, 6);

  return (
    <main className="bg-[#f2f3f7] pb-12 lg:pb-24">
      {/* Hero & Sidebar Section */}
      <section className="bg-white border-b mb-6 lg:mb-10 shadow-sm">
        <div className="container mx-auto px-4 py-4 lg:py-6">
          <div className="flex flex-col lg:flex-row gap-6 lg:h-[480px]">
            
            {/* Left Sidebar Categories - Hidden on mobile, beautiful on desktop */}
            <aside className="w-full lg:w-[280px] flex-shrink-0 hidden lg:block border border-gray-100 rounded-[2rem] p-4 overflow-y-auto custom-scrollbar bg-[#fcfcfc]">
              <h3 className="text-[14px] font-black text-gray-900 px-4 mb-6 flex items-center gap-3 uppercase tracking-tighter italic">
                <MenuIcon size={18} className="text-[#ff6a00]" /> Bulk Categories
              </h3>
              <ul className="space-y-1.5">
                {CATEGORIES.map(cat => (
                  <li 
                    key={cat.id} 
                    onClick={() => navigate('/products')}
                    className="text-[13px] text-gray-700 px-5 py-3.5 rounded-2xl hover:bg-white hover:shadow-lg hover:text-[#ff6600] cursor-pointer flex items-center justify-between group transition-all font-bold border border-transparent hover:border-gray-100"
                  >
                    <span className="flex items-center gap-4">
                       <span className="text-xl">{cat.icon}</span> {cat.name}
                    </span>
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </li>
                ))}
              </ul>
            </aside>

            {/* Main Carousel Banner - Responsive aspect and text */}
            <div className="flex-1 rounded-2xl lg:rounded-[2.5rem] overflow-hidden relative cursor-pointer group shadow-xl border-2 lg:border-4 border-white h-[300px] lg:h-full" onClick={() => navigate('/products')}>
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                alt="Buying BD Digital Bulk"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent flex flex-col justify-center px-6 lg:px-16 text-white">
                <div className="flex items-center gap-3 mb-3 lg:mb-6">
                  <span className="bg-[#2cb9b9] text-white text-[9px] lg:text-[12px] font-black px-3 py-1 lg:px-5 lg:py-2 rounded-full uppercase tracking-widest shadow-lg">Global Wholesale</span>
                </div>
                <h1 className="text-3xl lg:text-7xl font-[1000] mb-4 lg:mb-8 leading-none tracking-tighter italic uppercase">
                  Bulk Digital <br className="hidden lg:block" /> <span className="text-[#ff6a00]">Sourcing</span> <br className="hidden lg:block" /> Platform
                </h1>
                <p className="text-xs lg:text-xl opacity-80 mb-6 lg:mb-12 max-w-lg font-medium leading-relaxed line-clamp-2 lg:line-clamp-none">Scale your reseller store with premium licenses at manufacturer prices. Instant email delivery.</p>
                <div className="flex gap-3 lg:gap-5">
                   <button className="bg-[#ff6a00] text-white font-black px-6 py-3 lg:px-14 lg:py-5 rounded-xl lg:rounded-2xl hover:bg-white hover:text-[#ff6a00] transition-all text-xs lg:text-lg shadow-2xl flex items-center gap-2 lg:gap-3 uppercase tracking-widest">
                    Start Now <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Quick Portal - Stacks on mobile */}
            <div className="w-full lg:w-[300px] flex flex-col gap-4 lg:gap-6">
              {/* Tracking Widget */}
              <div className="bg-gradient-to-br from-[#1a1c23] to-[#222] rounded-2xl lg:rounded-[2rem] p-6 lg:p-8 border border-white/5 flex flex-col shadow-xl text-white">
                 <div className="flex items-center gap-3 mb-4 lg:mb-6">
                    <Search size={20} className="text-[#ff6a00]" />
                    <h4 className="text-sm font-[1000] uppercase tracking-tighter italic">Track Delivery</h4>
                 </div>
                 <div className="relative">
                    <input type="text" placeholder="Transaction ID..." className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 lg:py-4 lg:px-5 outline-none text-xs font-black uppercase focus:border-[#ff6a00]" />
                    <button className="absolute right-2 top-2 bottom-2 bg-[#ff6a00] px-3 rounded-lg"><ChevronRight size={16} /></button>
                 </div>
              </div>

              {/* Warranty Card */}
              <div className="bg-white rounded-2xl lg:rounded-[2rem] border border-gray-100 p-6 lg:p-8 flex flex-row lg:flex-col items-center gap-4 lg:gap-6 shadow-lg">
                 <ShieldCheck className="text-[#2cb9b9]" size={40} />
                 <div className="text-left lg:text-center">
                   <h4 className="text-sm font-[1000] text-gray-900 mb-1 uppercase tracking-tighter italic">Anti-Ban Warranty</h4>
                   <p className="text-[10px] text-gray-500 font-bold leading-tight">100% stable digital keys sourced directly from manufacturers.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges - Horizontal Scroll on Mobile */}
      <section className="container mx-auto px-4 mb-10 lg:mb-16">
         <div className="bg-white rounded-2xl lg:rounded-[2.5rem] p-6 lg:p-10 border border-gray-100 flex overflow-x-auto no-scrollbar lg:justify-between items-center gap-6 lg:gap-10 shadow-xl">
            {[
              { icon: <Mail size={24} />, title: 'Instant Email', color: '#2cb9b9', bg: 'bg-[#2cb9b9]/5' },
              { icon: <Smartphone size={24} />, title: 'bKash Pay', color: '#ff6a00', bg: 'bg-[#ff6a00]/5' },
              { icon: <Award size={24} />, title: 'Anti-Ban', color: '#00c853', bg: 'bg-green-50' },
              { icon: <TrendingUp size={24} />, title: 'Bulk Tiers', color: '#7c3aed', bg: 'bg-purple-50' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 flex-shrink-0 min-w-[160px] lg:flex-1 border-r last:border-0 border-gray-100 lg:pr-6">
                 <div className={`w-12 h-12 lg:w-14 lg:h-14 ${item.bg} rounded-xl lg:rounded-2xl flex items-center justify-center`} style={{ color: item.color }}>
                    {item.icon}
                 </div>
                 <div>
                    <div className="text-[13px] lg:text-[15px] font-[1000] text-gray-900 uppercase tracking-tighter italic">{item.title}</div>
                    <div className="text-[9px] lg:text-[11px] text-gray-400 font-black uppercase tracking-widest">Digital Active</div>
                 </div>
              </div>
            ))}
         </div>
      </section>

      <div className="container mx-auto px-4 space-y-12 lg:space-y-20">
        
        {/* Product Grids - Responsive Columns */}
        <section>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 lg:mb-12 gap-4">
             <div className="flex items-center gap-4">
               <div className="w-1.5 h-10 bg-[#ff6a00] rounded-full"></div>
               <div>
                 <h2 className="text-2xl lg:text-4xl font-[1000] text-gray-900 uppercase tracking-tighter italic">Software & OS Bulk</h2>
                 <p className="text-[10px] lg:text-[11px] font-black text-gray-400 uppercase tracking-widest mt-1">Retail & OEM Direct Keys</p>
               </div>
             </div>
             <button onClick={() => navigate('/products')} className="w-full sm:w-auto bg-white border-2 border-gray-900 text-gray-900 px-8 lg:px-12 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-[1000] text-[10px] lg:text-[11px] uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all shadow-lg">
               Browse All
             </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-8">
            {softwareKeys.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        {/* Dynamic Mid-Section Banner */}
        <section className="bg-gradient-to-br from-[#1a1c23] via-[#222] to-[#1a1c23] rounded-3xl lg:rounded-[4rem] p-8 lg:p-16 text-white overflow-hidden relative shadow-2xl border border-white/5">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-[#ff6a00]/5 skew-x-12 transform origin-right"></div>
           <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="flex-1 text-center lg:text-left">
                 <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                   <span className="w-8 lg:w-12 h-[2px] bg-[#ff6a00]"></span>
                   <span className="text-[#ff6a00] font-[1000] uppercase tracking-[0.3em] text-[10px] lg:text-xs italic">Reseller Portal</span>
                 </div>
                 <h2 className="text-3xl lg:text-6xl font-[1000] mb-6 lg:mb-10 leading-tight italic uppercase tracking-tighter">Automated Digital <br className="hidden lg:block" /> Subscriptions</h2>
                 <p className="text-gray-400 text-sm lg:text-xl mb-8 lg:mb-12 font-bold leading-relaxed max-w-xl mx-auto lg:mx-0">Stock your shop with Netflix, Spotify, and Canva licenses instantly. API integration available for top-tier resellers.</p>
                 <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6">
                    <button onClick={() => navigate('/products')} className="bg-[#ff6a00] text-white px-8 py-4 lg:px-14 lg:py-6 rounded-xl lg:rounded-2xl font-[1000] text-[11px] lg:text-[13px] uppercase tracking-widest hover:bg-white hover:text-[#ff6a00] transition-all">Explore Wholesale</button>
                 </div>
              </div>
           </div>
        </section>

        {/* Final Grid */}
        <section>
          <div className="flex items-center gap-4 mb-8 lg:mb-12">
            <div className="w-1.5 h-10 bg-[#2cb9b9] rounded-full"></div>
            <h2 className="text-2xl lg:text-4xl font-[1000] text-gray-900 uppercase tracking-tighter italic">Gaming & Gift Cards</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-8">
            {gaming.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
};

const MenuIcon = ({size, className}: {size?: number, className?: string}) => (
   <svg width={size || 18} height={size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);

export default Home;
