import ActionTypes from './action.types';

export const initialState = {
    isLoading: false,
    data: null,
    error: null
}

const photosReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.FETCH_START:
            return {
                ...state,
                isLoading: true
            }
        case ActionTypes.FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case ActionTypes.FETCH_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case ActionTypes.ADD_DATA:
            return {
                ...state,
                data: state.data.concat([action.payload])
            }
        default:
            return state;
    }
}

export default photosReducer;