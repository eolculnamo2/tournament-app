import React, { useState } from 'react';
import { RegistrationForm, LoginForm, RandomQuote } from '../../components';
import '../../scss/pages/Home.scss';

function Home(): JSX.Element {
  const [showLogin, setShowLogin] = useState<boolean>(true);

  return (
    <div className="Home">
      <RandomQuote />
      {!showLogin && <RegistrationForm goToLogin={setShowLogin} />}
      {showLogin && <LoginForm goToRegister={setShowLogin} />}
    </div>
  );
}

export default Home;
