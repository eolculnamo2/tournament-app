import React, { useState } from 'react';
import { RegistrationForm, LoginForm } from '../components';
import '../scss/pages/home.scss';

function Home(): JSX.Element {
  const [showLogin, setShowLogin] = useState<boolean>(true);

  return (
    <div className="Home">
      {!showLogin && <RegistrationForm goToLogin={setShowLogin} />}
      {showLogin && <LoginForm goToRegister={setShowLogin} />}
    </div>
  );
}

export default Home;
