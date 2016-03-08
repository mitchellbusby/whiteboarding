const redux = require('redux');
const reducers = require('../reducers');

import createLogger from 'redux-logger';

module.exports = function(initialState) {

  const logger = createLogger();

  const middleware = redux.applyMiddleware(logger);

  const store = redux.createStore(reducers, initialState, middleware);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
