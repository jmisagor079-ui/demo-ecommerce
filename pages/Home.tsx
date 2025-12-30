
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
    <main className="bg-[#f2f3f7] pb-24">
      {/* Top Banner & Sidebar Section */}
      <section className="bg-white border-b mb-10 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex gap-6 h-[480px]">
            {/* Left Sidebar Categories */}
            <aside className="w-[280px] flex-shrink-0 hidden lg:block border border-gray-100 rounded-[2rem] p-4 overflow-y-auto custom-scrollbar bg-[#fcfcfc]">
              <h3 className="text-[14px] font-black text-gray-900 px-4 mb-6 flex items-center gap-3 uppercase tracking-tighter">
                <MenuIcon size={18} className="text-[#ff6a00]" /> Bulk Inventory
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
              <div className="mt-8 p-6 bg-gradient-to-br from-[#2cb9b9]/5 to-white rounded-[1.5rem] border border-[#2cb9b9]/10">
                 <p className="text-[10px] font-black text-[#2cb9b9] uppercase tracking-widest mb-2">Reseller Program</p>
                 <p className="text-[12px] font-bold text-gray-600 leading-tight">Scale your digital store with our global API access.</p>
                 <button className="mt-4 text-[10px] font-black text-[#2cb9b9] uppercase underline underline-offset-4">Learn More</button>
              </div>
            </aside>

            {/* Middle Main Slider */}
            <div className="flex-1 rounded-[2.5rem] overflow-hidden relative cursor-pointer group shadow-2xl border-4 border-white" onClick={() => navigate('/products')}>
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-10000" 
                alt="Buying BD Digital Bulk"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent flex flex-col justify-center px-16 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-[#2cb9b9] text-white text-[12px] font-black px-5 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg">Global Digital Source</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-[#ff6a00] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#ff6a00] rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-[#ff6a00] rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
                <h1 className="text-6xl lg:text-7xl font-[1000] mb-8 leading-[0.9] tracking-tighter italic uppercase">
                  Direct Bulk <br/> <span className="text-[#ff6a00]">Keys & Licenses</span> <br/> To Your Email
                </h1>
                <p className="text-xl opacity-80 mb-12 max-w-lg font-medium leading-relaxed">Lowest prices in Bangladesh for resellers. Instant automated delivery upon payment verification.</p>
                <div className="flex gap-5">
                   <button className="bg-[#ff6a00] text-white font-[900] px-14 py-5 rounded-2xl hover:bg-white hover:text-[#ff6a00] transition-all w-fit text-lg shadow-2xl flex items-center gap-3 uppercase tracking-widest">
                    Source Now <ChevronRight size={22} />
                  </button>
                  <button className="bg-white/10 backdrop-blur-md text-white border-2 border-white/20 font-black px-12 py-5 rounded-2xl hover:bg-white/20 transition-all w-fit text-lg uppercase tracking-widest">
                    Bulk RFQ
                  </button>
                </div>
              </div>
            </div>

            {/* Right Panel - Order Tracking & Quick Stats */}
            <div className="w-[300px] hidden xl:flex flex-col gap-6">
              <div className="bg-gradient-to-br from-[#1a1c23] to-[#222] rounded-[2rem] p-8 border border-white/5 flex flex-col shadow-2xl text-white">
                 <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#ff6a00] rounded-xl flex items-center justify-center text-white shadow-xl">
                       <Search size={22} />
                    </div>
                    <h4 className="text-sm font-[1000] uppercase tracking-tighter italic">Track Key Status</h4>
                 </div>
                 <p className="text-[12px] text-gray-400 mb-6 leading-relaxed font-bold">Check delivery status using your Transaction ID.</p>
                 <div className="relative mb-6">
                    <input type="text" placeholder="TrxID (e.g. AF12X...)" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 outline-none text-xs font-black uppercase focus:border-[#ff6a00] transition-colors" />
                    <button className="absolute right-2 top-2 bottom-2 bg-[#ff6a00] px-4 rounded-lg hover:bg-[#e65f00] transition-all"><ChevronRight size={18} /></button>
                 </div>
                 <div className="text-[10px] text-center text-gray-500 font-black flex items-center justify-center gap-2 uppercase tracking-widest border-t border-white/5 pt-6">
                    <Zap size={12} className="text-[#ff6a00]" /> 5 min verification time
                 </div>
              </div>

              <div className="bg-white rounded-[2rem] border border-gray-100 p-8 flex flex-col items-center text-center shadow-xl group">
                 <ShieldCheck className="text-[#2cb9b9] mb-6 transform group-hover:scale-110 transition-transform" size={48} />
                 <h4 className="text-sm font-[1000] text-gray-900 mb-2 uppercase tracking-tighter italic">100% Anti-Ban</h4>
                 <p className="text-[12px] text-gray-500 mb-6 font-bold leading-relaxed">Every digital product is sourced directly from manufacturers with full warranty.</p>
                 <button onClick={() => navigate('/help-center')} className="w-full py-4 border-2 border-gray-100 rounded-2xl text-[11px] font-[1000] uppercase text-gray-700 hover:border-[#ff6a00] hover:text-[#ff6a00] transition-all tracking-[0.2em]">Contact Specialist</button>
              </div>

              <div className="bg-[#fff4eb] rounded-[2rem] border border-[#ff6a00]/10 p-6 flex-1 flex flex-col items-center justify-center shadow-inner relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-5">
                    <Download size={80} />
                 </div>
                 <p className="text-xs font-[1000] text-[#ff6a00] mb-4 uppercase tracking-[0.3em] italic">Bulk Portal</p>
                 <div className="text-center">
                    <span className="text-4xl font-[1000] text-gray-900 italic tracking-tighter">8.5M+</span>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Products Delivered</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Features Banner */}
      <section className="container mx-auto px-4 mb-16">
         <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 flex flex-wrap justify-between items-center gap-10 shadow-2xl">
            <div className="flex items-center gap-6 border-r border-gray-100 pr-12 flex-1 min-w-[250px]">
               <div className="w-16 h-16 bg-[#2cb9b9]/5 rounded-2xl flex items-center justify-center text-[#2cb9b9] shadow-inner border border-[#2cb9b9]/10"><Mail size={32} /></div>
               <div>
                  <div className="text-[16px] font-[1000] text-gray-900 uppercase tracking-tighter italic">Instant Email</div>
                  <div className="text-[12px] text-gray-400 font-bold uppercase tracking-widest">Digital Keys Delivered</div>
               </div>
            </div>
            <div className="flex items-center gap-6 border-r border-gray-100 pr-12 flex-1 min-w-[250px]">
               <div className="w-16 h-16 bg-[#ff6a00]/5 rounded-2xl flex items-center justify-center text-[#ff6a00] shadow-inner border border-[#ff6a00]/10"><Smartphone size={32} /></div>
               <div>
                  <div className="text-[16px] font-[1000] text-gray-900 uppercase tracking-tighter italic">bKash Verified</div>
                  <div className="text-[12px] text-gray-400 font-bold uppercase tracking-widest">Trusted Local Payments</div>
               </div>
            </div>
            <div className="flex items-center gap-6 border-r border-gray-100 pr-12 flex-1 min-w-[250px]">
               <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 shadow-inner border border-green-100"><Key size={32} /></div>
               <div>
                  <div className="text-[16px] font-[1000] text-gray-900 uppercase tracking-tighter italic">Verified Origin</div>
                  <div className="text-[12px] text-gray-400 font-bold uppercase tracking-widest">Safe & Stable Licenses</div>
               </div>
            </div>
            <div className="flex items-center gap-6 flex-1 min-w-[250px]">
               <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 shadow-inner border border-purple-100"><TrendingUp size={32} /></div>
               <div>
                  <div className="text-[16px] font-[1000] text-gray-900 uppercase tracking-tighter italic">Tiered Pricing</div>
                  <div className="text-[12px] text-gray-400 font-bold uppercase tracking-widest">Reseller Profit Engine</div>
               </div>
            </div>
         </div>
      </section>

      <div className="container mx-auto px-4 space-y-20">
        
        {/* Software Keys Section */}
        <section>
          <div className="flex items-center justify-between mb-12">
             <div className="flex items-center gap-5">
               <div className="w-2 h-12 bg-[#ff6a00] rounded-full"></div>
               <div>
                 <h2 className="text-4xl font-[1000] text-gray-900 uppercase tracking-tighter italic">Software & OS Keys</h2>
                 <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.4em] mt-1">Retail & OEM Bulk Licenses</p>
               </div>
             </div>
             <button onClick={() => navigate('/products')} className="bg-white border-2 border-gray-900 text-gray-900 px-12 py-4 rounded-2xl font-[900] text-[11px] uppercase tracking-[0.2em] hover:bg-gray-900 hover:text-white transition-all shadow-xl">
               Browse Software
             </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
            {softwareKeys.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        {/* Bulk Subscriptions Banner */}
        <section className="bg-gradient-to-br from-[#1a1c23] via-[#222] to-[#1a1c23] rounded-[4rem] p-16 text-white overflow-hidden relative shadow-2xl border border-white/5">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-[#ff6a00]/5 skew-x-12 transform origin-right"></div>
           <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1">
                 <div className="flex items-center gap-4 mb-8">
                   <span className="w-12 h-[2px] bg-[#ff6a00]"></span>
                   <span className="text-[#ff6a00] font-[1000] uppercase tracking-[0.5em] text-xs italic">Premium Entertainment</span>
                 </div>
                 <h2 className="text-6xl lg:text-7xl font-[1000] mb-10 leading-[0.9] italic uppercase tracking-tighter">Bulk Digital <br/> Subscriptions</h2>
                 <p className="text-gray-400 text-xl mb-12 font-bold leading-relaxed max-w-xl">Stock your reseller shop with Netflix, Spotify, Canva, and Adobe Creative Cloud. Automated verification and key generation active.</p>
                 <div className="flex flex-wrap gap-6">
                    <button onClick={() => navigate('/products')} className="bg-[#ff6a00] text-white px-14 py-6 rounded-2xl font-[1000] text-[13px] uppercase tracking-[0.2em] hover:bg-white hover:text-[#ff6a00] transition-all shadow-2xl">Explore Subscriptions</button>
                    <button className="bg-white/5 backdrop-blur-md border-2 border-white/10 text-white px-14 py-6 rounded-2xl font-[1000] text-[13px] uppercase tracking-[0.2em] hover:bg-white/20 transition-all">Merchant Guide</button>
                 </div>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-6 relative">
                 {subscriptions.slice(0, 4).map((p, i) => (
                   <div key={i} className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 transform ${i % 2 !== 0 ? 'translate-y-8' : ''} hover:scale-105 transition-all cursor-pointer shadow-2xl`}>
                      <img src={p.image} className="w-full aspect-square object-cover rounded-2xl mb-4" />
                      <div className="text-[10px] font-black uppercase text-[#ff6a00] mb-1">{p.brandName}</div>
                      <div className="text-sm font-bold truncate text-white">{p.name}</div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Gaming & Giftcards Section */}
        <section>
          <div className="flex items-center justify-between mb-12">
             <div className="flex items-center gap-5">
               <div className="w-2 h-10 bg-[#2cb9b9] rounded-full"></div>
               <div>
                 <h2 className="text-4xl font-[1000] text-gray-900 uppercase tracking-tighter italic">Game Credits & Cards</h2>
                 <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.4em] mt-1">Direct ID Top-up & Region-Locked Codes</p>
               </div>
             </div>
             <button onClick={() => navigate('/products')} className="bg-white border-2 border-gray-900 text-gray-900 px-12 py-4 rounded-2xl font-[900] text-[11px] uppercase tracking-[0.2em] hover:bg-gray-900 hover:text-white transition-all shadow-xl">
               View All Credits
             </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
            {gaming.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        {/* Reseller Process Section */}
        <section className="bg-white rounded-[4rem] p-16 shadow-2xl border border-gray-100 relative overflow-hidden">
           <div className="absolute top-0 left-0 p-12 opacity-5 pointer-events-none">
              <ShieldCheck size={400} />
           </div>
           <div className="max-w-4xl mx-auto text-center relative z-10">
              <h2 className="text-4xl font-[1000] text-gray-900 uppercase tracking-tighter italic mb-16 underline decoration-[#ff6a00] decoration-8 underline-offset-8">How Buying BD Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                 <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-[#ff6a00]/10 rounded-[2.5rem] flex items-center justify-center text-4xl mb-8 border border-[#ff6a00]/20 shadow-inner">🛒</div>
                    <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-4 italic">1. Select Order</h4>
                    <p className="text-sm text-gray-500 font-bold leading-relaxed uppercase tracking-tight">Choose your bulk quantity & Enter delivery email.</p>
                 </div>
                 <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-[#2cb9b9]/10 rounded-[2.5rem] flex items-center justify-center text-4xl mb-8 border border-[#2cb9b9]/20 shadow-inner">📱</div>
                    <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-4 italic">2. Pay bKash</h4>
                    <p className="text-sm text-gray-500 font-bold leading-relaxed uppercase tracking-tight">Complete Send Money & Submit your Transaction ID.</p>
                 </div>
                 <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-purple-50 rounded-[2.5rem] flex items-center justify-center text-4xl mb-8 border border-purple-100 shadow-inner">📬</div>
                    <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-4 italic">3. Get Email</h4>
                    <p className="text-sm text-gray-500 font-bold leading-relaxed uppercase tracking-tight">Verification in 5 mins. Digital keys sent to your inbox.</p>
                 </div>
              </div>
           </div>
        </section>
      </div>
    </main>
  );
};

// Helper Icon for Sidebar
const MenuIcon = ({size, className}: {size?: number, className?: string}) => (
   <svg width={size || 18} height={size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);

export default Home;
