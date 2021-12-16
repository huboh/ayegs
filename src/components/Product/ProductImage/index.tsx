import './product-image.scss';

import { FC } from 'react';
import { Link } from 'react-router-dom';

interface ProductImageProps {
  title: string;
  mainImageSrc: string;
}

const ProductImage: FC<ProductImageProps> = ({ mainImageSrc, title, ...otherProps }) => {

  return (
    <div className="product-image-wrapper" { ...otherProps }>
      <Link to={ '/product' } className='image-link-wrapper'>
        <img className='product-image' src={ mainImageSrc } alt={ title } />
      </Link>
    </div>
  );
};

export default ProductImage;