import Axios from "axios";

const url = `https://gems-os.id/api/admin/v1/qr`

export const qrCode = (token) => {
    return {
        type : 'QRCODE',
        payload : Axios.get(`${url}/code`,{
            headers: {
                Accept : 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
    }
}

export const AccessCode = (data,token) => {
    return {
        type : 'ACCESS_QR',
        payload : Axios.get(`${url}/access?qr=${data}`,{
            headers: {
                Accept : 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
    }
}