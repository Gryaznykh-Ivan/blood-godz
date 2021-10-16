import {LobbyState} from '../types/store'
import {
    LOBBY_FIND_CHANGED,
    LOBBY_GAMEMODE_CHANGED, LOBBY_GET_INVITE_LINK,
    LOBBY_MESSAGE,
    LOBBY_PLAYER_ADDED,
    LOBBY_PLAYER_REMOVED,
    LOBBY_REGION_CHANGED,
    LOBBY_REMOVED,
    LOBBY_USE_INVITE_LINK,
    LobbyActionTypes,
    NEW_LOBBY,
    SOCKET_FAILURE
} from '../types/actions'

const initialState: LobbyState = {
    id: '',
    region: 'RU',
    gamemode: 1,
    findState: false,
    leader: undefined,
    chat: [],
    players: [],
    invites: [],
    lobbyRank: 0,
    private: false
}

export default function AuthReducer(state = initialState, action: LobbyActionTypes): LobbyState {
    switch (action.type) {
        case LOBBY_MESSAGE:
        case LOBBY_GET_INVITE_LINK:
        case LOBBY_USE_INVITE_LINK:
        case LOBBY_FIND_CHANGED:
        case LOBBY_PLAYER_REMOVED:
        case LOBBY_PLAYER_ADDED:
        case LOBBY_GAMEMODE_CHANGED:
        case LOBBY_REGION_CHANGED:
        case LOBBY_REMOVED:
        case NEW_LOBBY:
        case SOCKET_FAILURE:
            const {type, ...action_data} = action;
            return {...state, ...action_data}
        default:
            return state;
    }
}