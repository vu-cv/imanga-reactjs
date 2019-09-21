import config from '../config';
import { authHeader } from '../_helpers';
export const userService = {
	login,
	logout,
	getAll,
	register,
    update,
    getMe
}
function login(username, password) {
	// console.log(username +'-'+ password);

	const options = {
		method: 'POST',
		headers: { 
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ 
				identifier:username,
				password: password 
			}), 
		
	}

	return fetch(config.apiUrl + '/auth/local', options)
	.then(handleResponse)
	.then(user => {
		localStorage.setItem('user', JSON.stringify(user));
		console.log(user);
		return user;
	})
}

function update(userId, data) {

    const options = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify({ 
            firstName: data.firstName,
            lastName: data.lastName,
            birthday: data.birthday,
            phone: data.phone,
            sex: data.sex
        }), 
        
    }

    return fetch(config.apiUrl + '/users/'+userId, options)
    .then(handleResponse)
    .then(user => {
        // localStorage.setItem('user', JSON.stringify(user));
        // console.log(user);
        return user;
    })
}



function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
	// console.log('header')
	// console.log(authHeader())
    const options = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(config.apiUrl + '/authors', options).then(handleResponse);
}
function getMe() {

    const options = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(config.apiUrl + '/users/me', options).then(handleResponse);
}

function register(user) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(config.apiUrl + '/auth/local/register', options).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 400) {
                // auto logout if 400 response returned from api
                logout();
                // this.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}