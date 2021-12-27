import './product-card-large.scss';
import { FC } from "react";
import { Product } from "../../../../types";

import ProductInfo from './ProductInfo';
import DiscountTag from '../../components/DiscountTag';
import ProductImage from '../../components/ProductImage';
import WishListButton from '../../components/WishListButton';
import AddToCartButton from '../../components/AddToCartButton';

export interface ProductExtendedProps {
  productData: Product;
}

const ProductCardExtended: FC<ProductExtendedProps> = ({ productData, ...otherProps }) => {
  const { category, price, title, mainImage, discount, ratings, productId } = productData;
  const productLink = `products/${productId}`;

  return (
    <div className="product-card-large" { ...otherProps }>
      <DiscountTag { ...{ discount, className: 'invert' } } />
      <ProductImage { ...{ mainImageSrc: mainImage, title, productLink, className: 'product-extended' } } />
      <ProductInfo { ...{ category, price, title, productLink, ratings } } />

      <div className="bottom-cta-wrappers">
        <WishListButton.Extended />
        <AddToCartButton.Extended />
      </div>
    </div>
  );
};

export default ProductCardExtended;