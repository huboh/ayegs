import './product-card.scss';

import { FC } from "react";
import { Product } from "../../types";

interface ProductInfoProps {
  title: string;
  category: string;
  price: string;
}

interface ProductImageProps {
  title: string;
  mainImageSrc: string;
}

const ProductImage: FC<ProductImageProps> = ({ mainImageSrc, title }) => {

  return (
    <div className="product-image-wrapper">
      <img className='product-image' src={ mainImageSrc } alt={ title } />
    </div>
  );
};

const ProductInfo: FC<ProductInfoProps> = ({ price, category, title }) => {

  return (
    <div className="product-info-wrapper">

    </div>
  );
};

const DiscountTag = () => {

  return (
    <div className="product-info-wrapper">

    </div>
  );
};

const ProductCard: FC<{ productData: Product; }> = ({ productData, ...otherProps }) => {
  const { category, price, title, mainImage } = productData;

  return (
    <div className="product-card" { ...otherProps }>
      <DiscountTag />
      <ProductImage { ...{ mainImageSrc: mainImage, title } } />
      <ProductInfo { ...{ category, price, title } } />
    </div>
  );
};

export default ProductCard;