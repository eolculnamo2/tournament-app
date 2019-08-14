import React, { useState } from 'react';
import { ICredentials, ILoginForm } from '../../../../constants/interfaces';
import { postData } from '../../helpers/api';
import { displayErrMsg, checkVars } from '../../helpers/validations';

function LoginForm(props: ILoginForm): JSX.Element {
  const { goToRegister } = props;
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // validations
  const [dirty, setDirty] = useState<boolean>(false);
  const requiredVariables: Array<any> = [username, password];
  const displayErr: (val: any) => boolean = displayErrMsg(dirty);

  const login = async () => {
    setDirty(true);

    const loginPayload: ICredentials = {
      username,
      password,
    };

    if (checkVars(requiredVariables)) {
      const data = await postData(
        '/authenticate/login',
        JSON.stringify(loginPayload)
      );

      console.log(data);
    }
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
        {displayErr(username) && (
          <div className="error-msg">Username is required.</div>
        )}
        <div className="RegistrationForm__label">Password</div>
        <input
          className="RegistrationForm__input"
          onChange={e => setPassword(e.target.value)}
          type="password"
        />
        {displayErr(password) && (
          <div className="error-msg">Password is required.</div>
        )}
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
