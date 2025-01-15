import axios from 'axios';
const api = axios.create({
    baseURL: 'https://dummyjson.com/',
})

export function getProducts(val) {
    console.log("this value",val)
    return api.get(`products?limit=10&skip=${val}`)
}