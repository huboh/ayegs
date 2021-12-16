export interface Product {
  descriptions: object;
  mainImage: string;
  productId: string;
  category: string;
  images: string[];
  ratings: number;
  reviews: number;
  price: string;
  title: string;
  id: number;
}

export type Products = Product[];

export interface CurrencyFormat {
  currency: string;
  lang: string;
}