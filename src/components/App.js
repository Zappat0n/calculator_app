import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      // total: null,
      next: null,
      // operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { next } = this.state;
    console.log(buttonName, next);
  }

  render() {
    const { next } = this.state;
    return (
      <>
        {<Display result={next} />}
        {<ButtonPanel clickHandler={this.handleClick()} />}
      </>
    );
  }
}

export default App;
