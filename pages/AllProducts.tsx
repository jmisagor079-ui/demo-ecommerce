
import React, { useState, useMemo } from 'react';
import { ALL_PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from '../components/ProductCard';
import { Filter, SlidersHorizontal, Check } from 'lucide-react';

const AllProducts: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return ALL_PRODUCTS;
    return ALL_PRODUCTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    ALL_PRODUCTS.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-72 space-y-8 flex-shrink-0">
          <div className="bg-white rounded-3xl p-6 border shadow-sm">
            <h3 className="font-black text-gray-800 mb-6 flex items-center gap-2 uppercase tracking-widest text-xs">
              <Filter size={16} className="text-blue-600" /> Browse Categories
            </h3>
            <ul className="space-y-1">
              <li 
                onClick={() => setSelectedCategory(null)}
                className={`text-sm font-bold py-2.5 px-4 rounded-xl cursor-pointer transition-all flex items-center justify-between ${!selectedCategory ? 'bg-blue-600 text-white' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                All Products
                {!selectedCategory && <Check size={14} />}
              </li>
              {CATEGORIES.map(cat => (
                <li 
                  key={cat.id} 
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`text-sm font-bold py-2.5 px-4 rounded-xl cursor-pointer transition-all flex items-center justify-between ${selectedCategory === cat.name ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 hover:bg-gray-50'}`}
                >
                  {cat.name}
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${selectedCategory === cat.name ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
                      {categoryCounts[cat.name] || 0}
                    </span>
                    {selectedCategory === cat.name && <Check size={14} />}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-6 border shadow-sm">
            <h3 className="font-black text-gray-800 mb-6 uppercase tracking-widest text-xs">Price Range</h3>
            <div className="space-y-4">
              <input type="range" min="0" max="1000" className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-blue-600" />
              <div className="flex justify-between text-[10px] font-black text-gray-400 uppercase">
                <span>$0</span>
                <span>$1000+</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid Area */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b gap-4">
            <div>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">
                {selectedCategory || 'All Collections'}
              </h2>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Showing {filteredProducts.length} results</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-600 bg-white border px-6 py-3 rounded-2xl hover:bg-gray-50 transition-colors shadow-sm">
                <SlidersHorizontal size={14} /> Sort: Default
              </button>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-[3rem] border-2 border-dashed">
              <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">No products found in this category</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
