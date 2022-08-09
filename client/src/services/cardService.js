const baseUrl = 'http://localhost:3030';

export const getAll = () => {
    return fetch(`${baseUrl}/data/catalog`)
        .then(res => res.json())
        .catch((error) => {
            console.error('Error:', error);
        });

}

export const getOne = (cardId) => {
    return fetch(`${baseUrl}/data/catalog/${cardId}`)
        .then(res => res.json())
        // .then(result => console.log('result in service', result))
        .catch((error) => {
            console.error('Error:', error);
        });
}