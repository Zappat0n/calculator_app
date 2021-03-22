import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Quote from '../Quote';
import '@testing-library/jest-dom/extend-expect';

const history = createBrowserHistory();

it('renders correctly', () => {
  const tree = renderer.create(
    <Router history={history}>
      <Quote />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('contains NavBar', () => {
  const { getByText } = render(
    <Router history={history}>
      <Quote />
    </Router>,
  );
  expect(getByText('Math Magicians')).toBeInTheDocument();
});
