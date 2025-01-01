import { MouseEventHandler, ReactNode, useEffect, useState } from 'react';

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ onClose, children }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    return () => setIsOpen(false);
  }, []);

  const handleOverlayClick: MouseEventHandler = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
        isOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className="flex items-center justify-center h-full "
        onClick={handleOverlayClick}
      >
        <div
          className={`bg-white rounded-lg shadow-lg p-6 sxa transition-transform duration-300 ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
        >
          <button
            className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-gray-300 rounded-full text-gray-700 text-xl hover:bg-gray-400 focus:outline-none"
            onClick={onClose}
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
