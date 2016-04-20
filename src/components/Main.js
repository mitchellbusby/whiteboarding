require('normalize.css');
require('styles/App.css');

import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Components

import WhiteboarditemComponent from './whiteboarding/WhiteboarditemComponent';
import DeleteChallengeComponent from './whiteboarding/DeleteChallengeComponent';
import InitNewWhiteboardItemComponent from './whiteboarding/InitNewWhiteboardItemComponent';

class AppComponent extends React.Component {
  render() {
    const { WhiteboardItems, WhiteboardChallenge, Actions } = this.props;
    return (
      <div className="index">
        <ReactCSSTransitionGroup transitionName="whiteboard-item-animation" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
          {
            WhiteboardItems.items.map(WhiteboardItem =>
              WhiteboardItem.attemptingToDelete ?
              <DeleteChallengeComponent key={WhiteboardItem.id} id={WhiteboardItem.id}
                onDelete={ Actions.DeleteWhiteboardItemComplete } />

              :

              <WhiteboarditemComponent key={WhiteboardItem.id} id={WhiteboardItem.id} description={ WhiteboardItem.description }
              upvotes={WhiteboardItem.upvotes} downvotes={WhiteboardItem.downvotes} voteStatus={WhiteboardItem.voteStatus}
              attemptingToDelete={WhiteboardItem.attemptingToDelete}
              onDelete={ Actions.AttemptDeleteWhiteboardItem }
              onUpvote={ Actions.UpvoteWhiteboardItemComplete }
              onDownvote={ Actions.DownvoteWhiteboardItemComplete }
              onDevote={ Actions.DevoteWhiteboardItemComplete }
              isDeleteable={ !WhiteboardChallenge.challengeIsInProgress } />
            )
          }
        </ReactCSSTransitionGroup>
        <InitNewWhiteboardItemComponent onCreate={ Actions.CreateWhiteboardItemComplete } />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

AppComponent.propTypes = {
  WhiteboardItems: PropTypes.object.isRequired,
  Actions: PropTypes.object.isRequired,
  WhiteboardChallenge: PropTypes.object.isRequired
};

export default AppComponent;
