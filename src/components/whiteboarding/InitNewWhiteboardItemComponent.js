'use strict';

import React, { PropTypes } from 'react';

import classNames from 'classnames';

require('styles/whiteboarding/InitNewWhiteboardItem.scss');

class InitNewWhiteboardItemComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      description: ''
    };
  }

  render() {
    const stateClassNames = classNames('initnewwhiteboarditem-component',
      'whiteboard-card',
      {
        'editing': this.state.isEditing
      }
    );

    return (
      <div className={stateClassNames}>
        <div className="plus to-edit-tile" onClick={() => this.onEditingClick()}>
          +
        </div>
        <form className="creation-form">
          <div className="creation-text">
            <textarea value={'Description...'} onChange={() => this.handleChangeDescription()}>
            </textarea>
          </div>
          <div className='creation-control'>
            <button type='button' className='pure-button pure-button-primary' onClick={()=> this.handleCreateClick()}>Create</button>
            &nbsp;
            <button type='button' className='pure-button' onClick={()=> this.onCancelClick()}>Cancel</button>
          </div>
        </form>
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
    let item = {};
    this.props.OnCreate(item);
  }
  handleChangeDescription(ev) {
    this.setState({description:ev.target.value});
  }
}

InitNewWhiteboardItemComponent.displayName = 'WhiteboardingInitNewWhiteboardItemComponent';

// Uncomment properties you need
InitNewWhiteboardItemComponent.propTypes = {
  OnEdit: PropTypes.func,
  OnCreate: PropTypes.func,
  OnCancel: PropTypes.func
};
InitNewWhiteboardItemComponent.defaultProps = {
  OnCreate: (itemToCreate) => {
    console.log(itemToCreate);
  }
};

export default InitNewWhiteboardItemComponent;
