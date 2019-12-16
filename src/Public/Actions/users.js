import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

const url = `http://43.230.131.177/api`

export const signup = (data,token) => { 
    return {
        type: 'SIGNUP',
        payload: axios.post(`${url}/admin/v1/register`,data,{      
            headers:{
                Accept :'application/json',
                Authorization:`Bearer ${token}`
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

    export const pin = (data,token) => {
        return {
            type: 'PIN',
            payload:axios.post(`${url}/admin/v1/pin`,data,{
                headers:{
                Accept :'application/json',
                Authorization:`Bearer ${token}`
            }
            })
        }
    }
    export const logout = (token) => {
        return {
            type: 'LOGOUT',
            payload:axios.post(`${url}/admin/v1/logout`,{
                headers:{
                Accept :'application/json',
                Authorization:`Bearer ${token}`
            }
            })
        }
    }

    export const user = (token) => {
        return {
            type : 'ALLUSER',
            payload:axios.get(`${url}/admin/v1/home`,{
                headers:{
                    Accept:'application/json',
                    Authorization:`Bearer ${token}`
                }
            })
        }
    }

    export const profile = (token) => {
        return {
            type: 'PROFILE',
            payload:axios.get(`${url}/admin/v1/profile/user`,{
                headers:{
                    Accept:'application/json',
                    Authorization:`Bearer ${token}`
                }
            })
        }
    }
    
    export const upgradePremium = (data,token) => {
        return {
            type : 'UPGRADE_PREMIUM',
            payload:axios.post(`${url}/admin/v1/profile/user`,data,{
                headers:{
                    Accept:'application/json',
                    Authorization:`Bearer ${token}`
                }
            })
        }
    }
export const saldo = (token) => {
    return {
        type:'SALDO',
        payload:axios.get(`${url}/admin/v1/profile/saldo`,{
            headers:{
                Accept:'application/json',
                Authorization:`Bearer ${token}`
            }
        })
    }
}

export const getPin = (token) => {
    return {
        type:'GETPIN',
        payload: axios.get(`${url}/admin/v1/pin/check`,{
            headers:{
                Accept:'application/json',
                Authorization:`Bearer ${token}`
            }
        })
    }
}

export const changePin = (data,token) => {
    return {
        type:'CHANGEPIN',
        payload:axios.put(`${url}/admin/v1/pin/1`,data,{
            headers:{
                Accept:'application/json',
                Authorization:`Bearer ${token}`
            }
        })
    }
}