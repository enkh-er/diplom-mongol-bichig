import {
  CREATE_CATEGORY,
  READ_CATEGORIES,
  READ_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
} from "./types";
import {
  getCategories,
  getCategory,
  deleteCategory,
  updateCategory,
  addCategory,
} from "../../restAPI";

export const createCategory = (cat) => async (dispatch) => {
  try {
    const res = await addCategory(cat);

    dispatch({
      type: CREATE_CATEGORY,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const changeCategory = (cat) => async (dispatch) => {
  try {
    const res = await updateCategory(cat);
    dispatch({
      type: UPDATE_CATEGORY,
      payload: cat,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const removeCategory = (id) => async (dispatch) => {
  try {
    await deleteCategory(id);

    dispatch({
      type: DELETE_CATEGORY,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const readCategories = () => async (dispatch) => {
  try {
    const res = await getCategories();

    dispatch({
      type: READ_CATEGORIES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const readCategory = (id) => async (dispatch) => {
  try {
    const res = await getCategory(id);

    dispatch({
      type: READ_CATEGORY,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
