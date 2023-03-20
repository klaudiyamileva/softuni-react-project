import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/blogs';

export const getBlogs = () => {
    return request.get(baseUrl);
};

export const getBlogById = (blogId) => {
    const relations = encodeURIComponent('user=_ownerId:users');
    // return request.get(`${baseUrl}?where=${search}&load=${relations}`);

    return request.get(`${baseUrl}/${blogId}?load=${relations}`);
};

export const createBlog = (blogData) => {
    return request.post(baseUrl, blogData);
};

export const editBlog = (blogId, blogData) => {
    return request.put(`${baseUrl}/${blogId}`, blogData);
};

export const deleteBlog = (blogId) => {
    return request.del(`${baseUrl}/${blogId}`);
}