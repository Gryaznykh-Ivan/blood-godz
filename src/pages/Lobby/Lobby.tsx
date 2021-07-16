import React, {useState, useEffect} from 'react';

import Search from '../../components/Lobby/Search';
import Select from '../../components/Select/Default';
import SelectS from '../../components/Select/Server';
import Chat from '../../components/Chat/Chat';
import CheckBox from '../../components/CheckBox/CheckBox';
import BigSwitcher from '../../components/Switchers/Big';

export default function Lobby() {
    const [checked, setChecked] = useState(false);
    const [search, setSearch] = useState(false);

    const data = [
        {name: 'James', msg: 'Новости, которые мы заслужили)', imageUrl: "/static/images/design/avatar.png", alien: false},
        {name: 'Nolan', msg: 'Зашелл коммент подлиннее написать немножечко, а то предыдущий коротенький.', imageUrl: "/static/images/design/avatar.png", alien: false},
        {name: 'NickName', msg: 'Приятно смотреть накоец, да', imageUrl: "/static/images/design/avatar2.png", alien: true},
        {name: 'James', msg: 'Новости, которые мы заслужили)', imageUrl: "/static/images/design/avatar.png", alien: false},
        {name: 'Nolan', msg: 'Зашелл коммент подлиннее написать немножечко, а то предыдущий коротенький.', imageUrl: "/static/images/design/avatar.png", alien: false},
        {name: 'NickName', msg: 'Приятно смотреть накоец, да)', imageUrl: "/static/images/design/avatar2.png", alien: true},
        {name: 'Nolan', msg: 'окей', imageUrl: "/static/images/design/avatar.png", alien: false},
    ];
    
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
                            <div className="font-bold text-4xl">3 vs 3</div>
                            { search && <Search players={ 1621 } />}
                        </div>
                    </div>

                    <div className="mt-5 lg:mt-10">
                        <div className="flex flex-col space-y-5 lg:flex-row lg:space-y-0 lg:space-x-10">
                            <div className="flex flex-col space-y-2.5 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-5">
                                <div className="">Выбрать регион сервера:</div>
                                <SelectS />
                            </div>

                            <div className="flex flex-col space-y-2.5 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-5">
                                <div className="">Выбрать режим игры:</div>
                                <Select />
                            </div>

                            <div className="flex flex-col space-y-2.5 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-5">
                                <div className="">Доступ:</div>
                                <Select />
                            </div>
                        </div>
                    </div>

                    <div className="py-5 hidden lg:block">
                        <Chat data={ data }/>
                    </div>

                    <div className="mt-10 flex space-x-7">
                        <div className="w-full lg:w-auto">
                            {
                                <button 
                                    className={`${ !search ? 'bg-pink' : 'bg-gradient-to-br from-gray-500 to-gray-900'} w-full rounded-full py-5 font-bold text-2xl focus:outline-none lg:w-80`} 
                                    onClick={() => setSearch(prev => !prev)}
                                >
                                    { !search ? 'Поиск игры': 'Остановить поиск'}
                                </button>
                            }
                            <div className="mt-4">
                                <div className="flex items-center space-x-2.5 cursor-pointer" onClick={ () => setChecked(prev => !prev) }>
                                    <CheckBox checked={ checked } />
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