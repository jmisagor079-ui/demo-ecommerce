
import { Product, Category, Banner, Brand } from './types';

export const CATEGORIES: Category[] = [
  { id: 'women', name: 'Women Clothing', image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=200', icon: '👗' },
  { id: 'automobile', name: 'Automobile', image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=200', icon: '🚗' },
  { id: 'sports', name: 'Sports & outdoor', image: 'https://images.unsplash.com/photo-1541534741688-6078c6bc3575?auto=format&fit=crop&q=80&w=200', icon: '⚽' },
  { id: 'beauty', name: 'Beauty & Health', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=200', icon: '💄' },
  { id: 'men', name: 'Men Clothing', image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=200', icon: '👕' },
  { id: 'kids', name: 'Kids & toy', image: 'https://images.unsplash.com/photo-1532330393533-443990a51d10?auto=format&fit=crop&q=80&w=200', icon: '🧸' },
  { id: 'jewelry', name: 'Jewelry & Watches', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=200', icon: '⌚' },
  { id: 'home', name: 'Home Improvement', image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=200', icon: '🛠️' },
];

export const BRANDS: Brand[] = [
  { id: 'apple', name: 'Apple', logo: '🍎', banner: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&q=80&w=1200' },
  { id: 'samsung', name: 'Samsung', logo: '📱', banner: 'https://images.unsplash.com/photo-1610945415295-d9baf060e811?auto=format&fit=crop&q=80&w=1200' },
  { id: 'nike', name: 'Nike', logo: '👟', banner: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200' },
  { id: 'adidas', name: 'Adidas', logo: '🎽', banner: 'https://images.unsplash.com/photo-1518002171953-a080ee81be46?auto=format&fit=crop&q=80&w=1200' },
  { id: 'sony', name: 'Sony', logo: '🎮', banner: 'https://images.unsplash.com/photo-1507457379470-08b8006bc693?auto=format&fit=crop&q=80&w=1200' },
  { id: 'lg', name: 'LG', logo: '📺', banner: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=1200' },
  { id: 'toyota', name: 'Toyota', logo: '🚘', banner: 'https://images.unsplash.com/photo-1621275476537-82b29975a85b?auto=format&fit=crop&q=80&w=1200' },
  { id: 'honda', name: 'Honda', logo: '🏍️', banner: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=1200' },
  { id: 'canon', name: 'Canon', logo: '📷', banner: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1200' },
  { id: 'dell', name: 'Dell', logo: '💻', banner: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=1200' },
  { id: 'hp', name: 'HP', logo: '📠', banner: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=1200' },
  { id: 'zara', name: 'Zara', logo: '🧥', banner: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=1200' },
];

const getRandomBrand = () => BRANDS[Math.floor(Math.random() * BRANDS.length)];

// Helper to generate products for categories
const generateCategoryProducts = (catId: string, catName: string, prefix: string, count: number, basePrice: number, images: string[]): Product[] => {
  return Array.from({ length: count }).map((_, i) => {
    const brand = getRandomBrand();
    return {
      id: `${prefix}-${i + 1}`,
      name: `${catName} Item ${i + 1} - ${brand.name} Edition`,
      price: basePrice + (i * 12.5),
      oldPrice: (basePrice + (i * 12.5)) * 1.4,
      image: images[i % images.length],
      category: catName,
      brandId: brand.id,
      brandName: brand.name,
      rating: 4 + (i % 2),
      reviews: 10 + (i * 5),
      tag: i % 3 === 0 ? 'NEW' : (i % 5 === 0 ? 'HOT' : undefined)
    };
  });
};

export const WOMEN_PRODUCTS = generateCategoryProducts('women', 'Women Clothing', 'w', 12, 45, [
  'https://images.unsplash.com/photo-1539109132381-31512579f455?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1529139513462-5b1d91630b1b?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1475184636320-cd311e271436?auto=format&fit=crop&q=80&w=400'
]);

export const MEN_PRODUCTS = generateCategoryProducts('men', 'Men Clothing', 'm', 12, 35, [
  'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&q=80&w=400'
]);

export const AUTO_PRODUCTS = generateCategoryProducts('automobile', 'Automobile', 'a', 10, 85, [
  'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1549233861-ce6e3fba09d7?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=400'
]);

export const SPORTS_PRODUCTS = generateCategoryProducts('sports', 'Sports & outdoor', 's', 11, 25, [
  'https://images.unsplash.com/photo-1541534741688-6078c6bc3575?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=400'
]);

export const BEAUTY_PRODUCTS = generateCategoryProducts('beauty', 'Beauty & Health', 'b', 10, 20, [
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1596462502278-27bfad450216?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=400'
]);

export const KIDS_PRODUCTS = generateCategoryProducts('kids', 'Kids & toy', 'k', 10, 15, [
  'https://images.unsplash.com/photo-1532330393533-443990a51d10?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1558060370-d644479cb975?auto=format&fit=crop&q=80&w=400'
]);

export const JEWELRY_PRODUCTS = generateCategoryProducts('jewelry', 'Jewelry & Watches', 'j', 10, 150, [
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=400'
]);

export const HOME_PRODUCTS = generateCategoryProducts('home', 'Home Improvement', 'h', 10, 65, [
  'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=400'
]);

export const FLASH_SALE_PRODUCTS: Product[] = [
  { id: 'fs1', name: 'Premium Wireless Headphones ANC', price: 129.00, oldPrice: 249.00, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400', category: 'Electronics', brandId: 'sony', brandName: 'Sony', rating: 5, reviews: 120, tag: 'HOT', soldCount: 45, totalStock: 50, isFlashSale: true },
  { id: 'fs2', name: 'Minimalist Wood Wrist Watch', price: 45.00, oldPrice: 89.00, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400', category: 'Accessories', brandId: 'apple', brandName: 'Apple', rating: 4, reviews: 85, tag: '50% OFF', soldCount: 78, totalStock: 100, isFlashSale: true },
  { id: 'fs3', name: 'Smart Home Hub v3', price: 199.00, oldPrice: 299.00, image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=400', category: 'Smart Home', brandId: 'samsung', brandName: 'Samsung', rating: 5, reviews: 210, tag: 'NEW', soldCount: 12, totalStock: 30, isFlashSale: true },
  { id: 'fs4', name: 'Ergonomic Gaming Chair', price: 150.00, oldPrice: 320.00, image: 'https://images.unsplash.com/photo-1598550476439-6847785fce6c?auto=format&fit=crop&q=80&w=400', category: 'Furniture', brandId: 'adidas', brandName: 'Adidas', rating: 4, reviews: 45, tag: 'DEAL', soldCount: 22, totalStock: 25, isFlashSale: true },
  { id: 'fs5', name: '4K Ultra HD Dash Cam', price: 65.00, oldPrice: 120.00, image: 'https://images.unsplash.com/photo-1549233861-ce6e3fba09d7?auto=format&fit=crop&q=80&w=400', category: 'Automobile', brandId: 'toyota', brandName: 'Toyota', rating: 4, reviews: 30, tag: 'FLASH', soldCount: 95, totalStock: 100, isFlashSale: true },
  { id: 'fs6', name: 'Portable Solar Power Bank', price: 35.00, oldPrice: 60.00, image: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&q=80&w=400', category: 'Gadgets', brandId: 'hp', brandName: 'HP', rating: 5, reviews: 56, tag: 'ECO', soldCount: 140, totalStock: 150, isFlashSale: true },
];

export const DIGITAL_PRODUCTS: Product[] = [
  { id: 'd1', name: 'Netflix Premium 4K UHD Subscription (1 Month)', price: 15.99, image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=400', category: 'Subscription', brandId: 'sony', brandName: 'Sony', rating: 5, reviews: 250, tag: 'DIGITAL' },
  { id: 'd2', name: 'Spotify Family Premium 12 Month Code', price: 99.00, image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=400', category: 'Music', brandId: 'sony', brandName: 'Sony', rating: 4, reviews: 180, tag: 'INSTANT' },
  { id: 'd3', name: 'Amazon Prime Gift Card $50 Value', price: 50.00, image: 'https://images.unsplash.com/photo-1523474253046-2cd2c78a9db1?auto=format&fit=crop&q=80&w=400', category: 'Card', brandId: 'apple', brandName: 'Apple', rating: 5, reviews: 95 },
  { id: 'd4', name: 'Steam Wallet Card Global Key', price: 20.00, image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=400', category: 'Gaming', brandId: 'sony', brandName: 'Sony', rating: 4, reviews: 320 },
];

export const ALL_PRODUCTS: Product[] = [
  ...FLASH_SALE_PRODUCTS,
  ...WOMEN_PRODUCTS,
  ...MEN_PRODUCTS,
  ...AUTO_PRODUCTS,
  ...SPORTS_PRODUCTS,
  ...BEAUTY_PRODUCTS,
  ...KIDS_PRODUCTS,
  ...JEWELRY_PRODUCTS,
  ...HOME_PRODUCTS,
  ...DIGITAL_PRODUCTS
];

export const FEATURED_PRODUCTS: Product[] = ALL_PRODUCTS.slice(0, 12);

export const BANNERS: Banner[] = [
  { id: 'b1', title: "WOMEN'S CLOTHES", subtitle: 'Elegance Redefined', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=600', color: 'bg-pink-100' },
  { id: 'b2', title: 'MAKEUP ITEMS', subtitle: 'Glow Every Day', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600', color: 'bg-orange-50' },
  { id: 'b3', title: 'PREMIUM PERFUMES', subtitle: 'Signature Scents', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=600', color: 'bg-blue-50' },
];
