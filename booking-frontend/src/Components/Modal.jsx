import React from 'react';
import { useState } from 'react';
import BookingPage from '../Pages/BookingPage';

export const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="bg-white p-4 rounded-lg z-50">
        {<BookingPage/>}
        <button
            type="button"
            className='bg-black text-white px-4 py-2 rounded-md mt-4 font-bold mx-auto'
            onClick={onClose}
            >
            Cerrar
            </button>
      </div>
    </div>
  );
};

