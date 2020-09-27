import axios from "axios";
export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILED = "GET_DATA_FAILED";

export const getDataRequest = () => {
  return {
    type: GET_DATA_REQUEST,
  };
};

export const getDataSuccess = (result) => {
  return {
    type: GET_DATA_SUCCESS,
    result,
  };
};

export const getDataFailed = (error) => {
  return {
    type: GET_DATA_FAILED,
    error,
  };
};

export function getDataActions() {
  return function (dispatch) {
    dispatch(getDataRequest());
    // nowPlaying api url
    const api_key = process.env.REACT_APP_TMDB_API_KEY
    const url1 = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`;
    axios
      .get(url1)
      .then((result) => dispatch(getDataSuccess(result.data)))
      .catch((error) => dispatch(getDataFailed(error)));
  };
}
