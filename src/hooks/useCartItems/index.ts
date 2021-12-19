import { useReducer, useCallback } from "react";
import { useGetCartItems, addCartItem, removeCartItem } from './cartItemUtils';
import { cartItemsReducer, cartItemsInitialState } from './cartItemsReducer';

const useCartItems = () => {
  const [cartDetails, dispatchAction] = useReducer(cartItemsReducer, cartItemsInitialState);

  const { isLoading } = useGetCartItems({
    onError: useCallback((error) => dispatchAction({ type: 'fetch-error', payload: error }), []),
    onSuccess: useCallback((cartItems) => dispatchAction({ type: 'fetch-success', payload: cartItems }), []),
  });

  return {
    ...cartDetails,
    removeCartItem,
    addCartItem,
    isLoading,
  };
};

export default useCartItems;