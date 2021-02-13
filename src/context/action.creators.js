import ActionTypes from './action.types';

export const fetchDataStart = () => ({
    type: ActionTypes.FETCH_START
});

export const fetchDataSuccess = data => ({
    type: ActionTypes.FETCH_SUCCESS,
    payload: data
});

export const fetchDataError = errmess => ({
    type: ActionTypes.FETCH_ERROR,
    payload: errmess
});