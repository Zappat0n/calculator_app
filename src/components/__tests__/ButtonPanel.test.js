import React from 'react';
import renderer from 'react-test-renderer';
import ButtonPanel from '../ButtonPanel';

it('renders correctly', () => {
  const tree = renderer
    .create(<ButtonPanel clickHandler={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
