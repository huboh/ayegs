import './discount-tag.scss';
import { FC } from "react";

interface DiscountTagProps {
  discount?: string | number;
  className?: string;
};

const DiscountTag: FC<DiscountTagProps> = ({ discount, className = '' }) => {

  return discount ? (
    <div className={ `discount-tag-wrapper ${className}`.trim() } >
      <span className='discount-tag'>-{ discount }%</span>
    </div>
  ) : null;
};

export default DiscountTag;