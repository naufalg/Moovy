import { combineReducers } from "redux";

import getMovieDataReducer from './getMovieData.reducer'



const rootReducer = combineReducers({getMovieDataReducer})

export default rootReducer