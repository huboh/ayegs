import './product-card-small.scss';
import { FC } from "react";
import ProductInfo from './ProductInfo';
import { Product } from "../../../../types";
import ProductImage from '../../components/ProductImage';

export interface ProductSmallProps {
  productData: Product;
}

const ProductCardSmall: FC<ProductSmallProps> = ({ productData, ...otherProps }) => {
  const { category, price, title, mainImage, ratings, productId } = productData;
  const productLink = `products/${productId}`;

  return (
    <div className="product-card-small" { ...otherProps }>
      <ProductImage { ...{ mainImageSrc: mainImage, title, productLink, className: 'product-small' } } />
      <ProductInfo { ...{ category, price, ratings, title, productLink } } />
    </div>
  );
};

export default ProductCardSmall;