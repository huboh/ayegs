import './cart-item.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../../../../types';
import useCurrency from '../../../../hooks/useCurrency';
import ProductImage from '../../../ProductCardSmall/ProductImage';

interface CartItemImageProps {
  title: string;
  productLink: string;
  mainImageSrc: string;
}

interface CartItemInfoProps {
  title: string;
  productLink: string;
  quantity: number;
  price: string;
}

interface CartItemProps {
  itemDetails: CartItem;
}

const CartItemImage: FC<CartItemImageProps> = (props) => {
  return (
    <ProductImage { ...props } className='cart-item-image' />
  );
};

const CartItemInfo: FC<CartItemInfoProps> = ({ productLink, quantity, title, price }) => {
  const { formatCurrency } = useCurrency();

  return (
    <div className="cart-item-info">
      <h1 className='item-title'>
        <Link className='link' to={ productLink }>{ title }</Link>
      </h1>
      <div className="price-quantity-wrapper">
        <p className='quantity-wrapper'>Qty: { quantity }</p>
        <p className='price-wrapper'>{ formatCurrency(price) }</p>
      </div>
    </div>
  );
};

const CartPopupItem: FC<CartItemProps> = ({ itemDetails }) => {
  const { price, title, mainImage, productId } = itemDetails;
  const productLink = `products/${productId}`;

  return (
    <div className="cart-popup-item">
      <CartItemImage { ...{ mainImageSrc: mainImage, title, productLink } } />
      <CartItemInfo  { ...{ title, productLink, price, quantity: 1 } } />
    </div>
  );
};

export default CartPopupItem;