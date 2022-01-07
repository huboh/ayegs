import { FC } from "react";
import './download-app.scss';
import DownloadAppCta from "./DownloadAppCta";

import { ReactComponent as AppleStoreSvg } from './apple.svg';
import { ReactComponent as GoogleStoreSvg } from './google.svg';

const DownloadApp: FC = () => {

  return (
    <div className="download-app-promo">
      <h1 className="promo-header">Download Our App</h1>
      <p className="promo-text">get access to exclusive access</p>

      <div className="promo-cta-wrapper">
        <DownloadAppCta link="/" icon={ <AppleStoreSvg /> } title="download on the" text="app store" />
        <DownloadAppCta link="/" icon={ <GoogleStoreSvg /> } title="get it on" text="google play" />
      </div>
    </div>
  );
};

export default DownloadApp;