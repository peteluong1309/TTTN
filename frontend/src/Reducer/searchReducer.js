import * as Types from '../Constant/courses';

const initialState = '';
export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SEARCH_COURSE:
      return action.payload;
    default:
      return state;
  }
}