import React from 'react'
import { Link } from 'react-router-dom'
import GameCard from '../../components/GameCard/GameCard'

export default function MiniGames() {
    return (
        <div className="">
            <img className="absolute top-32 left-0" src="/static/images/miniGames/flashLight1.png" alt="" />
            <img className="absolute top-64 right-0" src="/static/images/miniGames/flashLight2.png" alt="" />
            <img className="absolute top-80 left-0" src="/static/images/miniGames/flashLight3.png" alt="" />
            <img className="absolute top-12 right-0" src="/static/images/miniGames/flashLight4.png" alt="" />
            <div className="relative container m-auto text-white mt-20">
                <img className="absolute -top-5 left-0" src="/static/images/miniGames/miniGames.png" alt="" />
                <div className="text-4xl font-bold">#МИНИ ИГРЫ</div>
                <div className="relative flex mt-12 text-gray-400 flex-wrap">
                    <Link className="w-40 py-2 bg-gray-900 text-center rounded-xl shadow-md m-1" to="#">Among US</Link>
                    <Link className="w-40 py-2 bg-gray-900 text-center rounded-xl shadow-md m-1" to="#">Retake</Link>
                    <Link className="w-40 py-2 bg-gray-900 text-center rounded-xl shadow-md m-1" to="#">Retake classic</Link>
                    <Link className="w-40 py-2 bg-gray-900 text-center rounded-xl shadow-md m-1" to="#">Among US</Link>
                    <Link className="w-40 py-2 bg-gray-900 text-center rounded-xl shadow-md m-1" to="#">Retake</Link>
                    <Link className="w-40 py-2 bg-gray-900 text-center rounded-xl shadow-md m-1" to="#">Retake classic</Link>
                    <Link className="w-40 py-2 bg-gray-900 text-center rounded-xl shadow-md m-1" to="#">Among US</Link>
                    <Link className="w-40 py-2 bg-gray-900 text-center rounded-xl shadow-md m-1" to="#">Retake</Link>
                    <Link className="w-40 py-2 bg-gray-900 text-center rounded-xl shadow-md m-1" to="#">Retake classic</Link>
                </div>
                <div className="my-14 grid grid-cols-6 gap-10 items-start">
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                </div>
            </div>
        </div>
    )
}
