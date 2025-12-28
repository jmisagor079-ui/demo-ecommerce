
import React, { useState, useMemo } from 'react';
import { ALL_PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from '../components/ProductCard';
import { Filter, SlidersHorizontal, Check, RefreshCw, X, ChevronRight, ShieldCheck, Zap } from 'lucide-react';

const AllProducts: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Input states
  const [minPriceInput, setMinPriceInput] = useState('');
  const [maxPriceInput, setMaxPriceInput] = useState('');
  const [minOrderInput, setMinOrderInput] = useState('');

  // Applied states
  const [appliedMinPrice, setAppliedMinPrice] = useState<number>(0);
  const [appliedMaxPrice, setAppliedMaxPrice] = useState<number>(Infinity);
  const [appliedMinOrder, setAppliedMinOrder] = useState<number>(0);

  // Core filtering logic
  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter(p => {
      const matchesCategory = !selectedCategory || p.category === selectedCategory;
      const matchesMinPrice = p.price >= appliedMinPrice;
      const matchesMaxPrice = p.price <= appliedMaxPrice;
      const matchesMinOrder = (p.soldCount || 0) >= appliedMinOrder;
      
      return matchesCategory && matchesMinPrice && matchesMaxPrice && matchesMinOrder;
    });
  }, [selectedCategory, appliedMinPrice, appliedMaxPrice, appliedMinOrder]);

  const applyPriceFilter = () => {
    setAppliedMinPrice(minPriceInput === '' ? 0 : Number(minPriceInput));
    setAppliedMaxPrice(maxPriceInput === '' ? Infinity : Number(maxPriceInput));
  };

  const applyMinOrderFilter = () => {
    setAppliedMinOrder(minOrderInput === '' ? 0 : Number(minOrderInput));
  };

  const resetAll = () => {
    setSelectedCategory(null);
    setMinPriceInput('');
    setMaxPriceInput('');
    setMinOrderInput('');
    setAppliedMinPrice(0);
    setAppliedMaxPrice(Infinity);
    setAppliedMinOrder(0);
  };

  return (
    <div className="bg-[#f2f3f7] min-h-screen">
      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[11px] text-gray-500 mb-6 font-medium">
           <span className="hover:text-[#ff6a00] cursor-pointer">Home</span>
           <ChevronRight size={10} />
           <span className="hover:text-[#ff6a00] cursor-pointer uppercase">All Industries</span>
           {selectedCategory && (
             <>
               <ChevronRight size={10} />
               <span className="text-[#ff6a00] uppercase font-black">{selectedCategory}</span>
             </>
           )}
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Sidebar Filters - Alibaba Style */}
          <aside className="w-full lg:w-[260px] space-y-4 flex-shrink-0">
            
            {/* Categories */}
            <section className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <h3 className="text-[13px] font-black text-[#222] mb-4 uppercase tracking-tight flex items-center gap-2">
                Industry
              </h3>
              <ul className="space-y-1">
                <li 
                  onClick={() => setSelectedCategory(null)}
                  className={`text-[12px] py-2 px-3 rounded-md cursor-pointer transition-colors flex items-center justify-between ${!selectedCategory ? 'text-[#ff6a00] bg-[#fff0e6] font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  All Categories
                </li>
                {CATEGORIES.map(cat => (
                  <li 
                    key={cat.id} 
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`text-[12px] py-2 px-3 rounded-md cursor-pointer transition-colors flex items-center justify-between ${selectedCategory === cat.name ? 'text-[#ff6a00] bg-[#fff0e6] font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    {cat.name}
                  </li>
                ))}
              </ul>
            </section>

            {/* Price Filter - EXACT MATCH TO IMAGE */}
            <section className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <h3 className="text-[13px] font-black text-[#222] mb-4 uppercase tracking-tight">Price</h3>
              <div className="flex items-center gap-2">
                <input 
                  type="number" 
                  placeholder="Min." 
                  value={minPriceInput}
                  onChange={(e) => setMinPriceInput(e.target.value)}
                  className="w-full border border-gray-300 rounded py-2 px-3 text-[12px] outline-none focus:border-[#ff6a00]"
                />
                <span className="text-gray-400">-</span>
                <input 
                  type="number" 
                  placeholder="Max." 
                  value={maxPriceInput}
                  onChange={(e) => setMaxPriceInput(e.target.value)}
                  className="w-full border border-gray-300 rounded py-2 px-3 text-[12px] outline-none focus:border-[#ff6a00]"
                />
                <button 
                  onClick={applyPriceFilter}
                  className="border border-gray-900 text-gray-900 font-bold px-5 py-2 rounded-full text-[11px] hover:bg-gray-900 hover:text-white transition-all shadow-sm active:scale-95"
                >
                  OK
                </button>
              </div>
            </section>

            {/* Min Order Filter - EXACT MATCH TO IMAGE */}
            <section className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <h3 className="text-[13px] font-black text-[#222] mb-4 uppercase tracking-tight">Min. order</h3>
              <div className="flex items-center gap-2">
                <input 
                  type="number" 
                  placeholder="" 
                  value={minOrderInput}
                  onChange={(e) => setMinOrderInput(e.target.value)}
                  className="w-full border border-gray-300 rounded py-2 px-3 text-[12px] outline-none focus:border-[#ff6a00]"
                />
                <button 
                  onClick={applyMinOrderFilter}
                  className="border border-gray-900 text-gray-900 font-bold px-5 py-2 rounded-full text-[11px] hover:bg-gray-900 hover:text-white transition-all shadow-sm active:scale-95"
                >
                  OK
                </button>
              </div>
            </section>

            {/* Supplier Features - B2B Focus */}
            <section className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
               <h3 className="text-[13px] font-black text-[#222] mb-4 uppercase tracking-tight">Supplier Selection</h3>
               <div className="space-y-4">
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 accent-[#ff6a00]" />
                    <span className="text-[12px] text-gray-600 group-hover:text-[#ff6a00] flex items-center gap-2 font-medium">
                       <ShieldCheck size={14} className="text-[#00c853]" /> Trade Assurance
                    </span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 accent-[#ff6a00]" />
                    <span className="text-[12px] text-gray-600 group-hover:text-[#ff6a00] flex items-center gap-2 font-medium">
                       <Zap size={14} className="text-[#ff6a00]" /> Ready to Ship
                    </span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 accent-[#ff6a00]" />
                    <span className="text-[12px] text-gray-600 group-hover:text-[#ff6a00] font-medium">Verified Supplier</span>
                  </label>
               </div>
            </section>

            <button 
              onClick={resetAll}
              className="w-full flex items-center justify-center gap-2 text-[11px] font-black text-gray-400 hover:text-[#ff6a00] transition-colors py-3 border-t border-gray-100"
            >
              <RefreshCw size={14} /> Clear All Filters
            </button>
          </aside>

          {/* Product Grid Area */}
          <div className="flex-1">
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm mb-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h2 className="text-base font-black text-[#222] uppercase tracking-tighter">
                  {filteredProducts.length} <span className="font-bold text-gray-400">Total Products</span>
                </h2>
                {selectedCategory && (
                  <span className="bg-[#fff0e6] text-[#ff6a00] text-[10px] px-4 py-1.5 rounded-full font-black uppercase flex items-center gap-2 border border-[#ffe0cc]">
                    {selectedCategory} <X size={12} className="cursor-pointer" onClick={() => setSelectedCategory(null)} />
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[12px] text-gray-500 font-bold">Sort by:</span>
                <button className="text-[12px] font-black text-gray-900 bg-gray-50 border px-6 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2">
                  Relevance <ChevronRight size={14} className="rotate-90" />
                </button>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredProducts.map((prod) => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center py-40 shadow-sm">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                  <Filter className="text-gray-300" size={36} />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2 uppercase italic tracking-tighter">No precise matches</h3>
                <p className="text-sm text-gray-400 mb-10 font-medium">Broaden your filters to find similar wholesale sources.</p>
                <button onClick={resetAll} className="bg-[#ff6a00] text-white font-black px-12 py-4 rounded-full hover:bg-[#222] transition-all shadow-lg text-xs uppercase tracking-widest">Clear All Selections</button>
              </div>
            )}

            {/* Pagination Placeholder */}
            {filteredProducts.length > 0 && (
              <div className="mt-12 flex justify-center items-center gap-2">
                 <button className="w-10 h-10 rounded-lg border bg-white flex items-center justify-center text-gray-400 hover:border-[#ff6a00] hover:text-[#ff6a00]">1</button>
                 <button className="w-10 h-10 rounded-lg border bg-white flex items-center justify-center text-gray-400 hover:border-[#ff6a00] hover:text-[#ff6a00]">2</button>
                 <button className="w-10 h-10 rounded-lg border bg-white flex items-center justify-center text-gray-400 hover:border-[#ff6a00] hover:text-[#ff6a00]">3</button>
                 <span className="px-2 text-gray-400 font-bold">...</span>
                 <button className="w-10 h-10 rounded-lg border bg-white flex items-center justify-center text-gray-400 hover:border-[#ff6a00] hover:text-[#ff6a00]">10</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
