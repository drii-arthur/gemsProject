import { combineReducers } from 'redux'
import users from './users'
import layanan from './layanan'
import transaction from './transaction'
import bank from './bank'
import Qr from './Qr'

const rootReducer = combineReducers({
    users,
    layanan,
    transaction,
    Qr
})

export default rootReducer