import store, { AppDispatch, AppThunk } from '../store'
import api from '../utils/api'
import {
    LOGOUT_AUTH,
    LOGIN_AUTH,
    FAILED_AUTH,
    LOADING_AUTH,
} from "../types/actions";

const login = (telephone: string): AppThunk => async (dispatch: AppDispatch) => {
    dispatch({ type: LOADING_AUTH })

    api.post('account/login', {  })
}

const register = (customerId: number, code: string): AppThunk => async (dispatch: AppDispatch) => {
    dispatch({ type: LOADING_AUTH })

    
}

const logout = (): AppThunk => (dispatch: AppDispatch) => {
    localStorage.removeItem('token');
    dispatch({
        type: LOGOUT_AUTH
    });
}

export {
    login, register, logout
}