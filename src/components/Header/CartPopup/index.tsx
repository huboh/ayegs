import './cart-popup.scss';
import { FC } from 'react';
import { LinkButton } from '../../Buttons';
import { FaCartArrowDown, FaSadTear } from 'react-icons/fa';

export interface CartPopupProps {
  display: boolean;
  className?: string;
}

const CartPopup: FC<CartPopupProps> = ({ display, className = '' }) => {

  return !display ? null : (
    <section className={ `cart-popup ${className}`.trim() }>
      <ul className="cart-items-wrapper">
      </ul>
      <div className="empty-display">
        <FaSadTear />
        <p className='empty-text'>shopping cart is empty, continue shopping</p>
      </div>

      <p className='cart-info'>
        <span>Cart Total:</span>
        <span>$0.00</span>
      </p>

      <div className="cta-button-wrappers">
        <LinkButton link='/cart' text='view cart' icon={ <FaCartArrowDown /> } />
        <LinkButton link='/checkout' text='proceed to checkout' />
      </div>
    </section>
  );
};

export default CartPopup;