import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import renderer from 'react-test-renderer';
import Home from '../Home';

it('renders correctly', () => {
  const history = createBrowserHistory();
  const tree = renderer.create(
    <Router history={history}>
      <Home />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
