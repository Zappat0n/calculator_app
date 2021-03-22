import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculator from '../Calculator';

const history = createBrowserHistory();

it('renders correctly', () => {
  const tree = renderer.create(
    <Router history={history}>
      <Calculator />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('contains Title', () => {
  const { container, getByText } = render(
    <Router history={history}>
      <Calculator />
    </Router>,
  );
  expect(getByText("Let's do some math!")).toBeInTheDocument();
  expect(container.children[1].firstChild).toMatchInlineSnapshot(`
    <h2>
      Let's do some math!
    </h2>
  `);
});

it('contains NavBar', () => {
  const { getByText } = render(
    <Router history={history}>
      <Calculator />
    </Router>,
  );
  expect(getByText('Math Magicians')).toBeInTheDocument();
});

it('contains Display', () => {
  const { container } = render(
    <Router history={history}>
      <Calculator />
    </Router>,
  );
  expect(container.children[1].children[1].firstChild.className).toBe('display');
});

it('contains Panel', () => {
  const { container } = render(
    <Router history={history}>
      <Calculator />
    </Router>,
  );
  expect(container.children[1].children[1].children[1].className).toBe('panel');
});
