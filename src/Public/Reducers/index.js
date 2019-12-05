import { combineReducers } from 'redux'
import users from './users'
import layanan from './layanan'
import transaction from './transaction'

const rootReducer = combineReducers({
    users,
    layanan,
    transaction
})

export default rootReducer