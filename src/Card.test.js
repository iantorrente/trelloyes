import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CardClass from './Card.js';

describe('Test suite for CardClass component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardClass />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<CardClass title='card-test' content={['a', 'b', 'c']} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});