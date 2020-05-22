import * as Types from '../Constant/alert';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      }

    case Types.REGISTER_SUCCESS:
      // localStorage.setItem('token', payload.token);
      localStorage.removeItem('token');
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      }
    case Types.LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      }

    case Types.REGISTER_FAIL:
    case Types.AUTH_ERROR:
    case Types.LOGIN_FAIL:
    case Types.LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      }
    default:
      return state;
  }
}

export default userReducer;