import config from '../config';
import { authDefault } from '../_helpers';
import { authHeader } from '../_helpers';
import { connect } from 'react-redux';
export const followService = {
	getAll,
    store,
    checkIsFollow
}

function getAll(isLogin, user) {
    if (!isLogin) {
        let mangas = JSON.parse(localStorage.getItem('mangas')) || [];
        // return mangas;
        return Promise.resolve(mangas);
    } else {
        /*let jwt = user.jwt
        let userLogin = user.user*/

        console.log(user)

        const options = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': authDefault().Authorization
            },
            
        }

        return fetch(config.apiUrl + '/follows?user=5d6f7ae188f8341e7875e9ee', options)
        .then(handleResponse)
        .then(data => {
            let mangas = [];
            data.map(function(e, i) {
                mangas.push(e.manga.id)
            })
            var a = mangas.join('&_id=');
            return fetch(config.apiUrl + '/manga?_id='+a, options)
            .then(handleResponse)
            .then(result => {
                return result
            })
            // return mangas;
        })
    }
}

function checkIsFollow(mangaId, user) {
    let userLogin = user.user
    const options = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': authHeader().Authorization
        },

        
    }
    return fetch(config.apiUrl + '/follows?manga='+mangaId +'&user='+userLogin._id, options)
    .then(handleResponse)
    .then(data => {
        return data;
    })
}


function store(isLogin, manga, user) {

    if (!isLogin) {
        let mangas = JSON.parse(localStorage.getItem('mangas')) || [];

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
                        followCount:manga.followCount+1,
                    }), 
                
            }
            return fetch(config.apiUrl + '/manga/'+manga.id, options)
            .then(handleResponse)
            .then(data => {
                localStorage.setItem('mangas', JSON.stringify(mangas));
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
                        followCount:manga.followCount-1,
                    }), 
                
            }
            return fetch(config.apiUrl + '/manga/'+manga.id, options)
            .then(handleResponse)
            .then(data => {
                localStorage.setItem('mangas', JSON.stringify(mangas));
                return data;
            })
        }
    } else {
        let jwt = user.jwt
        let userLogin = user.user

        const options = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': authHeader().Authorization
            },

            
        }
// 123
        return fetch(config.apiUrl + '/follows?manga='+manga.id +'&user='+userLogin._id, options)
        .then(handleResponse)
        .then(result => {
            if(result.length > 0) {
                console.log('co r them gi nua! xoa !')
                let option = {
                    method: 'DELETE',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': authHeader().Authorization
                    },

                }
                return fetch(config.apiUrl + '/follows/'+result[0].id, option)
            } else {
                let option = {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': authHeader().Authorization
                    },
                    body: JSON.stringify({ 
                        user:userLogin._id,
                        manga: manga.id 
                    }), 
                }
                console.log('da them')
                return fetch(config.apiUrl + '/follows', option)

            }
            return result;
        })

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

