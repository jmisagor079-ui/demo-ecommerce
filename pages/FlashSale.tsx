
import React, { useState, useEffect } from 'react';
import { FLASH_SALE_PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from '../components/ProductCard';
import { Zap, Clock, TrendingUp, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FlashSale: React.FC = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59, hours: prev.hours }; // Simplification
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Banner Section */}
      <div className="bg-gradient-to-r from-red-600 via-orange-500 to-amber-400 py-12 lg:py-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-24"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-2xl -ml-32 -mb-16"></div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-black uppercase tracking-[0.2em] mb-6">
              <Zap size={14} className="fill-amber-400 text-amber-400 animate-pulse" /> Live Now
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 tracking-tighter uppercase leading-none italic">
              Super Flash <br/> <span className="text-black">Mega Deals</span>
            </h1>
            <p className="text-white/80 text-lg font-medium mb-8">Up to 80% off on your favorite electronics, gadgets, and more. Don't wait, once it's gone, it's gone!</p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="bg-white text-red-600 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl hover:bg-black hover:text-white transition-all transform hover:-translate-y-1 active:scale-95">
                Explore All Deals
              </button>
            </div>
          </div>

          {/* Master Countdown Card */}
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[3rem] border border-white/20 shadow-2xl w-full max-w-sm">
             <div className="flex items-center justify-center gap-2 mb-8">
               <Clock className="text-white" size={24} />
               <span className="text-white font-black uppercase tracking-widest text-sm">Ends In</span>
             </div>
             <div className="flex justify-center gap-4">
               {[
                 { val: timeLeft.hours, label: 'Hours' },
                 { val: timeLeft.minutes, label: 'Minutes' },
                 { val: timeLeft.seconds, label: 'Seconds' }
               ].map((t, i) => (
                 <div key={i} className="flex flex-col items-center">
                   <div className="bg-white text-red-600 w-16 h-20 rounded-2xl flex items-center justify-center text-4xl font-black shadow-inner">
                     {t.val.toString().padStart(2, '0')}
                   </div>
                   <span className="text-[10px] font-black text-white uppercase mt-2 opacity-60 tracking-widest">{t.label}</span>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>

      {/* Categories Fast Navigation */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-4 shadow-xl border flex items-center gap-4 overflow-x-auto no-scrollbar">
          <div className="flex-shrink-0 bg-red-600 text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2">
            <TrendingUp size={16} /> Trending
          </div>
          {CATEGORIES.map(cat => (
            <button key={cat.id} className="flex-shrink-0 px-6 py-3 rounded-2xl text-gray-500 font-bold text-xs uppercase tracking-widest hover:bg-gray-100 transition-colors">
              {cat.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Flash Sale Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-12">
           <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center text-red-600">
               <Zap size={24} />
             </div>
             <div>
               <h2 className="text-3xl font-black text-gray-900 tracking-tighter uppercase">Flash Deals</h2>
               <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Freshly updated every hour</p>
             </div>
           </div>
           <div className="hidden md:flex gap-2">
             <span className="text-sm font-bold text-gray-400">Sort by:</span>
             <select className="bg-transparent border-none text-sm font-black text-gray-800 focus:ring-0 cursor-pointer">
               <option>Highest Discount</option>
               <option>Price: Low to High</option>
               <option>Popularity</option>
             </select>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FLASH_SALE_PRODUCTS.map(product => (
            <div key={product.id} className="group bg-white rounded-[2.5rem] p-6 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col relative overflow-hidden">
               {/* Sales Badge */}
               <div className="absolute top-6 left-6 z-10 bg-red-600 text-white text-[10px] font-black px-3 py-1.5 rounded-xl shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform">
                 SAVE ${(product.oldPrice! - product.price).toFixed(0)}
               </div>

               <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-gray-50">
                 <img 
                   src={product.image} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <button className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-red-600 hover:text-white">
                   <Zap size={20} />
                 </button>
               </div>

               <div className="flex-1">
                 <div className="flex items-center gap-2 mb-2">
                   <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">{product.category}</span>
                   <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                   <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Ends Soon</span>
                 </div>
                 <h3 className="text-lg font-black text-gray-900 leading-tight mb-4 group-hover:text-red-600 transition-colors line-clamp-2">
                   {product.name}
                 </h3>

                 {/* Flash Sale Progress Bar */}
                 <div className="mb-6">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-[10px] font-bold text-gray-400 uppercase">Sold: {product.soldCount} Units</span>
                      <span className="text-[10px] font-black text-red-600 uppercase">Only {product.totalStock! - product.soldCount!} Left!</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                       <div 
                         className="h-full bg-gradient-to-r from-red-600 to-orange-500 rounded-full transition-all duration-1000" 
                         style={{ width: `${(product.soldCount! / product.totalStock!) * 100}%` }}
                       ></div>
                    </div>
                 </div>

                 <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                   <div>
                     <span className="text-2xl font-black text-gray-900">${product.price.toFixed(2)}</span>
                     <span className="text-xs text-gray-400 line-through ml-2 font-bold">${product.oldPrice?.toFixed(2)}</span>
                   </div>
                   <button 
                     onClick={() => navigate(`/product/${product.id}`)}
                     className="bg-gray-900 text-white px-6 py-2.5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-red-600 transition-all active:scale-95"
                   >
                     Claim Now
                   </button>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Promo Banner */}
      <div className="container mx-auto px-4 mt-8">
        <div className="bg-gray-900 rounded-[3rem] p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 transform origin-right"></div>
           <div className="flex-1 relative z-10 text-center lg:text-left">
             <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">New Drop: <br/> <span className="text-blue-500">Gaming Gear Elite</span></h2>
             <p className="text-gray-400 max-w-md mb-10 mx-auto lg:mx-0 font-medium">Equip your setup with professional-grade accessories at unprecedented flash sale prices.</p>
             <button className="flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all mx-auto lg:mx-0">
               View Gaming Deals <ChevronRight size={18} />
             </button>
           </div>
           <div className="flex-1 relative">
             <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800" className="rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700" alt="gaming gear" />
           </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
