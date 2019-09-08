import React from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore

function Header(): JSX.Element {
  return (
    <div className="Header">
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
