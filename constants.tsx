
import { Product, Category, Brand } from './types';

export const CATEGORIES: Category[] = [
  { id: 'windows', name: 'Software Keys', image: '', icon: '🪟' },
  { id: 'subscriptions', name: 'Subscriptions', image: '', icon: '📺' },
  { id: 'gaming', name: 'Game Credits', image: '', icon: '🎮' },
  { id: 'giftcards', name: 'Gift Cards', image: '', icon: '🎁' },
  { id: 'office', name: 'Office Tools', image: '', icon: '📊' },
];

export const BRANDS: Brand[] = [
  { id: 'microsoft', name: 'Microsoft', logo: 'Ⓜ️' },
  { id: 'netflix', name: 'Netflix', logo: '📺' },
  { id: 'adobe', name: 'Adobe', logo: '🎨' },
  { id: 'sony', name: 'Sony', logo: '🎮' },
  { id: 'canva', name: 'Canva', logo: '🖌️' },
];

export const ALL_PRODUCTS: Product[] = [
  {
    id: 'digi-1',
    name: 'Windows 11 Pro Retail Digital Key (Global)',
    price: 15.00,
    oldPrice: 45.00,
    image: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&q=80&w=400',
    category: 'Software Keys',
    brandName: 'Microsoft',
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
  },
  {
    id: 'digi-6',
    name: 'IDM Internet Download Manager Lifetime (1 PC)',
    price: 12.00,
    oldPrice: 24.99,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400',
    category: 'Office Tools',
    brandName: 'Tonec',
    rating: 4.9,
    reviews: 3400,
    tag: 'UTILITY',
    soldCount: 12000,
    isDigital: true,
    deliveryType: 'Instant',
    region: 'Global',
    bulkTiers: [
      { minQuantity: 1, price: 12.00 },
      { minQuantity: 10, price: 9.50 },
      { minQuantity: 50, price: 7.00 }
    ]
  },
  {
    id: 'digi-7',
    name: 'Spotify Premium 12 Months Family Owner (Bulk)',
    price: 18.00,
    oldPrice: 35.00,
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=400',
    category: 'Subscriptions',
    brandName: 'Spotify',
    rating: 4.8,
    reviews: 1200,
    tag: 'MUSIC',
    soldCount: 5600,
    isDigital: true,
    deliveryType: 'Manual',
    region: 'Global',
    bulkTiers: [
      { minQuantity: 1, price: 18.00 },
      { minQuantity: 5, price: 15.00 },
      { minQuantity: 20, price: 12.00 }
    ]
  },
  {
    id: 'digi-8',
    name: 'PUBG Mobile 660 UC Direct Top-up (Global)',
    price: 9.50,
    oldPrice: 12.00,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400',
    category: 'Game Credits',
    brandName: 'Tencent',
    rating: 5,
    reviews: 15000,
    tag: 'GAMING',
    soldCount: 120000,
    isDigital: true,
    deliveryType: 'Instant',
    region: 'Global',
    bulkTiers: [
      { minQuantity: 1, price: 9.50 },
      { minQuantity: 10, price: 9.10 },
      { minQuantity: 100, price: 8.80 }
    ]
  },
  {
    id: 'digi-9',
    name: 'Free Fire 530 Diamonds Direct ID Top-up',
    price: 4.20,
    oldPrice: 6.00,
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=400',
    category: 'Game Credits',
    brandName: 'Garena',
    rating: 4.7,
    reviews: 45000,
    tag: 'POPULAR',
    soldCount: 340000,
    isDigital: true,
    deliveryType: 'Instant',
    region: 'BD Only',
    bulkTiers: [
      { minQuantity: 1, price: 4.20 },
      { minQuantity: 50, price: 3.95 }
    ]
  },
  {
    id: 'digi-10',
    name: 'Google Play $10 Gift Card (US Region)',
    price: 11.50,
    oldPrice: 12.50,
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=400',
    category: 'Gift Cards',
    brandName: 'Google',
    rating: 4.9,
    reviews: 6700,
    tag: 'GIFT',
    soldCount: 12000,
    isDigital: true,
    deliveryType: 'Instant',
    region: 'US',
    bulkTiers: [
      { minQuantity: 1, price: 11.50 },
      { minQuantity: 10, price: 11.00 },
      { minQuantity: 50, price: 10.40 }
    ]
  },
  {
    id: 'digi-11',
    name: 'Apple Gift Card $25 (Global Store)',
    price: 26.50,
    oldPrice: 30.00,
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=400',
    category: 'Gift Cards',
    brandName: 'Apple',
    rating: 5,
    reviews: 3400,
    tag: 'PREMIUM',
    soldCount: 8900,
    isDigital: true,
    deliveryType: 'Instant',
    region: 'Global',
    bulkTiers: [
      { minQuantity: 1, price: 26.50 },
      { minQuantity: 5, price: 25.80 }
    ]
  },
  {
    id: 'digi-12',
    name: 'Microsoft Office 2021 Professional Plus Key',
    price: 25.00,
    oldPrice: 89.00,
    image: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&q=80&w=400',
    category: 'Office Tools',
    brandName: 'Microsoft',
    rating: 4.9,
    reviews: 2100,
    tag: 'OFFICE',
    soldCount: 4500,
    isDigital: true,
    deliveryType: 'Instant',
    region: 'Global',
    bulkTiers: [
      { minQuantity: 1, price: 25.00 },
      { minQuantity: 10, price: 18.00 },
      { minQuantity: 50, price: 12.00 }
    ]
  },
  {
    id: 'digi-13',
    name: 'VPN Premium 1 Year - High Speed (Bulk)',
    price: 15.00,
    oldPrice: 60.00,
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=400',
    category: 'Software Keys',
    brandName: 'Various',
    rating: 4.6,
    reviews: 120,
    tag: 'SECURITY',
    soldCount: 300,
    isDigital: true,
    deliveryType: 'Manual',
    region: 'Global',
    bulkTiers: [
      { minQuantity: 1, price: 15.00 },
      { minQuantity: 10, price: 12.00 },
      { minQuantity: 100, price: 8.00 }
    ]
  },
  {
    id: 'digi-14',
    name: 'Steam $10 Wallet Code (Global)',
    price: 10.80,
    oldPrice: 12.00,
    image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=400',
    category: 'Game Credits',
    brandName: 'Valve',
    rating: 5,
    reviews: 12000,
    tag: 'HOT',
    soldCount: 45000,
    isDigital: true,
    deliveryType: 'Instant',
    region: 'Global',
    bulkTiers: [
      { minQuantity: 1, price: 10.80 },
      { minQuantity: 100, price: 10.20 }
    ]
  },
  {
    id: 'digi-15',
    name: 'YouTube Premium 6 Months (Private)',
    price: 12.00,
    oldPrice: 30.00,
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400',
    category: 'Subscriptions',
    brandName: 'Google',
    rating: 4.9,
    reviews: 800,
    tag: 'VIDEO',
    soldCount: 2300,
    isDigital: true,
    deliveryType: 'Manual',
    region: 'Global',
    bulkTiers: [
      { minQuantity: 1, price: 12.00 },
      { minQuantity: 10, price: 10.50 }
    ]
  }
];

export const FLASH_SALE_PRODUCTS: Product[] = ALL_PRODUCTS.slice(0, 4);
export const PREORDER_PRODUCTS: Product[] = ALL_PRODUCTS.slice(4, 6);
