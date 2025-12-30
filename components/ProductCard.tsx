
import React from 'react';
import { Product } from '../types';
import { Star, ShieldCheck, Zap, Globe, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  const lowestPrice = product.bulkTiers && product.bulkTiers.length > 0 
    ? Math.min(...product.bulkTiers.map(t => t.price)) 
    : product.price;

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
             <span className="text-[8px] font-black text-gray-700 uppercase tracking-tighter">Verified Digital</span>
          </div>
        </div>
        
        {/* Delivery Badge */}
        <div className="absolute bottom-2 left-2">
           <span className="bg-[#2cb9b9] text-white text-[8px] font-black px-2 py-0.5 rounded flex items-center gap-1 shadow-sm">
              <Zap size={8} /> {product.deliveryType} Delivery
           </span>
        </div>
      </div>

      <div className="p-3.5 flex-1 flex flex-col">
        <h3 className="text-[12px] text-gray-700 line-clamp-2 mb-2 group-hover:text-[#ff6a00] transition-colors h-[32px] leading-tight font-bold">
          {product.name}
        </h3>
        
        <div className="mb-2">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className="text-base font-black text-[#ff4d00] tracking-tight">
                ${lowestPrice.toFixed(2)}
              </span>
              <span className="text-[9px] text-gray-400 font-bold">/ bulk min</span>
            </div>
            <span className="text-[10px] text-gray-400 font-medium">Retail: ${product.price.toFixed(2)}</span>
          </div>
        </div>

        <div className="mt-auto space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-[10px] font-black text-gray-800 flex items-center gap-1">
              <Globe size={10} className="text-[#2cb9b9]" /> {product.region}
            </div>
            <div className="flex items-center gap-0.5">
               <Star size={10} className="fill-yellow-400 text-yellow-400" />
               <span className="text-[10px] font-bold text-gray-700">{product.rating.toFixed(1)}</span>
            </div>
          </div>
          
          <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
              {product.soldCount?.toLocaleString()} Orders
            </span>
            <div className="flex items-center gap-1">
               <Download size={10} className="text-gray-400" />
               <span className="text-[8px] font-bold text-gray-400">STOCK READY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
