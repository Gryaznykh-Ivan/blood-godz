import { combineReducers } from 'redux'

import auth from './auth'
import localization from "./localization";
import news from './news';
import lobby from "./lobby";

const rootReducer = combineReducers({ auth, localization, news, lobby });

export default rootReducer;