import { useEffect } from "react";
import { useQuery } from "react-query";
import { CartItem, CartItems } from "../../types";

interface GetCartItemsProps {
  onSuccess(cartItems: CartItems): void;
  onError(error: unknown): void;
}

const fetchCartItems = async (): Promise<CartItems> => ({}) as any;

export const useGetCartItems = ({ onSuccess, onError }: GetCartItemsProps) => {
  const queryResults = useQuery('cart-items', fetchCartItems);
  const { data, isLoading, isError, error } = queryResults;

  useEffect(() => {
    isError && onError(error);
    data && onSuccess(data);

  }, [isError, error, data, isLoading, onError, onSuccess]);

  return queryResults;
};

export const addCartItem = (): Promise<CartItem> => ({} as any);
export const removeCartItem = (): Promise<CartItem> => ({} as any);
