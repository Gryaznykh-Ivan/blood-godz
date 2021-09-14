import React, {useEffect, useState} from 'react'
import { PopupResponse } from '../../../utils/Popup';
import CheckBox from '../../CheckBox/CheckBox';

import s from './Register.module.css'

interface Props {
    resolve: (result: PopupResponse) => void
}


const Register = ({ resolve }: Props) => {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [policy, setPolicy] = useState(false);
    const [news, setNews] = useState(false);

    //Content ref
    const regRef = React.useRef<HTMLDivElement>(null);

    //Handles
    const handleClose = () => {
        resolve({isDenied: false, isConfirmed: false, isClosed: true })
    }

    const handleSubmit = () => {
        resolve({ isDenied: false, isConfirmed: true, isClosed: false });
    }

    //Popup close event
    useEffect(() => {
        document.addEventListener("click", (event) =>{
            if (event.target === regRef.current)
                handleClose();
        })
    }, []);

    return (
        <div ref={regRef} className={`fixed ${s.register}`}>
            <form onSubmit={handleSubmit} className="">
                <h2>Регистрация</h2>
                <input placeholder="Введите логин" className="w-full" onChange={e => setLogin(e.target.value)} required />
                <input type="email" placeholder="Введите email адрес" className="w-full" onChange={e => setEmail(e.target.value)} required/>
                <input placeholder="Введите пароль" className="w-full" onChange={e => setPassword(e.target.value)} required/>
                <input placeholder="Повторите пароль" className="w-full" onChange={e => setPasswordConfirm(e.target.value)} required/>
                <label className="w-full block" htmlFor="register[policy]">
                    <input type="checkbox" className="float-left" id="register[policy]" name="register[policy]" onChange={e => setPolicy(e.target.checked)} required/>
                    <div className="float-left"/>
                    Принять пользовательское соглашение
                </label>

                <label className="w-full block" htmlFor="register[news]">
                    <input type="checkbox" className="float-left" id="register[news]" name="register[news]" onChange={e => setNews(e.target.checked)} required/>
                    <div className="float-left"/>
                    Получать новостные обновления
                </label>
                <button type="submit">Зарегестрироваться</button>
            </form>
        </div>
    )
}

export default Register;
