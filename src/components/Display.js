import PropTypes from 'prop-types';
import '../assets/Display.module.css';

const Display = props => {
  let { result } = props;
  result = result || '0';

  return (
    <p>
      { result }
    </p>
  );
};

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
