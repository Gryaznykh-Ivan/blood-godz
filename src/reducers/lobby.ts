import {LobbyState} from '../types/store'
import {
    LOBBY_CHANGED,
    LOBBY_FIND_CHANGED,
    LOBBY_GAMEMODE_CHANGED,
    LOBBY_GET_INVITE_LINK,
    LOBBY_LOADING,
    LOBBY_MESSAGE,
    LOBBY_PLAYER_ADDED,
    LOBBY_PLAYER_REMOVED, LOBBY_PRIVATE,
    LOBBY_REGION_CHANGED,
    LOBBY_REMOVED,
    LOBBY_USE_INVITE_LINK,
    LobbyActionTypes,
    NEW_LOBBY,
    SOCKET_FAILURE
} from '../types/actions'

const initialState: LobbyState = {
    id: null,
    region: 'RU',
    gamemode: null,
    finding: false,
    leader: undefined,
    chat: {},
    players: [],
    invites: [],
    lobbyRank: 0,
    private: false,
    loadings: {
        create: true,
        remove: true,
        region: true,
        gamemode: true,
        addplayer: true,
        removeplayer: true,
        find: true,
        private: true,
        getlobby: true,
        //NOT LOADING ON INIT, SO FALSE
        uselink: false,
        getlink: false,
        msglobby: false,
    }
}

export default function AuthReducer(state = initialState, action: LobbyActionTypes): LobbyState {
    switch (action.type) {


        case LOBBY_MESSAGE:
        case LOBBY_GET_INVITE_LINK:
        case LOBBY_USE_INVITE_LINK:
        case LOBBY_FIND_CHANGED:
        case LOBBY_PRIVATE:
        case LOBBY_PLAYER_REMOVED:
        case LOBBY_PLAYER_ADDED:
        case LOBBY_GAMEMODE_CHANGED:
        case LOBBY_REGION_CHANGED:
        case LOBBY_REMOVED:
        case NEW_LOBBY:
        case SOCKET_FAILURE:
        case LOBBY_CHANGED:
        case LOBBY_LOADING:
            const {type, ...action_data} = action;
            action_data.loadings = {...state.loadings, ...action_data.loadings};
            return {...state, ...action_data};
        default:
            return state;
    }
}