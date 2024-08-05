import React, { useState } from 'react';

export const MainHeader: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
    setTimeout(() => {
      setIsModalOpen(true);
    }, 100); // delay to allow for visibility transition
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setIsModalVisible(false);
    }, 300); // delay to match the transition duration
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-[#111]'>
      <div className='py-[10%] flex-col space-y-6 text-center'>
        <h1 className='text-6xl md:text-8xl font-extrabold text-white leading-tight'>
          Welcome to Light
        </h1>
        <button
          onClick={openModal}
          className='text-lg md:text-xl bg-[#00bcd4] text-white rounded-lg font-semibold px-4 py-2 lg:px-6 lg:py-3 transition-all duration-300 transform hover:scale-105 hover:bg-[#0097a7] border-none shadow-lg'
        >
          Learn More
        </button>
      </div>
      {isModalVisible && (
        <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-300 ${isModalOpen ? 'opacity-100' : 'opacity-0'}`}>
          <div
            className={`bg-[#222] text-white rounded-lg p-8 max-w-md mx-auto text-center transition-transform duration-300 transform ${isModalOpen ? 'scale-100' : 'scale-95'}`}
          >
            <h2 className='text-2xl font-bold mb-4'>More Information</h2>
            <p className='mb-6'>This is a modal. You can put any content you want here.</p>
            <button
              onClick={closeModal}
              className='text-lg bg-[#00bcd4] text-white rounded-lg font-semibold px-4 py-2 transition-all duration-300 transform hover:scale-105 hover:bg-[#0097a7] border-none shadow-lg'
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
