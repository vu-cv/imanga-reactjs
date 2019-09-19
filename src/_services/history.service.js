import config from '../config';
import { authDefault } from '../_helpers';

export const historyService = {
	getAll,
    store
}

function getAll(isLogin) {
    if (!isLogin) {
        let historyMangas = JSON.parse(localStorage.getItem('historyMangas')) || [];
        // return mangas;
        return Promise.resolve(historyMangas);
    } else {

        console.log('Da dang nhap')
    }
}

function store(isLogin, manga) {

    if (!isLogin) {
        let historyMangas = JSON.parse(localStorage.getItem('historyMangas')) || [];

        let check = historyMangas.findIndex(index => {
            // console.log(manga)
            return index.id == manga.id;
        });

        if (check == -1) {
            historyMangas.push(manga);
            localStorage.setItem('historyMangas', JSON.stringify(historyMangas));
            return Promise.resolve(manga);
        } else {
            // historyMangas.splice(check, 1);
            // localStorage.setItem('historyMangas', JSON.stringify(historyMangas));
            return Promise.reject('Đã có trong lịch sử');
        }
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

