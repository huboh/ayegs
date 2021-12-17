import './product-carousel.scss';

import { FC, Key } from "react";
import { Products } from "../../types";
import Product from '../Product';

interface ProductCarouselProps {
  title: string;
  products: Products | [];
  setProductComponent?: (key: Key, productInfo: Products[0]) => JSX.Element;
}

const ProductCarousel: FC<ProductCarouselProps> = ({ products, title, setProductComponent }) => {

  return (
    <div className="product-carousel">
      <h1 className='carousel-title'>{ title }</h1>
      <div className="product-carousel-wrapper">
        { products?.map((product) => setProductComponent?.(product.productId, product) ?? (
          <Product key={ product.productId } productData={ product } />
        )) }
      </div>
    </div>
  );
};

export default ProductCarousel;