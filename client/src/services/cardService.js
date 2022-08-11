import * as request from './requster'
const baseUrl = 'http://localhost:3030/data/catalog';

export const getAll = () => {
    return fetch(`${baseUrl}/`)
        .then(res => res.json())
        .catch((error) => {
            console.error('Error:', error);
        });

}
export const getOne = (gameId) => request.get(`${baseUrl}/${gameId}`);


export const create = (cardData) => request.post(baseUrl, cardData);

