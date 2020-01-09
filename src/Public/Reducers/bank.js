const initialState = {
    isLoading:false,
    isRejected:false,
    isFullFilled:false,
}

const bank = (state = initialState , action) => {
    switch (action.type) {
        case 'ADD_BANK_PENDING':
            return {
                ...state,
                isLoading:true,
                isRejected:false,
                isFullFilled:false
            }
        case 'ADD_BANK_REJECTED':
            return {
                ...state,
                isLoading:false,
                isRejected:true,
                isFullFilled:false
            }
        case 'ADD_BANK_FULLFILLED':
            return {
                ...state,
                isLoading:false,
                isRejected:false,
                isFullFilled:true
            }

            
        case 'CODE_BANK_PENDING':
            return {
                ...state,
                isLoading:true,
                isRejected:false,
                isFullFilled:false
            }
        case 'CODE_BANK_REJECTED':
            return {
                ...state,
                isLoading:false,
                isRejected:true,
                isFullFilled:false
            }
        case 'CODE_BANK_FULLFILLED':
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

export default bank