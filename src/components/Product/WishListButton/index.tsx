import './wishlist-icon.scss';
import { useState, FC } from "react";
import IconButton from "../../IconButton";

import { ReactComponent as WishListIcon } from './favorite.svg';
import { ReactComponent as WishListCheckedIcon } from './favorite-filled.svg';

const WishListButton: FC<{}> = () => {
  const [checked, setChecked] = useState(false);

  return (
    <IconButton onClick={ () => setChecked(!checked) } className='product-wishlist-button' title='wishlist'>
      { checked ? <WishListCheckedIcon className="wishlist-icon checked" /> : <WishListIcon className="wishlist-icon" /> }
    </IconButton>
  );
};

export default WishListButton;