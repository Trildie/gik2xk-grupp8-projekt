import api from '../api.js';

export async function getAllProducts(url= '/products') {
    const result = api.get(url);

    if (result.status === 200) return result;
    else {
        console.log(result.status);
        console.log(result.data);
        return [];
    }
}