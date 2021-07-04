export const LOADING_AUTH = "LOADING_AUTH"
export const LOGIN_AUTH = "LOGIN_AUTH"
export const FAILED_AUTH = "FAILED_AUTH"
export const LOGOUT_AUTH = "LOGOUT_AUTH"

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

export type AuthActionTypes = LoadingAuthAction | LoginAuthAction | FailedAuthAction | LogoutAuthAction