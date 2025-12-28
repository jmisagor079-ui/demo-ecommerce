
import React from 'react';
import { PREORDER_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Zap, Sparkles, Clock, ArrowRight, BellRing } from 'lucide-react';

const Preorder: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Exclusive Hero */}
      <div className="bg-gray-950 py-24 lg:py-40 relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
            className="w-full h-full object-cover opacity-20 grayscale scale-110" 
            alt="future"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-xl px-4 py-1.5 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-blue-500/30">
            <Sparkles size={14} className="animate-pulse" /> Next-Gen Drops
          </div>
          <h1 className="text-6xl lg:text-8xl font-black text-white mb-6 uppercase tracking-tighter leading-none italic">
            Future <br/> <span className="text-blue-600">Available Now</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium mb-12">
            Be the first to own the technologies of tomorrow. Secure your piece of the next generation at early-bird prices.
          </p>
          <div className="flex justify-center gap-6">
             <button className="bg-white text-black px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-2xl active:scale-95">
               View All Upcoming
             </button>
             <button className="bg-gray-800 text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest border border-gray-700 hover:border-white transition-all">
               Notify Me
             </button>
          </div>
        </div>
      </div>

      {/* Preorder Timeline */}
      <div className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="bg-white rounded-[3.5rem] p-12 lg:p-20 shadow-2xl border border-gray-100 grid grid-cols-1 md:grid-cols-4 gap-8">
           {[
             { step: '01', title: 'Reservation', desc: 'Secure your item with a minimal deposit.' },
             { step: '02', title: 'Production', desc: 'Real-time updates as your item is crafted.' },
             { step: '03', title: 'Inspection', desc: 'Rigorous quality check before transit.' },
             { step: '04', title: 'Priority Dispatch', desc: 'Ships 48h before general retail launch.' }
           ].map((phase, i) => (
             <div key={i} className="relative group">
               <span className="text-6xl font-black text-gray-100 group-hover:text-blue-50 transition-colors absolute -top-10 -left-2 z-0 italic">{phase.step}</span>
               <div className="relative z-10">
                 <h4 className="text-sm font-black text-gray-900 mb-2 uppercase tracking-tight">{phase.title}</h4>
                 <p className="text-xs font-medium text-gray-400 leading-relaxed">{phase.desc}</p>
               </div>
               {i < 3 && <ArrowRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-gray-200" size={24} />}
             </div>
           ))}
        </div>
      </div>

      {/* Preorder Collection Grid */}
      <div className="container mx-auto px-4 py-32">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter">Live Preorders</h2>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Limited production runs • Shipping 2024/25</p>
          </div>
          <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-6 py-3 rounded-2xl">
            <BellRing size={16} /> Subscription Active
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PREORDER_PRODUCTS.map(product => (
            <div key={product.id} className="relative group">
              <ProductCard product={product} />
              <div className="absolute top-4 right-4 z-20 bg-gray-900 text-white p-3 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                <Zap size={20} className="fill-orange-400 text-orange-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Future Concept Banner */}
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-700 to-indigo-900 rounded-[4rem] p-12 lg:p-24 relative overflow-hidden text-white flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
          <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
          <div className="relative z-10 max-w-lg">
            <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter italic">Join The Elite <br/> Testing Program</h2>
            <p className="text-blue-100 mb-10 text-lg leading-relaxed">Be among the select few who get early access to prototype products. Help us shape the final retail versions with your feedback.</p>
            <button className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all shadow-xl">
              Apply for Beta Access
            </button>
          </div>
          <div className="relative z-10 w-full lg:w-1/3 aspect-square bg-white/5 backdrop-blur-md border border-white/10 rounded-[3.5rem] flex items-center justify-center p-12 overflow-hidden group">
             <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
             <Sparkles size={120} className="text-white/40 group-hover:text-white transition-colors duration-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preorder;
