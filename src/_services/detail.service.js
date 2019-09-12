import config from '../config';
import { authDefault } from '../_helpers';

export const detailService = {
	getById
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authDefault()
    };

    return fetch(config.apiUrl + '/manga/' + id, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            /*if (response.status === 400) {
                // auto logout if 400 response returned from api
                logout();
                // this.location.reload(true);
            }*/

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}