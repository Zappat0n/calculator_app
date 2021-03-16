import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const num1 = new Big(numberOne);

  switch (operation) {
    case '+': return num1.plus(numberTwo).toFixed();
    case '-': return num1.minus(numberTwo).toFixed();
    case '*': return num1.times(numberTwo).toFixed();
    case '/': return num1.div(numberTwo).toFixed();
    case '%': return 100 * num1.div(numberTwo).toFixed();
    default: return null;
  }
};

export default operate;
