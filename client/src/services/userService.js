import * as request from './requster';

const baseUrl = 'http://localhost:3030/users';

export const register = (email, username, password ) => request.post(`${baseUrl}/register`, {email, username, password});

export const logout = async (accessToken) => {
    try {
        const response = await fetch(`${baseUrl}/logout`, {
            headers: {
                'X-Authorization': accessToken
            }
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};
