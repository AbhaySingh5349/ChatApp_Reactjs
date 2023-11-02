import React from 'react';

interface Props {
  name: string;
  time: string;
}

const OnlineUsersListCard = ({ name, time }: Props) => {
  return (
    <div className="bg-backdrop-primary-400 hover:bg-backdrop-primary-200 px-4 py-2 flex flex-col m-2 rounded-[16px] w-[50%]">
      <h2 className="h2-bold">{name}</h2>
      <p className="paragraph-semibold">{time}</p>
    </div>
  );
};

export default OnlineUsersListCard;
