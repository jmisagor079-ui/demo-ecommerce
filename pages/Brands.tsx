
import React, { useState } from 'react';
import { BRANDS } from '../constants';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Grid3X3, Layout } from 'lucide-react';

const Brands: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredBrands = BRANDS.filter(brand => 
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Brands Hero */}
      <div className="bg-gray-900 py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 transform origin-right"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tighter italic">
            Global <span className="text-blue-600">Partners</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 font-medium">
            Explore premium products from the world's most trusted manufacturers and designers.
          </p>
          
          <div className="max-w-xl mx-auto relative group">
            <input 
              type="text" 
              placeholder="Search brands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-14 text-white outline-none focus:bg-white/10 focus:border-blue-500 transition-all text-sm backdrop-blur-md"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500" size={20} />
          </div>
        </div>
      </div>

      {/* Brand Grid */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {filteredBrands.map(brand => (
            <Link 
              key={brand.id}
              to={`/brand/${brand.id}`}
              className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center group text-center"
            >
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-5xl mb-6 group-hover:bg-blue-50 transition-colors border-2 border-transparent group-hover:border-blue-100">
                {brand.logo}
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-2 uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                {brand.name}
              </h3>
              <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Visit Store</span>
                <ArrowRight size={12} className="text-blue-600" />
              </div>
            </Link>
          ))}
        </div>

        {filteredBrands.length === 0 && (
          <div className="text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-gray-200">
            <p className="text-gray-400 font-black uppercase tracking-widest text-sm italic">No brands matching your search</p>
          </div>
        )}
      </div>

      {/* Featured Brands Horizontal Section */}
      <div className="container mx-auto px-4 mt-20">
        <div className="bg-blue-600 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-white flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 -skew-x-12 transform origin-right"></div>
          <div className="relative z-10 max-w-lg">
            <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter italic">Premium Brand <br/> Partnership</h2>
            <p className="text-blue-100 mb-10 font-medium">Join our global network of top-tier sellers. Reach millions of buyers and scale your brand with Active eCommerce.</p>
            <button className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-xl active:scale-95">
              Contact Sales
            </button>
          </div>
          <div className="relative z-10 grid grid-cols-2 gap-4">
             {[1,2,3,4].map(i => (
               <div key={i} className="w-32 h-32 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 flex items-center justify-center text-4xl hover:bg-white/20 transition-all cursor-default">
                  ⭐
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
