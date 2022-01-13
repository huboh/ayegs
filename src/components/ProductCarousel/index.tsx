import './product-carousel.scss';

import { FC, Key } from "react";
import Product from '../Product';
import { Products } from "../../types";

interface ProductCarouselProps {
  title: string;
  products: Products | [];
  setProductComponent?: (productInfo: Products[0], key?: Key) => JSX.Element;
}

const ProductCarousel: FC<ProductCarouselProps> = ({ products, title, setProductComponent }) => {

  return (
    <section className="product-carousel">
      <h1 className='carousel-title'>{ title }</h1>

      <ul className="product-carousel-wrapper">
        { products?.map((product) => (
          <li key={ product.productId }>
            { setProductComponent?.(product) ?? <Product productData={ product } /> }
          </li>
        )) }
      </ul>
    </section>
  );
};

const ProductVerticalCarousel: FC<ProductCarouselProps> = ({ products, title, setProductComponent }) => {

  return (
    <div className="product-carousel product-verical-carousel">
      <h1 className='carousel-title vertical-carousel-title'>{ title }</h1>

      <ul className="product-list-carousel-wrapper product-list-carousel-wrapper">
        { products?.slice(0, 3).map((product) => (
          <li key={ product.productId }>
            { setProductComponent?.(product) ?? <Product.Small productData={ product } /> }
          </li>
        )) }
      </ul>
    </div>
  );
};


export { ProductCarousel as default, ProductVerticalCarousel };