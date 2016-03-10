'use strict';

import React, { PropTypes } from 'react';

import classNames from 'classnames';

import { GenerateRandomInteger } from '../../utils/numbers';

require('styles/whiteboarding/InitNewWhiteboardItem.scss');

class InitNewWhiteboardItemComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      description: '',
    };
  }

  render() {
    const stateClassNames = classNames('initnewwhiteboarditem-component',
      'whiteboard-card',
      'flip-container',
      {
        'editing': this.state.isEditing
      }
    );

    return (
      <div className={stateClassNames}>
        <div className="flipper">
          <div className="plus to-edit-tile front" onClick={() => this.onEditingClick()}>
            +
          </div>
          <form className="creation-form back">
            <div className="creation-text">
              <textarea placeholder={'Description...'} value={this.state.description} onChange={(ev) => this.handleChangeDescription(ev)}>
              </textarea>
            </div>
            <div className='creation-control'>
              <button type='button' className='pure-button pure-button-primary' onClick={()=> this.handleCreateClick()}>Create</button>
              &nbsp;
              <button type='button' className='pure-button' onClick={()=> this.onCancelClick()}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  onEditingClick() {
    this.setState({isEditing: true});
  }
  onCancelClick() {
    this.setState({isEditing: false});
  }
  handleCreateClick() {
    let item = {
      id: GenerateRandomInteger(100),
      description: this.state.description,
      upvotes: [],
      downvotes: [],
      dateAdded: Date(),
      minRatio: [],
      maxRatio: []
    };
    this.props.onCreate(item, false);
  }
  handleChangeDescription(ev) {
    this.setState({description: ev.target.value});
  }
}

InitNewWhiteboardItemComponent.displayName = 'WhiteboardingInitNewWhiteboardItemComponent';

// Uncomment properties you need
InitNewWhiteboardItemComponent.propTypes = {
  onEdit: PropTypes.func,
  onCreate: PropTypes.func,
  onCancel: PropTypes.func
};
InitNewWhiteboardItemComponent.defaultProps = {
};

export default InitNewWhiteboardItemComponent;
