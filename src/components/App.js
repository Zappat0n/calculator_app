import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const value = calculate({
    total: 1,
    next: 1,
    operation: '+',
  }, '=');

  return (
    <>
      {<Display result={value.next} />}
      {<ButtonPanel />}
    </>
  );
};

export default App;
