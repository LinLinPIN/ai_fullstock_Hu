import axios from './axios.js'

export function getCart(params){
    return axios.get('/shop-cart',params)
}

export function addCart(params){
    return axios.post('/shop-cart',params)
}
