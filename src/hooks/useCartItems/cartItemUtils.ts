import { useQuery, UseQueryOptions } from "react-query";
import { CartItem, CartItems } from "../../types";
import { dummyProducts } from "../../components/ProductCampaign";

interface GetCartItemsProps {
  onError: NonNullable<UseQueryOptions<unknown>['onError']>;
  onSuccess: NonNullable<UseQueryOptions<CartItems>['onSuccess']>;
}

const fetchCartItems = async (): Promise<CartItems> => dummyProducts;

export const useGetCartItems = ({ onSuccess, onError }: GetCartItemsProps) => {
  return useQuery('cart-items', fetchCartItems, {
    onError, onSuccess
  });
};

export const addCartItem = (): Promise<CartItem> => ({} as any);
export const removeCartItem = (): Promise<CartItem> => ({} as any);
