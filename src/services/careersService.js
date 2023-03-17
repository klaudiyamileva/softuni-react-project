import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/careers';

export const getCereers = () => {
    return request.get(baseUrl);
};

export const getCareerById = (careerId) => {
    return request.get(`${baseUrl}/${careerId}`);
};