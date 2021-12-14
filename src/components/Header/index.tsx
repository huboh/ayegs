import './header.scss';
import { FC } from "react";

import Logo from "./Logo";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import { HamburgerButton } from './HeaderButtons';

const Header: FC = () => {

  return (
    <header className="header">
      <HamburgerButton style={ { marginRight: '2em' } } onClick={ () => { } } />
      <Logo />
      <SearchBar />
      <NavBar />
    </header>
  );
};

export default Header;