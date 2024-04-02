import './modal.css';
import React from 'react';

interface Props {
    onClose:()=>void;
    isOpen:boolean;
    children:React.ReactNode;
}

const Modal: React.FC<Props> = (props) => {
    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (event.target === event.currentTarget) {
            props.onClose();
        }
    };

    return props.isOpen && (
        <div onClick={handleOverlayClick}  className='w-full h-full flex items-center justify-center fixed inset-0 bg-black bg-opacity-[.7] overflow-y-auto modal z-[99999999] top-0 right-0'>
          {props.children}
        </div>
    );
}

export default Modal;
