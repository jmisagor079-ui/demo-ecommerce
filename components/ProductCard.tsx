
import React from 'react';
import { Product } from '../types';
import { Star, ShieldCheck, MessageSquare, Ship } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/product/${product.id}`)}
      className="bg-white rounded-xl border border-gray-200 overflow-hidden cursor-pointer hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all group flex flex-col h-full"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-50 border-b border-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-2 left-2 flex flex-col gap-1.5">
          {product.tag && (
            <span className="bg-[#ff6a00] text-white text-[9px] px-2 py-0.5 rounded-sm font-black uppercase shadow-sm tracking-widest">
              {product.tag}
            </span>
          )}
          <div className="bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded-sm shadow-sm flex items-center gap-1 border border-gray-100">
             <ShieldCheck size={10} className="text-[#00c853]" />
             <span className="text-[8px] font-black text-gray-700 uppercase tracking-tighter">Verified</span>
          </div>
        </div>
        <div className="absolute bottom-2 left-2 right-2 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
           <button className="bg-white p-2 rounded-full shadow-lg text-[#ff6a00] hover:bg-[#ff6a00] hover:text-white transition-colors">
              <MessageSquare size={14} />
           </button>
        </div>
      </div>

      <div className="p-3.5 flex-1 flex flex-col">
        <h3 className="text-[12px] text-gray-600 line-clamp-2 mb-2 group-hover:text-[#ff6a00] transition-colors h-[32px] leading-tight font-medium">
          {product.name}
        </h3>
        
        <div className="mb-2">
          <div className="flex items-baseline gap-1">
            <span className="text-base font-black text-[#222] tracking-tight">
              ${product.price.toFixed(2)} - ${(product.price * 0.9).toFixed(2)}
            </span>
            <span className="text-[9px] text-gray-400 font-bold">/ pc</span>
          </div>
        </div>

        <div className="mt-auto space-y-2">
          <div className="text-[11px] font-black text-gray-800">
            {product.soldCount || 1} pieces <span className="font-medium text-gray-400">(Min. order)</span>
          </div>
          
          <div className="flex items-center gap-1 border-t border-gray-100 pt-2 mb-1">
             <div className="w-5 h-5 bg-gray-100 rounded-sm flex items-center justify-center text-[#ff6a00] font-black text-[9px] border border-gray-200">
                {product.brandName ? product.brandName[0] : 'S'}
             </div>
             <span className="text-[10px] font-bold text-gray-400 uppercase truncate">
               {product.brandName || 'Verified Supplier'}
             </span>
             <div className="flex-1"></div>
             <div className="flex items-center gap-0.5">
                <Star size={10} className="fill-yellow-400 text-yellow-400" />
                <span className="text-[10px] font-bold text-gray-700">{product.rating.toFixed(1)}</span>
             </div>
          </div>

          <div className="flex items-center gap-1.5 text-[9px] font-black text-[#00c853] uppercase tracking-tighter">
             <Ship size={10} /> CN <span className="text-gray-300">|</span> 15-20 days Lead Time
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
