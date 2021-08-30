import { ADD_NEWS, News, NewsActionTypes } from '../types/actions'

interface initialStateInterface{
    news: Array<News>
}

const initialState : initialStateInterface = {
    news: []
}

export default function NewsReducer(state = initialState, action: NewsActionTypes): any {
    switch (action.type) {
        case ADD_NEWS:
            return { ...state, news: action.news };
        default:
            return { ...state };
    }
}