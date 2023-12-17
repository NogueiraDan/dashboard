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
  redirect("/dashboard");
}

export async function logout() {
  cookies().delete("USER_AUTH_TOKEN_SECRET");
  redirect("/");
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
