import './column-item.scss';
import { FC } from "react";
import { Link } from "react-router-dom";

export interface ItemProps {
  itemLink: string;
  itemText: string;
}

const ColumnItem: FC<ItemProps> = ({ itemLink, itemText, children }) => {

  return (
    <li>
      <Link to={ itemLink } className='column-item-link'>
        { itemText ?? children }
      </Link>
    </li>
  );
};

export default ColumnItem;