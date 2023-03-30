import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/blogs';

export const searchBlog = (searchedBlog) => {
    const search = encodeURIComponent(` LIKE "${searchedBlog}"`);

    return request.get(`${baseUrl}?where=title${search}`);
};