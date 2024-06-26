import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    SET_CURRENT_PAGE,
  } from '../action/index';
  
  
  const initialState = {
    data: [],
    loading: false,
    error: null,
    currentPage: 1,
    itemsPerPage: 4,
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_DATA_SUCCESS:
        return { ...state, loading: false, data: action.payload };
      case FETCH_DATA_FAILURE:
        return { ...state, loading: false, error: action.error };
      case SET_CURRENT_PAGE:
        return { ...state, currentPage: action.payload };
      default:
        return state;
    }
  };
  
  export default dataReducer;
  