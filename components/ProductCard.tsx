
import React from 'react';
import { Product } from '../types';
import { Star, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/product/${product.id}`)}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden flex flex-col h-full"
    >
      <div className="relative aspect-square mb-4 overflow-hidden rounded-xl bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {product.tag && (
          <span className="absolute top-3 left-3 bg-blue-600 text-white text-[9px] px-2 py-1 rounded-md font-black uppercase tracking-widest shadow-lg">
            {product.tag}
          </span>
        )}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="flex-1 flex flex-col">
        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-tighter mb-1 opacity-70">
          {product.category}
        </span>
        <h3 className="text-sm font-bold text-gray-800 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={12} 
              className={i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"} 
            />
          ))}
          <span className="text-[10px] text-gray-400 font-bold ml-1">({product.reviews})</span>
        </div>

        <div className="mt-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-black text-gray-900">${product.price.toFixed(2)}</span>
              {product.oldPrice && (
                <span className="text-xs text-gray-400 line-through font-medium">${product.oldPrice.toFixed(2)}</span>
              )}
            </div>
            <button className="w-8 h-8 rounded-full bg-gray-50 text-gray-400 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300">
              <ShoppingCart size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
