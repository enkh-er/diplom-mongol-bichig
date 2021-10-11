import {
  CREATE_CATEGORY,
  READ_CATEGORIES,
  READ_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
} from "../actions/types";

const initialState = [];

const categoryReducer = (categories = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case READ_CATEGORIES:
      return payload;
    case CREATE_CATEGORY:
      return payload;
    case READ_CATEGORY:
      return payload;
    case UPDATE_CATEGORY:
      return categories.map((cat) => {
        if (cat.id === payload.id) {
          return {
            ...cat,
            ...payload,
          };
        } else {
          return cat;
        }
      });
    case DELETE_CATEGORY:
      return categories.filter(({ id }) => id !== payload.id);
    default:
      return categories;
  }
};
export default categoryReducer;
