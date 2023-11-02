import React from 'react';
import { Button, TextField } from '@mui/material';

interface Props {
  isLoginRoute?: boolean;
}

const InputForm = ({ isLoginRoute }: Props) => {
  return (
    <div className="bg-backdrop-primary-300 grow-[8] flex flex-col items-center justify-center gap-8">
      {isLoginRoute ? (
        <h2 className="h2-bold text-secondary-green">Login To Your Account</h2>
      ) : (
        <h2 className="h2-bold text-secondary-green">Signup To Your Account</h2>
      )}

      <TextField
        id="email-input"
        label="email"
        type="email"
        variant="outlined"
        className="w-[40%]"
      />
      <TextField
        id="password-input"
        label="password"
        type="password"
        variant="outlined"
        autoComplete="current-password"
        className="w-[40%]"
      />
      <Button variant="outlined">
        {isLoginRoute ? <span>Log-In</span> : <span>Sign-Up</span>}
      </Button>
      {isLoginRoute ? (
        <p>
          Create An Account{' '}
          <span className="text-secondary-green">Sign-Up</span>
        </p>
      ) : (
        <p>
          Already Have An Account{' '}
          <span className="text-secondary-green">Log-In</span>
        </p>
      )}
    </div>
  );
};

export default InputForm;
