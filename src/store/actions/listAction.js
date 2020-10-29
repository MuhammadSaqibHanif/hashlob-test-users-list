import {GET_LIST} from '../actionTypes';

import axios from 'axios';

export const getList = () => async (dispatch) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.ir/users`);

    const res = response.data;

    // console.log('res >>>', res);

    dispatch({
      type: GET_LIST,
      payload: res,
    });

    return 'Success';
  } catch (error) {
    return error;
  }
};
