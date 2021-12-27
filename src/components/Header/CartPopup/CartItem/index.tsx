import './cart-item.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../../../../types';
import IconButton from '../../../IconButton';
import useCurrency from '../../../../hooks/useCurrency';
import { ReactComponent as DeleteButtonIcon } from './delete-bin.svg';
import ProductImage from '../../../Product/components/ProductImage';

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

interface DeleteButtonProps<T = CartItem['productId']> {
  cartItemId: T;
  onDelete(cartItemId: T): void;
}

interface CartItemProps {
  itemDetails: CartItem;
  onDelete(cartItemId: CartItem['productId']): void;
}

const CartItemImage: FC<CartItemImageProps> = (props) => {
  return (
    <ProductImage { ...props } className='product-small cart-item-image' />
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
        <p className='quantity-wrapper'>Qty: <span>{ quantity }</span></p>
        <span className='x'>x</span>
        <p className='price-wrapper'>{ formatCurrency(price) }</p>
      </div>
    </div>
  );
};

const DeleteButton: FC<DeleteButtonProps> = ({ onDelete, cartItemId }) => {

  return (
    <IconButton className='remove-cart-item-icon' onClick={ () => onDelete(cartItemId) }>
      <DeleteButtonIcon />
    </IconButton>
  );
};

const CartPopupItem: FC<CartItemProps> = ({ itemDetails, onDelete }) => {
  const { price, title, mainImage, productId } = itemDetails;
  const productLink = `products/${productId}`;

  return (
    <div className="cart-popup-item">
      <CartItemImage { ...{ mainImageSrc: mainImage, title, productLink } } />
      <CartItemInfo  { ...{ title, productLink, price, quantity: 1 } } />
      <DeleteButton { ...{ onDelete, cartItemId: productId } } />
    </div>
  );
};

export default CartPopupItem;