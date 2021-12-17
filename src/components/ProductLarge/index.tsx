import './product-card-large.scss';
import { FC } from "react";
import { Product } from "../../types";

// import DiscountTag from './DiscountTag';
import ProductInfo from './ProductInfo';
import ProductImage from './ProductImage';
// import WishListButton from './WishListButton';

interface ProductProps {
  productData: Product;
}

const ProductLarge: FC<ProductProps> = ({ productData, ...otherProps }) => {
  const { category, price, title, mainImage, discount, productId } = productData;
  const productLink = `products/${productId}`;

  return (
    <div className="product-card-large" { ...otherProps }>
      {/* <WishListButton />
      <DiscountTag { ...{ discount } } /> */}
      <ProductImage { ...{ mainImageSrc: mainImage, title, productLink } } />
      <ProductInfo { ...{ category, price, title, productLink } } />
    </div>
  );
};

export default ProductLarge;