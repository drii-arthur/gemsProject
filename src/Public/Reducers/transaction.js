const initialState = {
    isLoading:false,
    isRejected:false,
    isFullFilled:false,
}

const transaction = (state = initialState , action) => {
    switch (action.type) {
        case 'TRANSACTION_PENDING':
            return {
                ...state,
                isLoading:true,
                isRejected:false,
                isFullFilled:false
            }
        case 'TRANSACTION_REJECTED':
            return {
                ...state,
                isLoading:false,
                isRejected:true,
                isFullFilled:false
            }
        case 'TRANSACTION_FULLFILLED':
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