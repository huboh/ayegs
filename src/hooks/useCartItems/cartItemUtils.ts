import { useEffect } from "react";
import { useQuery } from "react-query";
import { CartItem, CartItems } from "../../types";

interface GetCartItemsProps {
  onError(error: unknown): void;
  onSuccess(cartItems: CartItems): void;
}

const fetchCartItems = async (): Promise<CartItems> => [{ cart: '😋😋' }] as any;

export const useGetCartItems = ({ onSuccess, onError }: GetCartItemsProps) => {
  const queryResults = useQuery('cart-items', fetchCartItems);
  const { data, isError, error } = queryResults;

  useEffect(() => {
    isError && onError(error);
    data && onSuccess(data);

  }, [isError, error, data, onError, onSuccess]);

  return queryResults;
};

export const addCartItem = (): Promise<CartItem> => ({} as any);
export const removeCartItem = (): Promise<CartItem> => ({} as any);
