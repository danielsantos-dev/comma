import {
    GET_ALL_TRIPS,
    GET_TRIP
  } from '../actions/types';
  
  const initialState = {
    trips: [],
    tripsInRelationToZoom: [],
    trip: null,
    tripsAverageFuel: null,
    tripsAverageSpeed: null,
    tripAverageFuel: null,
    tripAverageSpeed: null,
    loading: true,
    error: {}
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_ALL_TRIPS:
        return {
          ...state,
          trips: payload,
          loading: false
        };
      case GET_TRIP:
        return {
          ...state,
          trip: payload,
          loading: false
        };
      default:
        return state;
    }
  }
  