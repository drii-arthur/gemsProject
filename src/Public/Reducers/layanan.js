const initialState = {
    isLoading:false,
    isRejected:false,
    isFullFilled:false,
    dataPulsa : []
}

const layanan = (state = initialState,action) => {
    switch (action.type) {
        case 'PULSA_PENDING':
            return {
                ...state,
                isLoading:true,
                isRejected:false,
                isFullFilled:false
            }
        case 'PULSA_REJECTED':
            return {
                ...state,
                isLoading:false,
                isRejected:true,
                isFullFilled:false
            }
        case 'PULSA_FULLFILLED':
            return {
                ...state,
                isRejected:false,
                isFullFilled:true,
                dataPulsa: action.payload.data.data
            }

        case 'TRANSAKSI_PULSA_PENDING':
            return {
                ...state,
                isLoading:true,
                isRejected:false,
                isFullFilled:false
            }
        case 'TRANSAKSI_PULSA_REJECTED':
            return {
                ...state,
                isLoading:false,
                isRejected:true,
                isFullFilled:false
            }
        case 'PULSA_FULLFILLED':
            return {
                ...state,
                isRejected:false,
                isFullFilled:true,
                dataPulsa: action.payload.data.data
            }

        case 'PLN_PENDING':
            return {
                ...state,
                isRejected:false,
                isLoading:true,
                isFullFilled:false
            }
        case 'PLN_REJECTED':
            return {
                ...state,
                isRejected:true,
                isFullFilled:false
            }
        case 'TRANSAKSI_PLN_FULLFILLED':
            return {
                ...state,
                isRejected:false,
                isFullFilled:true
            }
        case 'CHECK_TOKEN_PENDING':
            return {
                ...state,
                isRejected:false,
                isLoading:true,
                isFullFilled:false
            }
        case 'CHECK_TOKEN_REJECTED':
            return {
                ...state,
                isRejected:true,
                isFullFilled:false
            }

        case 'CHECK_TOKEN_FULLFILLED':
            return {
                ...state,
                isRejected:false,
                isFullFilled:true
            }

        case 'GAMES_VOUCHER_PENDING':
            return {
                ...state,
                isRejected:false,
                isLoading:true,
                isFullFilled:false
            }
        case 'GAMES_VOUCHER_REJECTED':
            return {
                ...state,
                isRejected:true,
                isFullFilled:false
            }

        case 'GAMES_VOUCHER_FULLFILLED':
            return {
                ...state,
                isRejected:false,
                isFullFilled:true
            }
    
        default:
            return state
    }
}

export default layanan