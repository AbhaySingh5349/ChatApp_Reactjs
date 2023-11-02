import React from 'react';

import { IconButton } from '@mui/material';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

const CreateGroup = () => {
  return (
    <div className="bg-white px-4 py-2 rounded-[16px] m-2 max-sm:flex-col max-sm:items-center max-sm:px-0 grow-[9] flex items-center justify-center">
      <div className="px-4 py-2 rounded-[16px] border-solid border-2 border-indigo-600 w-[50%]">
        <input
          placeholder="Enter Group Name..."
          className="mr-2 outline-none"
        />
      </div>
      <IconButton>
        <DoneOutlineIcon />
      </IconButton>
    </div>
  );
};

export default CreateGroup;
