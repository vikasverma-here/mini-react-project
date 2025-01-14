import axios from 'axios';
const api = axios.create({
    baseURL: 'https://dummyjson.com/',
})

export function getProducts() {
    return api.get('products?limit=10&skip=10')
}