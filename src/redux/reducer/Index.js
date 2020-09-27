import { combineReducers } from "redux";

import getMovieDataReducer from './getMovieData.reducer'
import getDetailMovieReducer from './getDetailMovie.reducer'



const rootReducer = combineReducers({getMovieDataReducer,getDetailMovieReducer})

export default rootReducer