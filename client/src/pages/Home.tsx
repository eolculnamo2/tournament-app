import React, { useState } from 'react';
import { RegistrationForm, LoginForm } from '../components';
import '../scss/pages/home.scss';

function Home(): JSX.Element {
  const [showLogin, setShowLogin] = useState<boolean>(false);

  return (
    <div className="Home">
      {!showLogin && <RegistrationForm goToLogin={setShowLogin} />}
      {showLogin && <LoginForm />}
    </div>
  );
}

export default Home;
