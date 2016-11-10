import H1 from 'components/H1';

import { shallow } from 'enzyme';
import React = require('react');
import ReactElement = __React.ReactElement;

describe('<H1 />', () => {
  it('should render its text', () => {
    const children = 'Text' as any as ReactElement<any>;
    const renderedComponent = shallow(
      <H1>{children}</H1>
    );
    expect(renderedComponent.contains(children));
  });
});
