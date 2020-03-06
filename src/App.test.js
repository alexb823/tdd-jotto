import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('renders learn react link', () => {
  const wrapper = shallow(<App />);
  const container = wrapper.find('.container')
  expect(container.length).toBe(1);
});
