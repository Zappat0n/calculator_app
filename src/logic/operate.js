import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  switch (operation) {
    case '+': return Big(numberOne).add(numberTwo).c;
    case '-': return Big(numberOne).minus(numberTwo).c;
    case '*': return Big(numberOne).times(numberTwo).c;
    case '/': return Big(numberOne).div(numberTwo).c;
    case '%': return 100 * Big(numberOne).div(numberTwo).c;
    default: return null;
  }
};

export default operate;
