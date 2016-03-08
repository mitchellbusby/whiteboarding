'use strict';

import React, {PropTypes} from 'react';
import MaterialIcon from '../shared/MaterialIconComponent';

require('styles/whiteboarding/Whiteboarditem.scss');

class WhiteboarditemComponent extends React.Component {
  render() {
    const { description, upvotes, downvotes } = this.props;
    return (
      <div className="whiteboarditem-component whiteboard-card">
        { description }
        <div className="status-bar">
          <MaterialIcon name={'trending_up'} />
          { upvotes.length }
          &nbsp;|&nbsp;
          <MaterialIcon name={'trending_down'} />
          { downvotes.length }
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
  downvotes: PropTypes.array
};
WhiteboarditemComponent.defaultProps = {
  upvotes: [],
  downvotes: []
};

export default WhiteboarditemComponent;
