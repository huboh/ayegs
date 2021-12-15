import './product-carousel.scss';

import { FC } from "react";
import { Products } from "../../types";
import ProductCard from '../ProductCard';

interface ProductCarouselProps {
  title: string;
  products: Products | [];
}

const ProductCarousel: FC<ProductCarouselProps> = ({ products, title }) => {

  return (
    <div className="product-carousel">
      <h1 className='carousel-title'>{ title }</h1>
      <div className="product-carousel-wrapper">
        { products?.map((product) => <ProductCard key={ product.productId } productData={ product } />) }
      </div>
    </div>
  );
};

export default ProductCarousel;