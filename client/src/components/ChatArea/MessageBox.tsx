import React from 'react';

interface Props {
  self?: boolean;
}

const MessageBox = ({ self }: Props) => {
  return (
    <div
      className={`max-w-[30%] flex flex-col p-2 rounded-lg ${
        self ? 'bg-message-self' : 'bg-message-other'
      }`}
    >
      <div className="break-words">
        abcdaSSAASSASasASKJaskASJNalksjASLKalasxdmaslxdksasadasdadasdsaddsasdsadsaaaaaaaaaaaaaaaaaa
      </div>
      <div className="self-end">12:00 am</div>
    </div>
  );
};

export default MessageBox;
