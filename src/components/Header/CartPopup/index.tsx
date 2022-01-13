import { FC } from 'react';

import './cart-popup.scss';
import CartPopupItem from './CartItem';
import { LinkButton } from '../../Buttons';

import { FaCartArrowDown, FaSadTear } from 'react-icons/fa';

import useAnimatedComponent from '../../../hooks/useAnimatedComponent';
import useCartItems from '../../../hooks/useCartItems';
import useCurrency from '../../../hooks/useCurrency';

export interface CartPopupProps {
  display: boolean;
  className?: string;
}

const CartPopup: FC<CartPopupProps> = ({ display, className = '' }) => {
  const { formatCurrency } = useCurrency();
  const { contents: cartItems, subTotalPrice, removeCartItem } = useCartItems();
  const [AnimatedComponent] = useAnimatedComponent({ display, tagName: 'section', className: `cart-popup ${className}` });

  return (
    <AnimatedComponent>
      { cartItems ? (
        <ul className="cart-items-wrapper">
          { cartItems?.map((cartItem) => (
            <li key={ cartItem.id }>
              <CartPopupItem itemDetails={ cartItem } onDelete={ removeCartItem } />
            </li>
          )) }
        </ul>
      ) : (
        <div className="empty-display">
          <FaSadTear />
          <p className='empty-text'>
            shopping cart is empty, continue shopping
          </p>
        </div>
      ) }

      <p className='cart-info'>
        <span>Cart Total:</span>
        <span>{ formatCurrency(subTotalPrice) }</span>
      </p>

      <div className="cta-button-wrappers">
        <LinkButton.Transparent link='/cart' text='view cart' icon={ <FaCartArrowDown /> } />
        <LinkButton link='/checkout' text='proceed to checkout' icon={ <FaCartArrowDown /> } />
      </div>
    </AnimatedComponent>
  );
};

export default CartPopup;