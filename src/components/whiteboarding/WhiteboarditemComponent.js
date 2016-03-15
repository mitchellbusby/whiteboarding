'use strict';

import React, {PropTypes} from 'react';
import MaterialIcon from '../shared/MaterialIconComponent';

require('styles/whiteboarding/Whiteboarditem.scss');

class WhiteboarditemComponent extends React.Component {
  render() {
    const { description, upvotes, downvotes, upvote, downvote, onDelete, id } = this.props;
    return (
      <div className="whiteboarditem-component whiteboard-card">
        { description }
        <div className="status-bar">
          <MaterialIcon name={'trending_up'} onClick={() => upvote(id)} />
          { upvotes.length }
          &nbsp;|&nbsp;
          <MaterialIcon name={'trending_down'} onClick={() => downvote(id)}/>
          { downvotes.length }
        </div>
        <div className="modifiers-bar">
          <span className="modifier" onClick={() => this.handleDeleteClick(id)}>
            <MaterialIcon name={"delete"} />
          </span>
          <span className="modifier">
            <MaterialIcon name={"refresh"} />
          </span>
        </div>
      </div>
    );
  }
  handleDeleteClick(id) {
    console.log(id);
    this.props.onDelete(id);
  }
}

WhiteboarditemComponent.displayName = 'WhiteboardingWhiteboarditemComponent';

// Uncomment properties you need
WhiteboarditemComponent.propTypes = {
  description: PropTypes.string.isRequired,
  upvotes: PropTypes.array,
  downvotes: PropTypes.array,
  upvote: PropTypes.func,
  downvote: PropTypes.func,
  onDelete: PropTypes.func,
  key: PropTypes.number,
  id: PropTypes.number.isRequired,
};
WhiteboarditemComponent.defaultProps = {
  upvotes: [],
  downvotes: []
};

export default WhiteboarditemComponent;
