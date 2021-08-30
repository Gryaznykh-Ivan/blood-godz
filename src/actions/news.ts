import httpClient from "../http/httpClient";
import store from "../store";
import {News, ADD_NEWS} from "../types/actions";

const getLastNews = async () => {
    await httpClient.get('/news/getlastnews')
        .then(({data}) => {
            store.dispatch({
                type: ADD_NEWS,
                'news': data
            });
        })
        .catch(e => console.log(e));
}

const getAllNews = () =>
{

}

const getNewsById = (id: bigint) =>
{

}

export {
    getAllNews,
    getLastNews,
    getNewsById
}