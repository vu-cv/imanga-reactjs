import { categoryConstants } from '../_constants';
import { categoryService } from '../_services';

export const categoryActions = {
	getAll,
    getById
}

function getAll() {
    return dispatch => {
        dispatch(request());

        categoryService.getAll()
            .then(
                categories => dispatch(success(categories)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: categoryConstants.GETALL_REQUEST } }
    function success(categories) { return { type: categoryConstants.GETALL_SUCCESS, categories } }
    function failure(error) { return { type: categoryConstants.GETALL_FAILURE, error } }
}

function getById(id) {
    return dispatch => {
        dispatch(request());

        categoryService.getById(id)
            .then(
                category => dispatch(success(category)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: categoryConstants.GETBYID_REQUEST } }
    function success(category) { return { type: categoryConstants.GETBYID_SUCCESS, category } }
    function failure(error) { return { type: categoryConstants.GETBYID_FAILURE, error } }
}
