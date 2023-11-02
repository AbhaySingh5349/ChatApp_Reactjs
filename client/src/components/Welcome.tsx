import React from 'react';

const Welcome = () => {
  return (
    <div className="bg-backdrop-primary-200 h-full grow-[9]">
      <div className="bg-white px-4 rounded-[8px] h-full flex flex-col justify-center items-center">
        <img
          src="/free_chat.png"
          alt="logo"
          width={250}
          height={250}
          className="object-contain"
        />
        <p>Start Conversation by adding friends and creating groups</p>
      </div>
    </div>
  );
};

export default Welcome;
