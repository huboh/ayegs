import './product-image.scss';

import { FC } from 'react';
import { Link } from 'react-router-dom';

interface ProductImageProps {
  title: string;
  className?: string;
  productLink: string;
  mainImageSrc: string;
}

const ProductImage: FC<ProductImageProps> = ({ mainImageSrc, className = '', title, productLink, ...otherProps }) => {

  return (
    <div className={ `product-small-image-wrapper ${className}`.trim() }{ ...otherProps }>
      <Link to={ productLink } className='image-link-wrapper'>
        <img className='product-image' src={ mainImageSrc } alt={ title } />
      </Link>
    </div>
  );
};

export default ProductImage;