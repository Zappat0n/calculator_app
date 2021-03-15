import React from 'react';
import ReactDOM from 'react-dom';

const Main = () => {
  return (
    <p>Hello world!</p>
  );
}

ReactDOM.render(
  <React.StrictMode> <Main /> </React.StrictMode>,
  document.getElementById('root')
);
