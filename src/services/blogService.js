import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/blogs';

export const getBlogs = () => {
    return request.get(baseUrl);
};

export const getBlogById = (blogId) => {
    return request.get(`${baseUrl}/${blogId}`);
};

export const createBlog = (blogData) => {
    return request.post(baseUrl, blogData);
};