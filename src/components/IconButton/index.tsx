import './iconButton.scss';
import { FC, MouseEvent, CSSProperties } from "react";

export interface IconButtonProps {
  className?: string;
  style?: CSSProperties;
  title: string;
  [whatever: string]: any;
  onClick(event: MouseEvent): void;
}

const IconButton: FC<IconButtonProps> = ({ children, title, style, onClick, className = '', ...otherProps }) => {

  return (
    <button
      title={ title }
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