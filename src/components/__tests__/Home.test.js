import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Home from '../Home';

const history = createBrowserHistory();

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router history={history}>
        <Home />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('contains Title', () => {
  const { container, getByText } = render(
    <Router history={history}>
      <Home />
    </Router>,
  );
  expect(getByText('Welcome to our page!')).toBeInTheDocument();
  expect(container.children[1]).toMatchInlineSnapshot(`
    <h2>
      Welcome to our page!
    </h2>
  `);
});

it('contains NavBar', () => {
  const { getByText } = render(
    <Router history={history}>
      <Home />
    </Router>,
  );
  expect(getByText('Math Magicians')).toBeInTheDocument();
});
