import React from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { useSelector } from 'react-redux';

const ChatAreaHeader = () => {
  const isLightTheme = useSelector((state: any) => state.themeKey); // to access redux store's state
  return (
    <div
      className={`px-4 rounded-[8px] m-2 grid grid-cols-4 grid-rows-2 ${
        isLightTheme ? 'bg-white' : 'bg-backdrop-dark'
      }`}
    >
      <div className="col-span-1 row-span-2 self-center justify-self-start">
        <AccountCircleIcon />
      </div>
      <div className="col-span-2 row-span-2 self-center justify-self-stretch justify-items-stretch">
        <h4>Chat Title</h4>
        <p>Online Status</p>
      </div>
      <div className="col-span-1 row-span-2 self-center justify-self-end">
        <DeleteOutlineIcon />
      </div>
    </div>
  );
};

export default ChatAreaHeader;
