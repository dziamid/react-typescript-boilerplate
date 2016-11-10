import ListItem from 'components/ListItem';

import { shallow } from 'enzyme';
import React = require('react');

describe('<ListItem />', () => {
  it('should adopt the className', () => {
    const renderedComponent = shallow(<ListItem className="test" />);
    expect(renderedComponent.find('li').hasClass('test')).toEqual(true);
  });

  it('should render the content passed to it', () => {
    const content = 'Hello world!';
    const renderedComponent = shallow(
      <ListItem item={content} />
    );
    expect(renderedComponent.text()).toBe(content);
  });
});
