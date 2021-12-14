import './navBar.scss';

import { FC } from 'react';

import { CartIcon, WishlistIcon, UserAccountButton } from '../HeaderButtons';


const NavBar: FC = () => {

  return (
    <nav className='navigation' style={ { marginLeft: '2em' } }>
      <UserAccountButton onClick={ () => { } } />
      <WishlistIcon onClick={ () => { } } />
      <CartIcon onClick={ () => { } } />
    </nav>
  );
};

export default NavBar;