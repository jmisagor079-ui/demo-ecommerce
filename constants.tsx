
import { Product, Category, Banner, Brand } from './types';

export const CATEGORIES: Category[] = [
  { id: 'windows', name: 'Software Keys', image: '', icon: '🪟' },
  { id: 'subscriptions', name: 'Subscriptions', image: '', icon: '📺' },
  { id: 'gaming', name: 'Game Credits', image: '', icon: '🎮' },
  { id: 'giftcards', name: 'Gift Cards', image: '', icon: '🎁' },
  { id: 'office', name: 'Office Tools', image: '', icon: '📊' },
];

/* Added BRANDS to resolve errors in Brands.tsx and BrandDetail.tsx */
export const BRANDS: Brand[] = [
  { id: 'microsoft', name: 'Microsoft', logo: 'Ⓜ️', banner: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200' },
  { id: 'netflix', name: 'Netflix', logo: '📺', banner: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=1200' },
  { id: 'adobe', name: 'Adobe', logo: '🎨', banner: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200' },
  { id: 'sony', name: 'Sony', logo: '🎮', banner: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=1200' },
  { id: 'canva', name: 'Canva', logo: '🖌️', banner: 'https://images.unsplash.com/photo-1626785774625-ddc7c82a1e5e?auto=format&fit=crop&q=80&w=1200' },
];

/* Added FLASH_SALE_PRODUCTS to resolve error in FlashSale.tsx */
export const FLASH_SALE_PRODUCTS: Product[] = [
  {
    id: 'flash-1',
    name: 'Xbox Game Pass Ultimate 1 Month (Global)',
    price: 3.50,
    oldPrice: 14.99,
    image: 'https://images.unsplash.com/photo-1605902711622-cfb39c443f05?auto=format&fit=crop&q=80&w=400',
    category: 'Subscriptions',
    brandName: 'Microsoft',
    brandId: 'microsoft',
    rating: 4.9,
    reviews: 4500,
    tag: 'FLASH',
    soldCount: 850,
    totalStock: 1000,
    isFlashSale: true,
    isDigital: true,
    deliveryType: 'Instant',
    region: 'Global'
  },
  {
    id: 'flash-2',
    name: 'Steam $50 Gift Card (US Region)',
    price: 45.00,
    oldPrice: 50.00,
    image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=400',
    category: 'Gift Cards',
    brandName: 'Valve',
    rating: 5,
    reviews: 1200,
    tag: 'LIMITED',
    soldCount: 95,
    totalStock: 100,
    isFlashSale: true,
    isDigital: true,
    deliveryType: 'Instant',
    region: 'US'
  }
];

/* Added PREORDER_PRODUCTS to resolve error in Preorder.tsx */
export const PREORDER_PRODUCTS: Product[] = [
  {
    id: 'pre-1',
    name: 'GTA VI - Early Access Digital Deluxe (Pre-order)',
    price: 89.99,
    oldPrice: 110.00,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400',
    category: 'Game Credits',
    brandName: 'Rockstar',
    rating: 5,
    reviews: 0,
    tag: 'PRE-ORDER',
    soldCount: 2500,
    totalStock: 10000,
    isDigital: true,
    deliveryType: 'Manual',
    region: 'Global'
  }
];

export const DIGITAL_BULK_PRODUCTS: Product[] = [
  {
    id: 'digi-1',
    name: 'Windows 11 Pro Retail Digital Key (Global)',
    price: 15.00,
    oldPrice: 45.00,
    image: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&q=80&w=400',
    category: 'Software Keys',
    brandName: 'Microsoft',
    brandId: 'microsoft',
    rating: 5,
    reviews: 1450,
    tag: 'BEST SELLER',
    soldCount: 15400,
    isDigital: true,
    deliveryType: 'Instant',
    region: 'Global',
    bulkTiers: [
      { minQuantity: 1, price: 15.00 },
      { minQuantity: 10, price: 12.00 },
      { minQuantity: 50, price: 8.50 },
      { minQuantity: 100, price: 5.00 }
    ]
  },
  {
    id: 'digi-2',
    name: 'Netflix 1 Month Private Profile - Ultra HD (Bulk)',
    price: 4.50,
    oldPrice: 12.00,
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=400',
    category: 'Subscriptions',
    brandName: 'Netflix',
    brandId: 'netflix',
    rating: 4.8,
    reviews: 890,
    tag: 'RESELLER READY',
    soldCount: 8200,
    isDigital: true,
    deliveryType: 'Manual',
    region: 'BD Only',
    bulkTiers: [
      { minQuantity: 1, price: 4.50 },
      { minQuantity: 20, price: 3.80 },
      { minQuantity: 100, price: 2.90 }
    ]
  },
  {
    id: 'digi-3',
    name: 'Adobe Creative Cloud 1 Year Subscription (Shared)',
    price: 85.00,
    oldPrice: 599.00,
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=400',
    category: 'Office Tools',
    brandName: 'Adobe',
    brandId: 'adobe',
    rating: 4.9,
    reviews: 320,
    tag: 'LIMITED',
    soldCount: 450,
    isDigital: true,
    deliveryType: '24h',
    region: 'Global',
    bulkTiers: [
      { minQuantity: 1, price: 85.00 },
      { minQuantity: 5, price: 75.00 },
      { minQuantity: 10, price: 60.00 }
    ]
  },
  {
    id: 'digi-4',
    name: 'PlayStation Plus Deluxe 12 Months (Global Code)',
    price: 110.00,
    oldPrice: 159.00,
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=400',
    category: 'Game Credits',
    brandName: 'Sony',
    brandId: 'sony',
    rating: 5,
    reviews: 670,
    tag: 'STABLE',
    soldCount: 1200,
    isDigital: true,
    deliveryType: 'Instant',
    region: 'Global',
    bulkTiers: [
      { minQuantity: 1, price: 110.00 },
      { minQuantity: 10, price: 98.00 },
      { minQuantity: 50, price: 85.00 }
    ]
  },
  {
    id: 'digi-5',
    name: 'Canva Pro Lifetime Access - Admin Panel (Bulk)',
    price: 8.00,
    oldPrice: 30.00,
    image: 'https://images.unsplash.com/photo-1626785774625-ddc7c82a1e5e?auto=format&fit=crop&q=80&w=400',
    category: 'Software Keys',
    brandName: 'Canva',
    brandId: 'canva',
    rating: 4.7,
    reviews: 2100,
    tag: 'HOT',
    soldCount: 45000,
    isDigital: true,
    deliveryType: 'Instant',
    region: 'Global',
    bulkTiers: [
      { minQuantity: 1, price: 8.00 },
      { minQuantity: 100, price: 4.50 },
      { minQuantity: 1000, price: 1.50 }
    ]
  }
];

export const ALL_PRODUCTS: Product[] = [
  ...DIGITAL_BULK_PRODUCTS,
  ...FLASH_SALE_PRODUCTS,
  ...PREORDER_PRODUCTS
];
