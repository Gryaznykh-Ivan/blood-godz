import {AuthState} from '../types/store'
import {
    AuthActionTypes,
    CHECK_AUTH,
    FAILED_AUTH,
    LOADING_AUTH,
    LOGIN_AUTH,
    LOGOUT_AUTH,
    REGISTER_AUTH
} from '../types/actions'

const initialState: AuthState = {
    isLoading: false,
    isAuth: false,
    hwid: "",
    uid: 0,
    username: "",
    avatar: "",
    token: "",
    error: "",
}

export default function AuthReducer(state = initialState, action: AuthActionTypes): AuthState {
    switch (action.type) {
        case LOGOUT_AUTH:
        case REGISTER_AUTH:
        case LOADING_AUTH:
        case FAILED_AUTH:
        case CHECK_AUTH:
        case LOGIN_AUTH:
            const {type, ...action_data} = action;
            return {...state, ...action_data}
        default:
            return state;
    }
}