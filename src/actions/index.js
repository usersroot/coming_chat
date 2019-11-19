import request from './request';
import { GET_HOME } from './actionType';
import api from './api'

export const get_home = () => {
  return async dispatch => {
    const result = await request({
      url: api.HOME,
      // method:'',//默认GET
      // params: {}
    });
    console.log(result)
    dispatch({
      type: GET_HOME,
      payload: result.data
    });
  };
};

