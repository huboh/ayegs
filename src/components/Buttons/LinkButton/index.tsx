import './link-button.scss';
import { Link } from 'react-router-dom';
import { FC } from "react";

interface LinkButtonProps {
  link: string;
  text: string;
  title?: string;
  className?: string;
  icon?: JSX.Element;
}

const LinkButton: FC<LinkButtonProps> = ({ link, icon, title, text, className, ...otherProps }) => {

  return (
    <Link
      to={ link }
      role={ 'button' }
      { ...otherProps }
      title={ title ?? text }
      className={ `primary-button link-button ${className}`.trim() }
    >
      <span className='text-wrapper'>{ text }</span>
      { icon && <span className='icon-wrapper'>{ icon }</span> }
    </Link>
  );
};

export default LinkButton;