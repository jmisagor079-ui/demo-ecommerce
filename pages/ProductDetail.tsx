
import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ALL_PRODUCTS } from '../constants';
import { Star, Heart, Share2, ShieldCheck, Zap, Globe, Package, Check } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  
  const product = useMemo(() => 
    ALL_PRODUCTS.find(p => p.id === id) || ALL_PRODUCTS[0]
  , [id]);

  // Track selected options for each variant
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    product.variants?.forEach(v => {
      initial[v.name] = v.options[0].label;
    });
    return initial;
  });

  // Calculate current price based on variant selection
  const variantPriceModifier = useMemo(() => {
    let modifier = 0;
    product.variants?.forEach(v => {
      const selectedLabel = selectedVariants[v.name];
      const option = v.options.find(o => o.label === selectedLabel);
      if (option) modifier += option.priceModifier;
    });
    return modifier;
  }, [product, selectedVariants]);

  // Base price including variants
  const basePriceWithVariants = product.price + variantPriceModifier;

  // Final Unit Price based on quantity and bulk tiers
  const currentUnitPrice = useMemo(() => {
    if (!product.bulkTiers || product.bulkTiers.length === 0) return basePriceWithVariants;
    const sortedTiers = [...product.bulkTiers].sort((a, b) => b.minQuantity - a.minQuantity);
    const applicableTier = sortedTiers.find(t => quantity >= t.minQuantity);
    
    // Apply bulk discount to the variant-inclusive price
    if (applicableTier) {
      const discountPercentage = (product.price - applicableTier.price) / product.price;
      return basePriceWithVariants * (1 - discountPercentage);
    }
    return basePriceWithVariants;
  }, [product, quantity, basePriceWithVariants]);

  const relatedProducts = useMemo(() => 
    ALL_PRODUCTS
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 4)
  , [product]);

  const handleCheckout = () => {
    navigate('/checkout', { 
      state: { 
        product, 
        quantity, 
        totalPrice: currentUnitPrice * quantity,
        selections: selectedVariants 
      } 
    });
  };

  return (
    <div className="container mx-auto px-4 py-4 lg:py-8">
      {/* Responsive Breadcrumb */}
      <nav className="flex text-[9px] lg:text-[10px] text-gray-400 gap-1 lg:gap-2 mb-6 lg:mb-8 uppercase font-black tracking-widest overflow-x-auto whitespace-nowrap no-scrollbar pb-2 lg:pb-0">
        <Link to="/" className="hover:text-[#ff6a00] transition-colors">Home</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-[#ff6a00] transition-colors">Digital Shop</Link>
        <span>/</span>
        <span className="text-gray-800">{product.name}</span>
      </nav>

      <div className="bg-white rounded-2xl lg:rounded-[3rem] shadow-sm border p-4 lg:p-12 mb-8 lg:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Main Product Image */}
          <div className="space-y-4 lg:space-y-6">
            <div className="aspect-square rounded-2xl lg:rounded-[2rem] overflow-hidden bg-gray-50 border group relative">
              <img 
                src={product.image} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                alt={product.name} 
              />
              <div className="absolute top-4 left-4 lg:top-6 lg:left-6 flex flex-col gap-2">
                <div className="bg-[#2cb9b9] text-white text-[9px] lg:text-[10px] font-black px-3 py-1 lg:px-4 lg:py-1.5 rounded-lg lg:rounded-xl shadow-2xl uppercase tracking-widest flex items-center gap-1.5">
                  <Zap size={12} /> {product.deliveryType} Delivery
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Info */}
          <div className="flex flex-col">
            <div className="flex justify-between items-start mb-4 lg:mb-6">
              <span className="bg-[#fff0e6] text-[#ff6a00] text-[10px] font-black px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg lg:rounded-xl uppercase tracking-widest">
                {product.category}
              </span>
              <div className="flex gap-2 lg:gap-3">
                <button className="w-9 h-9 lg:w-11 lg:h-11 flex items-center justify-center bg-gray-50 rounded-xl lg:rounded-2xl hover:bg-red-50 hover:text-red-500 transition-all active:scale-90 shadow-sm border border-gray-100">
                  <Heart size={18} />
                </button>
                <button className="w-9 h-9 lg:w-11 lg:h-11 flex items-center justify-center bg-gray-50 rounded-xl lg:rounded-2xl hover:bg-blue-50 hover:text-blue-500 transition-all active:scale-90 shadow-sm border border-gray-100">
                  <Share2 size={18} />
                </button>
              </div>
            </div>

            <h1 className="text-2xl lg:text-5xl font-[900] text-gray-900 mb-4 lg:mb-6 leading-tight lg:leading-[1.1] tracking-tighter uppercase italic">
              {product.name}
            </h1>

            <div className="flex flex-wrap items-center gap-3 lg:gap-6 mb-6 lg:mb-8">
              <div className="flex items-center gap-1 bg-yellow-400/10 px-3 py-1.5 rounded-lg lg:rounded-xl border border-yellow-400/20">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className={i < product.rating ? "fill-yellow-500 text-yellow-500" : "text-gray-300"} />
                ))}
                <span className="text-xs font-black text-yellow-700 ml-2">{product.rating.toFixed(1)}</span>
              </div>
              <span className="text-[10px] lg:text-xs text-gray-400 font-bold uppercase tracking-widest border-l-2 border-gray-100 pl-4">{product.reviews.toLocaleString()} Positive Feedback</span>
            </div>

            {/* Product Variants Selection - POLISHED & FUNCTIONAL */}
            {product.variants && product.variants.map((v, vIdx) => (
              <div key={vIdx} className="mb-6 lg:mb-8">
                <h4 className="text-[10px] font-black text-gray-400 mb-3 uppercase tracking-[0.2em]">{v.name}</h4>
                <div className="flex flex-wrap gap-2 lg:gap-3">
                  {v.options.map((opt, oIdx) => (
                    <button
                      key={oIdx}
                      onClick={() => setSelectedVariants(prev => ({ ...prev, [v.name]: opt.label }))}
                      className={`px-4 py-2 lg:px-6 lg:py-3 rounded-xl lg:rounded-2xl text-[11px] lg:text-[12px] font-black uppercase tracking-widest transition-all border-2 flex items-center gap-2 ${
                        selectedVariants[v.name] === opt.label
                        ? 'bg-[#ff6a00] border-[#ff6600] text-white shadow-lg'
                        : 'bg-white border-gray-100 text-gray-600 hover:border-gray-200 shadow-sm'
                      }`}
                    >
                      {selectedVariants[v.name] === opt.label && <Check size={14} />}
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {/* Price Card */}
            <div className="bg-gray-900 p-6 lg:p-8 rounded-2xl lg:rounded-[2.5rem] mb-8 lg:mb-10 text-white relative overflow-hidden group shadow-2xl border border-white/5">
               <div className="absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-[#ff6a00]/20 rounded-full blur-3xl -mr-12 -mt-12"></div>
               <div className="flex items-baseline gap-3 lg:gap-4 mb-3 lg:mb-4 relative z-10">
                 <div className="flex flex-col">
                   <span className="text-4xl lg:text-5xl font-[1000] text-[#ff6a00] italic uppercase tracking-tighter">${currentUnitPrice.toFixed(2)}</span>
                   <span className="text-[9px] lg:text-[10px] font-bold text-gray-400 uppercase tracking-widest">Selected Unit Price</span>
                 </div>
                 {product.oldPrice && (
                   <span className="text-lg lg:text-xl text-gray-500 line-through font-bold opacity-50">${product.oldPrice.toFixed(2)}</span>
                 )}
               </div>
               <div className="flex items-center justify-between relative z-10 pt-4 border-t border-white/10">
                 <div className="flex-1">
                    <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Order Subtotal</span>
                    <div className="text-xl lg:text-2xl font-black text-white italic">${(currentUnitPrice * quantity).toFixed(2)}</div>
                 </div>
                 <div className="text-right hidden sm:block">
                    <div className="text-[10px] font-black text-[#2cb9b9] uppercase flex items-center gap-1 justify-end tracking-widest">
                      <Zap size={10} /> Fast Delivery
                    </div>
                 </div>
               </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8 lg:mb-10">
              <h4 className="text-[10px] font-black text-gray-400 mb-4 uppercase tracking-widest">Bulk Quantity</h4>
              <div className="flex items-center gap-4 lg:gap-6">
                <div className="flex items-center bg-white rounded-xl lg:rounded-2xl p-1 border-2 border-gray-50 shadow-sm">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center hover:bg-gray-50 rounded-lg lg:rounded-xl font-black transition-all text-lg"
                  >-</button>
                  <input 
                    type="number" 
                    value={quantity} 
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-14 lg:w-20 bg-transparent text-center font-black outline-none text-lg lg:text-xl" 
                  />
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center hover:bg-gray-50 rounded-lg lg:rounded-xl font-black transition-all text-lg"
                  >+</button>
                </div>
                <div className="text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-[#2cb9b9] flex items-center gap-2">
                  <Package size={14} /> Global Stock Ready
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mt-auto">
              <button 
                onClick={handleCheckout}
                className="flex-1 bg-[#ff6a00] text-white font-[900] py-4 lg:py-5 rounded-xl lg:rounded-[1.5rem] shadow-xl lg:shadow-2xl hover:bg-[#e65f00] transition-all flex items-center justify-center gap-3 transform active:scale-95 uppercase tracking-widest text-[11px] lg:text-xs"
              >
                Buy Now
              </button>
              <button className="flex-1 bg-white border-2 border-gray-900 text-gray-900 font-black py-4 lg:py-5 rounded-xl lg:rounded-[1.5rem] hover:bg-gray-900 hover:text-white transition-all transform active:scale-95 uppercase tracking-widest text-[11px] lg:text-xs">
                Inquire
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Info & Related Products */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16 lg:mb-20">
        <div className="lg:col-span-2 space-y-6 lg:y-8">
           <div className="bg-white rounded-2xl lg:rounded-[2.5rem] p-6 lg:p-8 border border-gray-100 shadow-sm">
              <h2 className="text-xl lg:text-2xl font-black text-gray-900 uppercase tracking-tighter mb-6 italic">Product Specification</h2>
              <div className="prose prose-sm max-w-none text-gray-600 font-medium">
                <p>Authentic <strong>{product.name}</strong> digital activation source. Direct from verified global wholesale channels.</p>
                <ul className="list-disc pl-5 mt-4 space-y-3">
                  <li><strong>Delivery:</strong> {product.deliveryType} Delivery via Email.</li>
                  <li><strong>Warranty:</strong> Full duration anti-ban guarantee.</li>
                  <li><strong>Support:</strong> 24/7 technical assistance for activation.</li>
                </ul>
              </div>
           </div>
        </div>
        <div className="space-y-6">
           <div className="bg-gray-900 rounded-2xl lg:rounded-[2rem] p-6 lg:p-8 border border-white/5 shadow-2xl text-white">
              <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] mb-6 italic">Buyer Trust</h3>
              <div className="space-y-6">
                 <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#ff6a00] border border-white/10 group-hover:bg-[#ff6a00] group-hover:text-white transition-all"><ShieldCheck size={24} /></div>
                    <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Shield Protection Active</div>
                 </div>
                 <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#2cb9b9] border border-white/10 group-hover:bg-[#2cb9b9] group-hover:text-white transition-all"><Globe size={24} /></div>
                    <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Global License Key</div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="mb-12 lg:mb-20">
          <div className="flex items-center justify-between mb-8 lg:mb-10">
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic">Recommended Bulk Deals</h2>
            <Link to="/products" className="text-[10px] font-black text-[#ff6a00] uppercase tracking-widest hover:opacity-70 border-b-2 border-[#ff6a00] pb-1">See All</Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
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
