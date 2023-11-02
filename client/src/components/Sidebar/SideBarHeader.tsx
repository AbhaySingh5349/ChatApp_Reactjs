import React, { useEffect, useState } from 'react';

import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../Features/themeSlice';

const SideBarHeader = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const isLightTheme = useSelector((state: any) => state.themeKey); // to access redux store's state
  console.log('isLightTheme header: ', isLightTheme);
  return (
    <div
      className={` px-4 py-2 rounded-[16px] mx-2 mt-2 flex justify-between max-sm:flex-col max-sm:items-center max-sm:px-0 ${
        isLightTheme ? 'bg-white' : 'bg-backdrop-dark'
      }`}
    >
      <div>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </div>
      <div>
        <IconButton
          onClick={() => {
            navigate('users');
          }}
        >
          <PersonAddIcon />
        </IconButton>
        <IconButton>
          <GroupAddIcon />
        </IconButton>
        <IconButton>
          <AddCircleIcon
            onClick={() => {
              navigate('create-group');
            }}
          />
        </IconButton>
        <IconButton
          onClick={() => {
            dispatch(toggleTheme());
          }}
        >
          {isLightTheme ? <NightlightRoundIcon /> : <LightModeIcon />}
        </IconButton>
      </div>
    </div>
  );
};

export default SideBarHeader;
