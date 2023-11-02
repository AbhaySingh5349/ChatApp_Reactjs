import React from 'react';

import ChatAreaHeader from './ChatAreaHeader';
import ChatAreaConversation from './ChatAreaConversation';
import ChatAreaInput from './ChatAreaInput';

const ChatAreaContainer = () => {
  return (
    <div className="bg-backdrop-primary-200 h-full grow-[9] flex flex-col overflow-scroll scrollbar-hide">
      <ChatAreaHeader />
      <ChatAreaConversation />
      <ChatAreaInput />
    </div>
  );
};

export default ChatAreaContainer;
