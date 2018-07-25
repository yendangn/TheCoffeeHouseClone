import * as actionType from '../../../store/action-type';

let dataState = {dataCategory: [], error: null, loading: true};

export const categoryReducer = (state = dataState, action) => {
    switch (action.type) {
        case actionType.CATEGORY_DATA_AVAILABLE:
            state = {dataCategory: action.data, error: null, loading: false};
            return state;

        default:
            state = {dataCategory: [], error: action.error, loading: false};
            return state;
    }
};
