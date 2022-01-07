import { CartItem, CartItems } from "../../types";

const dummyProducts: CartItems = [
  {
    id: 1,
    mainImage: '/img-1.jpg',
    price: '20',
    discount: 10,
    productId: 'sfddsryhsr',
    ratings: 5,
    title: 'air jordan mens air jordan sneakers orignal air jordan mens air jordan sneakers orignal',
    descriptions: {},
    reviews: 22,
    images: [''],
    category: 'sneakers',
    quantity: 1,
  },
  {
    id: 2,
    mainImage: '/img-2.jpg',
    price: '20',
    productId: 'sfsrgrhsr',
    ratings: 1,
    discount: 22,
    title: 'air jordan mens air jordan sneakers orignal',
    descriptions: {},
    reviews: 22,
    images: [''],
    category: 'sneakers',
    quantity: 1,
  },
  {
    id: 3,
    mainImage: '/img-3.webp',
    price: '20',
    productId: 'srtgbsyhsr',
    ratings: 3,
    discount: 99,
    title: 'air jordan mens air jordan sneakers orignal',
    descriptions: {},
    reviews: 22,
    images: [''],
    category: 'sneakers',
    quantity: 1,
  },
  {
    id: 4,
    mainImage: '/img-4.jpg',
    price: '20',
    productId: 'syrtshyhsr',
    ratings: 0,
    discount: 30,
    title: 'a3ir jordan mens air jordan sneakers orignal',
    descriptions: {},
    reviews: 22,
    images: [''],
    category: 'sneakers',
    quantity: 1,
  }
];

export const fetchCartItems = async (): Promise<CartItems> => dummyProducts;

export const addCartItem = (): Promise<CartItem> => ({} as any);

export const removeCartItem = (): Promise<CartItem> => ({} as any);

export const calculateCartInfo = (cartItems: CartItems | null) => {
  const initialContentInfo = {
    cartItemsTotal: 0,
    subTotalPrice: 0,
    totalPrice: 0,
  };

  const calcTotal = (items: CartItems) => items.reduce(
    (contentInfo, { quantity, price }) => {
      contentInfo.subTotalPrice += Number(price) * quantity;
      contentInfo.cartItemsTotal += quantity;

      return contentInfo;
    }, initialContentInfo
  );

  return cartItems ? calcTotal(cartItems) : initialContentInfo;
};