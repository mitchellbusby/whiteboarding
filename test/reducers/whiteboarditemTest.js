var reducer = require('../../src/reducers/whiteboarding/whiteboarditem');

import { CREATE_WHITEBOARD_ITEM_COMPLETE, DELETE_WHITEBOARD_ITEM_COMPLETE } from '../../src/action-types/whiteboarding/constants';

describe('whiteboarditem', () => {

  it('should not change the passed state', (done) => {

    const state = Object.freeze({});
    reducer(state, {type: 'INVALID'});

    done();
  });

  it('should add an item to the whiteboard items upon action', () => {
    const initialState = {
      items: []
    };
    const item = {
      id: 1,
    };
    let result = reducer(initialState, {type: CREATE_WHITEBOARD_ITEM_COMPLETE, item: item, isSuccess: true});
    expect(result.items.length).to.equal(
      1
    );
    expect(result.items[0]).to.equal(item);
  });

  it('should delete an item from the items given an id matching the item', () => {
    const itemIdToDelete = 1;

    const initialState = {
      items: [{
        id: itemIdToDelete,
      }]
    };

    const action = { type: DELETE_WHITEBOARD_ITEM_COMPLETE, itemId: itemIdToDelete };

    let result = reducer(initialState, action);

    expect(result.items.length).to.equal(0);

  });

  it('should not delete an item from the items given an id that matches no items', () => {
    const itemIdToDelete = 0;
    const itemIdInTheInitialState = 1;

    const initialState = {
      items: [{
        id: itemIdInTheInitialState
      }]
    };

    const action = { type: DELETE_WHITEBOARD_ITEM_COMPLETE, itemId: itemIdToDelete };

    let result = reducer(initialState, action);

    expect(result.items.length).to.equal(1);

  });
});
