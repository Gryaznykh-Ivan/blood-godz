import React from 'react';

import Personal from '../../components/Profile/Personal';
import Elo from '../../components/Profile/Elo';
import TopGuns from '../../components/Profile/TopGuns';
import Kills from '../../components/Profile/Kills';
import Other from '../../components/Profile/Other';
import Movies from '../../components/Profile/Movies';
import GamesHistory from '../../components/Tables/GamesHistory';
import Chat from '../../components/Chat/Chat';

export default function Profile() {

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
            <img className="absolute top-0 left-0" src="/static/images/profile/glowOne.png" alt="" />
            <img className="absolute top-0 right-0" src="/static/images/profile/glowTwo.png" alt="" />
            <div className="relative container mx-auto text-white py-10">
                <Personal />
                <div className="mt-5 flex space-x-8">
                    <Elo />
                    <TopGuns />
                </div>
                <Kills />
                <Other />
                <Movies />
                <div className="mt-5">
                    <GamesHistory />
                </div>
                <div className="mt-5">
                    <Chat data={data}/>
                </div>
            </div>
        </>
    );
};