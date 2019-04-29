/* eslint-disable indent */

import Request from '@orderandchaos/request';

const request = new Request('https://jsonplaceholder.typicode.com');

export function getPost(params = null) {
    return request.get('/posts', params);
}

export function postPost(values, params = null) {
    return request.post('/posts', values, params);
}

export function putPost(values, params = null) {
    return request.put('/posts', values, params);
}

export function deletePost(params = null) {
    return request.delete('/posts', params);
}
