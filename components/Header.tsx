
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Phone, ChevronDown, Shield, HelpCircle, Sparkles, Zap, Lock, Truck, RefreshCcw, MessageSquare, Info } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { CATEGORIES, BRANDS } from '../constants';

const Header: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) navigate('/products');
  };

  const closeDropdown = () => setActiveDropdown(null);

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      {/* Top Utility Bar */}
      <div className="container mx-auto px-4 py-2 flex justify-between items-center text-xs text-gray-500 border-b lg:flex hidden">
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><Phone size={12} /> Call (0)</span>
        </div>
        <div className="flex gap-4">
          <Link to="#" className="hover:text-blue-600 transition-colors">Login</Link>
          <Link to="#" className="hover:text-blue-600 transition-colors">Registration</Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-black rounded flex items-center justify-center text-white font-bold text-xl shadow-lg">
            A
          </div>
          <div className="leading-tight">
            <span className="text-sm font-bold block">THE CORE</span>
            <span className="text-lg font-black text-blue-600 tracking-tighter">Active eCommerce</span>
          </div>
        </Link>

        <form onSubmit={handleSearch} className="flex-1 max-w-2xl relative lg:block hidden">
          <input
            type="text"
            placeholder="Search for premium products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border-2 border-gray-100 rounded-2xl py-2.5 px-6 outline-none focus:border-blue-500 transition-all text-sm bg-gray-50/50"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors">
            <Search size={20} />
          </button>
        </form>

        <div className="flex items-center gap-6">
          <button className="lg:hidden text-gray-600" onClick={() => navigate('/products')}><Search size={24} /></button>
          <div className="flex flex-col items-center cursor-pointer group">
            <User size={24} className="text-gray-700 group-hover:text-blue-600 transition-colors" />
            <span className="text-[10px] uppercase font-bold text-gray-400">Account</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <div className="relative">
              <ShoppingCart size={24} className="text-gray-700 group-hover:text-blue-600 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold animate-bounce shadow-md">0</span>
            </div>
            <div className="lg:flex flex-col hidden">
              <span className="text-[10px] uppercase font-bold text-gray-400">Cart</span>
              <span className="text-[10px] font-bold">$0.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Navigation Bar */}
      <nav className="bg-white border-t lg:block hidden relative">
        <div className="container mx-auto px-4 flex items-center justify-between h-14">
          
          {/* Left Navigation Group */}
          <div className="flex items-center h-full gap-1">
            <Link to="/" className="h-full flex items-center px-4 text-sm font-black text-gray-800 hover:text-blue-600 transition-colors">
              Home
            </Link>
            
            <Link to="/flash-sale" className="h-full flex items-center px-4 text-sm font-black text-red-600 hover:text-red-700 transition-colors flex items-center gap-2 group">
              <Zap size={14} className="fill-red-600 group-hover:animate-pulse" /> Flash Sale
            </Link>

            {/* Categories Dropdown Trigger */}
            <div 
              className="h-full relative"
              onMouseEnter={() => setActiveDropdown('categories')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/products" className={`h-full flex items-center px-5 text-sm font-black transition-colors flex items-center gap-1.5 ${activeDropdown === 'categories' ? 'text-blue-600' : 'text-gray-800'}`}>
                Categories <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'categories' ? 'rotate-180' : ''}`} />
              </Link>

              {/* Categories Mega Dropdown */}
              <div className={`absolute top-full left-0 w-[600px] bg-white shadow-2xl rounded-b-[2rem] border-t-2 border-blue-600 transition-all duration-300 transform origin-top overflow-hidden z-[100] ${activeDropdown === 'categories' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                 <div className="p-8 grid grid-cols-2 gap-6 bg-white/80 backdrop-blur-xl">
                   {CATEGORIES.map(cat => (
                     <Link 
                       key={cat.id} 
                       to="/products" 
                       className="flex items-center gap-4 p-4 rounded-2xl hover:bg-blue-50 transition-all group/item"
                       onClick={closeDropdown}
                     >
                       <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl group-hover/item:bg-white group-hover/item:shadow-lg transition-all">
                         {cat.icon}
                       </div>
                       <div>
                         <span className="block text-sm font-black text-gray-800 uppercase tracking-tighter">{cat.name}</span>
                         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover/item:text-blue-500 transition-colors">Explore Collection</span>
                       </div>
                     </Link>
                   ))}
                 </div>
              </div>
            </div>

            {/* Brands Dropdown Trigger */}
            <div 
              className="h-full relative"
              onMouseEnter={() => setActiveDropdown('brands')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/brands" className={`h-full flex items-center px-5 text-sm font-black transition-colors flex items-center gap-1.5 ${activeDropdown === 'brands' ? 'text-blue-600' : 'text-gray-800'}`}>
                Brands <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'brands' ? 'rotate-180' : ''}`} />
              </Link>

              {/* Brands Mega Dropdown */}
              <div className={`absolute top-full left-0 w-[450px] bg-white shadow-2xl rounded-b-[2rem] border-t-2 border-blue-600 transition-all duration-300 transform origin-top overflow-hidden z-[100] ${activeDropdown === 'brands' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                 <div className="p-8 grid grid-cols-3 gap-4 bg-white/80 backdrop-blur-xl">
                   {BRANDS.slice(0, 12).map(brand => (
                     <Link 
                       key={brand.id} 
                       to={`/brand/${brand.id}`} 
                       className="flex flex-col items-center justify-center p-4 rounded-2xl border border-transparent hover:border-blue-100 hover:bg-blue-50 hover:shadow-inner transition-all group/brand"
                       onClick={closeDropdown}
                     >
                       <span className="text-3xl mb-2 grayscale group-hover/brand:grayscale-0 transition-all">{brand.logo}</span>
                       <span className="text-[10px] font-black text-gray-600 group-hover/brand:text-blue-600 uppercase tracking-tighter">{brand.name}</span>
                     </Link>
                   ))}
                 </div>
              </div>
            </div>
          </div>

          {/* Right Navigation Group */}
          <div className="flex items-center h-full gap-2">
            
            {/* Order Protection Dropdown */}
            <div 
              className="h-full relative"
              onMouseEnter={() => setActiveDropdown('protection')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => { navigate('/order-protection'); closeDropdown(); }}
                className={`h-full flex items-center gap-2 px-4 text-[10px] font-black uppercase tracking-widest transition-colors ${activeDropdown === 'protection' ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
              >
                <Shield size={14} className={activeDropdown === 'protection' ? 'text-blue-600' : 'text-green-500'} /> Order Protection
              </button>
              <div className={`absolute top-full right-0 w-[280px] bg-white/95 backdrop-blur-xl shadow-2xl rounded-b-[2rem] border-t-2 border-blue-600 transition-all duration-300 transform origin-top z-[100] ${activeDropdown === 'protection' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="p-6 space-y-4">
                  <Link to="/order-protection" onClick={closeDropdown} className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group">
                    <Lock size={16} className="text-blue-500 mt-1" />
                    <div>
                      <h4 className="text-[10px] font-black uppercase">Secure Payment</h4>
                      <p className="text-[9px] text-gray-400 font-bold uppercase mt-1">100% encrypted checkout</p>
                    </div>
                  </Link>
                  <Link to="/order-protection" onClick={closeDropdown} className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group">
                    <RefreshCcw size={16} className="text-green-500 mt-1" />
                    <div>
                      <h4 className="text-[10px] font-black uppercase">Money Back</h4>
                      <p className="text-[9px] text-gray-400 font-bold uppercase mt-1">30-day return policy</p>
                    </div>
                  </Link>
                  <Link to="/order-protection" onClick={closeDropdown} className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group">
                    <Shield size={16} className="text-purple-500 mt-1" />
                    <div>
                      <h4 className="text-[10px] font-black uppercase">Buyer Shield</h4>
                      <p className="text-[9px] text-gray-400 font-bold uppercase mt-1">Full dispute coverage</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Help Center Dropdown */}
            <div 
              className="h-full relative"
              onMouseEnter={() => setActiveDropdown('help')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => { navigate('/help-center'); closeDropdown(); }}
                className={`h-full flex items-center gap-2 px-4 text-[10px] font-black uppercase tracking-widest transition-colors ${activeDropdown === 'help' ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
              >
                <HelpCircle size={14} className={activeDropdown === 'help' ? 'text-blue-600' : 'text-blue-400'} /> Help Center
              </button>
              <div className={`absolute top-full right-0 w-[240px] bg-white/95 backdrop-blur-xl shadow-2xl rounded-b-[2rem] border-t-2 border-blue-600 transition-all duration-300 transform origin-top z-[100] ${activeDropdown === 'help' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="p-4 flex flex-col gap-1">
                  <Link to="/help-center" onClick={closeDropdown} className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 text-[10px] font-black uppercase tracking-widest text-gray-600 hover:text-blue-600 transition-all">
                    <Truck size={14} /> Track My Order
                  </Link>
                  <Link to="/help-center" onClick={closeDropdown} className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 text-[10px] font-black uppercase tracking-widest text-gray-600 hover:text-blue-600 transition-all">
                    <MessageSquare size={14} /> Live Support
                  </Link>
                  <Link to="/help-center" onClick={closeDropdown} className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 text-[10px] font-black uppercase tracking-widest text-gray-600 hover:text-blue-600 transition-all">
                    <Info size={14} /> Return Center
                  </Link>
                  <Link to="/help-center" onClick={closeDropdown} className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 text-[10px] font-black uppercase tracking-widest text-gray-600 hover:text-blue-600 transition-all">
                    <HelpCircle size={14} /> Search FAQs
                  </Link>
                </div>
              </div>
            </div>

            {/* Preorder Dropdown */}
            <div 
              className="h-full relative"
              onMouseEnter={() => setActiveDropdown('preorder')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => { navigate('/preorder'); closeDropdown(); }}
                className={`h-full flex items-center gap-2 px-4 text-[10px] font-black uppercase tracking-widest transition-colors ${activeDropdown === 'preorder' ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
              >
                <Zap size={14} className={activeDropdown === 'preorder' ? 'text-orange-600' : 'text-orange-400'} /> Preorder
              </button>
              <div className={`absolute top-full right-0 w-[320px] bg-white/95 backdrop-blur-xl shadow-2xl rounded-b-[2rem] border-t-2 border-blue-600 transition-all duration-300 transform origin-top z-[100] ${activeDropdown === 'preorder' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-[10px] font-black uppercase text-blue-600 mb-2">Upcoming Drops</h4>
                    <Link to="/preorder" onClick={closeDropdown} className="block aspect-[16/9] rounded-2xl bg-gray-100 overflow-hidden relative group/img">
                      <img src="https://images.unsplash.com/photo-1605648916319-cf082f7524a1?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700" alt="next drop" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                         <span className="text-[8px] font-black text-white border border-white px-3 py-1 rounded-full uppercase">Explore Future Tech</span>
                      </div>
                    </Link>
                  </div>
                  <p className="text-[9px] text-gray-400 font-bold uppercase leading-relaxed mb-4">Secure early access to our exclusive winter collection at 15% discount.</p>
                  <Link to="/preorder" onClick={closeDropdown} className="block text-center bg-gray-900 text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-colors">
                    View Preorder List
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/products" className="flex items-center gap-2 px-4 text-[10px] font-black text-blue-600 hover:text-gray-900 transition-colors uppercase tracking-widest">
              <Sparkles size={14} /> Featured Selections
            </Link>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;
