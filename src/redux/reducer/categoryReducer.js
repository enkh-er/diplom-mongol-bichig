import {
  ADD_CATEGORY_ERROR,
  ADD_CATEGORY_LOADING,
  ADD_CATEGORY_SUCCESS,
  DELETE_CATEGORY_ERROR,
  DELETE_CATEGORY_LOADING,
  DELETE_CATEGORY_SUCCESS,
  EDIT_CATEGORY_ERROR,
  EDIT_CATEGORY_ERROR,
  EDIT_CATEGORY_ERROR,
  FETCH_CATEGORY_ERROR,
  FETCH_CATEGORY_ERROR,
  EFETCH_CATEGORY_ERROR,
} from "../actions/catTypes";

const defaultState = {
  categories: [],
  error: null,
  loading: false,
};
const categoryReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default categoryReducer;
