import * as axios from "axios";

const baseURL = 'https://sas.front.kreosoft.space/api';

export const instance = axios.create({
    baseURL: baseURL
});

function requestNews() {
    return instance.get('news')
        .then(response => {
            if (response.status === 200) {
                return response.data;
            }
        })
}

function requestLike(id) {
    return instance.post('News/like', {
        id: id
    })
        .then(response => {
            return response.status;
        })
}

export const newsAPI = {
    requestNews: requestNews,
    requestLike: requestLike
};