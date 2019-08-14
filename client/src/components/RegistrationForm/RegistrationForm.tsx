import React, { useState } from 'react';
import { INewUser, IRegistrationForm } from '../../../../constants/interfaces';
import { postData } from '../../helpers/api';
import { displayErrMsg, checkVars } from '../../helpers/validations';

function RegistrationForm(props: IRegistrationForm): JSX.Element {
  const { goToLogin } = props;

  // State
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  // Validations
  const requiredVariables: Array<any> = [
    username,
    password,
    confirmPassword,
    email,
  ];
  const [dirty, setDirty] = useState<boolean>(false);
  const displayErr: (val: any) => boolean = displayErrMsg(dirty);

  const register = async () => {
    setDirty(true);
    const registerPayload: INewUser = {
      username,
      password,
      confirmPassword,
      email,
    };

    if (checkVars(requiredVariables)) {
      const data = await postData(
        '/authenticate/register',
        JSON.stringify(registerPayload)
      );
      // @TODO dispatch user details to global state here
      console.log(data);
    }
  };

  return (
    <div className="RegistrationForm">
      <div className="RegistrationForm__head">
        <h3 className="RegistrationForm__heading">Registration</h3>
      </div>
      <div className="RegistrationForm__body">
        <div className="RegistrationForm__label">Username</div>
        <input
          onChange={e => setUsername(e.target.value)}
          className="RegistrationForm__input"
          type="text"
        />
        {displayErr(username) && (
          <div className="error-msg">Username is required</div>
        )}
        <div className="RegistrationForm__label">Password</div>
        <input
          onChange={e => setPassword(e.target.value)}
          className="RegistrationForm__input"
          type="password"
        />
        {displayErr(password) && (
          <div className="error-msg">Password is required</div>
        )}
        <div className="RegistrationForm__label">Confirm Password</div>
        <input
          onChange={e => setConfirmPassword(e.target.value)}
          className="RegistrationForm__input"
          type="password"
        />
        {displayErr(confirmPassword) && (
          <div className="error-msg">Confirm Password is required</div>
        )}
        <div className="RegistrationForm__label">Email</div>
        <input
          onChange={e => setEmail(e.target.value)}
          className="RegistrationForm__input"
          type="text"
        />
        {displayErr(email) && (
          <div className="error-msg">Email is required</div>
        )}
        <button onClick={register} className="RegistrationForm__btn">
          Register
        </button>
        <p
          className="RegistrationForm__already-have"
          onClick={() => goToLogin(true)}
        >
          Already have an account?
        </p>
      </div>
    </div>
  );
}

export default RegistrationForm;
