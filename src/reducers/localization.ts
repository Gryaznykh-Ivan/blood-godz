import { CHANGE_LOCALE, LocalizationActionTypes, Locales } from '../types/actions'
import translit from "../localization";

const initialState = {
    'locale': 'rus'
};

export default function LocalizationReducer(state = initialState, action: LocalizationActionTypes) {
    switch (action.type) {
        case CHANGE_LOCALE:
            state.locale = action.locale;
            translit.setLanguage(action.locale);
            return { ...state };
        default:
            translit.setLanguage(state.locale);
            return { ...state };
    }
}