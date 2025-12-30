
import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, ChevronRight, Smartphone, AlertCircle, CheckCircle2, Copy } from 'lucide-react';

const Checkout: React.FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [trxID, setTrxID] = useState('');
  const [step, setStep] = useState(1);
  const [isCopied, setIsCopied] = useState(false);

  if (!state || !state.product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-black uppercase mb-4">No active order found</h2>
        <Link to="/" className="text-[#ff6a00] font-black uppercase tracking-widest">Back to Home</Link>
      </div>
    );
  }

  const { product, quantity, totalPrice } = state;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3); // Success step
  };

  return (
    <div className="bg-[#f2f3f7] min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Progress Header */}
          <div className="flex items-center justify-center gap-4 mb-12">
             <div className={`flex items-center gap-2 ${step >= 1 ? 'text-[#ff6a00]' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-black ${step >= 1 ? 'border-[#ff6a00]' : 'border-gray-300'}`}>1</div>
                <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">Buyer Info</span>
             </div>
             <div className="w-12 h-[2px] bg-gray-300"></div>
             <div className={`flex items-center gap-2 ${step >= 2 ? 'text-[#ff6a00]' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-black ${step >= 2 ? 'border-[#ff6a00]' : 'border-gray-300'}`}>2</div>
                <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">bKash Payment</span>
             </div>
             <div className="w-12 h-[2px] bg-gray-300"></div>
             <div className={`flex items-center gap-2 ${step >= 3 ? 'text-[#ff6a00]' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-black ${step >= 3 ? 'border-[#ff6a00]' : 'border-gray-300'}`}>3</div>
                <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">Delivery</span>
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
               {step === 1 && (
                 <div className="bg-white rounded-[2rem] p-8 border shadow-sm">
                    <h2 className="text-xl font-black uppercase tracking-tighter mb-6">Delivery Information</h2>
                    <div className="space-y-6">
                       <div>
                          <label className="text-[10px] font-black uppercase text-gray-400 block mb-2">Delivery Email (Important)</label>
                          <input 
                            type="email" 
                            required 
                            placeholder="your@email.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-gray-50 border rounded-xl py-4 px-6 outline-none focus:border-[#ff6a00] font-bold"
                          />
                          <p className="text-[9px] text-gray-400 mt-2 font-medium">Digital keys will be sent to this email address within {product.deliveryType === 'Instant' ? 'minutes' : '24 hours'}.</p>
                       </div>
                       <div>
                          <label className="text-[10px] font-black uppercase text-gray-400 block mb-2">Contact Phone</label>
                          <input 
                            type="tel" 
                            placeholder="+8801XXXXXXXXX" 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full bg-gray-50 border rounded-xl py-4 px-6 outline-none focus:border-[#ff6a00] font-bold"
                          />
                       </div>
                       <button 
                         onClick={() => email && phone && setStep(2)}
                         className="w-full bg-[#ff6a00] text-white py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-[#e65f00] transition-all disabled:opacity-50"
                         disabled={!email || !phone}
                       >
                         Continue to Payment
                       </button>
                    </div>
                 </div>
               )}

               {step === 2 && (
                 <div className="bg-white rounded-[2rem] p-8 border shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                       <h2 className="text-xl font-black uppercase tracking-tighter">bKash Manual Payment</h2>
                       <div className="bg-[#e2136e] p-2 rounded-lg">
                          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Bkash_logo.png/320px-Bkash_logo.png" className="h-4 brightness-0 invert" alt="bkash" />
                       </div>
                    </div>
                    
                    <div className="bg-pink-50 rounded-2xl p-6 border border-pink-100 mb-8">
                       <h4 className="text-[10px] font-black text-[#e2136e] uppercase tracking-widest mb-4">Payment Instructions</h4>
                       <ol className="text-xs font-medium text-gray-700 space-y-3 list-decimal pl-4">
                          <li>Open bKash App or Dial *247#</li>
                          <li>Go to "Send Money"</li>
                          <li>Enter Number: <span className="font-black text-gray-900">+8801744212976</span></li>
                          <li>Enter Amount: <span className="font-black text-[#e2136e] text-base">${totalPrice.toFixed(2)} (BDT {(totalPrice * 125).toFixed(0)})</span></li>
                          <li>Complete payment and copy the <span className="font-black">Transaction ID (TrxID)</span></li>
                       </ol>
                       <div className="mt-6 flex items-center justify-between bg-white p-4 rounded-xl border border-pink-200">
                          <span className="text-xs font-bold">01744212976</span>
                          <button 
                            onClick={() => handleCopy('01744212976')}
                            className="text-[#e2136e] font-black text-[10px] uppercase flex items-center gap-1"
                          >
                             {isCopied ? 'Copied!' : 'Copy Number'} <Copy size={12} />
                          </button>
                       </div>
                    </div>

                    <form onSubmit={handleFinish} className="space-y-6">
                       <div>
                          <label className="text-[10px] font-black uppercase text-gray-400 block mb-2">bKash Transaction ID (TrxID)</label>
                          <input 
                            type="text" 
                            required 
                            placeholder="Example: AF1200XJ2" 
                            value={trxID}
                            onChange={(e) => setTrxID(e.target.value)}
                            className="w-full bg-gray-50 border rounded-xl py-4 px-6 outline-none focus:border-[#e2136e] font-black uppercase placeholder:normal-case"
                          />
                          <div className="flex items-center gap-2 mt-3 text-[10px] text-orange-500 font-black">
                             <AlertCircle size={14} /> MANUAL VERIFICATION BY ADMIN TAKES 5-10 MINS
                          </div>
                       </div>
                       <div className="flex gap-4">
                          <button type="button" onClick={() => setStep(1)} className="px-8 py-5 border-2 rounded-2xl font-black uppercase text-[10px] text-gray-400">Back</button>
                          <button type="submit" className="flex-1 bg-[#e2136e] text-white py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-[#c0105d] transition-all">Submit Order</button>
                       </div>
                    </form>
                 </div>
               )}

               {step === 3 && (
                 <div className="bg-white rounded-[2.5rem] p-12 border shadow-2xl text-center">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mx-auto mb-8">
                       <CheckCircle2 size={48} />
                    </div>
                    <h2 className="text-3xl font-[1000] uppercase tracking-tighter mb-4 italic">Order Received!</h2>
                    <p className="text-gray-500 font-medium mb-10">Your bKash transaction <span className="font-black text-gray-900">{trxID}</span> is being verified. Check your email <span className="font-black text-[#ff6a00]">{email}</span> shortly for your digital keys.</p>
                    <Link to="/" className="inline-block bg-[#ff6a00] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-[#e65f00] transition-all">Continue Shopping</Link>
                 </div>
               )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
               <div className="bg-white rounded-[2rem] p-8 border shadow-sm sticky top-28">
                  <h3 className="text-xs font-black uppercase tracking-widest mb-6 text-gray-400">Order Summary</h3>
                  <div className="flex gap-4 mb-6 pb-6 border-b">
                     <div className="w-16 h-16 bg-gray-50 rounded-xl overflow-hidden border">
                        <img src={product.image} className="w-full h-full object-cover" />
                     </div>
                     <div className="flex-1">
                        <h4 className="text-[11px] font-black text-gray-800 line-clamp-2 uppercase leading-tight">{product.name}</h4>
                        <div className="text-[10px] font-bold text-[#2cb9b9] uppercase mt-1">Digital Delivery</div>
                     </div>
                  </div>
                  <div className="space-y-3 mb-8">
                     <div className="flex justify-between text-xs font-bold text-gray-500">
                        <span>Quantity</span>
                        <span className="text-gray-900 font-black">x{quantity}</span>
                     </div>
                     <div className="flex justify-between text-xs font-bold text-gray-500">
                        <span>Delivery</span>
                        <span className="text-[#2cb9b9] font-black uppercase">Free/Instant</span>
                     </div>
                     <div className="pt-3 border-t flex justify-between">
                        <span className="text-xs font-black uppercase text-gray-900">Total Price</span>
                        <div className="text-right">
                           <div className="text-xl font-black text-[#ff4d00]">${totalPrice.toFixed(2)}</div>
                           <div className="text-[10px] font-bold text-gray-400">~ BDT {(totalPrice * 125).toLocaleString()}</div>
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl border border-dashed text-[9px] font-black text-gray-400 uppercase text-center">
                     <ShieldCheck size={14} className="text-[#2cb9b9]" /> 100% Secure Digital Sourcing
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
