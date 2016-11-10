
import { shallow } from 'enzyme';
import React = require('react');

import Footer from 'components/Footer';
import A from 'components/A';

describe('<Footer />', () => {
  it('should render the copyright notice', () => {
    const renderedComponent = shallow(
      <Footer />
    );
    expect(renderedComponent.contains(
      <section>
        <p>This project is licensed under the MIT license.</p>
      </section>
    )).toEqual(true);
  });

  it('should render the credits', () => {
    const renderedComponent = shallow(<Footer />);
    expect(renderedComponent.contains(
      <section>
        <p>Made with love by <A href="https://twitter.com/mxstbr">Max Stoiber</A>.</p>
      </section>
    )).toEqual(true);
  });
});
