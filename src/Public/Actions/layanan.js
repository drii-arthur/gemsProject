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

export const pln = (token) => {
    return {
        type: 'PLN',
        payload:axios.get(`${url}/admin/v1/pln`,{
            headers:{
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    }
}