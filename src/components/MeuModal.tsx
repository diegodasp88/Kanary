import React, { useState } from 'react';

const MeuModal = ({ children, isModalVisible, handleClose }) => {
  console.log('dentro do modal', isModalVisible);
  return (
    <div>
      <div
        className={`${
          isModalVisible
            ? 'text-white flex justify-center w-screen h-screen items-center z-10 bg-black opacity-40'
            : 'hidden'
        }`}
      >
        <h1>Meu modal!</h1>
        <button className="text-white" onClick={handleClose}>
          Fechar
        </button>
      </div>
      {children}
    </div>
  );
};

export default MeuModal;
