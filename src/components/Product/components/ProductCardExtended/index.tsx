import './product-card-large.scss';
import { FC } from "react";
import { Product } from "../../../../types";

import DiscountTag from './DiscountTag';
import ProductInfo from './ProductInfo';
import ProductImage from './ProductImage';
import AddToCartButton from './AddToCartButton';
import WishListButton from './WishListButton';

export interface ProductExtendedProps {
  productData: Product;
}

const ProductCardExtended: FC<ProductExtendedProps> = ({ productData, ...otherProps }) => {
  const { category, price, title, mainImage, discount, ratings, productId } = productData;
  const productLink = `products/${productId}`;

  return (
    <div className="product-card-large" { ...otherProps }>
      <DiscountTag { ...{ discount, className: 'invert' } } />
      <ProductImage { ...{ mainImageSrc: mainImage, title, productLink } } />
      <ProductInfo { ...{ category, price, title, productLink, ratings } } />

      <div className="bottom-cta-wrappers">
        <WishListButton />
        <AddToCartButton />
      </div>
    </div>
  );
};

export default ProductCardExtended;