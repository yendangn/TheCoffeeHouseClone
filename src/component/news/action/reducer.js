import * as actionType from '../../../store/action-type';

let dataState = {newsdata: [], error: null, loading: true};

export const newsReducer = (state = dataState, action) => {
    switch (action.type) {

        case actionType.NEWS_DATA_AVAILABLE:
            state = {newsdata: action.data, error: null, loading: false};
            return state;

        default:
            state = {newsdata: [], error: action.error, loading: false};
            return state;
    }
};
