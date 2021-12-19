import { useQuery, UseQueryOptions } from "react-query";
import { CartItem, CartItems } from "../../types";

interface GetCartItemsProps {
  onError: UseQueryOptions<unknown>['onError'];
  onSuccess: UseQueryOptions<CartItems>['onSuccess'];
}

const fetchCartItems = async (): Promise<CartItems> => [{ cart: '😋😋' }] as any;

export const useGetCartItems = ({ onSuccess, onError }: GetCartItemsProps) => {
  return useQuery('cart-items', fetchCartItems, {
    onError, onSuccess
  });
};

export const addCartItem = (): Promise<CartItem> => ({} as any);
export const removeCartItem = (): Promise<CartItem> => ({} as any);
