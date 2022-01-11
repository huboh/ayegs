import './header.scss';
import { FC } from "react";

import Logo from "./Logo";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import { HamburgerButton } from './HeaderButtons';
import useModal from '../../hooks/useModal';

const Header: FC = () => {
  const { Modal, modalProps, modalHandlers } = useModal({ closeOnOverlayClick: true });
  const { toggle } = modalHandlers;

  return (
    <header className="header">
      <HamburgerButton style={ { marginRight: '2em' } } onClick={ () => toggle() } />
      <Logo />
      <SearchBar />
      <NavBar />
      <Modal { ...modalProps } ModalContent={ (
        <div>hey there</div>
      ) } />
    </header>
  );
};

export default Header;