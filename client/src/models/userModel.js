import api from "../api.js";

export async function getAll() {
  const result = api.get("/users");

  if (result.status === 200) return result;
  else {
    console.log(result.status);
    console.log(result.data);
    return [];
  }
}

export async function getByUserID(id) {
  const result = await api.get(`/users/${id}`);
 
  if (result.status === 200) return result.data;
  
  else {
    console.log(result.status);
    console.log(result.data);
    return [];
  }
}
export async function create(user) {
  const result = await api.post("/users/", user);

  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return {};
  }
}
export async function update(id, user) {
  const result = await api.put(`/users/${id}`, user);

  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return {};
  }
}
