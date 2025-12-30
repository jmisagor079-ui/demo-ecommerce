
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, MessageSquare, ClipboardList, ChevronDown, Globe, Camera, Home as HomeIcon, ShoppingBag } from 'lucide-react';
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
    <header className="bg-white sticky top-0 z-[100] border-b border-gray-200">
      {/* Top Utility Bar */}
      <div className="bg-white text-[12px] text-gray-600 py-1.5 hidden md:block border-b border-gray-100">
        <div className="container mx-auto px-4 flex justify-between items-center font-medium">
          <div className="flex gap-6 items-center">
            <span className="hover:text-[#ff6a00] cursor-pointer flex items-center gap-1"><Globe size={14} /> English-USD</span>
            <span className="hover:text-[#ff6a00] cursor-pointer">Help Center</span>
            <span className="text-gray-300">|</span>
            <span className="hover:text-[#ff6a00] cursor-pointer text-[#ff6a00]">Download App</span>
          </div>
          <div className="flex gap-6 items-center">
            <Link to="#" className="hover:text-[#ff6a00]">Sell on Buying BD</Link>
            <Link to="#" className="hover:text-[#ff6a00]">Logistics Solutions</Link>
            <Link to="#" className="hover:text-[#ff6a00]">Verified Sources</Link>
          </div>
        </div>
      </div>

      {/* Main Search Area */}
      <div className="container mx-auto px-4 py-4 flex items-center gap-4 lg:gap-8">
        {/* Logo - Buying BD Custom Design */}
        <Link to="/" className="flex-shrink-0 logo-container flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 bg-[#2cb9b9]/10 rounded-xl flex items-center justify-center border border-[#2cb9b9]/20 relative overflow-hidden">
                <ShoppingCart className="text-[#2cb9b9] z-0" size={24} />
                <div className="absolute top-1 logo-house">
                   <HomeIcon className="text-[#ff4d00] fill-[#ff4d00]" size={16} />
                </div>
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-[900] tracking-tighter text-gradient-buying italic">Buying</span>
            <span className="text-2xl font-[1000] tracking-tighter text-gradient-bd italic ml-4 -mt-1">BD.com</span>
          </div>
        </Link>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 max-w-4xl flex items-center h-[46px] relative group">
          <div className="h-full px-5 border-2 border-[#ff6600] border-r-0 rounded-l-full bg-white flex items-center gap-2 text-sm font-bold text-[#222] cursor-pointer hover:bg-gray-50">
            Products <ChevronDown size={14} />
          </div>
          <div className="flex-1 h-full relative">
            <input
              type="text"
              placeholder="Source millions of products directly from BD & Global suppliers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-full border-2 border-[#ff6600] border-l-0 border-r-0 px-4 outline-none text-[15px] placeholder-gray-400 font-medium"
            />
            <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#ff6a00]">
              <Camera size={20} />
            </button>
          </div>
          <button className="h-full px-12 bg-[#ff6a00] text-white rounded-r-full font-bold flex items-center gap-2 hover:bg-[#e65f00] transition-all border-2 border-[#ff6600] shadow-sm">
            <Search size={22} /> <span className="hidden lg:inline">Search</span>
          </button>
        </form>

        {/* Action Icons */}
        <div className="flex items-center gap-6 lg:gap-8">
          <div className="hidden lg:flex flex-col items-center cursor-pointer group text-gray-700 hover:text-[#ff6a00]">
            <MessageSquare size={24} className="group-hover:scale-110 transition-transform" />
            <span className="text-[10px] mt-1 font-bold uppercase">Chat</span>
          </div>
          <div className="hidden lg:flex flex-col items-center cursor-pointer group text-gray-700 hover:text-[#ff6a00]">
            <ClipboardList size={24} className="group-hover:scale-110 transition-transform" />
            <span className="text-[10px] mt-1 font-bold uppercase">Orders</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer group text-gray-700 hover:text-[#ff6a00]" onClick={() => navigate('/products')}>
            <div className="relative">
              <ShoppingCart size={24} className="group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#ff6a00] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-black">0</span>
            </div>
            <span className="text-[10px] mt-1 font-bold uppercase">Cart</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer group text-gray-700 hover:text-[#ff6a00]">
            <User size={24} className="group-hover:scale-110 transition-transform" />
            <span className="text-[10px] mt-1 font-bold uppercase">Profile</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <nav className="border-t border-gray-100 hidden md:block">
        <div className="container mx-auto px-4 flex items-center gap-8 h-[44px]">
          <div className="group relative h-full flex items-center flex-shrink-0">
            <button className="flex items-center gap-2 text-sm font-bold text-[#222] h-full hover:text-[#ff6a00] transition-colors">
              <Menu size={18} className="text-[#ff6a00]" /> Explore All Industries
            </button>
            <div className="absolute top-full left-0 w-72 bg-white shadow-2xl border-t-2 border-[#ff6a00] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all p-3 z-[110] rounded-b-xl">
              <div className="grid grid-cols-1 gap-1">
                {CATEGORIES.map(cat => (
                  <Link key={cat.id} to="/products" className="flex items-center justify-between px-4 py-2.5 text-[13px] font-bold text-gray-700 hover:bg-[#fff0e6] hover:text-[#ff6a00] rounded-lg transition-colors">
                    <span className="flex items-center gap-3">
                      <span className="text-lg">{cat.icon}</span> {cat.name}
                    </span>
                    <ChevronDown size={14} className="-rotate-90 opacity-40" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="h-5 w-[1px] bg-gray-200"></div>
          <Link to="/products" className="text-sm font-bold text-gray-700 hover:text-[#ff6a00] transition-colors">Ready to Ship</Link>
          <Link to="/products" className="text-sm font-bold text-gray-700 hover:text-[#ff6a00] transition-colors">Personal Protection</Link>
          <Link to="/products" className="text-sm font-bold text-gray-700 hover:text-[#ff6a00] transition-colors">Buying BD Select</Link>
          <Link to="/products" className="text-sm font-bold text-gray-700 hover:text-[#ff6a00] transition-colors">Trade Assurance</Link>
          <div className="flex-1"></div>
          <div className="flex items-center gap-6 text-[11px] font-black uppercase text-gray-400 tracking-tighter">
             <span className="hover:text-[#ff6a00] cursor-pointer">Buyer Protection</span>
             <span className="hover:text-[#ff6a00] cursor-pointer">Logistics</span>
             <span className="hover:text-[#ff6a00] cursor-pointer">Post RFQ</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
