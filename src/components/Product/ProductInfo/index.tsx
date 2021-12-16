import './product-info.scss';
import { FC } from "react";
import { Link } from 'react-router-dom';
import AddToCartButton from "../../AddToCartButton";

interface ProductInfoProps {
  title: string;
  category: string;
  price: string;
}

const currencyFormat = {
  currency: 'USD',
  lang: 'en-US'
};

const formatCurrency = (amount: number | string, format = currencyFormat) => {
  amount = Number(amount);

  return new Intl.NumberFormat(format.lang, {
    style: 'currency',
    currency: format.currency,
  }).format(amount);
};

const ProductInfo: FC<ProductInfoProps> = ({ price, category, title }) => {

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