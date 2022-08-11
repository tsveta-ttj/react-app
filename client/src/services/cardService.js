import * as request from './requster'
const baseUrl = 'http://localhost:3030/data/catalog';

export const getAll = () => request.get(baseUrl);

export const getOne = (gameId) => request.get(`${baseUrl}/${gameId}`);

export const create = (cardData) => request.post(baseUrl, cardData);

export const edit = (gameId, gameData) => request.put(`${baseUrl}/${gameId}`, gameData);

export const del = (gameId) => request.del(`${baseUrl}/${gameId}`);


