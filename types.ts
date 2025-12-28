
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
