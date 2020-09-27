import { combineReducers } from "redux";

import getMovieDataReducer from './getMovieData.reducer'
import getDetailMovieReducer from './getDetailMovie.reducer'
import getUpcomingMovieReducer from './getUpcomingMovie.reducer'




const rootReducer = combineReducers({getMovieDataReducer,getDetailMovieReducer, getUpcomingMovieReducer})

export default rootReducer