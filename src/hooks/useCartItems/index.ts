import { useReducer } from "react";
import { useGetCartItems, addCartItem, removeCartItem } from './cartItemUtils';
import { cartItemsReducer, cartItemsInitialState } from './cartItemsReducer';

const useCartItems = () => {
  const [cartDetails, dispatchAction] = useReducer(cartItemsReducer, cartItemsInitialState);

  const { isLoading } = useGetCartItems({
    onError: (error) => dispatchAction({ type: 'fetch-error', payload: error }),
    onSuccess: (cartItems) => dispatchAction({ type: 'fetch-success', payload: cartItems })
  });

  return {
    ...cartDetails,
    isLoading,
    addCartItem,
    removeCartItem
  };
};

export default useCartItems;