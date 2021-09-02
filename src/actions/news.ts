import httpClient from "../http/httpClient";
import store from "../store";
import {News, GET_NEWS} from "../types/actions";

const getLastNews = async () => {
    await httpClient.get('/news/getlastnews')
        .then(({data}) => {
            store.dispatch({
                type: GET_NEWS,
                'news': data
            });
        })
        .catch(e => console.log(e));
}

const getAllNews = async () =>
{
    await httpClient.get('/news/getallnewsids')
        .then(({data}) => {
            store.dispatch({
                type: GET_NEWS,
                'news': data
            });
        })
        .catch(e => console.log(e));
}

const getNewsById = async (id: bigint) =>
{
    await httpClient.get('/news/getlastnews')
        .then(({data}) => {
            store.dispatch({
                type: GET_NEWS,
                'news': data
            });
        })
        .catch(e => console.log(e));
}

export {
    getAllNews,
    getLastNews,
    getNewsById
}