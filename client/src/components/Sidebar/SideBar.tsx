import React from 'react';

import SideBarConversations from './SideBarConversations';
import SideBarHeader from './SideBarHeader';
import SideBarSearch from './SideBarSearch';

const SideBar = () => {
  return (
    <div className="bg-backdrop-primary-300 h-full grow-[1] flex flex-col">
      <SideBarHeader />
      <SideBarSearch />
      <SideBarConversations />
    </div>
  );
};

export default SideBar;
