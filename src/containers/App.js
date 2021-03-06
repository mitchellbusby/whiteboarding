/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main';
import {
  CreateWhiteboardItemComplete,
  DeleteWhiteboardItemComplete,
  UpvoteWhiteboardItemComplete,
  DownvoteWhiteboardItemComplete,
  DevoteWhiteboardItemComplete,
  AttemptDeleteWhiteboardItem
} from '../actions/whiteboarding/whiteboarditem';
/* Populated by react-webpack-redux:reducer */
class App extends Component {
  render() {
    const {actions, whiteboarditem, items, whiteboardchallenge} = this.props;
    return (
      <Main
        Actions={actions}
        WhiteboardItems={whiteboarditem}
        items={items}
        WhiteboardChallenge={whiteboardchallenge}/>
    );
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.object.isRequired,
  whiteboarditem: PropTypes.object.isRequired,
  items: PropTypes.object.isRequired,
  whiteboardchallenge: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  const props = {
    whiteboarditem: state.whiteboarditem,
    items: state.items,
    whiteboardchallenge: state.whiteboardchallenge
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    CreateWhiteboardItemComplete: CreateWhiteboardItemComplete,
    DeleteWhiteboardItemComplete: DeleteWhiteboardItemComplete,
    UpvoteWhiteboardItemComplete: UpvoteWhiteboardItemComplete,
    DownvoteWhiteboardItemComplete: DownvoteWhiteboardItemComplete,
    DevoteWhiteboardItemComplete: DevoteWhiteboardItemComplete,
    AttemptDeleteWhiteboardItem: AttemptDeleteWhiteboardItem
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
