import Big from 'big';
import operate from './operate';

const calculate = (calculatorData, buttonName) => {
  const { total, next, operation } = calculatorData;
  const newData = calculatorData;

  const updateData = total => {
    newData.total = total;
  };

  switch (buttonName) {
    case '+': case '-': case '*': case '/': case '%': updateData(operate(Big(total), Big(next), operation)); break;
    default: return null;
  }

  return newData;
};

export default calculate;
