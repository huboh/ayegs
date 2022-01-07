import './logo.scss';
import { Link } from 'react-router-dom';
import logo from './logo.png';

const Logo = () => {
  return (
    <Link to="/" className='logo-wrapper'>
      <img src={ logo } alt="" className='logo' />
    </Link>
  );
};

export default Logo;