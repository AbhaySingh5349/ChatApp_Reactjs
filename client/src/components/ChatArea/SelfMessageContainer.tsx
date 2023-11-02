import React from 'react';
import MessageBox from './MessageBox';

const SelfMessageContainer = () => {
  return (
    <div className="flex flex-col items-end p-2">
      <MessageBox self />
    </div>
  );
};

export default SelfMessageContainer;
