import React from 'react';
import { NavLink } from 'react-router-dom';
import ChangeDate from '../components/ChangeDate';
const Header = () => (
  <header>
    <h1>Scheduler app</h1>
      <ChangeDate/>
    {/*<NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>*/}
    <NavLink to="/add" activeClassName="is-active"><button>+</button></NavLink>
  </header>
);

export default Header;
