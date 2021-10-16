const config = {
    baseURL: "wss://ws.bloodgodz.com/"
}

const socket = ():Promise<WebSocket> =>
{
    return new Promise((resolve, reject) => {
        const websocket = new WebSocket(config.baseURL);
        websocket.onopen = () => resolve(websocket);
        websocket.onerror = error => reject(error);
    })
}

export default socket;