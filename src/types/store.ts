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

export type gamemodes = 1 | 2 | 3 | 5;
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

export interface LobbyLoadings {
    create?: boolean,
    remove?: boolean,
    region?: boolean,
    gamemode?: boolean,
    addplayer?: boolean,
    removeplayer?: boolean,
    find?: boolean,
    private?: boolean,
    getlobby?: boolean,
    uselink?: boolean,
    getlink?: boolean,
    msglobby?: boolean,
}

export interface LobbyState {
    id: string | null,
    region: regions,
    gamemode: gamemodes | null,
    finding: boolean,
    chat: LobbyChat,
    players: Array<number>,
    invites: Array<string>,
    leader: number|undefined,
    private: boolean,
    lobbyRank: number,
    loadings: LobbyLoadings
}