
export interface BulkTier {
  minQuantity: number;
  price: number;
}

export interface VariantOption {
  label: string;
  priceModifier: number;
}

export interface ProductVariant {
  name: string;
  options: VariantOption[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  brandId?: string;
  brandName?: string;
  rating: number;
  reviews: number;
  tag?: string;
  soldCount?: number;
  totalStock?: number;
  isFlashSale?: boolean;
  isDigital?: boolean;
  deliveryType?: 'Instant' | 'Manual' | '24h';
  region?: 'Global' | 'BD Only' | 'US' | 'EU' | 'TR';
  bulkTiers?: BulkTier[];
  variants?: ProductVariant[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
  icon?: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  banner?: string;
}
