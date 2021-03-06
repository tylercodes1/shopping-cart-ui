import { LOGIN, LOGOUT } from '../actions/actionTypes'
import { Axios } from 'axios'

const loginReducer = (state = { isLoggedIn: false }, action) => {
    console.log('being called')
    console.log(action)
    console.log(action.type)
    console.log(action.isLoggedIn)
    console.log(action.role)
    switch (action.type) {
        case LOGIN:
            return {
                isLoggedIn: action.isLoggedIn,
                role: action.role,
                userId: action.userId,
            }
        case LOGOUT:
            return { isLoggedIn: false }
        default:
            return state
    }
}
export default loginReducer
