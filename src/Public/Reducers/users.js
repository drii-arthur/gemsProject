const initialState = {
    userList: [],
    isLoading:false,
    isRejected:false,
    isFullFilled:false,
    token:''
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
                errMessage:action.payload.response ? action.payload.response.data.idcontact : action.payload.data.idcontact,
            }
        case 'LOGIN_FULLFILLED':
            return{
                ...state,
                isRejected:false,
                isFullFilled:true,
                token:action.payload.data.token
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
            isFullFilled:false,
            errMessage:action.payload.response ? action.payload.response.data.iduser2 : action.payload.data.iduser2,
           
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
             errMessage:action.payload.response ? action.payload.response.data : action.payload.data
        }
        case 'SIGNUP_FULLFILLED':
        return{
            ...state,
            isRejected:false,
            isFullFilled:true
        }
        case 'PIN_PENDING':
        return{
            ...state,
            isLoadingL:true,
            isRejected:false,
            isFullFilled:false
        }
        case 'PIN_REJECTED':
        return{
            ...state,
            isRejected:true,
            isFullFilled:false
        }
        case 'PIN_FULLFILLED':
        return{
            ...state,
            isRejected:false,
            isFullFilled:true
        }
        case 'LOGOUT_PENDING':
        return{
            ...state,
            isLoading:true,
            isRejected:false,
            isFullFilled:false
        }
        case 'LOGOUT_REJECTED':
        return{
            ...state,
            isRejected:true,
            isFullFilled:false
        }
        case 'LOGOUT_FULLFILLED':
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