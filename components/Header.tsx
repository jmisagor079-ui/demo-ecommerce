
import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, MessageSquare, ClipboardList, ChevronDown, Globe, Home as HomeIcon, Smartphone } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../constants';

const Header: React.FC = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) navigate('/products');
  };

  return (
    <header className="bg-white sticky top-0 z-[100] border-b border-gray-200 shadow-sm">
      {/* Top Utility Bar - Hidden on small mobile */}
      <div className="bg-white text-[11px] text-gray-500 py-2 hidden sm:block border-b border-gray-100">
        <div className="container mx-auto px-4 flex justify-between items-center font-bold uppercase tracking-widest">
          <div className="flex gap-6 items-center">
            <span className="hover:text-[#ff6a00] cursor-pointer flex items-center gap-1.5"><Globe size={13} /> Worldwide</span>
            <span className="hover:text-[#ff6a00] cursor-pointer hidden lg:inline">Support: 24/7 Active</span>
            <span className="text-gray-200 hidden lg:inline">|</span>
            <span className="hover:text-[#ff6a00] cursor-pointer text-[#ff6a00]">Instant Delivery</span>
          </div>
          <div className="flex gap-6 items-center">
            <Link to="#" className="hover:text-[#ff6a00]">Bulk Guide</Link>
            <Link to="#" className="hover:text-[#ff6a00]">bKash Verified</Link>
          </div>
        </div>
      </div>

      {/* Main Search Area - Optimized for Mobile */}
      <div className="container mx-auto px-4 py-3 lg:py-4 flex items-center gap-3 lg:gap-8">
        {/* Logo - Buying BD */}
        <Link to="/" className="flex-shrink-0 logo-container flex items-center gap-2 lg:gap-3">
          <div className="relative scale-90 lg:scale-100">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#2cb9b9]/10 rounded-xl flex items-center justify-center border border-[#2cb9b9]/20 relative overflow-hidden">
                <ShoppingCart className="text-[#2cb9b9] z-0" size={20} />
                <div className="absolute top-1 logo-house">
                   <HomeIcon className="text-[#ff4d00] fill-[#ff4d00]" size={14} />
                </div>
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg lg:text-xl font-[900] tracking-tighter text-gradient-buying italic">Buying</span>
            <span className="text-xl lg:text-2xl font-[1000] tracking-tighter text-gradient-bd italic ml-2 lg:ml-4 -mt-1">BD.com</span>
          </div>
        </Link>

        {/* Search Bar - Hidden on tiny screens, beautiful on rest */}
        <form onSubmit={handleSearch} className="flex-1 max-w-3xl hidden sm:flex items-center h-[40px] lg:h-[46px] relative group">
          <div className="h-full px-4 lg:px-5 border-2 border-[#ff6600] border-r-0 rounded-l-full bg-white flex items-center gap-1 lg:gap-2 text-[12px] lg:text-sm font-bold text-[#222] cursor-pointer">
            Digital <ChevronDown size={14} />
          </div>
          <div className="flex-1 h-full relative">
            <input
              type="text"
              placeholder="Keys, Subscriptions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-full border-2 border-[#ff6600] border-l-0 border-r-0 px-4 outline-none text-[13px] lg:text-[15px] font-medium"
            />
          </div>
          <button className="h-full px-6 lg:px-12 bg-[#ff6a00] text-white rounded-r-full font-bold flex items-center gap-2 hover:bg-[#e65f00] transition-all border-2 border-[#ff6600]">
            <Search size={18} /> <span className="hidden lg:inline">Search</span>
          </button>
        </form>

        {/* Mobile Search Toggle / Actions */}
        <div className="flex items-center gap-3 lg:gap-8 ml-auto lg:ml-0">
          <div className="sm:hidden text-gray-700 p-2" onClick={() => navigate('/products')}>
             <Search size={22} />
          </div>
          <div className="hidden lg:flex flex-col items-center cursor-pointer group text-gray-700 hover:text-[#ff6a00]" onClick={() => navigate('/help-center')}>
            <MessageSquare size={22} />
            <span className="text-[10px] mt-1 font-bold uppercase tracking-tighter">Support</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer group text-gray-700 hover:text-[#ff6a00]" onClick={() => navigate('/products')}>
            <div className="relative">
              <ShoppingCart size={22} />
              <span className="absolute -top-1.5 -right-1.5 bg-[#ff6a00] text-white text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-black">0</span>
            </div>
            <span className="text-[10px] mt-1 font-bold uppercase tracking-tighter">Cart</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Row - Desktop Only */}
      <nav className="border-t border-gray-100 hidden md:block bg-[#fcfcfc]">
        <div className="container mx-auto px-4 flex items-center gap-8 lg:gap-10 h-[48px]">
          <div className="group relative h-full flex items-center flex-shrink-0">
            <button className="flex items-center gap-3 text-sm font-black text-gray-800 h-full hover:text-[#ff6a00] transition-colors uppercase tracking-tight">
              <Menu size={20} className="text-[#ff6a00]" /> Wholesale Hub
            </button>
            <div className="absolute top-full left-0 w-80 bg-white shadow-2xl border-t-2 border-[#ff6a00] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all p-3 z-[110] rounded-b-2xl">
              <div className="grid grid-cols-1 gap-1">
                {CATEGORIES.map(cat => (
                  <Link key={cat.id} to="/products" className="flex items-center justify-between px-5 py-3 text-[13px] font-bold text-gray-700 hover:bg-[#fff0e6] hover:text-[#ff6a00] rounded-xl transition-all">
                    <span className="flex items-center gap-4">
                      <span className="text-xl">{cat.icon}</span> {cat.name}
                    </span>
                    <ChevronDown size={14} className="-rotate-90 opacity-30" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="h-6 w-[1px] bg-gray-200"></div>
          <div className="flex items-center gap-6 lg:gap-8">
            <Link to="/products" className="text-[12px] lg:text-[13px] font-black text-gray-700 hover:text-[#ff6a00] uppercase tracking-tighter">Keys</Link>
            <Link to="/products" className="text-[12px] lg:text-[13px] font-black text-gray-700 hover:text-[#ff6a00] uppercase tracking-tighter">Subscriptions</Link>
            <Link to="/products" className="text-[12px] lg:text-[13px] font-black text-gray-700 hover:text-[#ff6a00] uppercase tracking-tighter">Game Hub</Link>
            <Link to="/products" className="text-[12px] lg:text-[13px] font-black text-gray-700 hover:text-[#ff6a00] uppercase tracking-tighter">Gift Cards</Link>
          </div>
          <div className="flex-1"></div>
          <div className="flex items-center gap-3 bg-[#e2136e]/10 px-4 py-1.5 rounded-full">
             <Smartphone size={14} className="text-[#e2136e]" />
             <span className="text-[10px] lg:text-[11px] font-black uppercase text-[#e2136e] tracking-widest">bKash Merchant</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
