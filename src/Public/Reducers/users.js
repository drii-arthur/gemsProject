const initialState = {
    userList: [],
    isLoading:false,
    isRejected:false,
    isFullFilled:false
}

const users = (state = initialState , action) => {
    switch (action.type){
        // user Login
        case 'lOGIN_PENDING':
            return{
                ...state,
                isLoading:true,
                isRejected:false,
                isFullFilled:false
            }
        case 'LOGIN_REJECTED':
            return{
                ...state,
                isRejected:true,
                isFullFilled:false,
                isLoading:false,
                errMessage:action.payload.response ? action.payload.response.data.error : action.payload.data.error,
            }
        case 'LOGIN_FULLFILLED':
            return{
                ...state,
                isRejected:false,
                isFullFilled:true,
            }
            // izin akses
        case 'IZIN_PENDING':
            return{
            ...state,
            isLoading:true,
            isRejected:false,
            isFullFilled:false
            }
        case 'IZIN_REJECTED':
            return{
            ...state,
            isRejected:true,
            isFullFilled:false
            }
        case 'IZIN_FULLFILLED':
        return{
            ...state,
            isRejected:false,
            isFullFilled:true
        }
        case 'SIGNUP_PENDING':
        return{
            ...state,
            isLoading:true,
            isRejected:false,
            isFullFilled:false
        }
        case 'SIGNUP_REJECTED':
        return{
            ...state,
            isRejected:true,
            isFullFilled:false,
        }
        case 'SIGNUP_FULLFILLED':
        return{
            ...state,
            isRejected:false,
            isFullFilled:true
        }
        default:
            return state
    }
}

export default users