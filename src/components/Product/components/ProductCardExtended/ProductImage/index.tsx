import './product-image.scss';

import { FC } from 'react';
import Img from '../../../../Img';
import { Link } from 'react-router-dom';

interface ProductImageProps {
  title: string;
  productLink: string;
  mainImageSrc: string;
}

const ProductImage: FC<ProductImageProps> = ({ mainImageSrc, title, productLink, ...otherProps }) => {

  return (
    <div className="product-large-image-wrapper" { ...otherProps }>
      <Link to={ productLink } className='image-link-wrapper'>
        <Img className='product-image' src={ mainImageSrc } alt={ title } fallBackSrc={ "/img-2.jpg" } />
      </Link>
    </div>
  );
};

export default ProductImage;