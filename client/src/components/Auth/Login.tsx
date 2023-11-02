import React from 'react';
import InputForm from './InputForm';

const Login = () => {
  return (
    <div className="bg-white w-[90vw] h-[90vh] flex max-md:flex-col justify-center">
      <img
        src="/free_chat.png"
        alt="logo"
        width={250}
        height={250}
        className="object-contain grow-[2] justify-self-center"
      />
      <InputForm isLoginRoute />
    </div>
  );
};

export default Login;
