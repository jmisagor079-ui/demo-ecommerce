import React, { useState } from 'react';
import { Shield, ShieldCheck, Lock, RefreshCcw, Truck, Search, CheckCircle2, AlertCircle } from 'lucide-react';

const OrderProtection: React.FC = () => {
  const [orderId, setOrderId] = useState('');

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-600 to-blue-700 py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-right"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20 mb-8 shadow-2xl">
            <ShieldCheck size={40} className="text-white" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tighter italic">
            Order <span className="text-emerald-300">Protection</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto font-medium">
            Shop with total confidence. Our multi-layer protection system ensures every transaction is 100% secure from checkout to delivery at Alijali.
          </p>
        </div>
      </div>

      {/* Trust Tiers */}
      <div className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Lock className="text-blue-600" />, title: 'Encrypted Checkout', desc: 'Bank-grade SSL encryption for all your sensitive financial data.' },
            { icon: <RefreshCcw className="text-emerald-600" />, title: 'Refund Guarantee', desc: 'Get your money back if the item is not as described or never arrives.' },
            { icon: <Truck className="text-purple-600" />, title: 'Delivery Shield', desc: 'Every shipment is tracked and insured against damage or loss.' }
          ].map((tier, i) => (
            <div key={i} className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {tier.icon}
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-tighter">{tier.title}</h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">{tier.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Coverage Lookup Widget */}
      <div className="container mx-auto px-4 mt-24">
        <div className="max-w-4xl mx-auto bg-gray-950 rounded-[4rem] p-12 lg:p-20 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-500"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black mb-6 uppercase tracking-tighter italic">Coverage <br/> Tracker</h2>
              <p className="text-gray-400 text-sm mb-8 font-medium">Enter your order ID to see the specific protection status and warranty coverage for your Alijali purchase.</p>
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Order ID (e.g. #ORD-12345)" 
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 outline-none focus:bg-white/10 focus:border-emerald-500 transition-all text-sm font-black"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-emerald-600 hover:bg-emerald-500 px-6 rounded-xl transition-all active:scale-95">
                  <Search size={18} />
                </button>
              </div>
            </div>
            <div className="space-y-4">
               {[
                 { label: 'Merchant Verification', status: 'Active' },
                 { label: 'Payment Escrow', status: 'Secured' },
                 { label: 'Anti-Fraud Filter', status: 'Live' }
               ].map((item, i) => (
                 <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center justify-between">
                   <span className="text-xs font-black uppercase text-gray-400 tracking-widest">{item.label}</span>
                   <div className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                     <span className="text-[10px] font-black uppercase text-emerald-500">{item.status}</span>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Grid */}
      <div className="container mx-auto px-4 mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">Your Questions, Answered</h2>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Everything you need to know about our safety standards</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { q: "What happens if my package is stolen?", a: "Every order is insured. If tracking confirms delivery but you haven't received it, our delivery shield team initiates a claim with the courier within 24 hours." },
            { q: "Is my payment information stored?", a: "Never. We use tokenized payment processing, meaning your card details never touch our servers. We only receive a secure authorization from your bank." },
            { q: "How do I start a dispute?", a: "Simple. Go to your Order History, click 'Report Issue', and our protection team will mediate between you and the seller to resolve it within 48 hours." },
            { q: "Does coverage apply globally?", a: "Yes. Whether you are ordering locally or across continents, Alijali eCommerce Order Protection travels with your package." }
          ].map((faq, i) => (
            <div key={i} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all group">
              <h4 className="text-sm font-black text-gray-900 uppercase tracking-tight mb-4 group-hover:text-blue-600">{faq.q}</h4>
              <p className="text-xs font-medium text-gray-500 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderProtection;