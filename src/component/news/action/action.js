import * as actionType from '../../../store/action-type';
import api from '../../../api/Api';
import {getEndPoints, buildRequestOptions} from '../../../api/ApiConfig';

export function getNews() {

    return (dispatch) => {
        api(getEndPoints().news.get_news, buildRequestOptions('GET'))
            .then(response => {
                dispatch({type: actionType.NEWS_DATA_AVAILABLE, data: response})
            })
            .catch(error => {
                dispatch({type: actionType.NEWS_DATA_UN_AVAILABLE, data: error})
            });

    };
}