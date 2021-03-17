import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = buttonName => clickHandler(buttonName);

  const createButtons = names => {
    const items = [];
    for (let i = 0; i < names.length; i += 1) {
      items.push(<Button name={names[i]} key={i} clickHandler={handleClick} />);
    }
    return items;
  };

  return (
    <>
      <div className="group-1">
        {createButtons(['AC', '+/-', '%', '/'])}
      </div>
      <div className="group-2">
        {createButtons(['7', '8', '9', 'X'])}
      </div>
      <div className="group-3">
        {createButtons(['4', '5', '6', '-'])}
      </div>
      <div className="group-4">
        {createButtons(['1', '2', '3', '+'])}
      </div>
      <div className="group-5">
        {createButtons(['0', '.', '='])}
      </div>
    </>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
