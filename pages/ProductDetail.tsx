
import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ALL_PRODUCTS } from '../constants';
import { Star, Heart, Share2, ShoppingCart, ShieldCheck, Zap, Globe, Clock, Package } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  
  const product = useMemo(() => 
    ALL_PRODUCTS.find(p => p.id === id) || ALL_PRODUCTS[0]
  , [id]);

  // Calculate current unit price based on bulk tiers
  const currentUnitPrice = useMemo(() => {
    if (!product.bulkTiers || product.bulkTiers.length === 0) return product.price;
    const sortedTiers = [...product.bulkTiers].sort((a, b) => b.minQuantity - a.minQuantity);
    const applicableTier = sortedTiers.find(t => quantity >= t.minQuantity);
    return applicableTier ? applicableTier.price : product.price;
  }, [product, quantity]);

  const relatedProducts = useMemo(() => 
    ALL_PRODUCTS
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 4)
  , [product]);

  const handleCheckout = () => {
    navigate('/checkout', { state: { product, quantity, totalPrice: currentUnitPrice * quantity } });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="flex text-[10px] text-gray-400 gap-2 mb-8 uppercase font-black tracking-[0.2em]">
        <Link to="/" className="hover:text-[#ff6a00] transition-colors">Home</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-[#ff6a00] transition-colors">Digital Shop</Link>
        <span>/</span>
        <span className="text-gray-800">{product.name}</span>
      </nav>

      <div className="bg-white rounded-[3rem] shadow-sm border p-8 lg:p-12 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Images */}
          <div className="space-y-6">
            <div className="aspect-square rounded-[2rem] overflow-hidden bg-gray-50 border group relative">
              <img 
                src={product.image} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                alt={product.name} 
              />
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <div className="bg-[#2cb9b9] text-white text-[10px] font-black px-4 py-1.5 rounded-xl shadow-2xl uppercase tracking-widest flex items-center gap-1.5">
                  <Zap size={12} /> {product.deliveryType} Delivery
                </div>
                <div className="bg-gray-900 text-white text-[10px] font-black px-4 py-1.5 rounded-xl shadow-2xl uppercase tracking-widest flex items-center gap-1.5">
                  <Globe size={12} /> {product.region}
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <span className="bg-[#fff0e6] text-[#ff6a00] text-[10px] font-black px-4 py-2 rounded-xl uppercase tracking-widest">
                {product.category}
              </span>
              <div className="flex gap-3">
                <button className="w-11 h-11 flex items-center justify-center bg-gray-50 rounded-2xl hover:bg-red-50 hover:text-red-500 transition-all active:scale-90">
                  <Heart size={20} />
                </button>
                <button className="w-11 h-11 flex items-center justify-center bg-gray-50 rounded-2xl hover:bg-blue-50 hover:text-blue-500 transition-all active:scale-90">
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-[900] text-gray-900 mb-6 leading-[1.1] tracking-tighter uppercase italic">
              {product.name}
            </h1>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-1 bg-yellow-400/10 px-3 py-1.5 rounded-xl">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className={i < product.rating ? "fill-yellow-500 text-yellow-500" : "text-gray-300"} />
                ))}
                <span className="text-xs font-black text-yellow-700 ml-2">{product.rating.toFixed(1)}</span>
              </div>
              <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">{product.reviews.toLocaleString()} Positive Feedback</span>
            </div>

            {/* Bulk Pricing Table */}
            {product.bulkTiers && (
              <div className="mb-8 border border-gray-100 rounded-2xl overflow-hidden bg-gray-50/50">
                <div className="bg-gray-100 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-gray-500">Tiered Bulk Pricing</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-100">
                  {product.bulkTiers.map((tier, idx) => (
                    <div key={idx} className={`p-4 text-center transition-colors ${quantity >= tier.minQuantity ? 'bg-[#fff0e6] border-b-2 border-[#ff6a00]' : ''}`}>
                      <div className="text-[10px] font-bold text-gray-400 uppercase">{tier.minQuantity}+ Units</div>
                      <div className="text-lg font-black text-[#ff4d00]">${tier.price.toFixed(2)}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-gray-900 p-8 rounded-[2.5rem] mb-10 text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6a00]/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
               <div className="flex items-baseline gap-4 mb-3 relative z-10">
                 <div className="flex flex-col">
                   <span className="text-5xl font-[1000] text-[#ff6a00] italic uppercase tracking-tighter">${currentUnitPrice.toFixed(2)}</span>
                   <span className="text-[10px] font-bold text-gray-400 uppercase">Unit Price For Your Quantity</span>
                 </div>
                 {product.oldPrice && (
                   <span className="text-xl text-gray-500 line-through font-bold">${product.oldPrice.toFixed(2)}</span>
                 )}
               </div>
               <div className="flex items-center gap-3 relative z-10 pt-4 border-t border-white/10">
                 <div className="flex-1">
                    <span className="text-xs font-black uppercase text-gray-300">Order Total</span>
                    <div className="text-2xl font-black text-white">${(currentUnitPrice * quantity).toFixed(2)}</div>
                 </div>
                 <div className="text-right">
                    <div className="text-[10px] font-black text-[#2cb9b9] uppercase flex items-center gap-1 justify-end">
                      <Zap size={10} /> Instant Delivery Active
                    </div>
                 </div>
               </div>
            </div>

            <div className="space-y-8 mb-10">
              <div>
                <h4 className="text-[10px] font-black text-gray-400 mb-4 uppercase tracking-widest">Order Quantity</h4>
                <div className="flex items-center gap-6">
                  <div className="flex items-center bg-gray-50 rounded-2xl p-1 border shadow-inner">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 flex items-center justify-center hover:bg-white rounded-xl font-black transition-all text-lg"
                    >-</button>
                    <input 
                      type="number" 
                      value={quantity} 
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-20 bg-transparent text-center font-black outline-none text-xl" 
                    />
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-12 flex items-center justify-center hover:bg-white rounded-xl font-black transition-all text-lg"
                    >+</button>
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#2cb9b9] flex items-center gap-2">
                    <Package size={14} /> Stock: Unlimited
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <button 
                onClick={handleCheckout}
                className="flex-1 bg-[#ff6a00] text-white font-black py-5 rounded-[1.5rem] shadow-2xl hover:bg-[#e65f00] transition-all flex items-center justify-center gap-3 transform active:scale-95 uppercase tracking-widest text-xs"
              >
                Buy Now
              </button>
              <button className="flex-1 bg-white border-2 border-gray-900 text-gray-900 font-black py-5 rounded-[1.5rem] hover:bg-gray-900 hover:text-white transition-all transform active:scale-95 uppercase tracking-widest text-xs">
                Reseller Inquiry
              </button>
            </div>

            <div className="mt-10 flex items-center gap-3 p-4 bg-blue-50 rounded-2xl text-[10px] text-blue-700 font-black uppercase tracking-widest border border-blue-100">
              <ShieldCheck className="text-blue-500" size={18} />
              <span>Full Refund if key is invalid. 100% Anti-Ban Guarantee for all licenses.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Content / Specs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
        <div className="lg:col-span-2 space-y-8">
           <div className="bg-white rounded-[2.5rem] p-8 border">
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-6">Product Information</h2>
              <div className="prose prose-sm max-w-none text-gray-600 font-medium">
                <p>Buy <strong>{product.name}</strong> at the lowest wholesale price in Bangladesh. Perfect for resellers, IT firms, and bulk buyers.</p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li><strong>Delivery:</strong> {product.deliveryType} Delivery via Registered Email / Account Dashboard.</li>
                  <li><strong>Activation:</strong> Online Activation / Code Input.</li>
                  <li><strong>Region:</strong> {product.region}.</li>
                  <li><strong>Duration:</strong> Full Subscription / Lifetime (As per product tier).</li>
                </ul>
              </div>
           </div>
        </div>
        <div className="space-y-6">
           <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-200">
              <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6">Support Info</h3>
              <div className="space-y-4">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#ff6a00] shadow-sm"><Zap size={20} /></div>
                    <div className="text-[11px] font-black text-gray-500 uppercase">Average 2 min Response</div>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#2cb9b9] shadow-sm"><ShieldCheck size={20} /></div>
                    <div className="text-[11px] font-black text-gray-500 uppercase">Verified Merchant Warranty</div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mb-20">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic">Bulk Recommended</h2>
            <Link to="/products" className="text-[10px] font-black text-[#ff6a00] uppercase tracking-widest hover:opacity-70">See All Digital Items</Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(rp => (
              <ProductCard key={rp.id} product={rp} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
