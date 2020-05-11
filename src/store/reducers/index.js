import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// import reducers

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history)
  // rest of your reducers
});
export default createRootReducer;
