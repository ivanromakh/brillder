import types from '../types';
import axios from 'axios';
import { Action, Dispatch } from 'redux';

const loginSuccess = () => {
  return {
    type: types.LOGIN_SUCCESS,
  } as Action
}

const loginFailure = (errorMessage:string) => {
  return {
    type: types.LOGIN_FAILURE,
    error: errorMessage
  } as Action
}

const login = (model:any) => {
  return function (dispatch: Dispatch) {
    return axios.post(process.env.REACT_APP_BACKEND_HOST + '/auth/login', model, {withCredentials: true}).then(response => {
      const {data} = response;
      if (data === "OK") {
        dispatch(loginSuccess());
        return;
      }
      let {msg} = data;
      if (!msg) {
        const {errors} = data;
        msg = errors[0].msg
      }
      alert(msg);
      dispatch(loginFailure(msg))
    })
    .catch(error => {
      dispatch(loginFailure(error.message))
    })
  }
}

const logoutSuccess = () => {
  return {
    type: types.LOGOUT_SUCCESS,
  } as Action
}

const logoutFailure = (errorMessage:string) => {
  return {
    type: types.LOGOUT_FAILURE,
    error: errorMessage
  } as Action
}

const logout = () => {
  return function (dispatch: Dispatch) {
    return axios.post(process.env.REACT_APP_BACKEND_HOST + '/auth/logout', {}, {withCredentials: true}).then(response => {
      const {data} = response;
      if (data === "OK") {
        dispatch(logoutSuccess());
        return;
      }
      let {msg} = data;
      if (!msg) {
        const {errors} = data;
        msg = errors[0].msg
      }
      alert(msg);
      dispatch(logoutFailure(msg))
    })
    .catch(error => {
      dispatch(logoutFailure(error.message))
    })
  }
}

export default { login, logout }
