import {
  APPBAR_PIXABAY,
  APPBAR_PIXABAY_STOP,
  SET_SEARCH_IMAGE_LIST,
  SET_IMAGE_LIST,
} from "../actions/actionTypes";

const initialState = {
  imageList: [],
  searchImageList: [],
  loadingAppBar: false,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case APPBAR_PIXABAY:
      return {
        ...state,
        loadingAppBar: true,
      };
    case APPBAR_PIXABAY_STOP:
      return {
        ...state,
        loadingAppBar: false,
      };
    case SET_IMAGE_LIST:
      return {
        ...state,
        imageList: action.payload,
        loading: false,
      };
    case SET_SEARCH_IMAGE_LIST:
      return {
        ...state,
        searchImageList: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
