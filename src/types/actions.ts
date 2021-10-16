export const LOADING_AUTH = "LOADING_AUTH"
export const CHECK_AUTH = "CHECK_AUTH"
export const LOGIN_AUTH = "LOGIN_AUTH"
export const FAILED_AUTH = "FAILED_AUTH"
export const LOGOUT_AUTH = "LOGOUT_AUTH"
export const REGISTER_AUTH = "REGISTER_AUTH"
export const CHANGE_LOCALE = "CHANGE_LOCALE";
export const GET_NEWS = "GET_NEWS";
export const SOCKET_FAILURE = "SOCKET_FAILURE";
export const NEW_LOBBY = "NEW_LOBBY";
export const LOBBY_REMOVED = "LOBBY_REMOVED";
export const LOBBY_REGION_CHANGED = "LOBBY_REGION_CHANGED";
export const LOBBY_GAMEMODE_CHANGED = "LOBBY_GAMEMODE_CHANGED";
export const LOBBY_PLAYER_ADDED = "LOBBY_PLAYER_ADDED";
export const LOBBY_PLAYER_REMOVED = "LOBBY_PLAYER_REMOVED";
export const LOBBY_FIND_CHANGED = "LOBBY_FIND_CHANGED";
export const LOBBY_USE_INVITE_LINK = "LOBBY_USE_INVITE_LINK";
export const LOBBY_GET_INVITE_LINK = "LOBBY_GET_INVITE_LINK";
export const LOBBY_MESSAGE = "LOBBY_MESSAGE";

interface LoadingAuthAction {
    type: typeof LOADING_AUTH,
    isLoading?: boolean
}

interface CheckAuthAction {
    type: typeof CHECK_AUTH
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
    error: string
}

interface LogoutAuthAction {
    type: typeof LOGOUT_AUTH
}

interface RegisterAuthAction{
    type: typeof REGISTER_AUTH
}

interface SocketFailureAction{
    type: typeof SOCKET_FAILURE
}

interface NewLobbyAction{
    type: typeof NEW_LOBBY
}

interface RemoveLobbyAction{
    type: typeof LOBBY_REMOVED
}

interface LobbyRegionAction{
    type: typeof LOBBY_REGION_CHANGED
}

interface LobbyGamemodeAction{
    type: typeof LOBBY_GAMEMODE_CHANGED
}

interface LobbyPlayerAddAction{
    type: typeof LOBBY_PLAYER_ADDED
}

interface LobbyPlayerRemoveAction{
    type: typeof LOBBY_PLAYER_REMOVED
}

interface LobbyStateAction{
    type: typeof LOBBY_FIND_CHANGED
}

interface LobbyInviteUseAction{
    type: typeof LOBBY_USE_INVITE_LINK
}

interface LobbyInviteGetAction{
    type: typeof LOBBY_GET_INVITE_LINK
}

interface LobbyMessageAction{
    type: typeof LOBBY_MESSAGE,
    message: string
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
export type AuthActionTypes = LoadingAuthAction | LoginAuthAction | RegisterAuthAction | FailedAuthAction | LogoutAuthAction | CheckAuthAction
export type LobbyActionTypes = SocketFailureAction | NewLobbyAction | LobbyRegionAction | LobbyGamemodeAction | LobbyPlayerAddAction | LobbyPlayerRemoveAction | LobbyStateAction |  LobbyInviteUseAction | LobbyInviteGetAction | LobbyMessageAction | RemoveLobbyAction