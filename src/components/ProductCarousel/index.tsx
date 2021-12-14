import './product-carousel.scss';

import { FC } from "react";
import { Products } from "../../types";
import ProductCard from '../ProductCard';

interface ProductCarouselProps {
  products: Products | [];
}

const ProductCarousel: FC<ProductCarouselProps> = ({ products }) => {

  return (
    <div className="product-carousel-wrapper">
      { products?.map((product) => <ProductCard key={ product.productId } productData={ product } />) }
    </div>
  );
};

export default ProductCarousel;