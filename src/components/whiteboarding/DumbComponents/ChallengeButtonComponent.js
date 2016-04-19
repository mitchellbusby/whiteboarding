'use strict';

import React, { PropTypes } from 'react';
import classNames from 'classnames';

require('styles/whiteboarding/DumbComponents/ChallengeButton.scss');

class ChallengeButtonComponent extends React.Component {
  render() {

    const { hasBeenClicked, assignedNumber, willTrigger } = this.props;
    return (
        <div className={classNames("challengebutton", {'clicked': hasBeenClicked, 'willTrigger': willTrigger})}
          onClick={() => this.handleClick()}>
          { assignedNumber }
        </div>
      );
  }
  handleClick() {
    this.props.handleClick(this.props.assignedNumber);
  }
}


ChallengeButtonComponent.displayName = 'WhiteboardingDeleteChallengeComponent';

// Uncomment properties you need
ChallengeButtonComponent.propTypes = {
  hasBeenClicked: PropTypes.bool,
  willTrigger: PropTypes.bool,
  assignedNumber: PropTypes.number.isRequired,
  handleClick: PropTypes.func
};
// ChallengeButtonComponent.defaultProps = {};

export default ChallengeButtonComponent;
