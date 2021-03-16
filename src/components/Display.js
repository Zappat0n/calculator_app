import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;

  return (
    <p>
      { result }
    </p>
  );
};

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Display;
