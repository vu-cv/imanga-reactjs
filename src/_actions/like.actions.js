import { likeConstants } from '../_constants';
import { likeService } from '../_services';
import { alertActions } from './';

export const likeActions = {
	getAll,
    create
}

function getAll(isLogin) {
    return dispatch => {
        dispatch(request());

        likeService.getAll(isLogin)
        .then(
            likes => dispatch(success(likes)),
            error => dispatch(failure(error.toString()))
        );
    };

    function request() { return { type: likeConstants.GETALL_REQUEST } }
    function success(likes) { return { type: likeConstants.GETALL_SUCCESS, likes } }
    function failure(error) { return { type: likeConstants.GETALL_FAILURE, error } }
}

function create(isLogin, manga) {

    return dispatch => {
        dispatch(request());
        likeService.store(isLogin, manga)
        .then(
            data => {
                dispatch(success(data))   
                dispatch(alertActions.success('Đã thích'));
            },
            error => {
                dispatch(failure(error))
                dispatch(alertActions.success('Đã hủy thích'));
            }
        );
    };


    function request() { return { type: likeConstants.LIKE_REQUEST } }
    function success(likes) { return { type: likeConstants.LIKE_SUCCESS, likes } }
    function failure(error) { return { type: likeConstants.LIKE_FAILURE, error } }
}