import api from '../Api';
import * as Types from '../Constant/alert';
import { setAlert } from './alert';

// Get current users profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await api.get('profile/me');

    dispatch({
      type: Types.GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: Types.PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// Create or update profile
export const createProfile = (formData, history, edit = false) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {


    const res = await api.post('profile', formData, config);

    dispatch({
      type: Types.GET_PROFILE,
      payload: res.data
    })

    dispatch(setAlert(edit ? 'Thông tin được cập nhật' : 'Thêm thông tin thành công', 'success', 5000));

    if (edit) {
      history.push('/me')
    }

  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger', 5000)));
    }

    dispatch({
      type: Types.PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}