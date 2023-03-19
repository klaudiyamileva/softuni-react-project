import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/contacts';
export const contact = (contactsData) => {

    return request.post(baseUrl, contactsData);
};