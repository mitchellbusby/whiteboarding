var reducer = require('../../src/reducers/whiteboarding/whiteboardchallenge');

import { DELETE_WHITEBOARD_ITEM_ATTEMPT } from '../../src/action-types/whiteboarding/constants';

import { AttemptDeleteWhiteboardItem } from '../../src/actions/whiteboarding/whiteboarditem';

describe('whiteboardchallenge', () => {

  it('should not change the passed state', (done) => {

    const state = Object.freeze({});
    reducer(state, {type: 'INVALID'});

    done();
  });

  it('should update to have a challenge and an ID when a delete attempt is made', () => {
    const initialState = reducer(null, {});

    let idToBe = 1;

    let result = reducer(initialState, AttemptDeleteWhiteboardItem(idToBe));

    expect(result.challengeIsInProgress).to.be.true;
    expect(result.currentItemId).to.not.be.null;
    expect(result.currentItemId).to.equal(idToBe);
  });
});
