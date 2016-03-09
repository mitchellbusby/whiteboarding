/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;
import createComponent from 'helpers/shallowRenderHelper';

import Main from 'components/Main';

describe('MainComponent', () => {
  let MainComponent;
  let WhiteboardItems;
  let Actions;
  beforeEach(() => {
    WhiteboardItems = { items: [] };
    Actions = { };
    MainComponent = createComponent(Main, { WhiteboardItems: WhiteboardItems, Actions: Actions });
  });

  it('should have its component name as default className', () => {
    expect(MainComponent.props.className).to.equal('index');
  });
});
