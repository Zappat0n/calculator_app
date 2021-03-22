import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

it('renders correctly', () => {
  const history = createBrowserHistory();
  const tree = renderer.create(
    <Router history={history}>
      <Calculator />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
