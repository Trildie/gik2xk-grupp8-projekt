import api from "../api.js";
 
export async function create(cart) {
    const result = await api.post('/carts/', cart);
  
    if (result.status === 200) return result.data;
    else {
      console.log(result.status);
      console.log(result.data);
      return {};
    }
  }


  export async function getCartById(id) {
    const result = await api.get(`/carts/${id}`);
  
     if (result.status === 200) return result.data;
     
      else {
          console.log(result.status);
          console.log(result.data);
          return [];
      }
  }


