
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, MessageSquare, ClipboardList, ChevronDown, Globe, Camera, Bell, Heart } from 'lucide-react';
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
            <span className="hover:text-[#ff6a00] cursor-pointer text-[#ff6a00]">Get the App</span>
          </div>
          <div className="flex gap-6 items-center">
            <Link to="#" className="hover:text-[#ff6a00]">Become a Supplier</Link>
            <Link to="#" className="hover:text-[#ff6a00]">Logistics Services</Link>
            <Link to="#" className="hover:text-[#ff6a00]">Buyer Central</Link>
          </div>
        </div>
      </div>

      {/* Main Search Area */}
      <div className="container mx-auto px-4 py-4 flex items-center gap-4 lg:gap-8">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <div className="flex items-center">
            <span className="text-2xl font-black tracking-tighter text-[#222]">Ali<span className="text-[#ff6a00]">jali</span>.com</span>
          </div>
        </Link>

        {/* Search Bar - Alibaba Signature Style */}
        <form onSubmit={handleSearch} className="flex-1 max-w-4xl flex items-center h-[44px] relative group">
          <div className="h-full px-4 border-2 border-[#ff6600] border-r-0 rounded-l-full bg-white flex items-center gap-2 text-sm font-bold text-[#222] cursor-pointer hover:bg-gray-50">
            Products <ChevronDown size={14} />
          </div>
          <div className="flex-1 h-full relative">
            <input
              type="text"
              placeholder="Search for wholesale items..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-full border-2 border-[#ff6600] border-l-0 border-r-0 px-4 outline-none text-sm placeholder-gray-400"
            />
            <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#ff6a00]">
              <Camera size={18} />
            </button>
          </div>
          <button className="h-full px-10 bg-[#ff6a00] text-white rounded-r-full font-bold flex items-center gap-2 hover:bg-[#e65f00] transition-colors border-2 border-[#ff6600]">
            <Search size={20} /> <span className="hidden lg:inline">Search</span>
          </button>
        </form>

        {/* Action Icons */}
        <div className="flex items-center gap-5 lg:gap-7">
          <div className="hidden lg:flex flex-col items-center cursor-pointer group text-gray-700 hover:text-[#ff6a00]">
            <MessageSquare size={22} className="group-hover:scale-110 transition-transform" />
            <span className="text-[10px] mt-1 font-bold">Messages</span>
          </div>
          <div className="hidden lg:flex flex-col items-center cursor-pointer group text-gray-700 hover:text-[#ff6a00]">
            <ClipboardList size={22} className="group-hover:scale-110 transition-transform" />
            <span className="text-[10px] mt-1 font-bold">Orders</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer group text-gray-700 hover:text-[#ff6a00]" onClick={() => navigate('/products')}>
            <div className="relative">
              <ShoppingCart size={22} className="group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#ff6a00] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
            </div>
            <span className="text-[10px] mt-1 font-bold">Cart</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer group text-gray-700 hover:text-[#ff6a00]">
            <User size={22} className="group-hover:scale-110 transition-transform" />
            <span className="text-[10px] mt-1 font-bold">Sign In</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <nav className="border-t border-gray-100 hidden md:block overflow-x-auto no-scrollbar">
        <div className="container mx-auto px-4 flex items-center gap-8 h-[40px]">
          <div className="group relative h-full flex items-center flex-shrink-0">
            <button className="flex items-center gap-2 text-sm font-bold text-[#222] h-full">
              <Menu size={18} /> All Categories
            </button>
            <div className="absolute top-full left-0 w-64 bg-white shadow-xl border opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all p-2 z-[110]">
              {CATEGORIES.map(cat => (
                <Link key={cat.id} to="/products" className="block px-4 py-2.5 text-xs font-medium text-gray-700 hover:bg-[#fff0e6] hover:text-[#ff6a00] rounded">
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="h-4 w-[1px] bg-gray-200"></div>
          <Link to="/products" className="text-sm font-bold text-gray-700 hover:text-[#ff6a00] whitespace-nowrap">Ready to Ship</Link>
          <Link to="/products" className="text-sm font-bold text-gray-700 hover:text-[#ff6a00] whitespace-nowrap">Personal Protective Equipment</Link>
          <Link to="/products" className="text-sm font-bold text-gray-700 hover:text-[#ff6a00] whitespace-nowrap">Trade Assurance</Link>
          <Link to="/products" className="text-sm font-bold text-gray-700 hover:text-[#ff6a00] whitespace-nowrap">Alijali Select</Link>
          <div className="flex-1"></div>
          <div className="flex items-center gap-4 text-xs font-bold text-gray-500">
             <span className="hover:text-[#ff6a00] cursor-pointer">Buyer Central</span>
             <span className="hover:text-[#ff6a00] cursor-pointer">Supplier Central</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
