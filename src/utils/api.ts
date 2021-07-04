import axios, { AxiosRequestConfig } from 'axios'
import store, { AppState } from '../store'

const config: AxiosRequestConfig = {
    baseURL: 'https://api.bloodgodz.com/main/'
}

const api = axios.create(config);

api.interceptors.request.use(
    req => {
        if (store.getState().auth.isAuth === true) {
            req.headers.Authorization = `Bearer ${ store.getState().auth.token }`;
        }

        return req;
    },
    err => err
);

api.interceptors.response.use(
    res => res,
    err => {
        const response = err.response;

        if (!response) return Promise.reject(err);

        if (response.status === 401) {
            localStorage.removeItem('token');
            store.dispatch({type: 'LOGOUT_AUTH'});
        }

        return err.response;
    }
);

export default api;