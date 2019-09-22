import config from '../config';
import { authDefault } from '../_helpers';
import { connect } from 'react-redux';
export const likeService = {
    store,
    getAll,
    checkIsLike
}
function checkIsLike(mangaId, userId) {
    const options = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': authDefault().Authorization
        },
        
    }
    return fetch(config.apiUrl + '/likes?manga='+mangaId+'&user='+userId, options)
            .then(handleResponse)
            .then(
                result => {
                    console.log(result);
                    return result;
                },
                error => {
                    console.log('loiiiii')
                }
            )

}
function getAll(isLogin) {
    if (!isLogin) {
        let mangas = JSON.parse(localStorage.getItem('likes')) || [];
        return Promise.resolve(mangas);
    } else {

        console.log('Da dang nhap')
    }
}

function store(isLogin, manga, user) {

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
    } else {
        let userLogin = user.user;

        const options = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': authDefault().Authorization
            },  
        }

        return fetch(config.apiUrl + '/likes?manga='+manga.id +'&user='+userLogin._id, options)
        .then(handleResponse)
        .then(result => {
            if(result.length > 0) {
                let option = {
                    method: 'DELETE',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': authDefault().Authorization
                    },

                }
                fetch(config.apiUrl + '/likes/'+result[0].id, option)

            } else {
                let option = {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': authDefault().Authorization
                    },
                    body: JSON.stringify({ 
                        user:userLogin._id,
                        manga: manga.id 
                    }), 
                }
                fetch(config.apiUrl + '/likes', option)


            }
            return result;
        }, error => {
            console.log(error)
            return error;
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

