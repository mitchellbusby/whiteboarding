var reducer = require('../../src/reducers/whiteboarditem');

describe('whiteboarditem', () => {

  it('should not change the passed state', (done) => {

    const state = Object.freeze({});
    reducer(state, {type: 'INVALID'});

    done();
  });
});
