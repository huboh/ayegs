import './add-to-cart.scss';

import { FC } from "react";
import IconButton from "../IconButton";

import { ReactComponent as CartIcon } from './cart-icon.svg';

const AddToCartButton: FC<{}> = () => {

  return (
    <IconButton onClick={ () => { } } className="add-to-cart-button" >
      <CartIcon className="cart-icon" />
    </IconButton>
  );
};

export default AddToCartButton;