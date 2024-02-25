import axios from './axios.js';

export function getBooksList() {
    return axios.get('/recommend')
}