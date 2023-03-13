import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="main-nav">
      <ul className="main-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Sobre Nós</Link>
        </li>
        <li>
          <Link to="/courses">Cursos</Link>
        </li>
        <li>
          <Link to="/query">Teste Query</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
