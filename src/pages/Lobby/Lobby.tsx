import React, {useState, useEffect, useMemo, useRef} from 'react';

import Search from '../../components/Lobby/Search';
import Select from '../../components/Select/Select';

import Chat from '../../components/Chat/Chat';
import CheckBox from '../../components/CheckBox/CheckBox';
import BigSwitcher from '../../components/Switchers/Big';
import {useDispatch, useSelector} from "react-redux";
import {
    createLobby,
    getLobby,
    changeGameTypeLobby,
    changeRegionLobby,
    setFindLobby,
    setPrivateLobby
} from "../../actions/lobby";
import {gamemodes, Message, regions} from "../../types/store";
import {AppState} from "../../store";

export default function Lobby() {

    //----------------------------------------
    //               States
    //----------------------------------------

    const dispatch = useDispatch();

    const [checked, setChecked] = useState(false);
    const [search, setSearch] = useState(false);
    const [chat, setChat] = useState<Message[]>([]);

    //Lobby selectors
    const lobbyID = useSelector((state: AppState) => state.lobby.id);
    const lobbyChat = useSelector((state: AppState) => state.lobby.chat);
    const lobbyMode = useSelector((state: AppState) => state.lobby.gamemode);
    const lobbyFindState = useSelector((state:  AppState) => state.lobby.finding);
    const lobbyPrivate = useSelector((state: AppState) => state.lobby.private);
    const lobbyLoadings = useSelector((state: AppState) => state.lobby.loadings);

    //Auth selectors
    const username = useSelector((state: AppState) => state.auth.username);

    //----------------------------------------
    //               Effects
    //----------------------------------------


    //INIT LOBBY
    useEffect(() => { dispatch(createLobby()) }, []);

    //ON LOBBY INITED
    useEffect(() => {
        if (!lobbyID) return;
        //subscribing to lobby updates
        dispatch(getLobby(lobbyID));
    }, [lobbyID]);

    //ON LOBBY FIND STATE CHANGED
    useEffect(() => {
        setSearch(lobbyFindState);
    }, [lobbyFindState]);

    //CATCH NEW MESSAGES
    useMemo(() => {
        let formatedMessages:Message[] = [];
        Object.keys(lobbyChat).map((key, index) => {
            formatedMessages.push({
                name: lobbyChat[key].player,
                msg: lobbyChat[key].message,
                imageUrl: `https://static.bloodgodz.com/accounts/avatars/${lobbyChat[key].player}`,
                alien: username === lobbyChat[key].player
            });
        })
        setChat(formatedMessages);
    },[lobbyChat]);

    //----------------------------------------
    //               Refs
    //----------------------------------------

    //EMPTY

    //----------------------------------------
    //               Hooks
    //----------------------------------------

    //On gamemode changed in selector
    const onGamemodeChanged = (mode: gamemodes) =>
    {
        if (!lobbyID) return;
        dispatch(changeGameTypeLobby(lobbyID, mode));
    }

    //On region changed in selector
    const onRegionChanged = (region: regions) =>
    {
        if (!lobbyID) return;
        dispatch(changeRegionLobby(lobbyID, region));
    }

    //On access changed in selector
    const onAccessChanged = (access: number) =>
    {
        if (!lobbyID) return;
        dispatch(setPrivateLobby(lobbyID, access === 1));
    }

    //On find state changed by button
    const onFindStateChange = () =>
    {
        if (lobbyID)
            dispatch(setFindLobby(lobbyID, !lobbyFindState));
    }

    //----------------------------------------
    //               Props
    //----------------------------------------

    //Region list for selector
    const region:{[key in regions]: string} = {
        "RU": "Россия"
    }

    //Gamemodes list for selector
    const modes:{[key in gamemodes]: string} = {
        1: "1 vs 1",
        2: "2 vs 2",
        3: "3 vs 3",
        5: "5 vs 5"
    };

    //Access list for selector
    const accesses:{[key: string]: string} = {
        0: "Закрыто",
        1: "Открыто"
    };


    //Region selector props
    const selectRegionProps = {
        type: "server",
        variants: region,
        placeholder: "RU",
        callback: onRegionChanged
    }

    //Mode selector props
    const selectModeProps = {
        type: "mode",
        variants: modes,
        placeholder: lobbyMode as number,
        callback: onGamemodeChanged
    }

    //Publicity selector props
    const selectAccessProps = {
        type: "access",
        variants: accesses,
        placeholder: lobbyPrivate ? 1 : 0,
        callback: onAccessChanged
    }

    return (
        <>
            <img className="absolute top-0 left-0" src="/static/images/lobby/glowOne.png" alt="" />
            <img className="absolute top-0 right-0" src="/static/images/lobby/glowTwo.png" alt="" />
            <div className="container mx-auto pt-5 pb-24 px-5 text-white lg:px-0 lg:pt-20">
                <img className="absolute top-48" src="/static/images/lobby/tag.png" alt="" />
                <div className="relative">
                    <div className="font-bold text-xl lg:text-4xl uppercase">#Лобби</div>
                    <div className="mt-2.5 font-medium text-gray-400 lg:hidden uppercase">#пригласить друзей</div>
                    <div className="mt-7 hidden lg:block">
                        <div className="flex items-center space-x-56">
                            { lobbyLoadings.gamemode &&
                                <div className={`font-bold text-4xl loading2`} /> ||
                                <div className={`font-bold text-4xl`}>{lobbyMode} vs {lobbyMode}</div>
                            }
                            { search && <Search players={ 1621 } />}
                        </div>
                    </div>

                    <div className="mt-5 lg:mt-10">
                        <div className="flex flex-col space-y-5 lg:flex-row lg:space-y-0 lg:space-x-10">
                            <div className="flex flex-col space-y-2.5 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-5">
                                <div className="">Выбрать регион сервера:</div>
                                <div className={lobbyLoadings.region && 'loading' || ''}>
                                    <Select {...selectRegionProps}/>
                                </div>
                            </div>

                            <div className="flex flex-col space-y-2.5 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-5">
                                <div className="">Выбрать режим игры:</div>
                                <div className={lobbyLoadings.gamemode && 'loading' || ''}>
                                    <Select {...selectModeProps}/>
                                </div>

                            </div>

                            <div className="flex flex-col space-y-2.5 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-5">
                                <div className="">Доступ:</div>
                                <div className={lobbyLoadings.private && 'loading' || ''}>
                                    <Select {...selectAccessProps}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-5 hidden lg:block">
                        <Chat data={ chat }/>
                    </div>

                    <div className="mt-10 flex space-x-7">
                        <div className="w-full lg:w-auto">
                            {
                                !lobbyLoadings.gamemode ?
                                <button
                                    className={`${ !search ? 'bg-pink' : 'bg-gradient-to-br from-gray-500 to-gray-900'} w-full rounded-full py-5 font-bold text-2xl focus:outline-none lg:w-80`}
                                    onClick={onFindStateChange}
                                >
                                    { !search ? 'Поиск игры': 'Остановить поиск'}
                                </button>
                                :
                                <button className={`bg-opacity-0 loading2 w-full rounded-full py-5 font-bold text-2xl focus:outline-none lg:w-80`}/>
                            }
                            <div className="mt-4">
                                <div className="flex items-center space-x-2.5">
                                    <CheckBox checked={ checked } onClick={ () => setChecked(prev => !prev) } />
                                    <div className="text-gray-400 text-sm">Автоматическое принятие игры</div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full hidden lg:block">
                            <div className="grid grid-cols-3 gap-2.5">
                                <BigSwitcher type="positive" text="Russian server" ping={ 20 } checked={true} />
                                <BigSwitcher type="negative" text="French server" ping={ 60 } checked={true} />
                                <BigSwitcher type="regular" text="Baly server" ping={ 22 } checked={true} />
                                <BigSwitcher type="negative" text="French server" ping={ 60 } checked={true} />
                                <BigSwitcher type="positive" text="Russian server" ping={ 20 } checked={true} />
                            </div>
                        </div>
                    </div>

                    { search && <div className="mt-4 lg:hidden">
                        <Search players={ 1621 } />
                    </div> }
                </div>
            </div>

        </>
    )
};