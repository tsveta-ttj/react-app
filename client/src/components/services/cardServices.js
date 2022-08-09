const baseUrl = 'http://localhost:3030';

export const getAll = () => {
    return fetch(`${baseUrl}/data/catalog`)
    .then(res => res.json())
    .catch((error)=>{
        console.error('Error:', error);
    });
    
}