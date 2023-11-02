import React from 'react';
import ChatAreaContainer from './ChatArea/ChatAreaContainer';
import CreateGroup from './CreateGroup';
import Login from './Auth/Login';
import { OnlineUsers } from './OnlineUsers/OnlineUsers';
import SideBar from './Sidebar/SideBar';
import Welcome from './Welcome';
import { Outlet } from 'react-router-dom';

const MainContainer = () => {
  return (
    <div className="w-[90vw] h-[90vh] flex max-md:flex-col">
      <SideBar />
      <Outlet />
      {/* <ChatAreaContainer /> */}
      {/* <Welcome /> */}
      {/* <CreateGroup /> */}
      {/* <OnlineUsers /> */}
    </div>
  );
};

export default MainContainer;
