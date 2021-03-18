import PropTypes from 'prop-types';
import style from '../assets/Button.module.css';

const Button = props => {
  const { name, clickHandler } = props;

  const handleClick = e => {
    e.preventDefault();
    clickHandler(e.target.innerText);
  };

  return (
    <button type="button" className={name === '0' ? style.button0 : style.button} onClick={handleClick}>{ name }</button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
