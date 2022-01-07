import './iconButton.scss';
import { MouseEvent, CSSProperties, forwardRef } from "react";

export interface IconButtonProps {
  className?: string;
  style?: CSSProperties;
  title: string;
  [whatever: string]: any;
  onClick(event: MouseEvent): void;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const { children, title, style, onClick, className = '', ...otherProps } = props;

  return (
    <button
      ref={ ref }
      title={ title }
      style={ style }
      { ...otherProps }
      onClick={ onClick }
      className={ `button icon-button-wrapper ${className}`.trim() }
    >
      { children }
    </button>
  );
});

export default IconButton;