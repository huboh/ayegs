import './headerButton.scss';

import { FC, CSSProperties } from 'react';

import IconButton from '../../IconButton';
import { ReactComponent as UserSvgIcon } from './icons/user.svg';
import { ReactComponent as CartSvgIcon } from './icons/cart.svg';
import { ReactComponent as WishlistSvgIcon } from './icons/favorite.svg';
import { ReactComponent as HamburgerSvgIcon } from './icons/hamburger-menu.svg';

export interface ClickableButtonProps {
  style?: CSSProperties;
  onClick(): void;
}

export const HamburgerButton: FC<ClickableButtonProps> = ({ onClick, style }) => {
  return (
    <IconButton onClick={ onClick } style={ style }>
      <HamburgerSvgIcon />
    </IconButton>
  );
};

export const CartIcon: FC<ClickableButtonProps & { itemCount?: number; }> = ({ onClick, itemCount = 0 }) => {
  const cartItemCount = itemCount;

  return (
    <IconButton onClick={ onClick } className='cart-button'>
      <CartSvgIcon />
      <span className='item-count-wrapper'>
        <span className='item-count'>{ cartItemCount }</span>
      </span>
    </IconButton>
  );
};

export const WishlistIcon: FC<ClickableButtonProps & { itemCount?: number; }> = ({ onClick, itemCount = 0 }) => {
  const wishlistItemCount = itemCount;

  return (
    <IconButton onClick={ onClick } className='wishlist-button'>
      <WishlistSvgIcon />
      <span className='item-count-wrapper'>
        <span className='item-count'>{ wishlistItemCount }</span>
      </span>
    </IconButton>
  );
};

export const UserAccountButton: FC<ClickableButtonProps> = ({ onClick }) => {
  return (
    <IconButton onClick={ onClick } className='user-account-button'>
      <UserSvgIcon />
      <span className="user-greeting-text">Hello, Sign in <br />or Register</span>
    </IconButton>
  );
};