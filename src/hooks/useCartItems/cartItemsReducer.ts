import { CartItem, CartItems } from "../../types";

export interface CartItemsState {
  cartItems: null | CartItems;
  error: null | unknown;
  isLoading: boolean;
}

export type CartItemsAction =
  | { type: 'remove-item' | 'add-item' | 'sort-item'; }
  | { type: 'fetch-success'; payload: CartItems; }
  | { type: 'fetch-error'; payload: unknown; };

export const cartItemsInitialState: CartItemsState = {
  cartItems: [],
  isLoading: false,
  error: null,
};

export const cartItemsReducer = (state: CartItemsState, action: CartItemsAction): CartItemsState => {
  const { type } = action;

  switch (type) {
    case 'fetch-error': return {
      ...state,
      error: action.payload,
    };

    case 'fetch-success': return {
      ...state,
      cartItems: action.payload
    };

    default: return state;
  }
};