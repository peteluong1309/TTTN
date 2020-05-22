import * as Types from '../Constant/alert';

const initialState = {
  profile: {},
  loading: null,
  error: {}
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      }

    case Types.PROFILE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case Types.CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        loading: false
      }
    default:
      return state;
  }
}

export default profileReducer;