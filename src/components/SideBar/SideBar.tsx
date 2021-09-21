import {connect, useDispatch, useSelector} from 'react-redux'
import React, {useEffect, useState} from 'react'
import {login, register, check, logout} from '../../actions/auth'
import './SideBar.css'
import {AppState} from '../../store'
import {LoginPopupResponse, PopupResponse, RegisterPopupResponse, ShowPopup} from "../../utils/Popup";
import ItemEdit from "../Popups/ItemEdit/ItemEdit";
import Register from "../Popups/Register/Register";
import Login from "../Popups/Login/Login";

interface PropsFromState {
    isAuth: boolean
}

interface PropsFromComponent {
    isOpened: boolean,
    isOpenedToggle: () => void,
}

type Props = PropsFromState & PropsFromComponent

const SideBar = ({isOpened, isOpenedToggle}: Props) => {

    const [isAuth, setAuth] = useState(false);
    const auth = useSelector((state: AppState) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        setAuth(auth.token !== '');
    }, [auth]);

    useEffect(() => {
        dispatch(check());
    }, []);

    const onLoginClick = () => {
        ShowPopup(Login, {})
            .then((a: RegisterPopupResponse | PopupResponse | LoginPopupResponse) => {
                if ("login" in a) {
                    dispatch(login(a.login, a.password));
                }
            });
    }

    const onRegisterClick = () => {
        ShowPopup(Register, {})
            .then((a: RegisterPopupResponse | PopupResponse | LoginPopupResponse) => {
                if ("login" in a) {
                    if ("email" in a) {
                        dispatch(register(a.login, a.password, a.email));
                    }
                }
            });
    }

    const onLogoutClick = () => {
        dispatch(logout());
    }

    return (
        <div className="transition-all duration-700">
            <div
                className={`fixed xl:z-50 z-20 top-0 right-0 scrollbar-hidden overflow-x-hidden ${isOpened ? 'xl:w-80 w-full' : 'w-20 hidden'} bg-black h-screen xl:flex flex-col py-16 px-4 bg-opacity-80 text-white`}>
                <div className={`flex flex-col flex-1 items-center ${isAuth && 'hidden'}`}>
                    <img className="mb-2" src="/static/images/icons/persone.png" alt=""/>
                    <button className="" onClick={onRegisterClick}>Register</button>
                    <button className="" onClick={onLoginClick}>Login</button>
                </div>
                <div className={`flex-1 space-y-4 ${!isAuth && 'hidden'}`}>
                    <button className="" onClick={onLogoutClick}>Logout</button>
                </div>
                <div className={`flex-1 space-y-4 ${!isAuth && 'hidden'}`}>
                    <div className="flex">
                        <img className="rounded-xl" src={auth.avatar} alt=""/>
                        <div className={`ml-5 flex-1 ${!isOpened && 'hidden'}`}>
                            <div className="text-xl mb-3">NickName</div>
                            <div className="flex justify-between">
                                <div className="flex space-x-2">
                                    <img className="w-6 h-6" src="/static/images/icons/award.png" alt=""/>
                                    <img className="w-6 h-6" src="/static/images/icons/award.png" alt=""/>
                                </div>
                                <div className="flex">
                                    <img className="w-6 h-6" src="/static/images/icons/coin.png" alt=""/>
                                    <div className="text-gold font-bold ml-1">560</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className={`flex ${isOpened ? 'space-x-4' : 'flex-col items-center'}`}>
                            <div className="w-11 text-center">1 vs 1</div>
                            <img className="w-8 h-8" src="/static/images/levels/1.png" alt=""/>
                            <div className={`flex flex-col flex-1 ${!isOpened && 'hidden'}`}>
                                <div className="flex justify-between text-mainBlue text-sm">
                                    <div className="">630 ELO</div>
                                    <div className="">1300</div>
                                </div>
                                <div className="relative w-full flex flex-col justify-center">
                                    <div className="progress shadow" style={{width: `${45}%`}}></div>
                                    <div className="line absolute"></div>
                                </div>
                            </div>
                        </div>
                        <div className={`flex ${isOpened ? 'space-x-4' : 'flex-col items-center'}`}>
                            <div className="w-11 text-center">2 vs 2</div>
                            <img className="w-8 h-8" src="/static/images/levels/5.png" alt=""/>
                            <div className={`flex flex-col flex-1 ${!isOpened && 'hidden'}`}>
                                <div className="flex justify-between text-mainBlue text-sm">
                                    <div className="">630 ELO</div>
                                    <div className="">1300</div>
                                </div>
                                <div className="relative w-full flex flex-col justify-center">
                                    <div className="progress shadow" style={{width: `${55}%`}}></div>
                                    <div className="line absolute"></div>
                                </div>
                            </div>
                        </div>
                        <div className={`flex ${isOpened ? 'space-x-4' : 'flex-col items-center'}`}>
                            <div className="w-11 text-center">3 vs 3</div>
                            <img className="w-8 h-8" src="/static/images/levels/10.png" alt=""/>
                            <div className={`flex flex-col flex-1 ${!isOpened && 'hidden'}`}>
                                <div className="flex justify-between text-mainBlue text-sm">
                                    <div className="">630 ELO</div>
                                    <div className="">1300</div>
                                </div>
                                <div className="relative w-full flex flex-col justify-center">
                                    <div className="progress shadow" style={{width: `${10}%`}}></div>
                                    <div className="line absolute"></div>
                                </div>
                            </div>
                        </div>
                        <div className={`flex ${isOpened ? 'space-x-4' : 'flex-col items-center'}`}>
                            <div className="w-11 text-center">5 vs 5</div>
                            <img className="w-8 h-8" src="/static/images/levels/6.png" alt=""/>
                            <div className={`flex flex-col flex-1 ${!isOpened && 'hidden'}`}>
                                <div className="flex justify-between text-mainBlue text-sm">
                                    <div className="">630 ELO</div>
                                    <div className="">1300</div>
                                </div>
                                <div className="relative w-full flex flex-col justify-center">
                                    <div className="progress shadow" style={{width: `${92}%`}}></div>
                                    <div className="line absolute"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-white border-b-1px"></div>
                    <div className={`flex justify-between ${!isOpened && 'hidden'}`}>
                        <div className="relative cursor-pointer">
                            <div className="absolute -top-2 -right-4">15</div>
                            <img src="/static/images/icons/group.png" alt=""/>
                        </div>
                        <div className="cursor-pointer">
                            <img src="/static/images/icons/waves.png" alt=""/>
                        </div>
                        <div className="cursor-pointer">
                            <img src="/static/images/icons/clock.png" alt=""/>
                        </div>
                        <div className="cursor-pointer border-b-2 pb-2">
                            <img src="/static/images/icons/chat.png" alt=""/>
                        </div>
                    </div>
                    <div className="space-y-4 h-120 scrollbar-hidden overflow-x-hidden">
                        <div className="flex">
                            <img src="/static/images/design/avatar.png" alt=""/>
                            <div className="ml-5">
                                <div className="font-medium">James</div>
                                <div className="">Playing</div>
                            </div>
                        </div>
                        <div className="flex">
                            <img src="/static/images/design/avatar.png" alt=""/>
                            <div className="ml-5">
                                <div className="font-medium">Nabe</div>
                                <div className="">Playing</div>
                            </div>
                        </div>
                        <div className="flex">
                            <img src="/static/images/design/avatar.png" alt=""/>
                            <div className="ml-5">
                                <div className="font-medium">Ivan</div>
                                <div className="text-green-600">Online</div>
                            </div>
                        </div>
                        <div className="flex">
                            <img src="/static/images/design/avatar.png" alt=""/>
                            <div className="ml-5">
                                <div className="font-medium">Ivan</div>
                                <div className="text-green-600">Online</div>
                            </div>
                        </div>
                        <div className="flex">
                            <img src="/static/images/design/avatar.png" alt=""/>
                            <div className="ml-5">
                                <div className="font-medium">Ivan</div>
                                <div className="text-green-600">Online</div>
                            </div>
                        </div>
                        <div className="flex">
                            <img src="/static/images/design/avatar.png" alt=""/>
                            <div className="ml-5">
                                <div className="font-medium">Ivan</div>
                                <div className="text-green-600">Online</div>
                            </div>
                        </div>
                        <div className="flex">
                            <img src="/static/images/design/avatar.png" alt=""/>
                            <div className="ml-5">
                                <div className="font-medium">Ivan</div>
                                <div className="text-green-600">Online</div>
                            </div>
                        </div>
                        <div className="flex">
                            <img src="/static/images/design/avatar.png" alt=""/>
                            <div className="ml-5">
                                <div className="font-medium">Ivan</div>
                                <div className="text-green-600">Online</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="py-4">
                    <svg className={`cursor-pointer transform ${isOpened && 'rotate-180'}`} width="16" height="26"
                         viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg"
                         onClick={() => isOpenedToggle()}>
                        <path d="M14.0929 1L1.84546 13L14.0929 25" stroke="white" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps)(SideBar)