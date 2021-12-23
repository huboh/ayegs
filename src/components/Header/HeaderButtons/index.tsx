import './headerButton.scss';

import { FC, CSSProperties, useRef } from 'react';

import IconButton from '../../IconButton';
import { ReactComponent as UserSvgIcon } from './icons/user.svg';
import { ReactComponent as CartSvgIcon } from './icons/cart.svg';
import { ReactComponent as WishlistSvgIcon } from './icons/favorite.svg';
import { ReactComponent as HamburgerSvgIcon } from './icons/hamburger-menu.svg';
import useEventListener from '../../../hooks/useEventListener';
import useCartItems from '../../../hooks/useCartItems';

export interface ClickableButtonProps {
  style?: CSSProperties;
  onClick(): void;
}

export const HamburgerButton: FC<ClickableButtonProps> = ({ onClick, style }) => {
  return (
    <IconButton onClick={ onClick } style={ style } title='hamburger button'>
      <HamburgerSvgIcon />
    </IconButton>
  );
};

export const CartIcon: FC<ClickableButtonProps> = ({ onClick }) => {
  const { cartItemsTotal, } = useCartItems();
  const cartButtonRef = useRef<HTMLButtonElement>(null);

  useEventListener({
    eventType: 'click',
    target: cartButtonRef,
    eventHandler: (e) => { console.log(e); }
  });

  return (
    <IconButton onClick={ onClick } className='cart-button' title='cart' ref={ cartButtonRef }>
      <CartSvgIcon />
      <span className='item-count-wrapper' >
        <span className='item-count'>{ cartItemsTotal }</span>
      </span>
    </IconButton>
  );
};

export const WishlistIcon: FC<ClickableButtonProps & { itemCount?: number; }> = ({ onClick, itemCount = 0 }) => {
  const wishlistItemCount = itemCount;

  return (
    <IconButton onClick={ onClick } className='wishlist-button' title='wishlist'>
      <WishlistSvgIcon />
      <span className='item-count-wrapper'>
        <span className='item-count'>{ wishlistItemCount }</span>
      </span>
    </IconButton>
  );
};

export const UserAccountButton: FC<ClickableButtonProps> = ({ onClick }) => {
  return (
    <IconButton onClick={ onClick } className='user-account-button' title='user'>
      <UserSvgIcon />
      <span className="user-greeting-text">Hello, Sign in <br />or Register</span>
    </IconButton>
  );
};