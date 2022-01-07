import './wishlist-button.scss';
import { useState } from "react";
import IconButton from "../../../IconButton";

import { ReactComponent as WishListIcon } from './favorite.svg';
import { ReactComponent as WishListCheckedIcon } from './favorite-filled.svg';

interface WishListProps {
  checked?: boolean;
  className?: string;
}

export default function WishListButton({ checked = false, className = '' }: WishListProps) {
  const [isChecked, setIsChecked] = useState(checked);
  const onClick = () => setIsChecked(!isChecked);

  return (
    <IconButton onClick={ onClick } className={ `product-wishlist-button ${className} `.trim() }>
      { isChecked ? <WishListCheckedIcon className="wishlist-icon checked" title='remove from wishlist' /> : (
        <WishListIcon className="wishlist-icon" title='add to wishlist' />
      ) }
    </IconButton>
  );
};

WishListButton.Extended = function WishListButtonExtended(props: WishListProps) {
  return <WishListButton className='extended invert-on-hover'{ ...props } />;
};