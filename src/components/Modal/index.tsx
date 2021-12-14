import { FC } from 'react';

const Modal: FC = ({ children }) => {

  return (
    <div className='popup-modal'>
      { children }
    </div>
  );
};

export default Modal;