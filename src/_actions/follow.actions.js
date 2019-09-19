import { followConstants } from '../_constants';
import { followService } from '../_services';
import { alertActions } from './';

export const followActions = {
	getAll,
    create
}

function getAll(isLogin) {
    return dispatch => {
        dispatch(request());

        followService.getAll(isLogin)
        .then(
            follows => dispatch(success(follows)),
            error => dispatch(failure(error.toString()))
        );
    };

    function request() { return { type: followConstants.GETALL_REQUEST } }
    function success(follows) { return { type: followConstants.GETALL_SUCCESS, follows } }
    function failure(error) { return { type: followConstants.GETALL_FAILURE, error } }
}

function create(isLogin, manga) {

    return dispatch => {
        dispatch(request());
        followService.store(isLogin, manga)
        .then(
            data => {
                dispatch(success(data))   
                dispatch(alertActions.success('Đã theo dõi'));
            },
            error => {
                dispatch(failure(error))
                dispatch(alertActions.success('Đã hủy theo dõi'));
            }
        );
    };


    function request() { return { type: followConstants.FOLLOW_REQUEST } }
    function success(follows) { return { type: followConstants.FOLLOW_SUCCESS, follows } }
    function failure(error) { return { type: followConstants.FOLLOW_FAILURE, error } }
}