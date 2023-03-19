import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/comments';

export const createComment = (commentData) => {
    return request.post(baseUrl, commentData);
};

export const getByBlogId = (blogId) => {
    const search = encodeURIComponent(`blogId="${blogId}"`);

    // return request.get(`${baseUrl}?where=${search}&load=${relations}`);
    return request.get(`${baseUrl}?where=${search}`);
};