
import React, { useEffect, useState } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { 
  CATEGORIES, 
  FEATURED_PRODUCTS, 
  DIGITAL_PRODUCTS, 
  CLASSIFIED_ADS, 
  ELECTRIC_ITEMS, 
  FOOD_PRODUCTS, 
  HOME_LIFESTYLE,
  BANNERS 
} from '../constants';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({ days: 341, hours: 8, minutes: 33, seconds: 22 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const SectionHeader = ({ title, color = "blue", onViewAll }: { title: string, color?: string, onViewAll: () => void }) => {
    const colorClasses: Record<string, { bg: string, text: string }> = {
      blue: { bg: 'bg-blue-600', text: 'text-blue-600' },
      purple: { bg: 'bg-purple-600', text: 'text-purple-600' },
      orange: { bg: 'bg-orange-600', text: 'text-orange-600' },
      green: { bg: 'bg-green-600', text: 'text-green-600' },
      amber: { bg: 'bg-amber-600', text: 'text-amber-600' },
      cyan: { bg: 'bg-cyan-600', text: 'text-cyan-600' },
    };

    const theme = colorClasses[color] || colorClasses.blue;

    return (
      <div className="flex items-center justify-between mb-8 px-2">
        <div className="flex items-center gap-3">
          <div className={`w-1.5 h-8 ${theme.bg} rounded-full`}></div>
          <h2 className="text-xl md:text-2xl font-black text-gray-800 tracking-tight uppercase">{title}</h2>
        </div>
        <button onClick={onViewAll} className={`text-xs font-black uppercase tracking-widest ${theme.text} hover:opacity-70 transition-opacity`}>
          View All
        </button>
      </div>
    );
  };

  return (
    <main className="space-y-16 pb-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 relative overflow-hidden rounded-[2rem] bg-gray-100 h-[450px] lg:h-[600px] group cursor-pointer shadow-xl border-4 border-white">
            <div className="absolute inset-0 z-0">
               <img 
                 src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800" 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                 alt="Model" 
               />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-12 left-8 z-10">
              <h1 className="text-5xl font-black text-white leading-none uppercase tracking-tighter drop-shadow-2xl">
                Unleash<br/>
                <span className="text-blue-500">Your Brand</span>
              </h1>
              <button className="mt-6 bg-white text-black px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-lg">
                Explore Now
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Flash Sale Card */}
              <div className="bg-blue-600 rounded-[2rem] p-8 text-white flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden h-[280px]">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                 <h2 className="text-3xl font-black mb-2 uppercase italic tracking-tighter">Season Flash Sale</h2>
                 <p className="text-xs font-bold text-white/70 mb-8 uppercase tracking-widest">Limited time offer</p>
                 
                 <div className="flex gap-4">
                   {[
                     { val: timeLeft.days, label: 'Days' },
                     { val: timeLeft.hours, label: 'Hours' },
                     { val: timeLeft.minutes, label: 'Mins' },
                     { val: timeLeft.seconds, label: 'Secs' }
                   ].map((t, i) => (
                     <div key={i} className="flex flex-col items-center">
                       <div className="bg-white/10 backdrop-blur-xl rounded-2xl w-14 h-14 flex items-center justify-center border border-white/20 mb-1">
                         <span className="text-xl font-black">{t.val.toString().padStart(2, '0')}</span>
                       </div>
                       <span className="text-[8px] font-black uppercase opacity-60 tracking-widest">{t.label}</span>
                     </div>
                   ))}
                 </div>
              </div>

              {/* Hot Categories Grid */}
              <div className="bg-white rounded-[2rem] border border-gray-100 p-8 shadow-sm h-[280px] flex flex-col">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                  <h3 className="font-black text-gray-800 text-sm uppercase tracking-widest">Hot Categories</h3>
                </div>
                <div className="grid grid-cols-4 gap-4 flex-1 overflow-y-auto custom-scrollbar pr-2">
                  {CATEGORIES.map((cat) => (
                    <div key={cat.id} className="flex flex-col items-center text-center group cursor-pointer" onClick={() => navigate('/products')}>
                      <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center overflow-hidden mb-2 group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                        <img src={cat.image} className="w-full h-full object-cover" alt={cat.name} />
                      </div>
                      <span className="text-[8px] font-black text-gray-400 uppercase tracking-tighter leading-none group-hover:text-blue-600 line-clamp-2">{cat.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Featured Horizontal Card */}
            <div className="bg-gray-900 rounded-[2rem] p-8 text-white relative overflow-hidden h-[294px] group">
              <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden opacity-40">
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-center max-w-sm">
                <span className="text-blue-500 font-black text-xs uppercase tracking-[0.3em] mb-4">Featured Product</span>
                <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter">Premium Collection 2024</h2>
                <div className="flex items-center gap-4">
                  <button onClick={() => navigate('/products')} className="bg-blue-600 text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                    Shop Collection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="container mx-auto px-4">
        <SectionHeader title="Digital & Gaming" color="purple" onViewAll={() => navigate('/products')} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {DIGITAL_PRODUCTS.map(prod => (
            <div key={prod.id} className="bg-white rounded-[1.5rem] p-4 border border-gray-100 group cursor-pointer transition-all hover:shadow-2xl" onClick={() => navigate(`/product/${prod.id}`)}>
              <div className="aspect-[4/3] mb-4 rounded-xl overflow-hidden relative">
                <img src={prod.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-3 left-3 bg-purple-600 text-white text-[8px] px-2 py-1 rounded font-black tracking-widest">DIGITAL</div>
              </div>
              <h3 className="text-xs font-bold text-gray-800 mb-3 line-clamp-1">{prod.name}</h3>
              <div className="flex justify-between items-center">
                 <p className="text-purple-600 font-black text-sm">${prod.price.toFixed(2)}</p>
                 <button className="bg-purple-50 text-purple-600 text-[10px] font-black px-4 py-1.5 rounded-lg group-hover:bg-purple-600 group-hover:text-white transition-all uppercase">Buy</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4">
        <SectionHeader title="Top Trending" color="blue" onViewAll={() => navigate('/products')} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {FEATURED_PRODUCTS.map((prod) => <ProductCard key={prod.id} product={prod} />)}
        </div>
      </section>

      {/* Grid Banners */}
      <section className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {BANNERS.map(ban => (
          <div key={ban.id} className={`${ban.color} rounded-[2rem] p-8 relative overflow-hidden group h-64 flex flex-col justify-center cursor-pointer shadow-sm border border-gray-100 hover:shadow-xl transition-shadow`} onClick={() => navigate('/products')}>
            <div className="absolute right-0 top-0 w-1/2 h-full">
              <img src={ban.image} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000" />
            </div>
            <div className="relative z-10 max-w-[60%]">
              <h2 className="text-2xl font-black text-gray-900 mb-2 uppercase leading-none tracking-tighter">{ban.title}</h2>
              <p className="text-xs font-bold text-gray-500 mb-6 uppercase tracking-widest">{ban.subtitle}</p>
              <button className="bg-white text-gray-900 text-[10px] font-black px-6 py-3 rounded-xl shadow-lg hover:bg-black hover:text-white transition-all uppercase tracking-widest">Shop Now</button>
            </div>
          </div>
        ))}
      </section>

      <section className="container mx-auto px-4">
        <SectionHeader title="Electronics" color="green" onViewAll={() => navigate('/products')} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {ELECTRIC_ITEMS.map(prod => <ProductCard key={prod.id} product={prod} />)}
        </div>
      </section>

      <section className="container mx-auto px-4">
        <SectionHeader title="Fresh & Food" color="amber" onViewAll={() => navigate('/products')} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {FOOD_PRODUCTS.map(prod => <ProductCard key={prod.id} product={prod} />)}
        </div>
      </section>

      {/* Merchant Section */}
      <section className="container mx-auto px-4">
        <div className="bg-gray-950 rounded-[3rem] p-10 lg:p-16 text-white relative overflow-hidden shadow-2xl">
           <div className="absolute right-0 top-0 h-full w-2/5 opacity-30 hidden lg:block">
             <img src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=800" className="h-full w-full object-cover grayscale" />
           </div>
           <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tighter uppercase leading-none">
                Start Selling <br/>
                <span className="text-blue-600 underline underline-offset-[12px] decoration-4">Today</span>
              </h2>
              <p className="text-gray-400 max-w-lg mb-10 text-sm lg:text-base leading-relaxed">Join thousands of successful merchants. Passionate sellers bringing new trends directly to your doorstep with guaranteed authenticity.</p>
              <button onClick={() => navigate('/products')} className="bg-blue-600 text-white font-black px-10 py-5 rounded-2xl hover:bg-white hover:text-black transition-all flex items-center gap-3 shadow-2xl uppercase tracking-widest text-xs">
                Open Your Shop <ArrowRight size={20} />
              </button>
           </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
