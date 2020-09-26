import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import rootReducer from '../reducer/Index';

// import counterReducer from '../reducer/Counter.reducer';
// export default createStore(counterReducer)

// import cartReducer from "../reducer/Cart.reducer"
// export default createStore(cartReducer)

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default store