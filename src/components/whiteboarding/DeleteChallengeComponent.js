'use strict';

import React, { PropTypes } from 'react';

import ChallengeButtonComponent from './DumbComponents/ChallengeButtonComponent';

import { ShuffleArray } from '../../utils/arrays';

require('styles/whiteboarding/DeleteChallenge.scss');

class DeleteChallengeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      challengeCompleted: false,
      completedNumbers: [],
      numberSequence: ShuffleArray(Array(9).fill().map((_, i)=>i+1))
    };
  }
  render() {
    let { numberSequence, completedNumbers } = this.state;
    return (
      <div className="deletechallenge-component whiteboard-card">
        <div className="button-container">
          <div className="buttons">
            {
              numberSequence.map((x) =>
                <ChallengeButtonComponent assignedNumber={x}
                  hasBeenClicked={completedNumbers.indexOf(x)!==-1}
                  willTrigger={this.isACorrectNumber(x)}
                  handleClick={(number) => this.handleNumberClick(number)} />
              )
            }
          </div>
        </div>
        <div className="hint">
        {
          this.state.challengeCompleted ?
          <button type="button" className={"pure-button delete-button button-secondary button-error"} onClick={() => this.handleDeleteClick()}>Delete</button> :
          <p>Only click the even numbers</p>
        }
        </div>
      </div>
    );
  }
  isACorrectNumber(number) {
    return number % 2 == 0;
  }
  handleNumberClick(number) {

    let { numberSequence } = this.state;

    let numberToBeCompleted = numberSequence.filter(this.isACorrectNumber).length;

    // Check if this is a valid number
    if (this.isACorrectNumber(number)) {

      // Check if this number hasn't already been clicked
      if (this.state.completedNumbers.indexOf(number) === -1) {
        this.setState({completedNumbers: this.state.completedNumbers.concat(number)}, () => {
          // Callback to update challenge complete!
          if (this.state.completedNumbers.length >= numberToBeCompleted) {
            this.setState({ challengeCompleted: true });
          }
        });
      }
    }
  }

  handleDeleteClick() {
    let { onDelete, id } = this.props;
    onDelete(id);
  }
}

DeleteChallengeComponent.displayName = 'WhiteboardingDeleteChallengeComponent';

// Uncomment properties you need
DeleteChallengeComponent.propTypes = {
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};
// DeleteChallengeComponent.defaultProps = {};

export default DeleteChallengeComponent;
