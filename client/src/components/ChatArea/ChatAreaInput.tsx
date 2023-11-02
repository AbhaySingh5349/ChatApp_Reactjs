import React from 'react';

import { IconButton } from '@mui/material';

import SendIcon from '@mui/icons-material/Send';
import { useSelector } from 'react-redux';

const ChatAreaInput = () => {
  const isLightTheme = useSelector((state: any) => state.themeKey); // to access redux store's state
  return (
    <div
      className={`px-4 py-2 rounded-[16px] m-2 flex justify-between max-sm:flex-col max-sm:items-center max-sm:px-0 ${
        isLightTheme ? 'bg-white' : 'bg-backdrop-dark'
      }`}
    >
      <input
        placeholder="type a message..."
        className={`mr-2 border-none outline-none grow ${
          isLightTheme ? 'bg-white' : 'bg-backdrop-dark placeholder-gray-400'
        }`}
      />
      <IconButton>
        <SendIcon />
      </IconButton>
    </div>
  );
};

export default ChatAreaInput;
