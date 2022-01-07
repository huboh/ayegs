import './cart-popup.scss';
import { FC, useCallback } from 'react';
import CartPopupItem from './CartItem';
import { LinkButton } from '../../Buttons';
import useCurrency from '../../../hooks/useCurrency';
import useCartItems from '../../../hooks/useCartItems';
import { FaCartArrowDown, FaSadTear } from 'react-icons/fa';

export interface CartPopupProps {
  display: boolean;
  className?: string;
}

const CartPopup: FC<CartPopupProps> = ({ display, className = '' }) => {
  const { formatCurrency } = useCurrency();
  const { contents: cartItems, subTotalPrice } = useCartItems();

  const onCartItemDelete = useCallback((cartItemId) => {
    console.log(cartItemId);
  }, []);

  return !display ? null : (
    <section className={ `cart-popup ${className}`.trim() }>
      { cartItems ? (
        <ul className="cart-items-wrapper">
          { cartItems?.map((cartItem) => (
            <li key={ cartItem.id }>
              <CartPopupItem itemDetails={ cartItem } onDelete={ onCartItemDelete } />
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
    </section>
  );
};

export default CartPopup;