import { chapterConstants } from '../_constants';
import { chapterService } from '../_services';

export const chapterActions = {
	getAll,
    getById
}

function getAll(limit) {
    return dispatch => {
        dispatch(request());

        chapterService.getAll(limit)
            .then(
                chapters => dispatch(success(chapters)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: chapterConstants.GETALL_REQUEST } }
    function success(chapters) { return { type: chapterConstants.GETALL_SUCCESS, chapters } }
    function failure(error) { return { type: chapterConstants.GETALL_FAILURE, error } }
}

function getById(id) {
    return dispatch => {
        dispatch(request());

        chapterService.getById(id)
            .then(
                chapter => dispatch(success(chapter)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: chapterConstants.GETBYID_REQUEST } }
    function success(chapter) { return { type: chapterConstants.GETBYID_SUCCESS, chapter } }
    function failure(error) { return { type: chapterConstants.GETBYID_FAILURE, error } }
}
