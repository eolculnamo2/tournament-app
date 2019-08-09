import React from 'react';
import { RegistrationForm, LoginForm } from '../components';

function Home(): JSX.Element {
  return (
    <>
      <RegistrationForm />
      <LoginForm />
    </>
  );
}

export default Home;
