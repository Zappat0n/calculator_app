import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;

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
