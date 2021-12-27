import './discount-tag.scss';
import { FC } from "react";

const DiscountTag: FC<{ discount?: string | number; }> = ({ discount }) => {

  return discount ? (
    <div className="discount-tag-wrapper">
      <span className='discount-tag'>-{ discount }%</span>
    </div>
  ) : null;
};

export default DiscountTag;