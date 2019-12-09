import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

const url = `http://43.230.131.177/api/admin/v1/transaction`

export const transaction = (data,token) => {
    return {
        type:'TRANSACTION',
        payload:axios.post(`${url}/transfer`,data,{
            headers:{
                Accept:'application/json',
                Authorization:`Bearer ${token}`
            }
        })
    }
}