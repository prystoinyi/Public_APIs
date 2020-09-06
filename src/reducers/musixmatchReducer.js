import {
  SET_TRACK_LIST,
  CHANGE_FILTER,
  LOADING_MUSIX,
  SET_SEARCH_TRACK_LIST
} from "../actions/actionTypes";

const initialState = {
  track_list: [],
  searchTrack_list: [],
  filter: { size: "10", chartName: "top", country: "ru" },
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_TRACK_LIST:
      return {
        ...state,
        track_list: action.payload,
        loading: false,
      };
    case CHANGE_FILTER:
      return {
        ...state,
        filter: { ...state.filter, ...action.payload },
      };
    case LOADING_MUSIX:
      return {
        ...state,
        loading: true,
      };
    case SET_SEARCH_TRACK_LIST:
      return {
        ...state,
        searchTrack_list: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
