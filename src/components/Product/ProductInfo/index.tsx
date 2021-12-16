import './product-info.scss';
import { FC } from "react";
import { Link } from 'react-router-dom';
import AddToCartButton from "../../AddToCartButton";
import useCurrency from '../../../hooks/useCurrency';

interface ProductInfoProps {
  title: string;
  category: string;
  price: string;
}

const ProductInfo: FC<ProductInfoProps> = ({ price, category, title }) => {
  const { formatCurrency } = useCurrency();

  return (
    <div className="product-info-wrapper">
      <Link className='link product-category' to={ `category/${category}` }>
        { category }
      </Link>
      <h1 className='product-title'>
        <Link className='link' to={ `products/` }>{ title }</Link>
      </h1>
      <div className="add-to-cart-wrapper">
        <p className='product-price-wrapper'>
          <span className='discount-price'>{ formatCurrency(price) }</span>
          <span className='original-price'>{ formatCurrency(30.99) }</span>
        </p>
        <AddToCartButton />
      </div>
    </div>
  );
};

export default ProductInfo;