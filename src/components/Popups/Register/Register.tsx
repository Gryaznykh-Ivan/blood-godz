import React, {useEffect, useState} from 'react'
import {PopupResponse, RegisterPopupResponse} from '../../../utils/Popup';

import s from './Register.module.css'
import {Provider, useDispatch, useSelector} from "react-redux";
import store, {AppState} from "../../../store";

interface Props {
    resolve: (result: RegisterPopupResponse) => void
}


const Register = ({ resolve }: Props) => {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');
    const [policy, setPolicy] = useState(false);
    const [news, setNews] = useState(false);

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
        resolve({login: login, password: password, email: email })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== passwordConfirm)
        {
            setError("Не совпадают пароли");
            return false;
        }
        handleClose();
    }

    //Render

    return (
        <Provider store={store}>
            <div ref={refs.regRef} className={`fixed ${s.register}`}>
                <form onSubmit={handleSubmit} className="">
                    <h2>Регистрация</h2>
                    <input placeholder="Введите логин" className="w-full" onChange={e => setLogin(e.target.value)} required />
                    <input type="email" placeholder="Введите email адрес" className="w-full" onChange={e => setEmail(e.target.value)} required/>
                    <input placeholder="Введите пароль" className="w-full" onChange={e => setPassword(e.target.value)} required/>
                    <input placeholder="Повторите пароль" className="w-full" onChange={e => setPasswordConfirm(e.target.value)} required/>
                    <label className={s.error}>{error}</label>
                    <label className="w-full block" htmlFor="register[policy]">
                        <input type="checkbox" className="float-left" id="register[policy]" name="register[policy]" onChange={e => setPolicy(e.target.checked)} required/>
                        <div className="float-left"/>
                        Принять пользовательское соглашение
                    </label>
                    <label className="w-full block" htmlFor="register[news]">
                        <input type="checkbox" className="float-left" id="register[news]" name="register[news]" onChange={e => setNews(e.target.checked)}/>
                        <div className="float-left"/>
                        Получать новостные обновления
                    </label>
                    <button type="submit">Зарегестрироваться</button>
                </form>
            </div>
        </Provider>
    )
}

export default Register;
