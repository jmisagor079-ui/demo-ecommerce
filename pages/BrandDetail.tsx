
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BRANDS, ALL_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { CheckCircle, Users, Package, Star, ArrowLeft } from 'lucide-react';

const BrandDetail: React.FC = () => {
  const { id } = useParams();
  
  const brand = useMemo(() => 
    BRANDS.find(b => b.id === id) || BRANDS[0]
  , [id]);

  const brandProducts = useMemo(() => 
    ALL_PRODUCTS.filter(p => p.brandId === brand.id)
  , [brand]);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Brand Hero Banner */}
      <div className="h-[400px] relative overflow-hidden">
        <img 
          src={brand.banner || 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=1200'} 
          className="w-full h-full object-cover" 
          alt={brand.name} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
        
        <div className="container mx-auto px-4 absolute bottom-0 left-1/2 -translate-x-1/2 pb-12 flex flex-col md:flex-row items-center md:items-end gap-8">
           <div className="w-32 h-32 md:w-48 md:h-48 bg-white rounded-[2.5rem] flex items-center justify-center text-7xl md:text-8xl shadow-2xl border-4 border-white mb-4 md:mb-0">
             {brand.logo}
           </div>
           <div className="flex-1 text-center md:text-left">
             <div className="flex flex-col md:flex-row items-center gap-3 mb-4">
               <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic">
                 {brand.name}
               </h1>
               <div className="flex items-center gap-2 bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg uppercase tracking-widest">
                 <CheckCircle size={14} /> Official Store
               </div>
             </div>
             
             <div className="flex flex-wrap justify-center md:justify-start gap-8">
               <div className="flex flex-col">
                 <span className="text-white text-xl font-black leading-none">12.5k</span>
                 <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest mt-1">Followers</span>
               </div>
               <div className="flex flex-col">
                 <span className="text-white text-xl font-black leading-none">{brandProducts.length}</span>
                 <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest mt-1">Products</span>
               </div>
               <div className="flex flex-col">
                 <div className="flex items-center gap-1 text-yellow-400">
                   <span className="text-white text-xl font-black leading-none">4.9</span>
                   <Star size={16} className="fill-yellow-400" />
                 </div>
                 <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest mt-1">Store Rating</span>
               </div>
             </div>
           </div>
           
           <div className="flex gap-4">
             <button className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-95">
               Follow Store
             </button>
           </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <Link to="/brands" className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-gray-400 hover:text-blue-600 hover:shadow-lg transition-all border border-gray-100">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">Collection Drop</h2>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">All {brand.name} items in one place</p>
            </div>
          </div>
          
          <div className="flex gap-4">
             <button className="bg-white border text-gray-600 px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-sm hover:bg-gray-50 transition-all">
               Filter by category
             </button>
          </div>
        </div>

        {brandProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {brandProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-[3rem] border-2 border-dashed">
            <p className="text-gray-400 font-black uppercase tracking-widest text-sm">No products found for this brand yet</p>
          </div>
        )}
      </div>

      {/* Merchant Footer Info */}
      <div className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-[3rem] p-12 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-gray-50 rounded-[2rem] flex items-center justify-center text-4xl">
                🛡️
              </div>
              <div>
                <h4 className="text-lg font-black text-gray-900 uppercase tracking-tighter">Official Brand Warranty</h4>
                <p className="text-xs font-medium text-gray-500 max-w-sm">Every product purchased from the official {brand.name} store is covered by a 24-month manufacturer warranty.</p>
              </div>
           </div>
           <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-gray-50 rounded-[2rem] flex items-center justify-center text-4xl">
                🚚
              </div>
              <div>
                <h4 className="text-lg font-black text-gray-900 uppercase tracking-tighter">Premium Shipping</h4>
                <p className="text-xs font-medium text-gray-500 max-w-sm">Free express delivery for all {brand.name} collection items over $200. Securely packed and tracked.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDetail;
