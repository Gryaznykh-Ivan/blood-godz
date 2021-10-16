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

export interface LobbyState {
    id: string,
    region: "RU",
    gamemode: 1|2|3|5,
    findState: boolean,
    chat: Array<string>,
    players: Array<number>,
    invites: Array<string>,
    leader: number|undefined,
    private: boolean,
    lobbyRank: number,
}