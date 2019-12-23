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
                isFullFilled:false
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