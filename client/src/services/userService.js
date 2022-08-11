import * as request from './requster';

const baseUrl = 'http://localhost:3030/users';

export const register = (email, username, password ) => request.post(`${baseUrl}/register`, {email, username, password});