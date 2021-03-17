import Big from 'big.js';

const OPERATORS = ['+', '-', '*', '/'];

const operate = (numberOne, numberTwo, operation) => {
  const calculate = (num1, num2, op) => {
    switch (op) {
      case '+': return num1.plus(num2).toFixed();
      case '-': return num1.minus(num2).toFixed();
      case '*': return num1.times(num2).toFixed();
      case '/': return numberTwo !== '0' ? num1.div(num2).toFixed() : 'inf';
      case '%': return num1.times(100).div(num2).toFixed();
      default: return null;
    }
  };

  const checkOperator = op => {
    if (numberTwo.indexOf(op) !== -1) {
      const num1 = new Big(numberTwo.slice(0, numberTwo.indexOf(op)));
      const num2 = new Big(numberTwo.slice(numberTwo.indexOf(op) + 1));
      return calculate(num1, num2, op);
    }
    return null;
  };

  for (let i = 0; i < OPERATORS.length; i += 1) {
    const result = checkOperator(OPERATORS[i]);
    if (result) {
      return result + (operation || '');
    }
  }

  return null;
};

export { operate, OPERATORS };
