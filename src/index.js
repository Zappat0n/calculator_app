import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const Main = () => (<p>Hello world!</p>);

ReactDOM.render(
  <React.StrictMode>
    {' '}
    <Main />
  </React.StrictMode>,
  document.getElementById('root'),
);
