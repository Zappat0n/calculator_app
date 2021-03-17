import Big from 'big.js';
import { operate, OPERATORS } from './operate';

const calculate = (calculatorData, buttonName) => {
  let { total, next } = calculatorData;
  const newData = calculatorData;
  total = total || '0';
  next = (!next || next === 'inf') ? '0' : next;

  const updateData = (_total, _next, _operation = calculatorData.operation) => {
    newData.total = _total;
    newData.next = _next.toString();
    newData.operation = _operation;
  };

  const updateResult = result => {
    newData.total = '0';
    newData.next = result.toString();
    newData.operation = buttonName === '=' ? null : buttonName;
  };

  const indexOfOperator = () => OPERATORS.reduce((result, operator) => (
    next.slice(1, next.length - 1).indexOf(operator) !== -1
      ? next.slice(1, next.length - 1).indexOf(operator) : result), -1);

  const index = indexOfOperator();
  const indexWithoutMinus = ['*', '+', '/'].reduce((result, operator) => (next.indexOf(operator) !== -1 ? next.indexOf(operator) : result), -1);

  switch (buttonName) {
    case 'AC':
      newData.total = '';
      newData.next = '0';
      newData.operation = null;
      break;
    case '+/-':
      if (indexWithoutMinus === -1) {
        updateData(total, Big(next).times(new Big(-1)).toFixed());
      } else {
        updateData(total, `${next.slice(0, indexWithoutMinus + 1)}${Big(next.slice(indexWithoutMinus + 1, next.length)).times(new Big(-1)).toFixed()}`, null);
      }
      break;
    case '+':
    case '-':
    case '*':
    case '/':
      if (index !== -1) {
        if (OPERATORS.reduce(
          (result, operator) => (result || next[next.length - 1] === operator), false,
        )) {
          next = next.slice(0, next.length - 1) + buttonName;
          updateData(total, next, null);
        } else {
          updateResult(operate(total, next, buttonName));
        }
      } else {
        updateData(total, `${next}${buttonName}`, null);
      }
      break;
    case '%':
      if (index !== -1) {
        const num2 = next.slice(index + 1, next.length);
        updateData(total, `${next.slice(0, index + 1)}${Big(num2).div(100)}`, null);
      } else {
        updateResult(operate(total, `${next}/100`, null));
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
        if (buttonName === '.' && next.indexOf('.') !== -1) {
          return calculatorData;
        }
        updateData(total, `${next}${buttonName}`);
      } else {
        if (buttonName === '0') { return calculatorData; }
        if (buttonName !== '.') {
          updateData(total, buttonName);
        }
      }
      break;
    case '=':
      if (index !== -1) {
        updateResult(operate(total, next, null));
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
