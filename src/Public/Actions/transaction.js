import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

const url = `http://gems-os.id/api/admin/v1/transaction`

export const transfer = (data,token) => {
    return {
        type:'TRANSFER',
        payload:axios.post(`${url}/transfer`,data,{
            headers:{
                Accept:'application/json',
                Authorization:`Bearer ${token}`
            }
        })
    }
}