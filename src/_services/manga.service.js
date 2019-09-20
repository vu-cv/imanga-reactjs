import config from '../config';
import { authDefault } from '../_helpers';
import { mangaAction } from '../_actions';
export const mangaService = {
	getAll,
	getById,
    viewCount
}

function getAll(_limit, _sort, _filter) {
    const options = {
	    method: 'GET',
	    headers: authDefault()
    };



    let reqUrl = config.apiUrl + '/manga';
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
        reqUrl = config.apiUrl + '/manga?'+queryString;
    }
    // console.log(reqUrl)

    return fetch(reqUrl, options).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authDefault()
    };

    let reqUrl = config.apiUrl + '/manga/' + id

    return fetch(reqUrl, requestOptions).then(handleResponse);
}

function viewCount(id) {
    return getById(id).then(manga => {

         const options = {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': authDefault().Authorization
            },
            body: JSON.stringify({ 
                    viewCount:manga.viewCount+1,
                }), 
            
        }
        fetch(config.apiUrl + '/manga/'+id, options)
        .then(handleResponse)
        .then(data => {
            return data;
        })
    }, error => Promise.reject(error))
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