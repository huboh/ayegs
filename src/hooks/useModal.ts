import { useState, useRef, RefAttributes } from "react";
import useEventListener from "./useEventListener";
import Modal, { ModalProps } from "../components/Modal";

export interface UseModalProps {
  closeOnOverlayClick: boolean;
}

export interface ModalHandlers {
  toggle(): void;
  openModal(): void;
  closeModal(): void;
}

const useModal = ({ closeOnOverlayClick = true }: UseModalProps) => {
  const modalOverlayRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalProps: ModalProps & RefAttributes<HTMLDivElement> = {
    isOpen: isModalOpen,
    ref: modalOverlayRef
  };

  const modalHandlers: ModalHandlers = {
    toggle: () => setIsModalOpen(state => !state),
    closeModal: () => setIsModalOpen(false),
    openModal: () => setIsModalOpen(true),
  };

  useEventListener({
    eventType: 'click',
    target: modalOverlayRef,
    eventHandler: () => closeOnOverlayClick && setIsModalOpen(false),
  });

  return {
    Modal,
    modalProps,
    modalHandlers
  };
};

export default useModal;