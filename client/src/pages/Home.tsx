import React, { useState } from 'react';
import { ICredentials, INewUser } from '../../../constants/interfaces';

function Home(): JSX.Element {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const loginPayload: ICredentials = {
    username,
    password,
  };

  const registerPayload: INewUser = {
    username,
    password,
    confirmPassword,
  };

  return (
    <>
      <h3>Registration</h3>
      <div>Username</div>
      <input onChange={e => setUsername(e.target.value)} type="text" />
      <div>Password</div>
      <input onChange={e => setPassword(e.target.value)} type="text" />
      <div>Confirm Password</div>
      <input onChange={e => setConfirmPassword(e.target.value)} type="text" />
      <h3>Login</h3>
      <div>Username</div>
      <input onChange={e => setUsername(e.target.value)} type="text" />
      <div>Password</div>
      <input onChange={e => setPassword(e.target.value)} type="text" />
      <div>Confirm Password</div>
    </>
  );
}

export default Home;
