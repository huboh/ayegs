import './navBar.scss';
import { FC, useState } from 'react';
import CartPopup from '../CartPopup';
import { CartIcon, WishlistIcon, UserAccountButton } from '../HeaderButtons';


const NavBar: FC = () => {
  const [openCartPopup, setOpenCartPopup] = useState(false);

  return (
    <nav className='navigation' style={ { marginLeft: '2em' } }>
      <UserAccountButton onClick={ () => { } } />
      <WishlistIcon onClick={ () => { } } />
      <CartIcon onClick={ () => { setOpenCartPopup(!openCartPopup); } } />

      <div className='header-popups'>
        <CartPopup display={ openCartPopup } />
      </div>
    </nav>
  );
};

export default NavBar;