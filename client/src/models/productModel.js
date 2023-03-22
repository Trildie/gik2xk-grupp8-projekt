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
    const result = await api.put(`/products/${product.id}`, product);
  
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
  
  export async function remove(product) {
    
    console.log(product.id);
    const result = await api.delete(`/products/${product.id}`, product.id);
 
    if (result.status === 200) {
      console.log("error here?");
      return result.data;
     
    }
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


  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return {};
  }
}


export async function addProductToCart({product}, userId, ammount){
  console.log("product.id, userId, ammount");
  const temp = "monster Hunter World "
  const productT = await api.put(`/carts/${1}`, temp);
  return{};
}