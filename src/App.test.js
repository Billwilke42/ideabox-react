import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should update state with an idea when addIdea is called', () => {
    // Setup 
    const wrapper = shallow(<App/>);
    console.log(wrapper);
    const mockIdea = {title: 'blah', body: 'hello', id: Date.now()};
    const expected = [mockIdea];

    // Execute
    wrapper.instance().addIdea(mockIdea);

    // Assertion
    expect(wrapper.state('ideas')).toEqual(expected);
  });
});
