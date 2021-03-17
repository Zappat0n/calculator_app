import Big from 'big.js';
import operate from './operate';

const calculate = (calculatorData, buttonName) => {
  let { total, next } = calculatorData;
  const newData = calculatorData;
  total = total || '0';
  next = next || '0';

  const updateData = (_total, _next, _operation = calculatorData.operation) => {
    newData.total = _total;
    newData.next = _next.toString();
    newData.operation = _operation;
    console.log(newData, buttonName);
  };

  const updateResult = result => {
    newData.total = '0';
    newData.next = result.toString();
    newData.operation = buttonName === '=' ? null : buttonName;
    console.log(newData, buttonName);
  };

  switch (buttonName) {
    case 'AC':
      newData.total = '';
      newData.next = '0';
      newData.operation = null;
      break;
    case '+/-':
      updateData(total, Big(next).times(new Big(-1)).toFixed());
      break;
    case '+':
    case '-':
    case '*':
    case '/':
    case '%':
      if (total === '0') {
        updateData(next, 0, buttonName);
      } else {
        updateResult(operate(total, next, calculatorData.operation));
      }
      break;
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '.':
      if (next !== '0' || buttonName === '.') {
        updateData(total, `${next}${buttonName}`);
      } else {
        if (buttonName === '0') { return calculatorData; }
        if (buttonName !== '.') {
          updateData(total, buttonName);
        }
      }
      break;
    case '=':
      if (calculatorData.operation) {
        updateResult(operate(total, next, calculatorData.operation));
      } else {
        return calculatorData;
      }
      break;
    default:
      return null;
  }

  return newData;
};

export default calculate;
