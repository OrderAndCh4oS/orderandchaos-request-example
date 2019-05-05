/* eslint-disable indent */

import Request from '@orderandchaos/request';

const request = new Request('https://jsonplaceholder.typicode.com');

export function getPostList(params = null) {
    return request.get('/posts', params);
}

export function getPostDetail(params = null) {
    return request.get('/posts/{id}', params);
}

export function postPost(values, params = null) {
    return request.post('/posts', values, params);
}

export function putPost(values, params = null) {
    return request.put('/posts/{id}', values, params);
}

export function deletePost(params = null) {
    return request.delete('/posts/{id}', params);
}
