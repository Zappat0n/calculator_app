import PropTypes from 'prop-types';

const Button = props => {
  const { name, clickHandler } = props;

  const handleClick = buttonName => clickHandler(buttonName);

  return (
    <button type="button" onClick={handleClick(name)}>{ name }</button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
