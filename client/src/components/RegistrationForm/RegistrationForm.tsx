import React, { useState } from 'react';
import { INewUser, IRegistrationForm } from '../../../../constants/interfaces';
import { postData } from '../../helpers/api';

function RegistrationForm(props: IRegistrationForm): JSX.Element {
  const { goToLogin } = props;

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const register = async () => {
    const registerPayload: INewUser = {
      username,
      password,
      confirmPassword,
      email,
    };

    const data = await postData(
      '/authenticate/register',
      JSON.stringify(registerPayload)
    );
    // @TODO dispatch user details to global state here
    console.log(data);
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
        <div className="RegistrationForm__label">Password</div>
        <input
          onChange={e => setPassword(e.target.value)}
          className="RegistrationForm__input"
          type="password"
        />
        <div className="RegistrationForm__label">Confirm Password</div>
        <input
          onChange={e => setConfirmPassword(e.target.value)}
          className="RegistrationForm__input"
          type="password"
        />
        <div className="RegistrationForm__label">Email</div>
        <input
          onChange={e => setEmail(e.target.value)}
          className="RegistrationForm__input"
          type="text"
        />
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
