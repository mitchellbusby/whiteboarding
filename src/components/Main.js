require('normalize.css');
require('styles/App.css');

import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Components

import WhiteboarditemComponent from './whiteboarding/WhiteboarditemComponent';
import InitNewWhiteboardItemComponent from './whiteboarding/InitNewWhiteboardItemComponent';

class AppComponent extends React.Component {
  render() {
    const { WhiteboardItems, Actions } = this.props;
    return (
      <div className="index">
        <ReactCSSTransitionGroup transitionName="whiteboard-item-animation" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
          {
            WhiteboardItems.items.map(WhiteboardItem =>
              <WhiteboarditemComponent key={WhiteboardItem.id} id={WhiteboardItem.id} description={ WhiteboardItem.description }
              upvotes={WhiteboardItem.upvotes} downvotes={WhiteboardItem.downvotes} voteStatus={WhiteboardItem.voteStatus}
              onDelete={ Actions.DeleteWhiteboardItemComplete }
              onUpvote={ Actions.UpvoteWhiteboardItemComplete }
              onDownvote={ Actions.DownvoteWhiteboardItemComplete }
              onDevote={ Actions.DevoteWhiteboardItemComplete } />
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
  Actions: PropTypes.object.isRequired
};

export default AppComponent;
