import { followConstants } from '../_constants';
import { followService } from '../_services';
import { alertActions } from './';

export const followActions = {
	getAll,
    create,
    checkIsFollow
}

function getAll(isLogin, user) {
    return dispatch => {
        dispatch(request());

        followService.getAll(isLogin, user)
        .then(
            follows => {
                dispatch(success(follows))},
            error => dispatch(failure(error.toString()))
        );
    };

    function request() { return { type: followConstants.GETALL_REQUEST } }
    function success(follows) { return { type: followConstants.GETALL_SUCCESS, follows } }
    function failure(error) { return { type: followConstants.GETALL_FAILURE, error } }
}
function checkIsFollow(mangaId, user) {
    return dispatch => {
        dispatch(request());

        followService.checkIsFollow(mangaId, user)
        .then(
            follows => {
                dispatch(success(follows))},
            error => dispatch(failure(error.toString()))
        );
    };

    function request() { return { type: followConstants.ISFOLLOW_REQUEST } }
    function success(follows) { return { type: followConstants.ISFOLLOW_SUCCESS, follows } }
    function failure(error) { return { type: followConstants.ISFOLLOW_FAILURE, error } }
}

function create(isLogin, manga, user) {

    return dispatch => {
        dispatch(request());
        followService.store(isLogin, manga, user)
        .then(
            data => {
                if (!isLogin) {
                    dispatch(success(data))
                    dispatch(alertActions.success('Đã theo dõi'));
                } else {
                    let theodoi = null;
                    if (data.length > 0) {
                        theodoi = false;
                        dispatch(alertActions.success('Đã hủy theo dõi'));
                    } else {
                        theodoi = true
                        dispatch(alertActions.success('Đã theo dõi'));
                    }
                    dispatch(success(data, theodoi))

                }
            },
            error => {
                dispatch(failure(error))
                dispatch(alertActions.success('Đã hủy theo dõi'));
            }
        );
    };


    function request() { return { type: followConstants.FOLLOW_REQUEST } }
    function success(follows, theodoi) { return { type: followConstants.FOLLOW_SUCCESS, follows, theodoi } }
    function failure(error) { return { type: followConstants.FOLLOW_FAILURE, error } }
}