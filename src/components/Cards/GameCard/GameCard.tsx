import React from 'react'

import './GameCard.css'

export default function GameCard() {
    return (
        <div className="gameCard relative w-full cursor-pointer text-white hover:p-2 bg-gray-900 rounded-2xl transition-all duration-200">
            <div className="rounded-2xl flex flex-col overflow-hidden shadow-xl">
                <div className="relative w-full">
                    <img className="object-cover w-full rounded-xl" src="/static/images/miniGames/gameAvatar.png" alt="" />
                    <div className="absolute bottom-0 left-0 w-full p-2 bg-black bg-opacity-20 backdrop-filter backdrop-blur-sm">
                        <div className="text-center font-bold">Among US</div>
                        <div className="text-center text-gray-300">104 в игре</div>
                    </div>
                </div>
                <div className="description text-sm">
                    Краткое описание режима. Тут можно вместить достаточно текста, чтобы рассказать о чем эта мини игра. Ну, там, например, что надо делать или куда бежать. Ага?
                </div>
            </div>
        </div>
    )
}
