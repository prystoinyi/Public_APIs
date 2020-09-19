import { SET_IMAGE_LIST, SET_SEARCH_IMAGE_LIST } from "./actionTypes";
import axios from "axios";

export const getImageList = () => (dispatch) => {
  axios
    .get(
      `https://pixabay.com/api//?key=16542552-07c0e374662e075180fe8c626&image_type=photo&per_page=60`
    )
    .then((res) => {
      dispatch({
        type: SET_IMAGE_LIST,
        payload: res.data.hits,
      });
      console.log(res.data.hits);
    })
    .catch((err) => console.log(err));
};

export const searchImageList = (imgTitle, history) => (dispatch) => {
  console.log(imgTitle);
  console.log(history);
  axios
    .get(
      `https://pixabay.com/api//?key=16542552-07c0e374662e075180fe8c626&q=${imgTitle}&image_type=photo&per_page=54`
    )
    .then((res) => {
      dispatch({
        type: SET_SEARCH_IMAGE_LIST,
        payload: res.data.hits,
      });
      history.push("/pixabay/search");
    })
    .catch((err) => console.log(err));
};
