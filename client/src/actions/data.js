import api from '../utils/api';
import {
  GET_ALL_TRIPS
} from './types';

// Get Trips
export const getAllTrips = () => async dispatch => {
  try {
    const res = await api.get('http://localhost:5000/dataComma/performanceGetAllDocs');
    dispatch({
      type: GET_ALL_TRIPS,
      payload: res.data
    });
  } catch (err) {
      console.log(err)
  }
};

