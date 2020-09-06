import {
  SET_TRACK_LIST,
  LOADING_MUSIX,
  CHANGE_FILTER,
  SET_SEARCH_TRACK_LIST,
} from "./actionTypes";
import axios from "axios";

export const getTrackList = (filter) => (dispatch) => {
  dispatch({
    type: LOADING_MUSIX,
  });
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=${filter.chartName}&page=1&page_size=${filter.size}&country=${filter.country}&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
    )
    .then((res) => {
      dispatch({
        type: SET_TRACK_LIST,
        payload: res.data.message.body.track_list,
      });
    })
    .catch((err) => console.log(err));
};

export const changeFilter = (filter) => (dispatch, getState) => {
  dispatch({
    type: LOADING_MUSIX,
  });
  dispatch({
    type: CHANGE_FILTER,
    payload: filter,
  });

  dispatch(getTrackList(getState().musixmatch.filter));
};

export const searchTrackList = (trackTitle, history) => (dispatch) => {
  dispatch({
    type: LOADING_MUSIX,
  });
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=50&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
    )
    .then((res) => {
      dispatch({
        type: SET_SEARCH_TRACK_LIST,
        payload: res.data.message.body.track_list,
      });
      history.push("/musixmatch/search");
    })
    .catch((err) => console.log(err));
};
