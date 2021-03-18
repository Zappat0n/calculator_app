import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = props => {
  const { message } = props;

  return (
    <>
      <div className="top">
        <h1>Math Magicians</h1>
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </div>
      <h3>{message}</h3>
    </>
  );
};

NavBar.defaultProps = {
  message: null,
};

NavBar.propTypes = {
  message: PropTypes.string,
};

export default NavBar;
