import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    getAll,
    register
};

function login(username, password) {
	return dispatch => {
		dispatch(request({username}));

		userService.login(username, password)
		.then(user => {
			dispatch(success(user));
			this.history.push('/');
            dispatch(alertActions.success('Đăng nhập thành công'));
		}, error => {
			dispatch(failure(error.toString()));
			dispatch(alertActions.error(error.toString()));
		})
	}

	function request(user) {
		return { type: userConstants.LOGIN_REQUEST, user}
	}
	function success(user) {
		return { type: userConstants.LOGIN_SUCCESS, user}
	}
	function failure(error) {
		return { type: userConstants.LOGIN_FAILURE, error}
	}
	
}

function logout() {
	userService.logout();
    return { type: userConstants.LOGOUT };
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    this.history.push('/login');
                    dispatch(alertActions.success('Đăng ký thành công'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}