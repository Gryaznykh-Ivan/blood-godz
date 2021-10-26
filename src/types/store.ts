export interface AuthState {
    isLoading: boolean,
    isAuth: boolean,
    hwid: string,
    uid: number,
    username: string,
    avatar: string,
    token: string,
    error: string
}

export type gamemode = 1 | 2 | 3 | 5;
export type regions = "RU";

export interface Message {
    imageUrl: string,
    name: string,
    msg: string,
    alien: boolean
}

export interface LobbyMessage {
    player: string,
    message: string
}

export interface LobbyChat {
    [key: string]: LobbyMessage
}

export interface LobbyState {
    id: string | null,
    region: regions,
    gamemode: gamemode | null,
    finding: boolean,
    chat: LobbyChat,
    players: Array<number>,
    invites: Array<string>,
    leader: number|undefined,
    private: boolean,
    lobbyRank: number,
    loadingState: number
}