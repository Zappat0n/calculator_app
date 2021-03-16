import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const num1 = new Big(numberOne);
  const num2 = new Big(numberTwo);

  switch (operation) {
    case '+': return num1.plus(num2).toFixed();
    case '-': return num1.minus(num2).toFixed();
    case '*': return num1.times(num2).toFixed();
    case '/': return num1.div(num2).toFixed();
    case '%': return 100 * num1.div(num2).toFixed();
    default: return null;
  }
};

export default operate;
