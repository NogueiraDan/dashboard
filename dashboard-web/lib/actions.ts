"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { BASE_URL } from "./helpers";
import axios from "axios";

export async function getUsers() {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  } catch {
    throw new Error("Failed to fetch user.");
  }
}

export async function getProducts() {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch {
    throw new Error("Failed to fetch user.");
  }
}

export async function getTotalPrice() {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    const products = response.data;

    const totalPrice = products.reduce((acc: any, product: any) => {
      const productPrice = product.price * product.stock;
      return acc + productPrice;
    }, 0);

    return totalPrice;
  } catch {
    throw new Error("Failed to fetch user.");
  }
}
export async function getCategories() {
  try {
    const response = await axios.get(`${BASE_URL}/categories`);
    return response.data;
  } catch {
    throw new Error("Failed to fetch user.");
  }
}

export async function getBrands() {
  try {
    const response = await axios.get(`${BASE_URL}/brands`);
    return response.data;
  } catch {
    throw new Error("Failed to fetch user.");
  }
}

export async function createUser(data: any) {
  try {
    await axios.post(`${BASE_URL}/users`, data);
    const json = {
      message: "Success",
    };
    return json;
  } catch (error) {
    throw new Error("Failed to create a user.");
  }
}

export async function createProduct(data: any) {
  const token = cookies().get("USER_AUTH_TOKEN_SECRET");
  const headers = {
    "x-access-token": token?.value,
  };
  try {
    await axios.post(`${BASE_URL}/products`, data, { headers });
    const json = {
      message: "Success",
    };
    return json;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create a product.");
  }
}

export async function getUsersByProfile(query: any) {
  const data = query.toUpperCase();
  const url = data ? `${BASE_URL}/users?profile=${data}` : `${BASE_URL}/users`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error("Failed to get users.");
  }
}

export async function deleteProduct(id: string) {
  try {
    await axios.delete(`${BASE_URL}/products/${id}`);
    const json = {
      message: "Produto deletado com sucesso!",
    };
    return json;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete a product.");
  }
}

export async function deleteUser(id: string) {
   const token = cookies().get("USER_AUTH_TOKEN_SECRET");
   const headers = {
     "x-access-token": token?.value,
   };
  try {
    await axios.delete(`${BASE_URL}/users/${id}`, {headers});
    const json = {
      message: "Produto deletado com sucesso!",
    };
    return json;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete the user.");
  }
}

export async function login(formData: any) {
  const body = formData;
  const response = await axios.post(`${BASE_URL}/login`, body);
  console.log("Response Data", response.data);
  if (!response.data) {
    console.log("Algo deu errado");
    redirect("/");
  }
  cookies().set({
    name: "USER_AUTH_TOKEN_SECRET",
    value: response.data.data.userToken,
  });

  cookies().set({
    name: "USER_INFO",
    value: JSON.stringify(response.data.data),
  });

  redirect("/dashboard");
}

export async function updateUser(formData: any, id: any){
  const body = formData;
   const token = cookies().get("USER_AUTH_TOKEN_SECRET");
   const headers = {
     "x-access-token": token?.value,
   };
   try {
     await axios.patch(`${BASE_URL}/users/${id}`, body, {headers});
     const json = {
       message: "Success",
     };
     return json;
   } catch (error) {
    console.log(error);
    throw new Error("Failed to update the user.");
   }
  
}

export async function logout() {
  cookies().delete("USER_AUTH_TOKEN_SECRET");
  cookies().delete("USER_INFO");
  redirect("/");
}

export async function getUserInfo() {
  const userInfo: any = cookies().get("USER_INFO");
  return JSON.parse(userInfo.value);
}

export async function getToken() {
  const token = cookies().get("USER_AUTH_TOKEN_SECRET");
  if (token) return true;
  else return false;
}

export async function checkAuth() {
  const userToken = await getToken();
  userToken ? null : redirect("/");
}

export async function isOwner() {
  const user: any = cookies().get("USER_INFO") || "";
  const userJSON = JSON.parse(user?.value);
  if (userJSON.profile === "OWNER") return true;
  else false;
}
