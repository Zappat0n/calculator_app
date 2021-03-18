import React from 'react';
import NavBar from './NavBar';

const style = {
  padding: '5rem',
};

const Quote = () => (
  <>
    <NavBar />
    <h3 style={style}>
      Mathematics is not about numbers, equations, computations,
      or algorithms: it is about understanding. –William Paul Thurston
    </h3>
  </>
);

export default Quote;
