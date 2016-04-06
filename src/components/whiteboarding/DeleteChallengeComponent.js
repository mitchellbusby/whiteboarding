'use strict';

import React from 'react';

require('styles/whiteboarding/DeleteChallenge.scss');

class DeleteChallengeComponent extends React.Component {
  render() {

    var challengeButtons = [];

    for (var i=0; i < 9; i++) {
      challengeButtons.push(
        <div className="button">
          { i }
        </div>
      );
    }

    return (
      <div className="deletechallenge-component">
        <div className="inner">
          <div className="buttons">
            {
              challengeButtons
            }
          </div>
        </div>
      </div>
    );
  }
}

DeleteChallengeComponent.displayName = 'WhiteboardingDeleteChallengeComponent';

// Uncomment properties you need
DeleteChallengeComponent.propTypes = {

};
// DeleteChallengeComponent.defaultProps = {};

export default DeleteChallengeComponent;
