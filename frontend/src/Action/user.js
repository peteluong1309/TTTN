import api from '../Api';
import { setAlert } from '../Action/alert';
import * as Types from '../Constant/alert';
import setAuthToken from '../Helper/setAuthToken';

// LOAD USER
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await api.get('auth');

        dispatch({
            type: Types.USER_LOADED,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: Types.AUTH_ERROR
        })
    }
}

// SIGN UP
export const register = ({ email, account, password, typeUser }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    typeUser = '';

    const body = JSON.stringify({ email, account, password, typeUser });

    try {
        const res = await api.post('users/signup', body, config);

        dispatch(setAlert('Chúc mừng bạn đã đăng ký thành công! Chúc bạn học vui vể và hiệu quả!', 'success', 5000));

        dispatch({
            type: Types.REGISTER_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser());
    } catch (err) {

        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger', 5000)));
        }

        dispatch({
            type: Types.REGISTER_FAIL
        })
    }
}


// Log in
export const logIn = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await api.post('users/login', body, config);

        dispatch(setAlert('Đăng nhập thành công!', 'success', 3000));

        dispatch({
            type: Types.LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
    } catch (err) {

        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger', 5000)));
        }

        dispatch({
            type: Types.LOGIN_FAIL
        })
    }
}

// LOGOUT/ CLEAR PROFILE
export const logout = () => dispatch => {
    dispatch({ type: Types.CLEAR_PROFILE });
    dispatch({ type: Types.LOGOUT });
}