import './add-to-cart.scss';
import IconButton from '../../../IconButton';
import { ReactComponent as CartIcon } from './cart-icon.svg';

interface AddToCartProps {
  onClick?(): void;
}

export default function AddToCartButton({ onClick }: AddToCartProps) {
  return (
    <IconButton onClick={ onClick } className="add-to-cart-button invert-on-hover" title='add to cart'>
      <CartIcon className="cart-icon" />
    </IconButton>
  );
};

AddToCartButton.Extended = function AddToCartButtonExtended({ onClick }: AddToCartProps) {
  return (
    <IconButton onClick={ onClick } className="add-to-cart-button invert-on-hover extended" title='add to cart' >
      <span className='add-to-cart-text-large'>add to cart</span>
      <CartIcon className="cart-icon" />
    </IconButton>
  );
};