import { CREATE_WHITEBOARD_ITEM_COMPLETE, DELETE_WHITEBOARD_ITEM_COMPLETE, DELETE_WHITEBOARD_ITEM_ATTEMPT,
  UPVOTE_WHITEBOARD_ITEM_COMPLETE, DOWNVOTE_WHITEBOARD_ITEM_COMPLETE, DEVOTE_WHITEBOARD_ITEM_COMPLETE } from '../../action-types/whiteboarding/constants';

import { VOTE_STATUS } from '../../well_known_constants/enums';

/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
const initialState = {
  items: [
    {
      id: 0,
      description: 'Hello world',
      upvotes: [{id:0}],
      downvotes: [{id:1}],
      dateAdded: Date(),
      minRatio: [300, 300],
      maxRatio: [300, 300],
      voteStatus: VOTE_STATUS.NONE,
      attemptingToDelete: false
    }
  ]
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
  case CREATE_WHITEBOARD_ITEM_COMPLETE: {
    let nextState = Object.assign({},
      state,
      {
        items: state.items.concat(action.item),
        addingAnItem: false
      }
    );
    return nextState;
  }
  case DELETE_WHITEBOARD_ITEM_ATTEMPT: {
    let nextState = Object.assign({},
      state,
      {
        items: state.items.map(item => {
          return Object.assign({}, item, item.id === action.itemId ? {attemptingToDelete: true} : {});
        })
      });
    return nextState;
  }
  case DELETE_WHITEBOARD_ITEM_COMPLETE: {
    let nextState = Object.assign({},
      state,
      {
        items: state.items.filter(item => item.id !== action.itemId)
      }
    );
    return nextState;
  }
  case UPVOTE_WHITEBOARD_ITEM_COMPLETE: {
    let nextState = Object.assign({},
      state,
      {
        items: state.items.map((item) => {
          if (item.id === action.itemId) {
            return Object.assign({}, item, {
              downvotes: item.downvotes.filter(vote=>vote.id!==action.userId),
              upvotes: item.upvotes.concat({id: action.userId}),
              voteStatus: VOTE_STATUS.UPVOTED
            });
          }
          return Object.assign({}, item);
        })
      }
    );
    return nextState;
  }
  case DOWNVOTE_WHITEBOARD_ITEM_COMPLETE: {
    let nextState = Object.assign({},
      state,
      {
        items: state.items.map((item)=> {
          if (item.id===action.itemId) {
            return Object.assign({}, item, {
              downvotes: item.downvotes.concat({id: action.userId}),
              upvotes: item.upvotes.filter(vote=>vote.id!==action.userId),
              voteStatus: VOTE_STATUS.DOWNVOTED
            });
          }
          return Object.assign({}, item);
        })
      }
    );
    return nextState;
  }
  case DEVOTE_WHITEBOARD_ITEM_COMPLETE: {
    let nextState = Object.assign({},
      state,
      {
        items: state.items.map((item)=> {
          if (item.id===action.itemId) {
            return Object.assign({}, item, {
              downvotes: item.downvotes.filter(vote=>vote.id!==action.userId),
              upvotes: item.upvotes.filter(vote=>vote.id!==action.userId),
              voteStatus: VOTE_STATUS.NONE
            });
          }
          return Object.assign({}, item);
        })
      });
    return nextState;
  }
  default: {
    /* Return original state if no actions were consumed. */
    return state;
  }
  }
};
