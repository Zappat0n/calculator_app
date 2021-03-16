import Big from 'big.js';
import operate from './operate';

const calculate = (calculatorData, buttonName) => {
  const { total, next, operation } = calculatorData;
  const newData = calculatorData;

  const updateData = (_total, _next, _operation) => {
    newData.total = _total;
    newData.next = _next;
    newData.operation = _operation;
  };

  const updateResult = result => {
    newData.total = 0;
    newData.next = result;
    newData.operation = buttonName;
  };

  switch (buttonName) {
    case 'AC':
      newData.total = '';
      newData.next = '';
      newData.operation = null;
      break;
    case '+/-':
      updateData(total, Big(next).times(-1), operation);
      break;
    case '+':
    case '-':
    case '*':
    case '/':
    case '%':
      updateResult(operate(total, next, operation));
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
      updateData(total, `${next}${buttonName}`, operation);
      break;
    case '=':
      updateResult(operate(total, next, operation));
      break;
    default:
      return null;
  }

  return newData;
};

export default calculate;
