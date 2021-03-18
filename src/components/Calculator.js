import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../assets/styles.css';
import NavBar from './NavBar';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = buttonName => {
    const state = { total, next, operation };

    const newData = calculate(state, buttonName);
    setTotal(newData.total);
    setNext(newData.next);
    setOperation(newData.operation);
  };

  return (
    <>
      {<NavBar message="Let’s do some math!" />}
      {<Display result={next} />}
      {<ButtonPanel clickHandler={handleClick} />}
    </>
  );
};

export default Calculator;
