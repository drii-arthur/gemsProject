import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

const url = `http://gems-os.id/api/admin/v1/bank`

export const addBank = (data,token) => {
    return {
        type:'ADD_BANK',
        payload:axios.post(`${url}/account`,data,{
            headers:{
                Accept:'application/json',
                Authorization:`Bearer ${token}`
            }
        })
    }
}

export const codeBank = (token) => {
    return {
        type:'CODE_BANK',
        payload:axios.get(`${url}/bank`,{
            headers:{
                Accept:'application/json',
                Authorization:`Bearer ${token}`
            }
        })
    }
}