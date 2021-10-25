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

export interface LobbyState {
    id: string | null,
    region: "RU",
    gamemode: gamemode | null,
    findState: boolean,
    chat: Array<string>,
    players: Array<number>,
    invites: Array<string>,
    leader: number|undefined,
    private: boolean,
    lobbyRank: number,
    loadingState: number
}