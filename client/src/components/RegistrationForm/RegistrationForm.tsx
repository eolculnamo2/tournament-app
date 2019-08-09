import React, { useState } from 'react';
import { INewUser } from '../../../../constants/interfaces';
import { postData } from '../../helpers/api';

function RegistrationForm(): JSX.Element {
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
    </>
  );
}

export default RegistrationForm;
