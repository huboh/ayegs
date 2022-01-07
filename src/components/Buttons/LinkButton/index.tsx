import './link-button.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface LinkButtonProps {
  link: string;
  text: string;
  title?: string;
  className?: string;
  icon?: JSX.Element;
}

export default function LinkButton(props: LinkButtonProps) {
  const { link, text, className, icon, title, ...otherProps } = props;

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
}

const LinkButtonInvert: FC<LinkButtonProps> = (props) => {
  const className = `invert-style ${props.className}`;

  return (
    <LinkButton { ...({ ...props, className }) } />
  );
};

LinkButton.Transparent = LinkButtonInvert;