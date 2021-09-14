import { AppDispatch, AppThunk } from '../store'
import api from '../utils/api'
import getFingetprint from "../utils/fingerprint";
import {
    LOGOUT_AUTH,
    LOGIN_AUTH,
    REGISTER_AUTH,
    FAILED_AUTH,
    LOADING_AUTH, CHECK_AUTH,
} from "../types/actions";


const login = (username: string, password: string): AppThunk => async (dispatch: AppDispatch) => {
    dispatch({ type: LOADING_AUTH, isLoading: true })
    const hwid = await getFingetprint();
    api.post('account/login', {
        "success": true,
        "username": username,
        "password": password,
        "hwid": hwid
    }).then(response => {
        const {success, ...data} = response.data;
        const {type, ...userdata} = data;
        for (let index in userdata)
            localStorage.setItem(index, userdata[index]);
        dispatch({
            type: LOGIN_AUTH,
            ...userdata,
            isLoading: false,
            isAuth: true,
            hwid: hwid
        });
    }).catch(err => {
        console.log("ERROR");
        console.log(err);
        dispatch({type: FAILED_AUTH, reason: err.reason})
    });
}

const register = (username: string, password: string, email: string): AppThunk => async (dispatch: AppDispatch) => {
    dispatch({ type: LOADING_AUTH, isLoading: true })
    const hwid = await getFingetprint();
    api.post('account/register', {
        "username": username,
        "password": password,
        "email": email,
        "hwid": hwid
    }).then((data) => {
        dispatch({type: REGISTER_AUTH, ...data, isAuth: true, isLoading: false })
    }).catch(err => {
        dispatch({type: FAILED_AUTH, reason: err.reason, isAuth: false, isLoading: false})
    });
}

const check = (): AppThunk => async (dispatch: AppDispatch) => {
    dispatch({ type: LOADING_AUTH, isLoading: true });
    getFingetprint().then((hwid) => {
        dispatch({
            type: CHECK_AUTH,
            token: localStorage.getItem('token') ?? '',
            avatar: localStorage.getItem('avatar') ?? '',
            username: localStorage.getItem('username') ?? '',
            uid: parseInt(localStorage.getItem('uid') ?? '0'),
            hwid: hwid,
            isAuth: localStorage.getItem('token') !== '',
            isLoading: false
        });
    });
}

const logout = (): AppThunk => (dispatch: AppDispatch) => {
    dispatch({ type: LOADING_AUTH, isLoading: true })
    localStorage.clear();
    dispatch({type: LOGOUT_AUTH, isAuth: false, isLoading: false, token: ''});
}

export {
    login, register, check, logout
}