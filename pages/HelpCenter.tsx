
import React, { useState } from 'react';
import { Search, MessageSquare, Phone, Mail, FileText, Package, CreditCard, UserCheck, ChevronRight, Globe } from 'lucide-react';

const HelpCenter: React.FC = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Search Header */}
      <div className="bg-white py-20 lg:py-28 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-6 uppercase tracking-tighter italic">
            Help <span className="text-blue-600">Center</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium mb-12">
            How can we assist you today? Search our global knowledge base or connect with a specialist.
          </p>
          <div className="max-w-2xl mx-auto relative group">
            <input 
              type="text" 
              placeholder="Describe your issue (e.g. 'How to track my order?')" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-gray-100 border-2 border-transparent rounded-[2rem] py-6 px-14 text-gray-900 outline-none focus:bg-white focus:border-blue-600 transition-all text-sm font-bold shadow-sm"
            />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600" size={20} />
            <button className="absolute right-4 top-4 bottom-4 bg-blue-600 text-white px-8 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg hover:bg-gray-900 transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Support Categories */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Package />, title: 'Shipping & Delivery', count: '45 Articles' },
            { icon: <CreditCard />, title: 'Payment & Billing', count: '12 Articles' },
            { icon: <UserCheck />, title: 'Account Settings', count: '30 Articles' },
            { icon: <FileText />, title: 'Returns & Refunds', count: '22 Articles' }
          ].map((cat, i) => (
            <button key={i} className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all flex flex-col items-center group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {cat.icon}
              </div>
              <h3 className="text-sm font-black text-gray-900 mb-2 uppercase tracking-tighter">{cat.title}</h3>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{cat.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Track & Live Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Track Widget */}
        <div className="bg-gray-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter flex items-center gap-3 italic">
            <Globe className="text-blue-500" /> Fast Tracking
          </h2>
          <p className="text-gray-400 text-sm mb-10 font-medium">Real-time global logistics data. Enter your tracking number to pinpoint your delivery.</p>
          <div className="flex gap-4">
             <input type="text" placeholder="Tracking Number..." className="flex-1 bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-blue-500 transition-colors" />
             <button className="bg-blue-600 hover:bg-white hover:text-black transition-all px-8 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl">Track</button>
          </div>
        </div>

        {/* Live Support Widget */}
        <div className="bg-white rounded-[3.5rem] p-12 border border-gray-100 shadow-xl flex flex-col justify-between group">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter italic">Instant Support</h2>
            </div>
            <p className="text-gray-500 text-sm mb-10 font-medium">Current wait time: <span className="text-blue-600 font-black">Less than 2 mins</span>. Our global team is ready to chat.</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
             {[
               { icon: <MessageSquare size={18} />, label: 'Chat' },
               { icon: <Phone size={18} />, label: 'Call' },
               { icon: <Mail size={18} />, label: 'Email' }
             ].map((method, i) => (
               <button key={i} className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-gray-50 hover:bg-blue-600 hover:text-white transition-all group/btn">
                  <div className="text-blue-600 group-hover/btn:text-white transition-colors">{method.icon}</div>
                  <span className="text-[10px] font-black uppercase tracking-widest">{method.label}</span>
               </button>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
