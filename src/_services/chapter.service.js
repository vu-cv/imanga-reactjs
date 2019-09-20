import config from '../config';
import { authDefault } from '../_helpers';
export const chapterService = {
	getAll,
	getById
}

function getAll(_limit, _sort, _filter) {
    const options = {
	    method: 'GET',
	    headers: authDefault()
    };

    let reqUrl = config.apiUrl + '/chapters';

    let a = [];

    if (_limit != null) {
        a.push('_limit='+_limit);
    }

    if (_sort != null) {
        a.push('_sort='+_sort);
    }

    if (_filter != null) {
        a.push(_filter)
    }

    if (a.length > 0) {
        let queryString = a.join('&');
        reqUrl = config.apiUrl + '/chapters?'+queryString;
    }

    return fetch(reqUrl, options).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authDefault()
    };

    let reqUrl = config.apiUrl + '/chapters/' + id

    return fetch(reqUrl, requestOptions).then(handleResponse);
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