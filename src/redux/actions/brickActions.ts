import types from '../types';
import axios from 'axios';
import { Action, Dispatch } from 'redux';
import { Brick } from 'model/brick';

const fetchBrickSuccess = (data:any) => {
  return {
    type: types.FETCH_BRICK_SUCCESS,
    payload: data
  } as Action
}

const fetchBrickFailure = (errorMessage:string) => {
  return {
    type: types.FETCH_BRICK_FAILURE,
    error: errorMessage
  } as Action
}

const fetchBrick = (id: number) => {
  return function (dispatch: Dispatch) {
    return axios.get(process.env.REACT_APP_BACKEND_HOST + '/brick/' + id, {withCredentials: true})
      .then((res) => {
        dispatch(fetchBrickSuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchBrickFailure(error.message));
      });
  }
}

const saveBrickSuccess = (brick: Brick) => {
  return {
    type: types.SUBMIT_PRO_FORMA_SUCCESS,
    payload: brick,
  } as Action
}

const saveBrickFailure = (errorMessage:string) => {
  return {
    type: types.SUBMIT_PRO_FORMA_FAILURE,
    error: errorMessage
  } as Action
}


const saveBrick = (brick:any) => {
  return function (dispatch: Dispatch) {
    brick.type = 1;
    return axios.post(process.env.REACT_APP_BACKEND_HOST + '/brick', brick, {withCredentials: true}).then(response => {
      const brick = response.data as Brick;
      dispatch(saveBrickSuccess(brick));
    })
    .catch(error => {
      dispatch(saveBrickFailure(error.message))
    })
  }
}

export default { fetchBrick, saveBrick }
