import React from 'react';
import { Link } from 'react-router-dom';
import style from '../assets/NavBar.module.css';

const NavBar = () => (
  <>
    <div className={style.top}>
      <h1>Math Magicians</h1>
      <div className={style.links}>
        <Link className={style.link} to="/">Home</Link>
        <Link className={style.link} to="/calculator">Calculator</Link>
        <Link className={style.link} to="/quote">Quote</Link>
      </div>
    </div>
  </>
);

export default NavBar;
