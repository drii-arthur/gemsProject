import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

const url = `https://gems-os.id/api`

export const pulsa = (provider,token) => {
    return {
        type: 'PULSA',
        payload: axios.get(`${url}/admin/v1/product/detail/${provider}`,{
            headers:{
                'Accept' :'application/json',
                'Authorization' :`Bearer ${token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    }
}

export const transaksiPulsa = (data,token) => {
    return{
        type:'TRANSAKSI_PULSA',
        payload: axios.post(`${url}/admin/v1/product/transaksi/beli`,data,{
            headers:{
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    }
}

export const pln = (token) => {
    return {
        type: 'PLN',
        payload:axios.get(`${url}/admin/v1/product/detail/7`,{
            headers:{
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    }
}

export const checkToken = (data,token) => {
    return {
        type: 'CHECK_TOKEN',
        payload:axios.post(`${url}/admin/v1/product/token/check`,data,{
            headers:{
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    }
}

export const gamesVoucher = (id,token) => {
    return {
        type : 'GAMES_VOUCHER',
        payload: axios.get(`${url}/admin/v1/product/${id}`,{
            headers:{
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    }
}