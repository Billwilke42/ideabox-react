import React from 'react';
import {shallow, mount} from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(
      <Card
        title="Bananas"
        body="brown and spotty"
        removeCard={jest.fn()}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should have a className of favorite if it is a favorite', () => {
    const wrapper = shallow(<Card title='burritos' isFavorite />);
    expect(wrapper.is('.favorite')).toEqual(true);
  });

  it('should call the removeIdea prop when clicked', () => {
    const removeIdeaMock = jest.fn();

    const wrapper = mount(
      <Card
        title='blah'
        body='hello'
        removeIdea={removeIdeaMock}
      />
    );
    wrapper.find('.btn-remove').simulate('click');
    expect(removeIdeaMock).toBeCalled();
  });
});
