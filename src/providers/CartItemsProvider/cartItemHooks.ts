import { useQuery, UseQueryOptions } from "react-query";
import { fetchCartItems } from './cartItemUtils';
import { CartItems } from "../../types";

interface GetCartItemsProps {
  onError: NonNullable<UseQueryOptions<unknown>['onError']>;
  onSuccess: NonNullable<UseQueryOptions<CartItems>['onSuccess']>;
}

export const useGetCartItems = ({ onSuccess, onError }: GetCartItemsProps) => {
  return useQuery('cart-items', fetchCartItems, {
    onError, onSuccess
  });
};
