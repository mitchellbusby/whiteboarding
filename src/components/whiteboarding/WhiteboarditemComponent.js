'use strict';

import React, {PropTypes} from 'react';

require('styles/whiteboarding/Whiteboarditem.scss');

class WhiteboarditemComponent extends React.Component {
  render() {
    const { description, upvotes, downvotes } = this.props;
    return (
      <div className="whiteboarditem-component">
        { description }
        <div className="status-bar">
          { 'Upvotes:' + upvotes.length }
          &nbsp;|&nbsp;
          { 'Downvotes: ' + downvotes.length }
        </div>
      </div>
    );
  }
}

WhiteboarditemComponent.displayName = 'WhiteboardingWhiteboarditemComponent';

// Uncomment properties you need
WhiteboarditemComponent.propTypes = {
  description: PropTypes.string.isRequired,
  upvotes: PropTypes.array,
  downvotes: PropTypes.array,
};
WhiteboarditemComponent.defaultProps = {
  upvotes: [],
  downvotes: [],
};

export default WhiteboarditemComponent;
