import React, { useState } from 'react';
import { ICredentials } from '../../../../constants/interfaces';

function LoginForm(): JSX.Element {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const login = () => {
    const loginPayload: ICredentials = {
      username,
      password,
    };
  };

  return (
    <div>
      <h3>Login</h3>
      <div>Username</div>
      <input onChange={e => setUsername(e.target.value)} type="text" />
      <div>Password</div>
      <input onChange={e => setPassword(e.target.value)} type="text" />
      <button>Login</button>
    </div>
  );
}

export default LoginForm;
