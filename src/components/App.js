import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const newData = calculate(this.state, buttonName);
    this.setState(newData);
  }

  render() {
    const { next } = this.state;
    return (
      <>
        {<Display result={next} />}
        {<ButtonPanel clickHandler={this.handleClick} />}
      </>
    );
  }
}

export default App;
