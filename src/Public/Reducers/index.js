import { combineReducers } from 'redux'
import users from './users'
import layanan from './layanan'

const rootReducer = combineReducers({
    users,
    layanan
})

export default rootReducer