import React from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import Logo from '../../../assets/images/logo.png';

function Header(): JSX.Element {
  return (
    <div className="Header">
      <Link to="/">
        <img
          className="Header__logo"
          src={Logo}
          alt="Sword Point HEMA Tournament Software"
        />
      </Link>
      <div className="Header__links-wrap">
        <Link to="/">Home</Link>
        <Link to="/">Home</Link>
        <Link to="/">Home</Link>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default Header;
