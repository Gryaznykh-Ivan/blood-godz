import React, {useEffect, useState} from 'react'
import {LoginPopupResponse, PopupResponse, RegisterPopupResponse} from '../../../utils/Popup';

import s from './Login.module.css'
import {Provider, useDispatch, useSelector} from "react-redux";
import store, {AppState} from "../../../store";

interface Props {
    resolve: (result: LoginPopupResponse) => void
}


const Login = ({ resolve }: Props) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    //Content ref
    const refs = {
        regRef: React.useRef<HTMLDivElement>(null),
    };

    //UseEffects

    useEffect(() => {
        document.addEventListener("click", (event) =>{
            if (event.target === refs.regRef.current)
                handleClose();
        })
    }, []);

    //Handles

    const handleClose = () => {
        resolve({login: login, password: password})
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleClose();
    }

    //Render

    return (
        <Provider store={store}>
            <div ref={refs.regRef} className={`fixed ${s.register}`}>
                <form onSubmit={handleSubmit} className="">
                    <h2>Регистрация</h2>
                    <input placeholder="Введите логин" className="w-full" onChange={e => setLogin(e.target.value)} required />
                    <input placeholder="Введите пароль" className="w-full" onChange={e => setPassword(e.target.value)} required/>
                    <label className={s.error}>{error}</label>
                    <button type="submit">Зарегестрироваться</button>
                </form>
            </div>
        </Provider>
    )
}

export default Login;
