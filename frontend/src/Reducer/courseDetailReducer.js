import * as Types from '../Constant/courses';

const initialState = {
  course: {},
  loading: null
};

export const courseDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_COURSE_DETAIL:
      return {
        ...state,
        course: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}