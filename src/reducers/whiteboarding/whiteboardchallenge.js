/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */

import { DELETE_WHITEBOARD_ITEM_ATTEMPT, DELETE_WHITEBOARD_ITEM_COMPLETE } from '../../action-types/whiteboarding/constants';

const initialState = {
  currentItemId: null,
  challengeIsInProgress: false,
  challengeIsCompleted: false
};

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  switch(action.type) {
    /*
    case 'YOUR_ACTION': {
      // Modify next state depending on the action and return it
      return nextState;
    } break;
    */
  case DELETE_WHITEBOARD_ITEM_ATTEMPT: {
    let nextState = Object.assign({}, state, { challengeIsInProgress: true, currentItemId: action.itemId });
    return nextState;
  }
  case DELETE_WHITEBOARD_ITEM_COMPLETE: {
    let nextState = Object.assign({}, state, {challengeIsInProgress: false, currentItemId: null});
    return nextState;
  }
  default: {
    /* Return original state if no actions were consumed. */
    return state;
  }
  }
};
