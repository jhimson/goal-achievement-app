/* eslint-disable react/button-has-type */
import React from 'react';
import { useToasts } from 'react-toast-notifications';

const Modal = ({ title, isVisible, setIsVisible, deleteFunc }) => {
  const { addToast } = useToasts();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-screen ml-auto mr-auto transition duration-300 bg-black border-4 broder-gray-500 bg-opacity-30 modal-bg">
      <div className="w-11/12 h-auto p-5 bg-gray-100 rounded-lg lg:w-1/2 xl:w-5/12 modal-container">
        <div className="font-mono text-lg font-bold text-center">
          <h1>Are you sure you want to delete?</h1>
        </div>
        <div>
          <div className="flex justify-around font-mono text-xl">
            <button
              className="w-2/5 px-5 py-1 text-green-900 bg-green-400 rounded-lg focus:outline-none"
              onClick={() => {
                deleteFunc();
                setIsVisible(!isVisible);
                addToast(`Successfully deleted ${title}`, {
                  appearance: 'success',
                  autoDismiss: true,
                });
              }}
            >
              Confirm
            </button>
            <button
              className="w-2/5 px-4 py-1 text-red-900 bg-red-400 rounded-lg focus:outline-none"
              onClick={() => setIsVisible(!isVisible)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
