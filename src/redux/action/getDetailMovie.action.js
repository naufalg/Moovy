import axios from "axios";
export const GET_DETAIL_REQUEST = "GET_DETAIL_REQUEST";
export const GET_DETAIL_SUCCESS = "GET_DETAIL_SUCCESS";
export const GET_DETAIL_FAILED = "GET_DETAIL_FAILED";

export const getDetailRequest = () => {
  return {
    type: GET_DETAIL_REQUEST,
  };
};

export const getDetailSuccess = (result) => {
  return {
    type: GET_DETAIL_SUCCESS,
    result,
  };
};

export const getDetailFailed = (error) => {
  return {
    type: GET_DETAIL_FAILED,
    error,
  };
};

export function getDetailActions(id) {
  return function (dispatch) {
    dispatch(getDetailRequest(id));
    console.log("tes action detail");
    // nowPlaying api url
    const movie_id = id
    // console.log("movie_id", movie_id);
    const api_key = process.env.REACT_APP_TMDB_API_KEY
    const url1 = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}`;
    axios
      .get(url1)
      .then((result) => dispatch(getDetailSuccess(result.data)))
      .catch((error) => dispatch(getDetailFailed(error)));
  };
}
