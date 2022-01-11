import './modal.scss';
import { forwardRef } from 'react';

export interface ModalProps {
  isOpen: boolean;
  ModalContent?: JSX.Element;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(({ isOpen, ModalContent, children }, ref) => {
  return (
    <section className={ `modal-overlay ${isOpen ? 'active' : ''}`.trim() } ref={ ref }>
      { isOpen && (ModalContent ?? children) }
    </section>
  );
});

export default Modal;