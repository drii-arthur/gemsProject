import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

const url = `http://43.230.131.177/api`

export const signup = (data) => { 
    return {
        type: 'SIGNUP',
        payload: axios.post(`${url}/admin/v1/register`,data,{
            headers:{
                Accept :'application/json',
                Authorized:`Bearer ${AsyncStorage.getItem('token')}`
            }
        })
    }
}

    export const login = (data) => {
    return {
        type: 'LOGIN',
        payload: axios.post(`${url}/login`, data)

    }
}
    export const izin = (data) => {
        return {
            type: 'IZIN',
            payload:axios.post(`${url}/otp`,data)
        }
    }

    export const pin = (data) => {
        return {
            type: 'PIN',
            payload:axios.post(`${url}/pin`,data)
        }
    }
    export const logout = (data) => {
        return {
            type: 'LOGOUT',
            payload:axios.post(`${url}/getout`,data)
        }
    }
