import './discount-tag.scss';
import { FC } from "react";

const DiscountTag: FC<{ discount?: string | number; className?: string; }> = ({ discount, className = '' }) => {

  return discount ? (
    <div className={ `discount-tag-wrapper ${className}`.trim() } >
      <span className='discount-tag'>-{ discount }%</span>
    </div>
  ) : null;
};

export default DiscountTag;