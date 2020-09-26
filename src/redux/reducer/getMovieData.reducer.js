import {
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_FAILED,
  } from "../action/getMovieData.action";
  
  const initialDataState = {
    data: [],
    isLoading: false,
    error: null,
  };
  const getMovieReducer = (state = initialDataState, action) => {
    switch (action.type) {
      case GET_DATA_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case GET_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          data: action.result,
        };
      case GET_DATA_FAILED:
        return {
          ...state,
          isLoading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default getMovieReducer;
  