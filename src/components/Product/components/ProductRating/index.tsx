import './product-rating.scss';
import { FC } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import Rating, { RatingProps } from '@mui/material/Rating';

interface ProductRatingProps extends RatingProps {
  name?: 'half-rating-read' | 'readonly' | 'simple-controlled' | string;
}

const ProductRating: FC<ProductRatingProps> = (props) => {
  const {
    name = 'half-rating-read', size = 'small', defaultValue = 0, precision = 0.5, ...otherProps
  } = props;

  return (
    <Rating
      readOnly
      name={ name }
      size={ size }
      { ...otherProps }
      precision={ precision }
      defaultValue={ defaultValue }
      icon={ <FaStar className='rating-icon' /> }
      emptyIcon={ <FaRegStar className='rating-icon empty-icon' /> }
    />
  );
};

export default ProductRating;