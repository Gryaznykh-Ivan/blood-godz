import React, {Component, useState} from "react";
import store, {AppState} from "../../../store";
import {change} from "../../../actions/localization";
import translit from "../../../localization";
import {useSelector} from "react-redux";



const Language = () => {
    const [language, setLanguage] = useState(store.getState().localization.locale);
    const local = useSelector((state:AppState) => state.localization.locale);

    const changeLanguage = () => {
        const lang = language === 'rus'? 'eng' : 'rus';
        change(lang);
        translit.setLanguage(lang);
        setLanguage(lang);
    }

    return (
        <div className="border-l-2 pl-1 border-pink cursor-pointer" onClick={changeLanguage}>{language}</div>
    );
}


export default Language;