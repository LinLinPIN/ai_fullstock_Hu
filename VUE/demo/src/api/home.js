import baseUrl from "./request";
import axios from 'axios'

export function getHome(page, limit) {
    return axios.get(`${baseUrl}/api/aviationOperations/firm/getSearch/${page}/${limit}`)
}