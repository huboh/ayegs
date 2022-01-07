import './download-app-cta.scss';
import { Link } from 'react-router-dom';
import { FC, FunctionComponentElement, PropsWithChildren } from "react";

interface DownloadAppButtonProps {
  link: string;
  text: string;
  title: string;
  icon: FunctionComponentElement<PropsWithChildren<unknown>>;
}

const DownloadAppCta: FC<DownloadAppButtonProps> = ({ link, icon, title, text, ...otherProps }) => {

  return (
    <Link className="promo-cta" to={ link } { ...otherProps }>
      { icon }
      <span className='text-wrapper'>
        <span className="title">{ title }</span>
        <span className="text">{ text }</span>
      </span>
    </Link>
  );
};

export default DownloadAppCta;