export interface CurrencyFormat {
  currency: string;
  lang: string;
}

export interface Product {
  descriptions: object;
  mainImage: string;
  productId: string;
  discount: number;
  category: string;
  images: string[];
  ratings: number;
  reviews: number;
  price: string;
  title: string;
  id: number;
}

export type Products = Product[];

export interface CartItem extends Product {
  quantity: number;
}
export type CartItems = CartItem[];