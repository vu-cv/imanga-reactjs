import { mangaConstants } from '../_constants';
import { mangaService } from '../_services';

export const mangaActions = {
	getAll,
    getById,
    viewCount
}

function getAll(limit, sort, filter) {
    return dispatch => {
        dispatch(request());

        mangaService.getAll(limit, sort, filter)
            .then(
                mangas => dispatch(success(mangas)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: mangaConstants.GETALL_REQUEST } }
    function success(mangas) { return { type: mangaConstants.GETALL_SUCCESS, mangas } }
    function failure(error) { return { type: mangaConstants.GETALL_FAILURE, error } }
}

function getById(id) {
    return dispatch => {
        dispatch(request());

        mangaService.getById(id)
            .then(
                manga => dispatch(success(manga)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: mangaConstants.GETBYID_REQUEST } }
    function success(manga) { return { type: mangaConstants.GETBYID_SUCCESS, manga } }
    function failure(error) { return { type: mangaConstants.GETBYID_FAILURE, error } }
}


function viewCount(id) {
    return dispatch => {
        dispatch(request());

        mangaService.viewCount(id)
            .then(
                manga => dispatch(success(manga)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: mangaConstants.VIEWCOUNT_REQUEST } }
    function success(manga) { return { type: mangaConstants.VIEWCOUNT_SUCCESS, manga } }
    function failure(error) { return { type: mangaConstants.VIEWCOUNT_FAILURE, error } }
}
