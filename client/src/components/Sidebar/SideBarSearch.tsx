import React from 'react';

import SearchIcon from '@mui/icons-material/Search';

import { useSelector } from 'react-redux';

const SideBarSearch = () => {
  const isLightTheme = useSelector((state: any) => state.themeKey); // to access redux store's state
  return (
    <div
      className={`px-4 py-1.5 rounded-[16px] mx-2 mt-2 flex ${
        isLightTheme ? 'bg-white' : 'bg-backdrop-dark'
      }`}
    >
      <SearchIcon />
      <input
        placeholder="search..."
        className={`ml-2 border-none outline-none grow ${
          isLightTheme ? 'bg-white' : 'bg-backdrop-dark placeholder-gray-400'
        }`}
      />
    </div>
  );
};

export default SideBarSearch;
