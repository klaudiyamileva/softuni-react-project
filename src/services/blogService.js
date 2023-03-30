import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/blogs';

export const getOldestBlogs = (page) => {
    let skip = (page - 1) * 3;
    const pagination = `offset=${skip}&pageSize=3`;
    return request.get(`${baseUrl}?${pagination}`);
};

export const getLatestBlogs = (page) => {
    let skip = (page - 1) * 3;
    const pagination = `offset=${skip}&pageSize=3`;
    const sorted = encodeURIComponent('_createdOn desc');
    return request.get(`${baseUrl}?sortBy=${sorted}&${pagination}`);
};

export const getBlogById = (blogId) => {
    const relations = encodeURIComponent('user=_ownerId:users');

    return request.get(`${baseUrl}/${blogId}?load=${relations}`);
};

export const getBlogByOwnerId = (ownerId) => {
    const search = encodeURIComponent(`_ownerId="${ownerId}"`);
    return request.get(`${baseUrl}/?where=${search}`);
}

export const createBlog = (blogData) => {
    return request.post(baseUrl, blogData);
};

export const editBlog = (blogId, blogData) => {
    return request.put(`${baseUrl}/${blogId}`, blogData);
};

export const deleteBlog = (blogId) => {
    return request.del(`${baseUrl}/${blogId}`);
}