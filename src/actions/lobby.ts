import {AppDispatch, AppThunk} from "../store";
import socket from "../utils/socket";
import getFingetprint from "../utils/fingerprint";
import {v1 as uuid} from 'uuid';
import api from "../utils/api";
import {
    LOBBY_CHANGED,
    LOBBY_FIND_CHANGED,
    LOBBY_GAMEMODE_CHANGED, LOBBY_GET_INVITE_LINK, LOBBY_LOADING, LOBBY_MESSAGE,
    LOBBY_PLAYER_ADDED, LOBBY_PLAYER_REMOVED,
    LOBBY_REGION_CHANGED, LOBBY_REMOVED, LOBBY_USE_INVITE_LINK,
    NEW_LOBBY,
    SOCKET_FAILURE
} from "../types/actions";

const getBaseMessage = (callback: string): { [k: string]: any } => {
    return {
        requestID: uuid(),
        callback: "callback_" + callback,
        token: localStorage.getItem("token")
    }
}

//--------------------------------------------
//                  REST API
//--------------------------------------------

const createLobby = (): AppThunk => async (dispatch: AppDispatch, getState) => {
    dispatch({type: LOBBY_LOADING});
    api.post('lobby/createLobby', {
        token: localStorage.getItem("token")
    }).then(response => {
        const {reason} = response.data;
        const id = reason.redirect.match(/\/lobby\/(.*)/)[1];
        dispatch({type: NEW_LOBBY, id: id})
    });
}

//--------------------------------------------
//                  WebSockets
//--------------------------------------------

const removeLobby = (id: string): AppThunk => async (dispatch: AppDispatch) => {
    let request = getBaseMessage(removeLobby.name);
    request.lobbyOid = id;
   socket()
        .then((connection: WebSocket) => {
            dispatch({type: LOBBY_LOADING});
            connection.send(JSON.stringify(request))
            connection.onmessage = event => {
                const data = JSON.parse(event.data);
                if (data.success)
                {
                    dispatch({type: LOBBY_REMOVED});

                    connection.close();
                }
            }
        })
        .catch(error => dispatch({type: SOCKET_FAILURE}))
}

const changeRegionLobby = (id: string, region: "RU"): AppThunk => async (dispatch: AppDispatch) => {
    let request = getBaseMessage(changeRegionLobby.name);
    request.lobbyOid = id;
    request.region = region;
    socket()
        .then((connection: WebSocket) => {
            dispatch({type: LOBBY_LOADING});
            connection.send(JSON.stringify(request))
            connection.onmessage = event => {
                const data = JSON.parse(event.data);
                if (data.success)
                {
                    dispatch({type: LOBBY_REGION_CHANGED, region: region});
                    connection.close();
                }
            }
        })
        .catch(error => dispatch({type: SOCKET_FAILURE}))
}

const changeGameTypeLobby = (id: string, gamemode: 1|2|3|5): AppThunk => async (dispatch: AppDispatch) => {
    let request = getBaseMessage(changeGameTypeLobby.name);
    request.lobbyOid = id;
    request.gamemode = gamemode;
    socket()
        .then((connection: WebSocket) => {
            dispatch({type: LOBBY_LOADING});
            connection.send(JSON.stringify(request))
            connection.onmessage = event => {
                const data = JSON.parse(event.data);
                if (data.success)
                {
                    dispatch({type: LOBBY_GAMEMODE_CHANGED, gamemode: gamemode});
                    connection.close();
                }
            }
        })
        .catch(error => dispatch({type: SOCKET_FAILURE}))
}

const addPlayerLobby = (id: string, playerId: number): AppThunk => async (dispatch: AppDispatch, getState) => {
    let request = getBaseMessage(addPlayerLobby.name);
    request.lobbyOid = id;
    request.playerToAddID = playerId;
    socket()
        .then((connection: WebSocket) => {
            dispatch({type: LOBBY_LOADING});
            connection.send(JSON.stringify(request))
            connection.onmessage = event => {
                const data = JSON.parse(event.data);
                if (data.success)
                {
                    const players = getState().lobby.players
                    dispatch({type: LOBBY_PLAYER_ADDED, players: [...players, playerId]});
                    connection.close();
                }
            }
        })
        .catch(error => dispatch({type: SOCKET_FAILURE}))
}

const removePlayerLobby = (id: string, playerId: number): AppThunk => async (dispatch: AppDispatch) => {
    let request = getBaseMessage(removePlayerLobby.name);
    request.lobbyOid = id;
    request.playerToAddID = playerId;
    socket()
        .then((connection: WebSocket) => {
            dispatch({type: LOBBY_LOADING});
            connection.send(JSON.stringify(request))
            connection.onmessage = event => {
                const data = JSON.parse(event.data);
                if (data.success)
                {
                    dispatch({type: LOBBY_PLAYER_REMOVED, playerId: undefined});
                    connection.close();
                }
            }
        })
        .catch(error => dispatch({type: SOCKET_FAILURE}))
}

const setFindLobby = (id: string, find: boolean): AppThunk => async (dispatch: AppDispatch) => {
    let request = getBaseMessage(setFindLobby.name);
    request.lobbyOid = id;
    request.findstate = find;
    socket()
        .then((connection: WebSocket) => {
            dispatch({type: LOBBY_LOADING});
            connection.send(JSON.stringify(request))
            connection.onmessage = event => {
                const data = JSON.parse(event.data);
                if (data.success)
                {
                    dispatch({type: LOBBY_FIND_CHANGED, findState: find});
                    connection.close();
                }
            };
        })
        .catch(error => dispatch({type: SOCKET_FAILURE}))
}

const getLobby = (id: string): AppThunk => async (dispatch: AppDispatch) => {
    let request = getBaseMessage(getLobby.name);
    request.lobbyOid = id;
    socket()
        .then((connection: WebSocket) => {
            connection.send(JSON.stringify(request))
            connection.onmessage = event => {
                const data = JSON.parse(event.data);
                if (data.success)
                {
                    dispatch({
                        type: LOBBY_CHANGED,
                        players: data.reason.players,
                        chat: data.reason.chat,
                        gamemode: data.reason.gamemode,
                        loaded: true
                    });
                    //connection.close();
                }
            };
        })
        .catch(error => dispatch({type: SOCKET_FAILURE}))
}

const useInviteLinkLobby = (id: string, invite: string): AppThunk => async (dispatch: AppDispatch) => {
    let request = getBaseMessage(useInviteLinkLobby.name);
    request.lobbyOid = id;
    request.invitecode = invite;
    socket()
        .then((connection: WebSocket) => {
            dispatch({type: LOBBY_LOADING});
            connection.send(JSON.stringify(request))
            connection.onmessage = event => {
                const data = JSON.parse(event.data);
                if (data.success)
                {
                    dispatch({type: LOBBY_USE_INVITE_LINK});
                    connection.close();
                }
            };
        })
        .catch(error => dispatch({type: SOCKET_FAILURE}))
}

const getInviteLinkLobby = (id: string): AppThunk => async (dispatch: AppDispatch) => {
    let request = getBaseMessage(getInviteLinkLobby.name);
    request.lobbyOid = id;
    socket()
        .then((connection: WebSocket) => {
            dispatch({type: LOBBY_LOADING});
            connection.send(JSON.stringify(request))
            connection.onmessage = event => {
                const data = JSON.parse(event.data);
                if (data.success)
                {
                    dispatch({type: LOBBY_GET_INVITE_LINK});
                    connection.close();
                }
            };
        })
        .catch(error => dispatch({type: SOCKET_FAILURE}))
}

const msgChatLobby = (id: string, message: string): AppThunk => async (dispatch: AppDispatch) => {
    let request = getBaseMessage(msgChatLobby.name);
    request.lobbyOid = id;
    request.msg = message
    socket()
        .then((connection: WebSocket) => {
            dispatch({type: LOBBY_LOADING});
            connection.send(JSON.stringify(request))
            connection.onmessage = event => {
                const data = JSON.parse(event.data);
                if (data.success)
                {
                    dispatch({type: LOBBY_MESSAGE, message: message});
                    connection.close();
                }
            };
        })
        .catch(error => dispatch({type: SOCKET_FAILURE}))
}

export {
    createLobby,
    removeLobby,
    changeRegionLobby,
    changeGameTypeLobby,
    addPlayerLobby,
    removePlayerLobby,
    setFindLobby,
    getLobby,
    useInviteLinkLobby,
    getInviteLinkLobby,
    msgChatLobby
}