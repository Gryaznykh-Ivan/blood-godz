import {gamemodes, LobbyChat, LobbyLoadings} from "./store";

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
export const LOBBY_REGION_GET = "LOBBY_REGION_GET";
export const LOBBY_REGION_CHANGED = "LOBBY_REGION_CHANGED";
export const LOBBY_GAMEMODE_CHANGED = "LOBBY_GAMEMODE_CHANGED";
export const LOBBY_PLAYER_ADDED = "LOBBY_PLAYER_ADDED";
export const LOBBY_PLAYER_REMOVED = "LOBBY_PLAYER_REMOVED";
export const LOBBY_FIND_CHANGED = "LOBBY_FIND_CHANGED";
export const LOBBY_CHANGED = "LOBBY_CHANGED";
export const LOBBY_USE_INVITE_LINK = "LOBBY_USE_INVITE_LINK";
export const LOBBY_GET_INVITE_LINK = "LOBBY_GET_INVITE_LINK";
export const LOBBY_MESSAGE = "LOBBY_MESSAGE";
export const LOBBY_LOADING = "LOBBY_LOADING"
export const LOBBY_PRIVATE = "LOBBY_PRIVATE";

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
    type: typeof SOCKET_FAILURE,
    loadings: LobbyLoadings
}

interface LobbyBaseAction {
    loadings: LobbyLoadings
}

interface LobbyLoadingAction extends LobbyBaseAction{
    type: typeof LOBBY_LOADING,
}

interface NewLobbyAction extends LobbyBaseAction{
    type: typeof NEW_LOBBY,
    id?: string,
}

interface RemoveLobbyAction extends LobbyBaseAction{
    type: typeof LOBBY_REMOVED
}

interface LobbyRegionGetAction extends LobbyBaseAction{
    type: typeof LOBBY_REGION_GET,
    regions: object
}

interface LobbyRegionAction extends LobbyBaseAction{
    type: typeof LOBBY_REGION_CHANGED,
    region: string
}

interface LobbyGamemodeAction extends LobbyBaseAction{
    type: typeof LOBBY_GAMEMODE_CHANGED,
    gamemode: gamemodes
}

interface LobbyPlayerAddAction extends LobbyBaseAction{
    type: typeof LOBBY_PLAYER_ADDED,
    players: Array<number>
}

interface LobbyPlayerRemoveAction extends LobbyBaseAction{
    type: typeof LOBBY_PLAYER_REMOVED
}

interface LobbyStateAction extends LobbyBaseAction{
    type: typeof LOBBY_FIND_CHANGED,
    finding: boolean
}

interface LobbyPrivateAction extends LobbyBaseAction{
    type: typeof LOBBY_PRIVATE,
    private: boolean
}

interface LobbyChangedAction extends LobbyBaseAction{
    type: typeof LOBBY_CHANGED,
    id?: string | null,
    region?: string,
    gamemode?: gamemodes | null,
    finding?: boolean,
    chat?: LobbyChat,
    players?: Array<number>,
    invites?: Array<string>,
    leader?: number|undefined,
    private?: boolean,
    lobbyRank?: number,
}

interface LobbyInviteUseAction extends LobbyBaseAction{
    type: typeof LOBBY_USE_INVITE_LINK
}

interface LobbyInviteGetAction extends LobbyBaseAction{
    type: typeof LOBBY_GET_INVITE_LINK
}

interface LobbyMessageAction extends LobbyBaseAction{
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
export type LobbyActionTypes = SocketFailureAction | NewLobbyAction | LobbyRegionGetAction | LobbyRegionAction | LobbyGamemodeAction | LobbyPlayerAddAction | LobbyPlayerRemoveAction | LobbyStateAction | LobbyPrivateAction | LobbyChangedAction |  LobbyInviteUseAction | LobbyInviteGetAction | LobbyMessageAction | RemoveLobbyAction | LobbyLoadingAction