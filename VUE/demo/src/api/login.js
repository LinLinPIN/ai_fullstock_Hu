import baseUrl from "./request";
import axios from "axios";

export function login(form) {
    return axios.post(baseUrl + '/api/ucenter/member/register', form)
}

export function getVecode(mobile) {
    console.log(`${baseUrl}/api/ucenter/sms/send/${mobile}`);
    return axios.get(`${baseUrl}/api/ucenter/sms/send/${mobile}`)
}