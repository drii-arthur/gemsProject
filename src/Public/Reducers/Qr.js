const initialState = {
    isLoading:false,
    isRejected:false,
    isFullFilled:false,
}

const Qr = (state = initialState,action) => {
    switch (action.type) {
        case 'QRCODE_PENDING':
            return {
                ...state,
                isLoading:true,
                isRejected:false,
                isFullFilled:false
            }
        case 'QRCODE_REJECTED':
            return {
                ...state,
                isLoading:false,
                isRejected:true,
                isFullFilled:false
            }
        case 'QRCODE_FULLFILLED':
            return {
                ...state,
                isRejected:false,
                isFullFilled:true,
            }

        case 'ACCESS_QR_PENDING':
            return {
                ...state,
                isLoading:true,
                isRejected:false,
                isFullFilled:false
            }
        case 'ACCESS_QR_REJECTED':
            return {
                ...state,
                isLoading:false,
                isRejected:true,
                isFullFilled:false
            }
        case 'ACCESS_QR_FULLFILLED':
            return {
                ...state,
                isRejected:false,
                isFullFilled:true,
            }

        default:
            return state
    }
}

export default Qr