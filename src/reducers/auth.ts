import { AuthState } from '../types/store'
import { AuthActionTypes } from '../types/actions'
import { LOADING_AUTH, LOGIN_AUTH, FAILED_AUTH, LOGOUT_AUTH } from '../types/actions'

const initialState: AuthState = {
    isLoading: false,
    isAuth: false,
    hwid: "",
    uid: 0,
    username: "",
    avatar: "",
    token: ""

}

export default function AuthReducer(state = initialState, action: AuthActionTypes): AuthState {
    switch (action.type) {
        case LOADING_AUTH:
            return {
                ...state,
                isLoading: action.isLoading || true
            }
        case LOGIN_AUTH:
            return {
                ...state,
                
            }
        case LOGOUT_AUTH:
            return {
                ...initialState,
                
            }
        case FAILED_AUTH:
            return {
                ...state,
                
            }
        default:
            return state;
    }
}