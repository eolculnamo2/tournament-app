import React, { useState } from 'react';
import { ICredentials, ILoginForm } from '../../../../constants/interfaces';
import { postData } from '../../helpers/api';

function LoginForm(props: ILoginForm): JSX.Element {
  const { goToRegister } = props;
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const login = async () => {
    const loginPayload: ICredentials = {
      username,
      password,
    };

    const data = await postData(
      '/authenticate/login',
      JSON.stringify(loginPayload)
    );

    console.log(data);
  };

  return (
    <div className="RegistrationForm">
      <div className="RegistrationForm__head">
        <h3 className="RegistrationForm__heading">Login</h3>
      </div>
      <div className="RegistrationForm__body">
        <div className="RegistrationForm__label">Username</div>
        <input
          className="RegistrationForm__input"
          onChange={e => setUsername(e.target.value)}
          type="text"
        />
        <div className="RegistrationForm__label">Password</div>
        <input
          className="RegistrationForm__input"
          onChange={e => setPassword(e.target.value)}
          type="password"
        />
        <button className="RegistrationForm__btn" onClick={login}>
          Login
        </button>
        <p
          className="RegistrationForm__already-have"
          onClick={() => goToRegister(false)}
        >
          Create New Account
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
