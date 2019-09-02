import React, { useState, useContext, useEffect, useRef } from 'react';
import { ICredentials, ILoginForm } from '../../../../constants/interfaces';
import { postData } from '../../helpers/api';
import { displayRequiredErrMsg, checkVars } from '../../helpers/validations';
import { history } from '../../App';
import GlobalContext from '../../contexts/global/GlobalContext';
import { ACTION_TYPES } from '../../contexts/global/GlobalActions';

function LoginForm(props: ILoginForm): JSX.Element {
  const { goToRegister } = props;
  // global state
  const { dispatch } = useContext(GlobalContext);

  //local state
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // validations
  const [failedLogin, setFailedLogin] = useState<boolean>(false);
  const [dirty, setDirty] = useState<boolean>(false);
  const requiredVariables: Array<any> = [username, password];
  const displayRequiredErr: (val: any) => boolean = displayRequiredErrMsg(
    dirty
  );

  // refs
  const loginBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    window.addEventListener('keypress', handleEnterBtn);
    return () => window.removeEventListener('keypress', handleEnterBtn);
  }, []);

  const handleEnterBtn = (e: KeyboardEvent) => {
    if (e.keyCode === 13 && loginBtn && loginBtn.current) {
      loginBtn.current.click();
    }
  };

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

      if (data.success) {
        dispatch({ type: ACTION_TYPES.UPDATE_LOGIN, payload: true });
        dispatch({ type: ACTION_TYPES.SET_USERNAME, payload: data.user });
        history.push('/dashboard');
      } else {
        setFailedLogin(true);
      }
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
        {displayRequiredErr(username) && (
          <div className="Global__error-msg">Username is required.</div>
        )}
        <div className="RegistrationForm__label">Password</div>
        <input
          className="RegistrationForm__input"
          onChange={e => setPassword(e.target.value)}
          type="password"
        />
        {displayRequiredErr(password) && (
          <div className="Global__error-msg">Password is required.</div>
        )}
        {failedLogin && (
          <div className="Global__error-msg">
            Login Failed. Please try again.
          </div>
        )}
        <button
          className="RegistrationForm__btn"
          onClick={login}
          ref={loginBtn}
        >
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
