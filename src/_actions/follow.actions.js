import { followConstants } from '../_constants';
import { followService } from '../_services';

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
    };


    function request() { return { type: followConstants.CREATE_REQUEST } }
    function success(follows) { return { type: followConstants.CREATE_SUCCESS, follows } }
    function failure(error) { return { type: followConstants.CREATE_FAILURE, error } }
}