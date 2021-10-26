import {AppDispatch, AppThunk} from "../store";
import socket from "../utils/socket";
import getFingetprint from "../utils/fingerprint";
import {v1 as uuid} from 'uuid';
import api from "../utils/api";
import {
    LOBBY_CHANGED,
    LOBBY_FIND_CHANGED,
    LOBBY_GAMEMODE_CHANGED, LOBBY_GET_INVITE_LINK, LOBBY_LOADING, LOBBY_MESSAGE,
    LOBBY_PLAYER_ADDED, LOBBY_PLAYER_REMOVED, LOBBY_PRIVATE,
    LOBBY_REGION_CHANGED, LOBBY_REMOVED, LOBBY_USE_INVITE_LINK,
    NEW_LOBBY,
    SOCKET_FAILURE
} from "../types/actions";
import {regions} from "../types/store";

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
    dispatch({type: LOBBY_LOADING, loadings: {create: true}});
    api.post('lobby/createLobby', {
        token: localStorage.getItem("token")
    }).then(response => {
        const {reason} = response.data;
        const id = reason.redirect.match(/\/lobby\/(.*)/)[1];
        dispatch({type: NEW_LOBBY, id: id, loadings: {create: false}})
    }).catch(error => {
        dispatch({type: NEW_LOBBY, loadings: {create: false}})
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
            dispatch({type: LOBBY_LOADING, loadings: {remove: true}});
            connection.send(JSON.stringify(request))
            connection.onmessage = event => {
                const data = JSON.parse(event.data);
                if (data.success)
                {
                    dispatch({type: LOBBY_REMOVED, loadings: {remove: false}});

                    connection.close();
                }
            }
        })
        .catch(error => dispatch({type: SOCKET_FAILURE, loadings: {remove: false}}))
}

const changeRegionLobby = (id: string, region: regions): AppThunk => async (dispatch: AppDispatch) => {
    let request = getBaseMessage(changeRegionLobby.name);
    request.lobbyOid = id;
    request.region = region;
    socket()
        .then((connection: WebSocket) => {
            dispatch({type: LOBBY_LOADING, loadings: {region: true}});
            connection.send(JSON.stringify(request))
            connection.onmessage = event => {
                const data = JSON.parse(event.data);
                if (data.success)
                {
                    dispatch({type: LOBBY_REGION_CHANGED, region: region, loadings: {region: false}});
                    connection.close();
                }
            }
        })
        .catch(error => dispatch({type: SOCKET_FAILURE, loadings: {region: false}}))
}

const changeGameTypeLobby = (id: string, gamemode: 1|2|3|5): AppThunk => async (dispatch: AppDispatch) => {
    let request = getBaseMessage(changeGameTypeLobby.name);
    request.lobbyOid = id;
    request.gamemode = gamemode;
    socket()
        .then((connection: WebSocket) => {
            dispatch({type: LOBBY_LOADING, loadings: {gamemode: true}});
            connection.send(JSON.stringify(request))
            connection.onmessage = event => {
                const data = JSON.parse(event.data);
                if (data.success)
                {
                    dispatch({type: LOBBY_GAMEMODE_CHANGED, gamemode: gamemode, loadings: {gamemode: false}});
                    connection.close();
                }
            }
        })
        .catch(error => dispatch({type: SOCKET_FAILURE, loadings: {gamemode: false}}))
}

const addPlayerLobby = (id: string, playerId: number): AppThunk => async (dispatch: AppDispatch, getState) => {
    let request = getBaseMessage(addPlayerLobby.name);
    request.lobbyOid = id;
    request.playerToAddID = playerId;
    socket()
        .then((connection: WebSocket) => {
            dispatch({type: LOBBY_LOADING, loadings: {addplayer: true}});
            connection.send(JSON.stringify(request))
            connection.onmessage = event => {
                const data = JSON.parse(event.data);
                if (data.success)
                {
                    const players = getState().lobby.players
                    dispatch({type: LOBBY_PLAYER_ADDED, players: [...players, playerId], loadings: {addplayer: false}});
                    connection.close();
                }
            }
        })
        .catch(error => dispatch({type: SOCKET_FAILURE, loadings: {addplayer: false}}))
}

const removePlayerLobby = (id: string, playerId: number): AppThunk => async (dispatch: AppDispatch) => {
    let request = getBaseMessage(removePlayerLobby.name);
    request.lobbyOid = id;
    request.playerToAddID = playerId;
    socket()
        .then((connection: WebSocket) => {
            dispatch({type: LOBBY_LOADING, loadings: {removeplayer: true}});
            connection.send(JSON.stringify(request))
            connection.onmessage = event => {
                const data = JSON.parse(event.data);
                if (data.success)
                {
                    dispatch({type: LOBBY_PLAYER_REMOVED, loadings: {removeplayer: false}});
                    connection.close();
                }
            }
        })
        .catch(error => dispatch({type: SOCKET_FAILURE, loadings: {removeplayer: false}}))
}

const setFindLobby = (id: string, find: boolean): AppThunk => async (dispatch: AppDispatch) => {
    let request = getBaseMessage(setFindLobby.name);
    request.lobbyOid = id;
    request.findstate = find;
    socket()
        .then((connection: WebSocket) => {
            dispatch({type: LOBBY_LOADING, loadings: {find: true}});
            connection.send(JSON.stringify(request))
            connection.onmessage = event => {
                const data = JSON.parse(event.data);
                if (data.success)
                {
                    dispatch({type: LOBBY_FIND_CHANGED, finding: find, loadings: {find: false}});
                    connection.close();
                }
            };
        })
        .catch(error => dispatch({type: SOCKET_FAILURE, loadings: {find: false}}))
}

const setPrivateLobby = (id: string, privateMode: boolean): AppThunk => async (dispatch: AppDispatch) => {
    let request = getBaseMessage(setFindLobby.name);
    request.lobbyOid = id;
    request.private = privateMode;
    socket()
        .then((connection: WebSocket) => {
            dispatch({type: LOBBY_LOADING, loadings: {private: true}});
            connection.send(JSON.stringify(request))
            connection.onmessage = event => {
                const data = JSON.parse(event.data);
                if (data.success)
                {
                    dispatch({type: LOBBY_PRIVATE, private: privateMode, loadings: {private: false}});
                    connection.close();
                }
            };
        })
        .catch(error => dispatch({type: SOCKET_FAILURE, loadings: {private: false}}))
}

const getLobby = (id: string): AppThunk => async (dispatch: AppDispatch) => {
    let request = getBaseMessage(getLobby.name);
    request.lobbyOid = id;
    socket()
        .then((connection: WebSocket) => {
            dispatch({type: LOBBY_CHANGED, loadings: {getlobby: true}})
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
                        finding: data.reason.finding,
                        region: data.reason.region,
                        private: data.reason.private,
                        loadings: {
                            getlobby: false,
                            msglobby: false,
                            gamemode: false,
                            region: false,
                            private: false
                        }
                    });
                    //connection.close();
                }
            };
        })
        .catch(error => dispatch({type: SOCKET_FAILURE, loadings: {getlobby: false}}))
}

const useInviteLinkLobby = (id: string, invite: string): AppThunk => async (dispatch: AppDispatch) => {
    let request = getBaseMessage(useInviteLinkLobby.name);
    request.lobbyOid = id;
    request.invitecode = invite;
    socket()
        .then((connection: WebSocket) => {
            dispatch({type: LOBBY_LOADING, loadings: {uselink: true}});
            connection.send(JSON.stringify(request))
            connection.onmessage = event => {
                const data = JSON.parse(event.data);
                if (data.success)
                {
                    dispatch({type: LOBBY_USE_INVITE_LINK, loadings: {uselink: false}});
                    connection.close();
                }
            };
        })
        .catch(error => dispatch({type: SOCKET_FAILURE, loadings: {uselink: false}}))
}

const getInviteLinkLobby = (id: string): AppThunk => async (dispatch: AppDispatch) => {
    let request = getBaseMessage(getInviteLinkLobby.name);
    request.lobbyOid = id;
    socket()
        .then((connection: WebSocket) => {
            dispatch({type: LOBBY_LOADING, loadings: {getlink: true}});
            connection.send(JSON.stringify(request))
            connection.onmessage = event => {
                const data = JSON.parse(event.data);
                if (data.success)
                {
                    dispatch({type: LOBBY_GET_INVITE_LINK, loadings: {getlink: false}});
                    connection.close();
                }
            };
        })
        .catch(error => dispatch({type: SOCKET_FAILURE, loadings: {getlink: false}}))
}

const msgChatLobby = (id: string, message: string): AppThunk => async (dispatch: AppDispatch) => {
    let request = getBaseMessage(msgChatLobby.name);
    request.lobbyOid = id;
    request.msg = message
    socket()
        .then((connection: WebSocket) => {
            dispatch({type: LOBBY_LOADING, loadings: {msglobby: true}});
            connection.send(JSON.stringify(request))
            connection.onmessage = event => {
                const data = JSON.parse(event.data);
                if (data.success)
                {
                    dispatch({type: LOBBY_MESSAGE, message: message, loadings: {msglobby: false}});
                    connection.close();
                }
            };
        })
        .catch(error => dispatch({type: SOCKET_FAILURE, loadings: {msglobby: false}}))
}

export {
    createLobby,
    removeLobby,
    changeRegionLobby,
    changeGameTypeLobby,
    addPlayerLobby,
    removePlayerLobby,
    setFindLobby,
    setPrivateLobby,
    getLobby,
    useInviteLinkLobby,
    getInviteLinkLobby,
    msgChatLobby
}