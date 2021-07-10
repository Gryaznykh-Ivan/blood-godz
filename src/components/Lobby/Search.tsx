import React from "react";

interface PropsFromComponent {
    players: Number
};

export default function Search({ players }: PropsFromComponent) {
    return (
        <div className="bg-gradient-to-r from-purpirLight to-gray-500 rounded-2xl py-5 lg:py-0 lg:px-5">
            <div className="lg:flex lg:items-center lg:justify-between space-y-2.5 lg:space-y-0 lg:py-1 lg:space-x-20 text-center">
                <div>Идёт поиск игры.</div>
                <div className="text-green-300 hidden lg:block">Пожалуйста, подождите</div>
                <div className="text-sm lg:text-base">{`В поиске ${ players } игрок`}</div>
                <div className="text-green-300 lg:hidden">Пожалуйста, подождите</div>
            </div>
        </div>
    );
};