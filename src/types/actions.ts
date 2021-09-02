export const LOADING_AUTH = "LOADING_AUTH"
export const LOGIN_AUTH = "LOGIN_AUTH"
export const FAILED_AUTH = "FAILED_AUTH"
export const LOGOUT_AUTH = "LOGOUT_AUTH"
export const CHANGE_LOCALE = "CHANGE_LOCALE";
export const GET_NEWS = "GET_NEWS";

interface LoadingAuthAction {
    type: typeof LOADING_AUTH,
    isLoading?: boolean
}

interface LoginAuthAction {
    type: typeof LOGIN_AUTH,
    username: string,
    token: string,
    avatar: string,
    uid: number
}

interface FailedAuthAction {
    type: typeof FAILED_AUTH,
    reason: string
}

interface LogoutAuthAction {
    type: typeof LOGOUT_AUTH
}

interface ChangeLocalisation {
    type: typeof CHANGE_LOCALE,
    locale: Locales
}

interface AddNews {
    type: typeof GET_NEWS,
    news: News
}

export interface News {
    author: string,
    commentable: boolean,
    comments: object,
    date: number,
    image: string,
    likes: bigint,
    message: string,
    title: string
}

export type Locales = "rus" | "eng"
export type NewsActionTypes = AddNews
export type LocalizationActionTypes = ChangeLocalisation
export type AuthActionTypes = LoadingAuthAction | LoginAuthAction | FailedAuthAction | LogoutAuthAction
