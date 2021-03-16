import PropTypes from 'prop-types';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

const App = ({ result }) => (
  <>
    {<Display result={result} />}
    {<ButtonPanel />}
  </>
);

App.propTypes = {
  result: PropTypes.string,
};

App.defaultProps = {
  result: '0',
};

export default App;
