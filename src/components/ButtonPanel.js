import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const createButton = name => (<Button name={name} onClick={clickHandler} />);

  return (
    <>
      <div className="group-1">
        {createButton('AC')}
        {createButton('+/-')}
        {createButton('%')}
        {createButton('/')}
      </div>
      <div className="group-2">
        {createButton('7')}
        {createButton('8')}
        {createButton('9')}
        {createButton('X')}
      </div>
      <div className="group-3">
        {createButton('4')}
        {createButton('5')}
        {createButton('6')}
        {createButton('-')}
      </div>
      <div className="group-4">
        {createButton('1')}
        {createButton('2')}
        {createButton('3')}
        {createButton('+')}
      </div>
      <div className="group-5">
        {createButton('0')}
        {createButton('.')}
        {createButton('=')}
      </div>
    </>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
