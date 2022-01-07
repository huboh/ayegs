import './footer.scss';

import { FC } from "react";
import PrimaryFooter from "./components/PrimaryFooter";
import SecondaryFooter from "./components/SecondaryFooter";

const Footer: FC = () => {

  return (
    <footer className="app-footer">
      <SecondaryFooter />
      <PrimaryFooter />
    </footer>
  );
};

export default Footer;