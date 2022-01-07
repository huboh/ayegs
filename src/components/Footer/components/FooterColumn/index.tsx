import './footer-column.scss';
import { FC } from "react";

interface ColumnProps {
  columnTitle: string;
}

const FooterColumn: FC<ColumnProps> = ({ children, columnTitle }) => {

  return (
    <div className="footer-column">
      <h1 className="column-title">{ columnTitle }</h1>
      <ul className="column-item-wrapper">{ children }</ul>
    </div>
  );
};

export default FooterColumn;