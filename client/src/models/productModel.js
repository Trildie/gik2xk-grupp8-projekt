import api from '../api.js';

export async function getAllProducts(url= '/products') {

  const result = await api.get(url);
    
  if (result.status === 200) return result.data;
   
    else {
        console.log(result.status);
        console.log(result.data);
        return [];
    }
}
export async function getProductsById(id) {
  const result = await api.get(`/products/${id}`);

   if (result.status === 200) return result.data;
   
    else {
        console.log(result.status);
        console.log(result.data);
        return [];
    }
}


export async function update(product) {
    const result = await api.put('/products/', product);
  
    if (result.status === 200) return result.data;
    else {
      console.log(result.status);
      console.log(result.data);
      return {};
    }
  }
  
  export async function create(product) {
    const result = await api.post('/products/', product);
  
    if (result.status === 200) return result.data;
    else {
      console.log(result.status);
      console.log(result.data);
      return {};
    }
  }

  export async function getOne(id) {
    const result = await api.get(`/products/${id}`);
    
  
    if (result.status === 200) return result.data;
    else {
      console.log(result.status);
      console.log(result.data);
      return {};
    }
}
  

export async function addReview(id, review) {
  const result = await api.post(`/products/${id}/createReview`, review);
   console.log(result);
   console.log("HEJ"); 

  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return {};
  }
}
