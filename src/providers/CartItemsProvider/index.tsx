import { createContext, useReducer, useCallback, FC } from 'react';
import { cartItemsReducer, cartItemsInitialState } from './cartItemsReducer';
import { useGetCartItems } from './cartItemHooks';

const CartItemsContext = createContext(cartItemsInitialState);

const CartItemsProvider: FC = ({ children }) => {
  const [cartItems, dispatchAction] = useReducer(cartItemsReducer, cartItemsInitialState);

  const { isLoading } = useGetCartItems({
    onError: useCallback((error) => dispatchAction({ type: 'fetch-error', payload: error }), []),
    onSuccess: useCallback((cartItems) => dispatchAction({ type: 'fetch-success', payload: cartItems }), []),
  });

  return (
    <CartItemsContext.Provider value={ { ...cartItems, isLoading } }>
      { children }
    </CartItemsContext.Provider>
  );
};

export {
  CartItemsContext,
  CartItemsProvider as default,
};