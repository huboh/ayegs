import './product-info.scss';
import { FC } from "react";
import { Link } from 'react-router-dom';
import useCurrency from '../../../hooks/useCurrency';

interface ProductInfoProps {
  productLink: string;
  category: string;
  title: string;
  price: string;
}

const ProductInfo: FC<ProductInfoProps> = ({ price, category, title, productLink }) => {
  const { formatCurrency } = useCurrency();

  return (
    <div className="product-large-info-wrapper">
      <Link className='link product-category' to={ `category/${category}` }>
        { category }
      </Link>
      <h1 className='product-title'>
        <Link className='link' to={ productLink }>{ title }</Link>
      </h1>
      <div className="price-rating-wrapper">
        <p className='product-price-wrapper'>
          <span className='discount-price'>{ formatCurrency(price) }</span>
          <span className='original-price'>{ formatCurrency(30.99) }</span>
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;