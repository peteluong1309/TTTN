import * as Types from '../Constant/courses';

const initialState = [];

export const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_COURSES:
      return action.payload;

    default:
      return state;
  }
}