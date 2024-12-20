'use client';

import React from 'react';
import Image from 'next/image';

interface ModalProps {
  isOpen: boolean; 
  onClose: () => void; 
  selectedImage: string | null; 
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, selectedImage }) => {
  if (!isOpen) return null; 

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[11000]"
      onClick={onClose} 
    >
      <div
        className="bg-white rounded-lg p-4 relative"
        onClick={(e) => e.stopPropagation()} 
      >
        {selectedImage && (
          <Image
            src={selectedImage}
            alt="Selected"
            width={500}
            height={500}
            className="object-contain rounded-lg"
          />
        )}
      </div>
    </div>
  );
};

export default Modal;
