import './product-card.scss';

import { FC } from "react";
import { Product as ProductProp } from "../../types";

import ProductInfo from './ProductInfo';
import ProductImage from './ProductImage';

const DiscountTag = () => {

  return (
    <div className="product-info-wrapper" style={ { position: 'absolute', zIndex: '-2' } }>

    </div>
  );
};

const Product: FC<{ productData: ProductProp; }> = ({ productData, ...otherProps }) => {
  const { category, price, title, mainImage } = productData;

  return (
    <div className="product-card" { ...otherProps }>
      <DiscountTag />
      <ProductImage { ...{ mainImageSrc: mainImage, title } } />
      <ProductInfo { ...{ category, price, title } } />
    </div>
  );
};

export default Product;