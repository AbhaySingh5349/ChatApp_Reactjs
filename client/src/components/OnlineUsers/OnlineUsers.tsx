import React from 'react';
import OnlineUsersListCard from './OnlineUsersListCard';

export const OnlineUsers = () => {
  const list = [
    { name: 'Aakash', time: 'Today' },
    { name: 'Aayush', time: 'Today' },
    { name: 'Abhay', time: 'Yesterday' },
    { name: 'Abhay', time: 'Yesterday' },
    { name: 'Abhay', time: 'Yesterday' },
    { name: 'Abhay', time: 'Yesterday' },
    { name: 'Abhay', time: 'Yesterday' },
    { name: 'Abhay', time: 'Yesterday' },
    { name: 'Abhay', time: 'Yesterday' },
    { name: 'Abhay', time: 'Yesterday' },
    { name: 'Abhay', time: 'Yesterday' },
    { name: 'Abhay', time: 'Yesterday' },
  ];
  return (
    <div className="bg-backdrop-primary-200 h-full grow-[9] flex flex-col overflow-scroll scrollbar-hide">
      <div className="bg-white px-4 py-3 rounded-[8px] m-2 flex items-center">
        <img
          src="/free_chat.png"
          alt="logo"
          width={50}
          height={50}
          className="object-contain"
        />
        <h2 className="h2-bold">Online Users</h2>
      </div>
      <div className="overflow-scroll scrollbar-hide">
        {list.length === 0 ? (
          <h2 className="h2-bold">No Online Users</h2>
        ) : (
          list.map((user) => {
            return (
              <OnlineUsersListCard
                key={user.name}
                name={user.name}
                time={user.time}
              />
            );
          })
        )}
      </div>
    </div>
  );
};
