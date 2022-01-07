import './product-image.scss';

import { FC } from 'react';
import Img from '../../../Img';
import { Link } from 'react-router-dom';

interface ProductImageProps {
  title: string;
  className?: string;
  productLink: string;
  mainImageSrc: string;
}

const ProductImage: FC<ProductImageProps> = ({ mainImageSrc, className = '', title, productLink, ...otherProps }) => {

  return (
    <div className={ `product-image-wrapper ${className}`.trim() } { ...otherProps }>
      <Link to={ productLink } className='image-link-wrapper'>
        <Img className='product-image' src={ mainImageSrc } alt={ title } fallBackSrc={ "/img-2.jpg" } />
      </Link>
    </div>
  );
};

export default ProductImage;