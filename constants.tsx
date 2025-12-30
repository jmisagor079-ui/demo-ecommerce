
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
    image: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&q=80&w=800',
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
    ],
    variants: [
      {
        name: 'Edition',
        options: [
          { label: 'Pro Edition', priceModifier: 0 },
          { label: 'Home Edition', priceModifier: -3 },
          { label: 'Enterprise', priceModifier: 10 }
        ]
      }
    ]
  },
  {
    id: 'digi-2',
    name: 'Netflix 1 Month Private Profile - Ultra HD (Bulk)',
    price: 4.50,
    oldPrice: 12.00,
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=800',
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
    ],
    variants: [
      {
        name: 'Duration',
        options: [
          { label: '1 Month', priceModifier: 0 },
          { label: '3 Months', priceModifier: 8 },
          { label: '6 Months', priceModifier: 15 }
        ]
      }
    ]
  },
  {
    id: 'digi-3',
    name: 'Adobe Creative Cloud 1 Year Subscription (Shared)',
    price: 85.00,
    oldPrice: 599.00,
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
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
    ],
    variants: [
      {
        name: 'Account Type',
        options: [
          { label: 'Shared Profile', priceModifier: 0 },
          { label: 'Private Account', priceModifier: 120 }
        ]
      }
    ]
  },
  {
    id: 'digi-4',
    name: 'PlayStation Plus Deluxe 12 Months (Global Code)',
    price: 110.00,
    oldPrice: 159.00,
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=800',
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
    ],
    variants: [
      {
        name: 'Tier',
        options: [
          { label: 'Deluxe', priceModifier: 0 },
          { label: 'Extra', priceModifier: -15 },
          { label: 'Essential', priceModifier: -30 }
        ]
      }
    ]
  },
  {
    id: 'digi-5',
    name: 'Canva Pro Lifetime Access - Admin Panel (Bulk)',
    price: 8.00,
    oldPrice: 30.00,
    image: 'https://images.unsplash.com/photo-1626785774625-ddc7c82a1e5e?auto=format&fit=crop&q=80&w=800',
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
    id: 'digi-8',
    name: 'PUBG Mobile UC Direct Top-up (Global)',
    price: 9.50,
    oldPrice: 12.00,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
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
    ],
    variants: [
      {
        name: 'UC Amount',
        options: [
          { label: '660 UC', priceModifier: 0 },
          { label: '1800 UC', priceModifier: 15 },
          { label: '3850 UC', priceModifier: 40 },
          { label: '8100 UC', priceModifier: 85 }
        ]
      }
    ]
  }
];

export const FLASH_SALE_PRODUCTS: Product[] = ALL_PRODUCTS.slice(0, 4);
export const PREORDER_PRODUCTS: Product[] = ALL_PRODUCTS.slice(4, 6);
