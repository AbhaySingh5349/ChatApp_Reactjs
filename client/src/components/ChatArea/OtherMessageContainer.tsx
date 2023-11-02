import React from 'react';
import MessageBox from './MessageBox';

import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const OtherMessageContainer = () => {
  return (
    <div className="flex items-start p-2">
      <IconButton>
        <AccountCircleIcon />
      </IconButton>
      <MessageBox />
    </div>
  );
};

export default OtherMessageContainer;
