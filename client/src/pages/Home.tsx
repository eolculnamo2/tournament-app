import React, { useState } from 'react';
import { ICredentials, INewUser } from '../../../constants/interfaces';

function Home(): JSX.Element {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const login = () => {
    const loginPayload: ICredentials = {
      username,
      password,
    };
  };

  const register = () => {
    const registerPayload: INewUser = {
      username,
      password,
      confirmPassword,
      email,
    };

    fetch('/authenticate/register', {
      method: 'POST',
      body: JSON.stringify(registerPayload),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
    })
      .then(res => res.json())
      .then(data => {
        alert(JSON.stringify(data));
      });
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
      <div>Email</div>
      <input onChange={e => setEmail(e.target.value)} type="text" />
      <button onClick={register}>Register</button>
      <h3>Login</h3>
      <div>Username</div>
      <input onChange={e => setUsername(e.target.value)} type="text" />
      <div>Password</div>
      <input onChange={e => setPassword(e.target.value)} type="text" />
    </>
  );
}

export default Home;
