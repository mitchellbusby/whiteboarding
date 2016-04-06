'use strict';

import React, {PropTypes} from 'react';
import classNames from 'classnames';
import MaterialIcon from '../shared/MaterialIconComponent';

import { VOTE_STATUS_CLASSES, VOTE_STATUS } from '../../well_known_constants/enums';

require('styles/whiteboarding/Whiteboarditem.scss');

class WhiteboarditemComponent extends React.Component {
  render() {
    const { description, upvotes, downvotes, id, voteStatus, attemptingToDelete } = this.props;

    // voteStatus should probably be calculated at a later date instead of having this messy data duplication
    let voteStatusClass = VOTE_STATUS_CLASSES[voteStatus];

    return (
      <div className={classNames("whiteboarditem-component whiteboard-card", {'attemptingDelete': attemptingToDelete})}>
        { description }
        <div className={classNames(voteStatusClass, 'status-bar')}>
          <span className={'status-item upvote'} onClick={() => this.handleUpvoteClick(id)}>
            <MaterialIcon name={'trending_up'} />
            { upvotes.length }
          </span>
          &nbsp;|&nbsp;
          <span className={'status-item downvote'} onClick={() => this.handleDownvoteClick(id)}>
            <MaterialIcon name={'trending_down'} />
            { downvotes.length }
          </span>
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
    this.props.onDelete(id);
  }
  handleUpvoteClick(id) {
    // Edge case for if user wants to unvote
    if (this.props.voteStatus === VOTE_STATUS.UPVOTED) {
      this.props.onDevote(id);
    }
    else {
      this.props.onUpvote(id);
    }
  }
  handleDownvoteClick(id) {
    // Edge case for if user wants to unvote
    if (this.props.voteStatus === VOTE_STATUS.DOWNVOTED) {
      this.props.onDevote(id);
    }
    else {
      this.props.onDownvote(id);
    }
  }
}

WhiteboarditemComponent.displayName = 'WhiteboardingWhiteboarditemComponent';

// Uncomment properties you need
WhiteboarditemComponent.propTypes = {
  description: PropTypes.string.isRequired,
  upvotes: PropTypes.array,
  downvotes: PropTypes.array,
  onUpvote: PropTypes.func,
  onDownvote: PropTypes.func,
  onDelete: PropTypes.func,
  onDevote: PropTypes.func,
  key: PropTypes.number,
  id: PropTypes.number.isRequired,
  voteStatus: PropTypes.number.isRequired,
  attemptingToDelete: PropTypes.bool.isRequired,
};
WhiteboarditemComponent.defaultProps = {
  upvotes: [],
  downvotes: []
};

export default WhiteboarditemComponent;
