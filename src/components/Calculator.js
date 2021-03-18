import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import NavBar from './NavBar';
import style from '../assets/Calculator.module.css';

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
      <NavBar />
      <div className={style.container}>
        <h2>Let&apos;s do some math!</h2>
        <div className={style.calculator}>
          {<Display result={next} />}
          {<ButtonPanel clickHandler={handleClick} />}
        </div>
      </div>
    </>
  );
};

export default Calculator;
