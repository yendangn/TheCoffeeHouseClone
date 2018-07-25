import * as actionType from '../../../store/action-type';
import api from '../../../api/Api';
import {getEndPoints, buildRequestOptions} from '../../../api/ApiConfig';

export function getCategories() {

    return (dispatch) => {
        api(getEndPoints().category.get_categories, buildRequestOptions('GET'))
            .then(response => {
                dispatch({type: actionType.CATEGORY_DATA_AVAILABLE, data: response})
            })
            .catch(error => {
                dispatch({type: actionType.CATEGORY_DATA_UN_AVAILABLE, error: error})
            });
    };
}