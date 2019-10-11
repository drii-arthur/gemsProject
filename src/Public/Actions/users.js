import axios from 'axios'

const url = `http://192.168.100.130:8081/api`

export const signup = (data) => {
    return {
        type: 'SIGNUP',
        payload: axios.post(`${url}/signup`, data)
    }
}

    export const login = (data) => {
    return {
        type: 'LOGIN',
        payload: axios.post(`${url}/signin`, data)

    }
}
    export const izin = (data) => {
        return {
            type: 'IZIN',
            payload:axios.post(`${url}/izin`,data)
        }
    }
