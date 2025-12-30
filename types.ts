
export interface BulkTier {
  minQuantity: number;
  price: number;
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
  region?: 'Global' | 'BD Only' | 'US' | 'EU';
  bulkTiers?: BulkTier[];
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

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  color: string;
}
