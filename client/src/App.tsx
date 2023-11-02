import React from 'react';
import Login from './components/Auth/Login';
import MainContainer from './components/MainContainer';
import Signup from './components/Auth/Signup';

import './index.css';
import { Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import ChatAreaContainer from './components/ChatArea/ChatAreaContainer';
import CreateGroup from './components/CreateGroup';
import { OnlineUsers } from './components/OnlineUsers/OnlineUsers';

function App() {
  return (
    <div className="min-h-screen bg-backdrop-primary-500 flex items-center justify-center">
      {/* <MainContainer /> */}
      {/* <Login /> */}
      {/* <Signup /> */}

      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="app" element={<MainContainer />}>
          <Route path="welcome" element={<Welcome />}></Route>
          <Route path="create-group" element={<CreateGroup />}></Route>
          <Route path="chat" element={<ChatAreaContainer />}></Route>
          <Route path="users" element={<OnlineUsers />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
