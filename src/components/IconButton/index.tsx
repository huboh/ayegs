import './iconButton.scss';
import { FC, MouseEvent, CSSProperties } from "react";

export interface IconButtonProps {
  className?: string;
  style?: CSSProperties;
  [whatever: string]: any;
  onClick(event: MouseEvent): void;
}

const IconButton: FC<IconButtonProps> = ({ children, style, onClick, className = '', ...otherProps }) => {

  return (
    <button
      style={ style }
      { ...otherProps }
      onClick={ onClick }
      className={ `button icon-button-wrapper ${className}`.trim() }
    >
      { children }
    </button>
  );
};

export default IconButton;