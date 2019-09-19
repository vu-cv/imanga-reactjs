import { historyConstants } from '../_constants';
import { historyService } from '../_services';
import { alertActions } from './';

export const historyActions = {
	getAll,
    create
}

function getAll(isLogin) {
    return dispatch => {
        dispatch(request());

        historyService.getAll(isLogin)
        .then(
            historys => dispatch(success(historys)),
            error => dispatch(failure(error.toString()))
        );
    };

    function request() { return { type: historyConstants.GETALL_REQUEST } }
    function success(historys) { return { type: historyConstants.GETALL_SUCCESS, historys } }
    function failure(error) { return { type: historyConstants.GETALL_FAILURE, error } }
}

function create(isLogin, manga) {

    return dispatch => {
        dispatch(request());
        historyService.store(isLogin, manga)
        .then(
            data => {
                dispatch(success(data))   
                dispatch(alertActions.success('Đã thêm vào lịch sử'));
            },
            error => {
                dispatch(failure(error))
                dispatch(alertActions.success('Đã có trong lịch sử'));
            }
        );
    };


    function request() { return { type: historyConstants.HISTORY_REQUEST } }
    function success(historys) { return { type: historyConstants.HISTORY_SUCCESS, historys } }
    function failure(error) { return { type: historyConstants.HISTORY_FAILURE, error } }
}