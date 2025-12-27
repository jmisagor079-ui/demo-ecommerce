
import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ALL_PRODUCTS } from '../constants';
import { Star, Heart, Share2, ShoppingCart, ShieldCheck, Zap } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  
  const product = useMemo(() => 
    ALL_PRODUCTS.find(p => p.id === id) || ALL_PRODUCTS[0]
  , [id]);

  const relatedProducts = useMemo(() => 
    ALL_PRODUCTS
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 4)
  , [product]);

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="flex text-[10px] text-gray-400 gap-2 mb-8 uppercase font-black tracking-[0.2em]">
        <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-blue-600 transition-colors">Shop</Link>
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
              {product.tag && (
                <div className="absolute top-6 left-6 bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-xl shadow-2xl uppercase tracking-widest">
                  {product.tag}
                </div>
              )}
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-gray-50 border-2 border-transparent hover:border-blue-600 transition-all cursor-pointer">
                  <img src={`https://picsum.photos/seed/detail-${i}-${product.id}/400/400`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <span className="bg-blue-50 text-blue-600 text-[10px] font-black px-4 py-2 rounded-xl uppercase tracking-widest">
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

            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-[1.1] tracking-tighter uppercase italic">
              {product.name}
            </h1>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-1 bg-yellow-400/10 px-3 py-1.5 rounded-xl">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className={i < product.rating ? "fill-yellow-500 text-yellow-500" : "text-gray-300"} />
                ))}
                <span className="text-xs font-black text-yellow-700 ml-2">{product.rating.toFixed(1)}</span>
              </div>
              <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">{product.reviews} Verified Reviews</span>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-600 font-black uppercase tracking-widest">In Stock</span>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-[2.5rem] mb-10 text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
               <div className="flex items-baseline gap-4 mb-3 relative z-10">
                 <span className="text-5xl font-black text-blue-500">${product.price.toFixed(2)}</span>
                 {product.oldPrice && (
                   <span className="text-xl text-gray-500 line-through font-bold">${product.oldPrice.toFixed(2)}</span>
                 )}
               </div>
               <div className="flex items-center gap-3 relative z-10">
                 <span className="bg-red-600 text-white text-[10px] px-3 py-1 rounded-lg font-black uppercase tracking-widest animate-pulse">Special Offer</span>
                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Secure shipping guaranteed</p>
               </div>
            </div>

            <div className="space-y-8 mb-10">
              <div>
                <h4 className="text-[10px] font-black text-gray-400 mb-4 uppercase tracking-widest">Select Quantity</h4>
                <div className="flex items-center gap-6">
                  <div className="flex items-center bg-gray-50 rounded-2xl p-1 border shadow-inner">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-xl font-black transition-all"
                    >-</button>
                    <input type="text" readOnly value={quantity} className="w-12 bg-transparent text-center font-black outline-none" />
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-xl font-black transition-all"
                    >+</button>
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-red-500 flex items-center gap-2">
                    <Zap size={14} className="fill-red-500" /> Selling Fast!
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <button className="flex-1 bg-blue-600 text-white font-black py-5 rounded-[1.5rem] shadow-2xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3 transform active:scale-95 uppercase tracking-widest text-xs">
                <ShoppingCart size={20} /> Add to Cart
              </button>
              <button className="flex-1 bg-white border-2 border-gray-900 text-gray-900 font-black py-5 rounded-[1.5rem] hover:bg-gray-900 hover:text-white transition-all transform active:scale-95 uppercase tracking-widest text-xs">
                Check Out Now
              </button>
            </div>

            <div className="mt-10 flex items-center gap-3 p-4 bg-green-50 rounded-2xl text-[10px] text-green-700 font-black uppercase tracking-widest border border-green-100">
              <ShieldCheck className="text-green-500" size={18} />
              <span>Free returns within 30 days & 2-year premium warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mb-20">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">You May Also Like</h2>
            <Link to="/products" className="text-[10px] font-black text-blue-600 uppercase tracking-widest hover:opacity-70">See All</Link>
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
