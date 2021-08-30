import { combineReducers } from 'redux'

import auth from './auth'
import localization from "./localization";
import news from './news';

const rootReducer = combineReducers({ auth, localization, news });

export default rootReducer;