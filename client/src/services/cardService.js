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
        .catch((error) => {
            console.error('Error:', error);
        });
};

export const create = async (cardData) => {
    const response = await fetch(`${baseUrl}/data/catalog`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cardData)
    });

    if (response.ok) {
        const result = await response.json();
        
        return result;
    } else {
        throw { message: 'Unable to create card' };
    }
};

