import PropTypes from 'prop-types';
import style from '../assets/Display.module.css';

const Display = props => {
  let { result } = props;
  result = result || '0';

  return (
    <p className={style.display}>
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
