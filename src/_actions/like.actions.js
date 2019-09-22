import { likeConstants } from '../_constants';
import { likeService } from '../_services';
import { alertActions } from './';

export const likeActions = {
	getAll,
    create,
    checkIsLike
}

function checkIsLike(mangaId, userId) {
    return dispatch => {
        likeService.checkIsLike(mangaId, userId)
        .then(
            data => {
                let dathich = null;
                if(data.length > 0) {
                    dathich = true;
                } else {
                    dathich = false;
                }
                dispatch(success(data, dathich))

            }
        );

    }
    function request() { return { type: likeConstants.CHECKISLIKE_REQUEST } }
    function success(likes, dathich) { return { type: likeConstants.CHECKISLIKE_SUCCESS, likes, dathich } }
    function failure(error) { return { type: likeConstants.CHECKISLIKE_FAILURE, error } }
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

function create(isLogin, manga, user) {

    return dispatch => {
        dispatch(request());
        likeService.store(isLogin, manga, user)
        .then(
            data => {
                if (!isLogin) {
                    dispatch(success(data))
                    dispatch(alertActions.success('Đã thích'));
                } else {
                    let dathich = null;
                    if (data.length == 0) {
                        dathich = true;
                        dispatch(alertActions.success('Đã thích'));
                    } else {
                        dathich = false
                        dispatch(alertActions.success('Đã hủy thích'));
                    }
                    // console.log(data)
                    dispatch(success(data, dathich))

                }
            },
            error => {
                dispatch(failure(error))
                dispatch(alertActions.success('Đã hủy thích'));
            }
        );
    };


    function request() { return { type: likeConstants.LIKE_REQUEST } }
    function success(likes, dathich) { return { type: likeConstants.LIKE_SUCCESS, likes, dathich } }
    function failure(error) { return { type: likeConstants.LIKE_FAILURE, error } }
}