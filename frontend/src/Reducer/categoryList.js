import * as Types from '../Constant/courses';

const initialState = [];

export const categoryList = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_CATEGORY_LIST:
      return action.payload;
    default:
      return state;
  }
}