import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import musixmatchReducer from "../reducers/musixmatchReducer";
import pixabayReducer from "../reducers/pixabayReducer";
import uiReducer from "../reducers/uiReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  musixmatch: musixmatchReducer,
  pixabay: pixabayReducer,
  UI: uiReducer,
});

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
