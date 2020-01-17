const initialState = {
    isLoading:false,
    isRejected:false,
    isFullFilled:false,
}

const transaction = (state = initialState , action) => {
    switch (action.type) {
        case 'TRANSFER_PENDING':
            return {
                ...state,
                isLoading:true,
                isRejected:false,
                isFullFilled:false
            }
        case 'TRANSFER_REJECTED':
            return {
                ...state,
                isLoading:false,
                isRejected:true,
                isFullFilled:false,
                errMessage:action.payload.response ? action.payload.response.data.error.error : action.payload.data.error
            }
        case 'TRANSFER_FULLFILLED':
            return {
                ...state,
                isLoading:false,
                isRejected:false,
                isFullFilled:true
            }
    
        default:
            return state
    }
}

export default transaction