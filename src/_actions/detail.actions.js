import { detailConstants } from '../_constants';
import { detailService, followService } from '../_services';

export const detailActions = {
    getById
}


function getById(id, isLogin, user) {
    return dispatch => {
        dispatch(request());

        detailService.getById(id)
            .then(
                detail => {
                    dispatch(success(detail))
                },
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: detailConstants.GETBYID_REQUEST } }
    function success(detail) { return { type: detailConstants.GETBYID_SUCCESS, detail} }
    function failure(error) { return { type: detailConstants.GETBYID_FAILURE, error } }
}
