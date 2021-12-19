import './button.scss';
import { FC } from 'react';

export interface ButtonProps {
  buttonText: string;
  icon?: JSX.Element;
  onClick?(): void;
}

const Button: FC<ButtonProps> = ({ buttonText, icon, onClick }) => {
  return (
    <button className='button primary-button' onClick={ onClick }>
      <span className="text-wrapper">
        { buttonText }
      </span>
      { icon && (
        <span className="icon-wrapper">
          { icon }
        </span>
      ) }
    </button>
  );
};

export default Button;