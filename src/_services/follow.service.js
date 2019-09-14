import config from '../config';
import { authDefault } from '../_helpers';
import { connect } from 'react-redux';
export const followService = {
	getAll,
    store
}

function getAll(isLogin) {
    if (!isLogin) {
        let mangas = JSON.parse(localStorage.getItem('mangas')) || [];
        // return mangas;
        return Promise.resolve(mangas);
    } else {

        console.log('Da dang nhap')
    }
}

function store(isLogin, manga) {

    if (!isLogin) {
        let mangas = JSON.parse(localStorage.getItem('mangas')) || [];

        let check = mangas.findIndex(index => {
            return index.id == manga.id;
        });

        if (check == -1) {
            mangas.push(manga);
        } else {
            console.log('Da theo doi')
        }
        localStorage.setItem('mangas', JSON.stringify(mangas));
    }
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

