import {
    GET_DETAIL_REQUEST,
    GET_DETAIL_SUCCESS,
    GET_DETAIL_FAILED,
  } from "../action/getDetailMovie.action";
  
  const initialDetailState = {
    data: [],
    isLoading: false,
    error: null,
  };
  const getDetailReducer = (state = initialDetailState, action) => {
    switch (action.type) {
      case GET_DETAIL_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case GET_DETAIL_SUCCESS:
        return {
          ...state,
          isLoading: false,
          data: action.result,
        };
      case GET_DETAIL_FAILED:
        return {
          ...state,
          isLoading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default getDetailReducer;
  