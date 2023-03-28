import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/likes';

export const likeBlog = (blogId) => {
    return request.post(baseUrl, { blogId });
};

export const getLikesByBlogId = (blogId) => {
    const search = encodeURIComponent(`blogId="${blogId}"`);

    return request.get(`${baseUrl}?where=${search}`);
};

export const getlikeByUserId = (userId) => {
    const search = encodeURIComponent(`_ownerId="${userId}"`);
    return request.get(`${baseUrl}?where=${search}`);
}
