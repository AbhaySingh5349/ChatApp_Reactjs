import React, { useState } from 'react';

import ChatCard from './ChatCard';

import { useSelector } from 'react-redux';

const SideBarConversations = () => {
  const isLightTheme = useSelector((state: any) => state.themeKey); // to access redux store's state

  const [conversations, setConversations] = useState([
    {
      name: 'test #1',
      lastMessage: 'last message #1',
      timestamp: 'today',
    },
    {
      name: 'test #2',
      lastMessage: 'last message #2',
      timestamp: 'today',
    },
    {
      name: 'test #3',
      lastMessage: 'last message #3',
      timestamp: 'today',
    },
  ]);

  return (
    <div
      className={`m-2 rounded-[8px] grow overflow-scroll scrollbar-hide ${
        isLightTheme ? 'bg-white' : 'bg-backdrop-dark'
      }`}
    >
      {conversations.map((item: any) => {
        return (
          <ChatCard
            key={item.name}
            name={item.name}
            message={item.lastMessage}
            time={item.timestamp}
          />
        );
      })}
    </div>
  );
};

export default SideBarConversations;
