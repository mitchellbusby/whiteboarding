var reducer = require('../../src/reducers/whiteboarding/whiteboarditem');

import { CREATE_WHITEBOARD_ITEM_COMPLETE } from '../../src/action-types/whiteboarding/constants';

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

});
