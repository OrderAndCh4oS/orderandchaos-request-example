/* eslint-disable indent */

import Request from '@orderandchaos/request';

const request = new Request('https://jsonplaceholder.typicode.com');

export function getPost(params = null) {
    return request.get('/post', params);
}

export function postPost(values, params = null) {
    return request.post('/post', values, params);
}

export function putPost(values, params = null) {
    return request.put('/post', values, params);
}

export function deletePost(params = null) {
    return request.delete('/post', params);
}
