import IssueIcon from 'components/IssueIcon';

import { shallow } from 'enzyme';
import React = require('react');

describe('<IssueIcon />', () => {
  it('should render a SVG', () => {
    const renderedComponent = shallow(
      <IssueIcon />
    );
    expect(renderedComponent.find('svg').length).toEqual(1);
  });
});
