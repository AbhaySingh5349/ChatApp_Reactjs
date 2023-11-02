import React from 'react';
import OtherMessageContainer from './OtherMessageContainer';
import SelfMessageContainer from './SelfMessageContainer';

import { useSelector } from 'react-redux';

const ChatAreaConversation = () => {
  const isLightTheme = useSelector((state: any) => state.themeKey); // to access redux store's state
  return (
    <div
      className={`m-2 rounded-[8px] grow overflow-scroll scrollbar-hide ${
        isLightTheme ? 'bg-white' : 'bg-backdrop-dark'
      }`}
    >
      <SelfMessageContainer />
      <OtherMessageContainer />
    </div>
  );
};

export default ChatAreaConversation;
