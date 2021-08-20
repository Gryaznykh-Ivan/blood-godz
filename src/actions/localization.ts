import store, {AppDispatch} from '../store'
import { Locales ,CHANGE_LOCALE } from "../types/actions";

const change = (locale: Locales) => {
    store.dispatch({
        type: CHANGE_LOCALE,
        'locale': locale
    });
}

export{
    change
}
