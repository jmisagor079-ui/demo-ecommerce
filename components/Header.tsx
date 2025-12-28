
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Phone, ChevronDown, Shield, HelpCircle, Sparkles, Zap, Lock, Truck, RefreshCcw, MessageSquare, Info, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { CATEGORIES, BRANDS } from '../constants';

const Header: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      navigate('/products');
      setIsMobileMenuOpen(false);
    }
  };

  const closeDropdown = () => setActiveDropdown(null);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleMobileAccordion = (key: string) => {
    setExpandedMobileMenu(expandedMobileMenu === key ? null : key);
  };

  const MobileLink = ({ to, children, icon: Icon, onClick }: any) => (
    <Link 
      to={to} 
      onClick={() => { setIsMobileMenuOpen(false); if(onClick) onClick(); }}
      className="flex items-center gap-3 p-4 text-sm font-bold text-gray-700 hover:bg-gray-50 rounded-2xl transition-all"
    >
      {Icon && <Icon size={18} className="text-blue-600" />}
      {children}
    </Link>
  );

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      {/* Top Utility Bar - Hidden on small mobile, shown on tablets up */}
      <div className="container mx-auto px-4 py-2 flex justify-between items-center text-xs text-gray-500 border-b hidden sm:flex">
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><Phone size={12} /> Call (0)</span>
        </div>
        <div className="flex gap-4">
          <Link to="#" className="hover:text-blue-600 transition-colors">Login</Link>
          <Link to="#" className="hover:text-blue-600 transition-colors">Registration</Link>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
        {/* Mobile Menu Toggle */}
        <button 
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors"
        >
          <Menu size={24} className="text-gray-700" />
        </button>

        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-black rounded flex items-center justify-center text-white font-bold text-xl shadow-lg">
            A
          </div>
          <div className="leading-tight sm:block hidden">
            <span className="text-sm font-bold block text-gray-400">THE CORE</span>
            <span className="text-lg font-black text-blue-600 tracking-tighter">Alijali eCommerce</span>
          </div>
        </Link>

        {/* Search Bar - Desktop */}
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

        <div className="flex items-center gap-3 sm:gap-6">
          <button className="lg:hidden text-gray-600 p-2 hover:bg-gray-100 rounded-xl" onClick={() => navigate('/products')}>
            <Search size={22} />
          </button>
          <div className="flex flex-col items-center cursor-pointer group">
            <User size={24} className="text-gray-700 group-hover:text-blue-600 transition-colors" />
            <span className="text-[10px] uppercase font-bold text-gray-400 hidden sm:block">Account</span>
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

      {/* Desktop Navigation Bar */}
      <nav className="bg-white border-t lg:block hidden relative">
        <div className="container mx-auto px-4 flex items-center justify-between h-14">
          <div className="flex items-center h-full gap-1">
            <Link to="/" className="h-full flex items-center px-4 text-sm font-black text-gray-800 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/flash-sale" className="h-full flex items-center px-4 text-sm font-black text-red-600 hover:text-red-700 transition-colors flex items-center gap-2 group">
              <Zap size={14} className="fill-red-600 group-hover:animate-pulse" /> Flash Sale
            </Link>
            
            {/* Categories Desktop */}
            <div className="h-full relative" onMouseEnter={() => setActiveDropdown('categories')} onMouseLeave={() => setActiveDropdown(null)}>
              <Link to="/products" className={`h-full flex items-center px-5 text-sm font-black transition-colors flex items-center gap-1.5 ${activeDropdown === 'categories' ? 'text-blue-600' : 'text-gray-800'}`}>
                Categories <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'categories' ? 'rotate-180' : ''}`} />
              </Link>
              <div className={`absolute top-full left-0 w-[600px] bg-white shadow-2xl rounded-b-[2rem] border-t-2 border-blue-600 transition-all duration-300 transform origin-top overflow-hidden z-[100] ${activeDropdown === 'categories' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                 <div className="p-8 grid grid-cols-2 gap-6 bg-white/80 backdrop-blur-xl">
                   {CATEGORIES.map(cat => (
                     <Link key={cat.id} to="/products" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-blue-50 transition-all group/item" onClick={closeDropdown}>
                       <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl group-hover/item:bg-white group-hover/item:shadow-lg transition-all">{cat.icon}</div>
                       <div>
                         <span className="block text-sm font-black text-gray-800 uppercase tracking-tighter">{cat.name}</span>
                         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Explore Collection</span>
                       </div>
                     </Link>
                   ))}
                 </div>
              </div>
            </div>

            {/* Brands Desktop */}
            <div className="h-full relative" onMouseEnter={() => setActiveDropdown('brands')} onMouseLeave={() => setActiveDropdown(null)}>
              <Link to="/brands" className={`h-full flex items-center px-5 text-sm font-black transition-colors flex items-center gap-1.5 ${activeDropdown === 'brands' ? 'text-blue-600' : 'text-gray-800'}`}>
                Brands <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'brands' ? 'rotate-180' : ''}`} />
              </Link>
              <div className={`absolute top-full left-0 w-[450px] bg-white shadow-2xl rounded-b-[2rem] border-t-2 border-blue-600 transition-all duration-300 transform origin-top overflow-hidden z-[100] ${activeDropdown === 'brands' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                 <div className="p-8 grid grid-cols-3 gap-4 bg-white/80 backdrop-blur-xl">
                   {BRANDS.slice(0, 12).map(brand => (
                     <Link key={brand.id} to={`/brand/${brand.id}`} className="flex flex-col items-center justify-center p-4 rounded-2xl border border-transparent hover:border-blue-100 hover:bg-blue-50 hover:shadow-inner transition-all group/brand" onClick={closeDropdown}>
                       <span className="text-3xl mb-2 grayscale group-hover/brand:grayscale-0 transition-all">{brand.logo}</span>
                       <span className="text-[10px] font-black text-gray-600 group-hover/brand:text-blue-600 uppercase tracking-tighter">{brand.name}</span>
                     </Link>
                   ))}
                 </div>
              </div>
            </div>
          </div>

          <div className="flex items-center h-full gap-2">
            {/* Order Protection Desktop */}
            <div className="h-full relative" onMouseEnter={() => setActiveDropdown('protection')} onMouseLeave={() => setActiveDropdown(null)}>
              <button onClick={() => { navigate('/order-protection'); closeDropdown(); }} className={`h-full flex items-center gap-2 px-4 text-[10px] font-black uppercase tracking-widest transition-colors ${activeDropdown === 'protection' ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'}`}>
                <Shield size={14} className={activeDropdown === 'protection' ? 'text-blue-600' : 'text-green-500'} /> Order Protection
              </button>
              <div className={`absolute top-full right-0 w-[280px] bg-white/95 backdrop-blur-xl shadow-2xl rounded-b-[2rem] border-t-2 border-blue-600 transition-all duration-300 transform origin-top z-[100] ${activeDropdown === 'protection' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="p-6 space-y-4">
                  {[{ icon: Lock, title: 'Secure Payment', color: 'text-blue-500' }, { icon: RefreshCcw, title: 'Money Back', color: 'text-green-500' }, { icon: Shield, title: 'Buyer Shield', color: 'text-purple-500' }].map((item, idx) => (
                    <Link key={idx} to="/order-protection" onClick={closeDropdown} className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group">
                      <item.icon size={16} className={`${item.color} mt-1`} />
                      <div>
                        <h4 className="text-[10px] font-black uppercase">{item.title}</h4>
                        <p className="text-[9px] text-gray-400 font-bold uppercase mt-1">100% Guaranteed</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Help Center Desktop */}
            <div className="h-full relative" onMouseEnter={() => setActiveDropdown('help')} onMouseLeave={() => setActiveDropdown(null)}>
              <button onClick={() => { navigate('/help-center'); closeDropdown(); }} className={`h-full flex items-center gap-2 px-4 text-[10px] font-black uppercase tracking-widest transition-colors ${activeDropdown === 'help' ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'}`}>
                <HelpCircle size={14} className={activeDropdown === 'help' ? 'text-blue-600' : 'text-blue-400'} /> Help Center
              </button>
              <div className={`absolute top-full right-0 w-[240px] bg-white/95 backdrop-blur-xl shadow-2xl rounded-b-[2rem] border-t-2 border-blue-600 transition-all duration-300 transform origin-top z-[100] ${activeDropdown === 'help' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="p-4 flex flex-col gap-1">
                  {[ { icon: Truck, title: 'Track My Order' }, { icon: MessageSquare, title: 'Live Support' }, { icon: Info, title: 'Return Center' }].map((item, idx) => (
                    <Link key={idx} to="/help-center" onClick={closeDropdown} className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 text-[10px] font-black uppercase tracking-widest text-gray-600 hover:text-blue-600 transition-all">
                      <item.icon size={14} /> {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Preorder Desktop */}
            <div className="h-full relative" onMouseEnter={() => setActiveDropdown('preorder')} onMouseLeave={() => setActiveDropdown(null)}>
              <button onClick={() => { navigate('/preorder'); closeDropdown(); }} className={`h-full flex items-center gap-2 px-4 text-[10px] font-black uppercase tracking-widest transition-colors ${activeDropdown === 'preorder' ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'}`}>
                <Zap size={14} className={activeDropdown === 'preorder' ? 'text-orange-600' : 'text-orange-400'} /> Preorder
              </button>
              <div className={`absolute top-full right-0 w-[320px] bg-white/95 backdrop-blur-xl shadow-2xl rounded-b-[2rem] border-t-2 border-blue-600 transition-all duration-300 transform origin-top z-[100] ${activeDropdown === 'preorder' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="p-6">
                  <h4 className="text-[10px] font-black uppercase text-blue-600 mb-2 text-center">Upcoming Drop</h4>
                  <Link to="/preorder" onClick={closeDropdown} className="block aspect-[16/9] rounded-2xl bg-gray-100 overflow-hidden relative group/img">
                    <img src="https://images.unsplash.com/photo-1605648916319-cf082f7524a1?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700" alt="preorder" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                       <span className="text-[8px] font-black text-white border border-white px-3 py-1 rounded-full uppercase">Explore</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/products" className="flex items-center gap-2 px-4 text-[10px] font-black text-blue-600 hover:text-gray-900 transition-colors uppercase tracking-widest"><Sparkles size={14} /> Featured</Link>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Navigation */}
      <div className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={toggleMobileMenu}></div>
        
        {/* Drawer Content */}
        <div className={`absolute top-0 left-0 h-full w-[85%] max-w-[320px] bg-white shadow-2xl transition-transform duration-500 ease-out transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
           <div className="p-6 h-full flex flex-col overflow-y-auto custom-scrollbar">
             <div className="flex items-center justify-between mb-8">
               <div className="flex items-center gap-2">
                 <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">A</div>
                 <span className="font-black text-blue-600 tracking-tight text-sm uppercase">Alijali</span>
               </div>
               <button onClick={toggleMobileMenu} className="p-2 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                 <X size={20} className="text-gray-400" />
               </button>
             </div>

             <div className="space-y-2">
               <MobileLink to="/">Home</MobileLink>
               <MobileLink to="/flash-sale" icon={Zap}>Flash Sale</MobileLink>
               
               {/* Mobile Categories Accordion */}
               <div>
                  <button 
                    onClick={() => toggleMobileAccordion('categories')}
                    className="w-full flex items-center justify-between p-4 text-sm font-black text-gray-800 uppercase tracking-tighter"
                  >
                    Categories <ChevronDown size={16} className={`transition-transform ${expandedMobileMenu === 'categories' ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedMobileMenu === 'categories' && (
                    <div className="bg-gray-50 rounded-[1.5rem] p-2 mt-2 grid grid-cols-1 gap-1">
                      {CATEGORIES.map(cat => (
                        <MobileLink key={cat.id} to="/products">{cat.name}</MobileLink>
                      ))}
                    </div>
                  )}
               </div>

               {/* Mobile Order Protection Accordion */}
               <div>
                  <button 
                    onClick={() => toggleMobileAccordion('protection')}
                    className="w-full flex items-center justify-between p-4 text-sm font-black text-gray-800 uppercase tracking-tighter"
                  >
                    Order Protection <ChevronDown size={16} className={`transition-transform ${expandedMobileMenu === 'protection' ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedMobileMenu === 'protection' && (
                    <div className="bg-blue-50/50 rounded-[1.5rem] p-4 mt-2 space-y-4">
                       <MobileLink to="/order-protection" icon={Shield}>Full Protection Hub</MobileLink>
                       <div className="grid grid-cols-1 gap-3 px-2">
                         <div className="flex items-center gap-3 text-[10px] font-black uppercase text-gray-500">
                           <Lock size={14} className="text-blue-500" /> Secured Checkout
                         </div>
                         <div className="flex items-center gap-3 text-[10px] font-black uppercase text-gray-500">
                           <RefreshCcw size={14} className="text-green-500" /> Money Back
                         </div>
                       </div>
                    </div>
                  )}
               </div>

               {/* Mobile Help Center Accordion */}
               <div>
                  <button 
                    onClick={() => toggleMobileAccordion('help')}
                    className="w-full flex items-center justify-between p-4 text-sm font-black text-gray-800 uppercase tracking-tighter"
                  >
                    Help Center <ChevronDown size={16} className={`transition-transform ${expandedMobileMenu === 'help' ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedMobileMenu === 'help' && (
                    <div className="bg-gray-50 rounded-[1.5rem] p-2 mt-2">
                      <MobileLink to="/help-center" icon={Truck}>Track My Order</MobileLink>
                      <MobileLink to="/help-center" icon={MessageSquare}>Live Support</MobileLink>
                      <MobileLink to="/help-center" icon={Info}>Returns</MobileLink>
                    </div>
                  )}
               </div>

               {/* Mobile Preorder Accordion */}
               <div>
                  <button 
                    onClick={() => toggleMobileAccordion('preorder')}
                    className="w-full flex items-center justify-between p-4 text-sm font-black text-gray-800 uppercase tracking-tighter"
                  >
                    Preorder <ChevronDown size={16} className={`transition-transform ${expandedMobileMenu === 'preorder' ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedMobileMenu === 'preorder' && (
                    <div className="bg-orange-50 rounded-[1.5rem] p-4 mt-2">
                       <p className="text-[10px] font-black text-orange-600 uppercase mb-3">Next Release Available</p>
                       <MobileLink to="/preorder">View Exclusive Drops</MobileLink>
                    </div>
                  )}
               </div>

               <MobileLink to="/brands">Browse All Brands</MobileLink>
             </div>

             {/* Mobile Account Utility */}
             <div className="mt-auto pt-8 border-t border-gray-100">
                <div className="flex items-center gap-4 p-4 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
                    <User size={24} />
                  </div>
                  <div>
                    <span className="block text-xs font-black text-gray-900 uppercase">Guest User</span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Login to see details</span>
                  </div>
                </div>
                <button onClick={() => { navigate('/products'); setIsMobileMenuOpen(false); }} className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl">
                  Shop Now
                </button>
             </div>
           </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
