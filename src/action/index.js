import axios from 'axios';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export const fetchData = () => async dispatch => {
  dispatch({ type: FETCH_DATA_REQUEST });

  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response.data)
    dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_DATA_FAILURE, error });
  }
};

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});
