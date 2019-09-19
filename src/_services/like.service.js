import config from '../config';
import { authDefault } from '../_helpers';
import { connect } from 'react-redux';
export const likeService = {
    store,
    getAll
}

function getAll(isLogin) {
    if (!isLogin) {
        let mangas = JSON.parse(localStorage.getItem('likes')) || [];
        return Promise.resolve(mangas);
    } else {

        console.log('Da dang nhap')
    }
}

function store(isLogin, manga) {

    if (!isLogin) {
        let mangas = JSON.parse(localStorage.getItem('likes')) || [];

        let check = mangas.findIndex(index => {
            return index.id == manga.id;
        });

        if (check == -1) {
            mangas.push(manga);
            const options = {
                method: 'PUT',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': authDefault().Authorization
                },
                body: JSON.stringify({ 
                        likeCount:manga.likeCount+1,
                    }), 
                
            }
            return fetch(config.apiUrl + '/manga/'+manga.id, options)
            .then(handleResponse)
            .then(data => {
                console.log(data)
                localStorage.setItem('likes', JSON.stringify(mangas));
                return data;
            })
        } else {
            mangas.splice(check, 1);
            const options = {
                method: 'PUT',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': authDefault().Authorization
                },
                body: JSON.stringify({ 
                        likeCount:manga.likeCount-1,
                    }), 
                
            }
            return fetch(config.apiUrl + '/manga/'+manga.id, options)
            .then(handleResponse)
            .then(data => {
                console.log(data)
                localStorage.setItem('likes', JSON.stringify(mangas));
                return data;
            })
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

