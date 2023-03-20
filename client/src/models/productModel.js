import api from '../api.js';

export async function getAllProducts() {
    const result = api.get('/products');

    if (result.status === 200) return result;
    else {
        console.log(result.status);
        console.log(result.data);
        return [];
    }
}