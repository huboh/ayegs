import { CartItems } from "../../types";
import { addCartItem, removeCartItem, calculateCartInfo } from './cartItemUtils';

export interface CartItemsState {
  contents: null | CartItems;
  error: null | unknown;
  isLoading: boolean;
  cartItemsTotal: number,
  subTotalPrice: number,
  totalPrice: number,
  addCartItem: () => void;
  removeCartItem: () => void;
}

export type CartItemsAction =
  | { type: 'remove-item' | 'add-item' | 'sort-item'; }
  | { type: 'fetch-success'; payload: CartItems; }
  | { type: 'fetch-error'; payload: unknown; };

export const cartItemsInitialState: CartItemsState = {
  contents: null,
  isLoading: false,
  error: null,
  cartItemsTotal: 0,
  subTotalPrice: 0,
  totalPrice: 0,
  addCartItem,
  removeCartItem,
};

export const cartItemsReducer = (state: CartItemsState, action: CartItemsAction): CartItemsState => {
  const { type } = action;

  switch (type) {
    case 'fetch-error': return {
      ...state,
      isLoading: false,
      error: action.payload,
    };

    case 'fetch-success': return {
      ...state,
      isLoading: false,
      ...calculateCartInfo(action.payload),
      contents: action.payload
    };

    default: return state;
  }
};