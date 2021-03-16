import Big from 'big';

const operate = (numberOne, numberTwo, operation) => {
  switch (operation) {
    case '+': return Big(numberOne) + Big(numberTwo);
    case '-': return Big(numberOne) - Big(numberTwo);
    case '*': return Big(numberOne) * Big(numberTwo);
    case '/': return Big(numberOne) / Big(numberTwo);
    case '%': return (100 * Big(numberOne)) / Big(numberTwo);
    default: return null;
  }
};

export default operate;
