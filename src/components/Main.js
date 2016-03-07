require('normalize.css');
require('styles/App.css');

import React, { PropTypes } from 'react';

// Components

import WhiteboarditemComponent from './whiteboarding/WhiteboarditemComponent';


class AppComponent extends React.Component {
  render() {
    const { WhiteboardItems } = this.props;
    return (
      <div className="index">
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        {
          WhiteboardItems.items.map(WhiteboardItem =>
            <WhiteboarditemComponent key={WhiteboardItem.id} description={ WhiteboardItem.description }
            upvotes={WhiteboardItem.upvotes} downvotes={WhiteboardItem.downvotes}/>
          )
        }
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

AppComponent.propTypes = {
  WhiteboardItems: PropTypes.object.isRequired
};

export default AppComponent;
